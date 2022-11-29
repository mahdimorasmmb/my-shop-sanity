import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
      <h1> hi new Project </h1>
    </>
  );
};

export default Home;
