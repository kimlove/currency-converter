export async function GET() {
  if (!process.env.API_KEY) {
    return new Response("API key not found, check .env file", {
      status: 404,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const url = `${process.env.API_URL}/currencies`;
  const api_key = `api_key=${process.env.API_KEY}`; // add api key to request url server side

  const response = await fetch(`${url}?${api_key}`, {
    method: "GET",
    next: { revalidate: 3600 }, // revalidate every hour
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
