import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-white">
        <div className="w-full h-[40%] flex flex-col items-center justify-center">
          <h1 className="font-medium relative top-10">
            “Membangun Keluarga Kerajaan Surga dalam Kebenaran.”
          </h1>
          <Image src="/image/logo-gski.png" width={250} height={100} />
        </div>
        <div className="w-full h-[60%] bg-[#F2F2F2] p-16">
          <div className="border-b-2 border-[#CCCCCC] w-full flex items-center justify-between p-8 h-[45%]">
            <div>
              <h1 className="text-xl font-semibold">
                Anda memerlukan pelayanan?
              </h1>
              <p className="text-xl">Segera hubungi kami</p>
            </div>
            <button className="border-2 h-[40px] border-[#215085] px-6 rounded-md font-medium">
              Contact Us
            </button>
          </div>
          <div className="w-full h-[55%] flex justify-center flex-col gap-2">
            <h1 className="font-medium">GSKI MENORAH</h1>
            <div className="text-sm">
              <p>© 2023 — Now</p>
              <p>Privacy — Terms</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact