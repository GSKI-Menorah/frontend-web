import Image from 'next/image'
import React from 'react'

const Komisi = () => {
  return (
    <div className="w-full h-screen bg-[#F2F2F2]">
        <div className="flex flex-row-reverse w-full  ">
          <div className="w-[50%] bg-[#F1DFBF] flex items-center justify-center h-[328px]">
            <Image src="/image/aset2.png" width={250} height={100} />
          </div>
          <div className=" bg-white w-[50%] h-[328px] gap-4 items-center justify-center flex flex-col">
            <h1 className="w-full px-[135px] text-lg font-medium">Komisi</h1>
            <p className="text-left w-[60%] text-sm">Berikut merupakan komisi dalam setiap bidang pelayanan gereja kami ...</p>
            <button className="relative right-[115px] text-white bg-[#346DA1] p-2 px-12 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-[50%] bg-[#F1DFBF] flex items-center justify-center h-[328px]">
            <Image src="/image/aset3.png" width={370} height={100} />
          </div>
          <div className="bg-white w-[50%] h-[328px] gap-4 items-center justify-center flex flex-col">
          <h1 className="w-full px-[135px] text-lg font-medium">Surat Gembala</h1>
            <p className="text-left w-[60%] text-sm">Berisikan renungan dan catatan gembala dalam menumbuhkan keimanan jemaat GSKI Menorah ...</p>
            <button className="relative right-[115px] text-white bg-[#346DA1] p-2 px-12 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
  )
}

export default Komisi