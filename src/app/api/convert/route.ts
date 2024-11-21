export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const amount = searchParams.get("amount");

  if (!from || !to || !amount) {
    return new Response("Missing parameter detected (from / to / amount)", { status: 400 });
  }

  if (!process.env.API_KEY) {
    return new Response("API key not found, check .env file", {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const url = `${process.env.API_URL}/convert`;
  const api_key = `api_key=${process.env.API_KEY}`; // add api key to request url server side

  const response = await fetch(`${url}?${api_key}&from=${from}&to=${to}&amount=${amount}`, {
    method: "GET",
    next: { revalidate: 0 }, // no cache!
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url} - ${response.statusText}`);
  }

  const data = await response.json();

  if (data.error) {
    return new Response(data.error, { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
