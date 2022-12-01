import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Landing from "../components/page-components/Landing/Landing";
import Header from "../components/page-components/layout/Header";
import Tab from "../components/widgets/Tab";

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
      <section className=" relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            New Promos
          </h1>
          <div className="flex justify-center ">
            <Tab
              tabs={[
                {
                  children: (
                    <>
                      <h1 className="text-red-600">hi mahdi</h1>
                    </>
                  ),
                  text: "Hi",
                },
                {
                  children: (
                    <>
                      <h1 className="text-red-600">hi amir</h1>
                    </>
                  ),
                  text: "Hello",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
