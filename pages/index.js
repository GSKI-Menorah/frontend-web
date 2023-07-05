import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import About from "../components/About";
import Komisi from "../components/Komisi";
import Aktivitas from "../components/Aktivitas";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className=" max-w-screen">
      <div className="h-screen">
        <Image
          src="/image/bg.svg"
          width={1000}
          height={100}
          className="w-full h-full absolute"
          alt="bg"
        />
        <div className="w-full">
          <Navbar />
          <div className="w-full gap-6 h-[90vh] flex flex-col items-center justify-center relative text-[#F9F2E6]">
            <h1 className=" text-4xl font-medium">
              Selamat Datang di GSKI Menorah
            </h1>
            <p className="w-[35%] text-sm text-center">
              Gereja Suara Kebenaran Injil {"(disingkat GSKI)"} Jemaat Menorah
              adalah gereja yang bernaung dalam sinode GSKI yang dipimpin Pdt.
              Dr. Erastus Sabdono dengan gembala lokal Ps. Joshua Putra Anugrah,
              S.Th
            </p>
            <button className="bg-[#346DA1] p-2 px-12 rounded-2xl">
              Tentang Kami
            </button>
          </div>
        </div>
      </div>
      <About />
      <Komisi />
      <Aktivitas />
      <Contact />
    </div>
  );
}
