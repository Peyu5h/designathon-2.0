import React from 'react'

const Venue = () => {
  return (
    <div className='h-full max-w-[50vw] flex flex-col'>

      <div className="venue-img w-full flex-2  relative object-contain mt-10">
        <div className="venue-title flex items-end">
          <h1 className="text-[5rem]">VENUE</h1>
        </div>
        <img src="images\timeline\venue_final.png" alt="Atharva College of Engineering" className=" absolute inset-0 m-auto w-[50vw] z-10" />

      </div>
      <div className="venue-bottom-layer flex-1 flex gap-4 items-center">
        <img src="images\timeline\location-pin.svg" alt="location-pin" className="w-16" />
        <div className="bottom-text text-wrap">
          <h2 className="text-[3rem]">ATHARVA COLLEGE OF ENGINEERING</h2>
          <p className="text-2xl ">Malad - Marve Rd, Malad, Charkop Naka, near Asmita Jyoti Housing Society, Malad West, Mumbai, Maharashtra 400095</p>
        </div>
      </div>
    </div>
  )
}

export default Venue