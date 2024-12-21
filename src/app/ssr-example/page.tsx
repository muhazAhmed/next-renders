// This ensures the route is server-rendered
export const dynamic = "force-dynamic";

async function fetchData() {
  // Simulate fetching data from an API or database
  return { message: "Hello from Server-Side Rendering (SSR)!" };
}

// The App Router in Next.js does not support getServerSideProps.
// Instead, server-side rendering is handled natively by default for Server Components.
// Data fetching can be done directly within the component or in a separate function like fetchData().
// The App Router encourages using server functions or APIs instead of getServerSideProps for better flexibility and efficiency.
// getServerSideProps is only supported in the Pages Router (src/pages/), which has a different architecture.
export default async function SSRExample() {
  const data = await fetchData();

  return (
    <div className="p-10 flex gap-2 items-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">Server-Side Rendering (SSR)</h1>
        <p className="text-red-500 text-lg">{data.message}</p>
      </div>
    </div>
  );
}
