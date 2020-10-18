import Head from 'next/head';
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>

      <main>
        <h1>This is my initial structure</h1>
        <Button>Button</Button>
      </main>
    </>
  );
}
