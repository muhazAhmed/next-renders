// This export enforces static rendering for this page
// `force-static` ensures that the page is generated at build time (SSG).
// If this is omitted, Next.js may dynamically render the page depending on the data-fetching method used.
export const dynamic = "force-static";

// Optional: Revalidation time in seconds
// `revalidate = 10` allows the page to be statically re-generated after 10 seconds.
// This is similar to Incremental Static Regeneration (ISR) in the Pages Router.
export const revalidate = 10;

// Simulated data fetching function
// In a real-world scenario, this could be a database query, an API call, or other external data fetching.
// The returned data is used to generate the static page.
async function fetchData() {
  return { message: "Hello from Static Site Generation (SSG)!" };
}

// Default component for the SSGExample page
export default async function SSGExample() {
  // Fetching the data to be displayed on the page.
  // Since this is an async function, it runs at build time (or during revalidation) for SSG.
  const data = await fetchData();

  // Return the JSX for the page
  // This is the static content that will be generated during build/revalidation and served to the user.
  return (
    <div className="p-10 flex gap-2 items-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">Static Site Generation (SSG)</h1>
        <p className="text-red-500 text-lg">{data.message}</p>
      </div>
    </div>
  );
}

/**
 * Explanation of the Code:
 *
 * 1. **Static Site Generation (SSG) with App Router**:
 *    - In the App Router (`/app`), static generation is achieved using `force-static` or by default if no dynamic behavior is detected.
 *    - This means the content is pre-generated at build time and served as a static file, resulting in faster load times.
 *
 * 2. **Difference from SSR**:
 *    - In SSR (Server-Side Rendering), the page is generated on the server for every request.
 *    - Here, the page is pre-built at build time or during revalidation and cached, reducing the server load.
 *
 * 3. **Difference from CSR**:
 *    - In CSR (Client-Side Rendering), the data is fetched on the client (browser) and rendered dynamically using JavaScript.
 *    - In SSG, all content is pre-rendered on the server, so the browser receives a fully-rendered page.
 *
 * 4. **Revalidation**:
 *    - `revalidate = 10` ensures the page is regenerated after 10 seconds. This is useful for updating static content without a full rebuild.
 *    - If no `revalidate` is set, the page will remain static indefinitely until the next build.
 *
 * 5. **Usage of Async Functions**:
 *    - Unlike `getStaticProps` in the Pages Router, you can use async functions directly in components to fetch data in the App Router.
 *    - The App Router relies on React Server Components to handle data fetching and rendering.
 *
 * 6. **Dynamic vs Static in the App Router**:
 *    - By default, the App Router determines whether a route should be static or dynamic based on its data-fetching methods.
 *    - Using `force-static`, you override this behavior and ensure static generation.
 */
