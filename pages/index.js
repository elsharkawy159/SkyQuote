import { PopularQuotes } from "@/Components/PopularQuotes/PopularQuotes";
import { MainLanding } from "@/Components/MainLanding/MainLanding";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sky Quote</title>
        <meta
          name="description"
          content="Our website is a platform where you can freely share your favorite quotes and discover new ones from other users. Whether it's a thought-provoking line from a book or a motivational quote from a famous personality, you can easily add it to our collection for everyone to see"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://www.pngall.com/wp-content/uploads/4/Quotation-Symbol-PNG.png"
        />
      </Head>
      <MainLanding />
      <PopularQuotes />
    </>
  );
}
