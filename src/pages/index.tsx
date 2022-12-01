import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Landing from "../components/Landing/Landing";

const data = {
  metaData: {
    title: "Apple Redesign",
    description: "created mahdimoras@gmail.com ",
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{data.metaData.title}</title>
        <meta name="description" content={data.metaData.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
    </>
  );
};

export default Home;
