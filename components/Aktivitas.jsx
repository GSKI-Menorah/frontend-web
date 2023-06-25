import Image from "next/image";
import React from "react";

const Aktivitas = () => {
  return (
    <div className=" bg-[#9AB6D0] h-screen w-full p-4 flex items-center justify-evenly flex-col">
      <div className="flex flex-col gap-2 w-full items-center">
        <h1 className="font-medium text-lg">Aktivitas Gereja</h1>
        <p className="text-md">
          Berikut merupakan segala jenis kegiatan dan pelayanan gereja.
        </p>
      </div>
      <div className="w-full flex flex-row gap-4 justify-evenly">
        <div className="flex flex-col gap-4">
          <div className="w-[300px] h-[300px] rounded-lg bg-[#F1DFBF] flex items-center justify-center">
            <Image src="/image/aktivitas1.png" width={220} height={100} />
          </div>
          <p className="w-full text-center text-lg font-medium">Ibadah Raya</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-[300px] h-[300px] rounded-lg bg-[#F1DFBF] flex items-center justify-center">
            <Image src="/image/aktivitas2.png" width={220} height={100} />
          </div>
          <p className="w-full text-center text-lg font-medium">
            Home Cellular
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-[300px] h-[300px] rounded-lg bg-[#F1DFBF] flex items-center justify-center">
            <Image
              src="/image/aktivitas3.png"
              className="relative bottom-5"
              width={220}
              height={100}
            />
          </div>
          <p className="w-full text-center text-lg font-medium">
            Kunjungan dan Doa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aktivitas;
