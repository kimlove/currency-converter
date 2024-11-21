# TDS currency conversion task

A simple currency conversion tool built with Next.js, TypeScript, and Tailwind.

This project is also hosted at: https://tds.kiml.dev/

## Features

- Converts currency values between two selected currencies.
- Uses real-time exchange rate data from currencybeacon.com.
- Built with a responsive UI using TailwindCSS.
- Server-side route handlers ensure secure API key handling.

## Tech used

- Next.js 14
- TypeScript
- Tailwind
- Jest with React Testing Library

Git commit messages follow the [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) guidelines.

# Notes

To avoid exposing the API key to the client, I've used server side route handlers which allows you to avoid including sensitive .env values in the client JS bundle.

More information: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

## Local Quick Start

_Note: This assumes you have [Node.js](https://nodejs.org/en) installed._

1. **Clone this repository or [download the .zip file](https://github.com/kimlove/currency-converter/archive/refs/heads/main.zip):**

   `git clone https://github.com/kimlove/currency-converter.git`

2. **Install npm dependencies in the cloned folder:**

   `npm install`

### Start the Local Development Server

`npm run dev`

The development build of the task will now be available at [http://localhost:3000/](http://localhost:3000/).

### Create an .env file with your currencybeacon.com API_KEY

There's an .env.sample file to use as a template. Add your key to `API_KEY=` and save as `.env` - Next.js should pick this up automatically, but may need to restart the dev server if any issues.

API_URL can be left as is (https://api.currencybeacon.com/v1)

### Run the Jest Unit Tests

`npm test`

## Known Issues

- Test coverage is basic, with more time this could be improved specially around testing edge cases with business logic and custom hooks.
- Some duplication in the selectCurrency... ideally this would be DRYed up to avoid doubling up on the `Select` component.

### Future Improvements

- Display more information about the converted currency (full name of converted currency).
- Display the exchange rate.
- Add a time-series chart of the last 30 days of exchange rates for selected currencies (using a charting package like Recharts).
- Store the last selected currencies in `sessionStorage` to preserve the state after a browser refresh.
