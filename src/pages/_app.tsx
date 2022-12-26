import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import "../styles/globals.css";
import { store } from "../redux/store";
import Basket from "../components/widgets/Basket";
import { ToastContainer } from "react-toastify";
import { Layout } from "../components/page-components/layout";
import "react-toastify/dist/ReactToastify.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Basket type="bottomPage" />
        <ToastContainer />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
};

export default MyApp;
