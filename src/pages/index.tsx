import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-2xl mb-2">Next.js Template</h1>
        <div>1. Next.js</div>
        <div>2. TypeScript</div>
        <div>3. Redux toolkit and Saga</div>
        <div>4. Tailwind Css</div>
      </div>
    </div>
  );
}
