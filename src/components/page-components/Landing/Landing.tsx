import Image from "next/legacy/image";
import React from "react";
import Button from "../../widgets/Button";

const Landing = () => {
  return (
    <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl">
          <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
            Powered
          </span>
          <span className="block">By Intellect</span>
          <span className="block">Driven By Values</span>
        </h1>

        <div className="space-x-8">
          <Button title="Buy Now" />
          <a className="heroLink">Learn More</a>
        </div>
      </div>
      <div className="relative h-[450px] w-[450px] transition-all md:inline lg:h-[650px] lg:w-[650px]">
        <Image
          layout="fill"
          src="/hero-image.png"
          alt="hero-image"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Landing;
