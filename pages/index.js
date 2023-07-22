import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import About from "../components/About";
import Komisi from "../components/Komisi";
import Aktivitas from "../components/Aktivitas";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className=" max-w-screen">
      <Head>
        <meta name="title" content="Gereja Suara Kebenaran Injil" />
        <meta
          name="description"
          content="Membangun Keluarga Kerajaan Surga Dalam Kebenaran"
        />
        <meta
          name="keywords"
          content="Suara Kebenaran, Kerajaan Surga, Gereja, Injil"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="GSKI Menorah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GSKI Menorah</title>
      </Head>
      <Navbar />
      <section className="bg-cover bg-no-repeat bg-[url('/image/bg.svg')]">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Selamat Datang di GSKI Menorah
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl sm:px-16 lg:px-48">
            Gereja Suara Kebenaran Injil {"(disingkat GSKI)"} Jemaat Menorah
            adalah gereja yang bernaung dalam sinode GSKI yang dipimpin Pdt. Dr.
            Erastus Sabdono dengan gembala lokal Ps. Joshua Putra Anugrah, S.Th
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#346DA1] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Tentang Kami
            </a>
          </div>
        </div>
      </section>

      {/* <div className="h-screen">
        <Image
          src="/image/bg.svg"
          width={1000}
          height={100}
          className="w-full h-full absolute"
          alt="bg"
        />
        <div className="w-full">
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
      </div> */}
      <About />
      <Komisi />
      <Aktivitas />
      <Contact />
    </div>
  );
}
