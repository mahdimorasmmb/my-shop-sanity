import Head from "next/head";
import Image from "next/legacy/image";

import Link from "next/link";
import React from "react";

const Success = () => {
  return (
    <div>
      <Head>
        <title>Thank you! -Appe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <div>
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Success;
