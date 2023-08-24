"use client";
import React from "react";
import About from "~/components/ui/About";
import Analytics from "~/components/ui/Analytics";
import Canvas from "~/components/ui/Canvas";
import Features from "~/components/ui/Features";
import Header from "~/components/ui/Header";
import LazyShow from "~/components/ui/LazyShow";
import MainHero from "~/components/ui/MainHero";
import MainHeroImage from "~/components/ui/MainHeroImage";
import Pricing from "~/components/ui/Pricing";
import Product from "~/components/ui/Product";

export default function LandingPage(){

    return (
        <div className={`bg-background grid overflow-hidden`}>
      <div className={`relative bg-background h-screen`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 h-screen pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>
      <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      {/* <LazyShow>
        <Pricing />
      </LazyShow> */}
      <LazyShow>
        <>
          {/* <Canvas /> */}
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
    );

}