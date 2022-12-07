import { GetServerSideProps, type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Landing from "../components/page-components/Landing/Landing";
import Header from "../components/page-components/layout/Header";
import Product from "../components/widgets/Product";
import Tab from "../components/widgets/Tab";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";

interface Props {
  categories: Category[];
  products: Product[];
}

const data = {
  metaData: {
    title: "Apple Redesign",
    description: "created mahdimoras@gmail.com ",
  },
};

const Home = ({ categories, products }: Props) => {
  console.log(categories);

  const tabTitle = categories.map((category) => {
    const tabProducts = products.filter(
      (product) => product.category._ref === category._id
    );
    return {
      title: category.title,
      children: tabProducts.map((product) => (
        <Product key={product._id} product={product} />
      )),
    };
  });
  console.log(products);

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
            <Tab tabs={tabTitle} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();
  return {
    props: {
      categories,
      products,
    },
  };
};
