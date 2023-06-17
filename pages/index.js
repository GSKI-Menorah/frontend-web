import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <div className=" max-w-screen">
      <div className="h-screen">
        <Image
          src="/image/bg.png"
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
      <div className="w-full h-[100vh] bg-[#F2F2F2]">
        <div className="h-[40%] gap-4 w-full flex items-center flex-col justify-center border-black border-b-8">
          <h1 className="text-lg">Alamat Kami</h1>
          <p className="w-[40%] text-center text-sm">
            Jln. Kampung Kandang No.30 RT 05/ RW 02 Kel. Tegal Kec. Kemang, Kab.
            Bogor 16310 {"(Jawa Barat, ID)"} Telepon: 089688010528 E-mail:
            gskimenorah@gmail.com
          </p>
        </div>
        <div className="flex w-full h-[60%] border-black border-b-8">
          <div className="w-[50%] bg-[#F1DFBF] flex items-center justify-center h-full">
            <Image src="/image/image.png" width={330} height={100} />
          </div>
          <div className="w-[50%] h-full gap-4 items-center justify-center flex flex-col">
            <h1 className="relative right-[150px] text-lg font-medium">Profil Gereja</h1>
            <p className="text-left w-[60%] text-sm">Gereja Suara Kebenaran Injil (disingkat GSKI) Jemaat Menorah adalah gereja yang bernaung dalam sinode GSKI yang dipimpin Pdt. Dr. Erastus Sabdono dengan gembala lokal Ps. Joshua Putra Anugrah, S.Th ...</p>
            <button className="relative right-[115px] text-white bg-[#346DA1] p-2 px-12 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
