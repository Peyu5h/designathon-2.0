const Faqs = () => {

  return (
    <div className="bg-[#000000] min-h-screen flex bg-[url('/FAQbg.svg')] bg-cover bg-no-repeat z-0">
      <div className='flex flex-1 basis-1/3 border-2 w-full'>

  <div className="border-2 p-5 rounded-2xl grid grid-cols-3 gap-4 w-full">
    <div className="bg-red-300 aspect-square rounded-2xl"></div>
    <div className="bg-yellow-300 aspect-square rounded-2xl"></div>
    <div className="bg-transparent aspect-square rounded-2xl"></div>
    <div className="bg-gray-300 aspect-square rounded-2xl"></div>
    <div className="bg-transparent aspect-square rounded-2xl"></div>


    <div className="bg-green-300 aspect-square rounded-2xl"></div>
    <div className="bg-purple-300 aspect-square rounded-2xl"></div>
    <div className="bg-pink-300 aspect-square rounded-2xl"></div>
    <div className="bg-transparent aspect-square rounded-2xl"></div>
  </div>
</div>

      <div className="flex flex-col items-center pt-10 flex-1 basis-[10%] border-2">
        <h1 className="text-white text-8xl whitespace-nowrap">FAQs</h1>
        <img
          src="/gif/FAQ.gif"
          alt="FAQ Animate"
          className="w-full h-full object-contain"
        />
      </div>
    <svg  width="0" height="0" className="absolute">
  <defs>
    <clipPath id="invertedShape" clipPathUnits="objectBoundingBox">
      <path d="M0.15,0H0.5A0.1,0.1,0,0,1,0.6,0.1V0.3A0.1,0.1,0,0,0,0.7,0.4H0.9A0.1,0.1,0,0,1,1,0.5V0.9A0.1,0.1,0,0,1,0.9,1H0.5A0.1,0.1,0,0,1,0.4,0.9V0.7A0.1,0.1,0,0,0,0.3,0.6H0.1A0.1,0.1,0,0,1,0,0.5V0.15A0.15,0.15,0,0,1,0.15,0Z"/>
    </clipPath>
  </defs>
</svg>
    </div>
  )
}

export default Faqs