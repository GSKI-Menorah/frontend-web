import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full relative h-[60px] px-6 p-2 bg-white flex flex-row items-center justify-between'>
        <div>
            <h1 className='font-bold text-xl'>GSKI MENORAH</h1>
        </div>
        <div>
            <ul className='flex gap-2'>
                <li>Tentang Kami</li>
                <li>Komisi</li>
                <li>Surat Gembala</li>
                <li>Persembahan</li>
                <li>Hubungi Kami</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar