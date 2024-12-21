// Enabling Incremental Static Regeneration (ISR) in this Next.js page

// Forces the page to be treated as a static page initially
export const dynamic = "force-static";

// Sets the revalidation time to 10 seconds
// This means the page will regenerate in the background every 10 seconds after the first request
export const revalidate = 10;

// This function simulates data fetching, such as from an API or a database
async function fetchData() {
  // Creating a timestamp to demonstrate when the data was last fetched
  const timestamp = new Date().toISOString();

  // Returning a simulated response containing the timestamp
  return { message: `Hello from ISR! Timestamp: ${timestamp}` };
}

// The default exported component that renders the page
export default async function ISRExample() {
  // Fetching the data (simulated here with the fetchData function)
  const data = await fetchData();

  // Rendering the JSX for the page
  return (
    <div className="p-10 flex flex-col gap-3 items-start">
      {/* Displaying the title */}
      <h1 className="text-3xl">Incremental Static Regeneration (ISR)</h1>

      {/* Displaying the message returned by the fetchData function */}
      <p className="text-green-500 text-lg">{data.message}</p>

      {/* Informing users about the page's revalidation behavior */}
      <p className="text-gray-500">
        This page will regenerate every 10 seconds.
      </p>
    </div>
  );
}
