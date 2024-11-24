
import imageFlower from './assets/flower.webp'
import imageBackground from './assets/background.webp'
import flowerOne from './assets/flower-one.webp'
import rain from './assets/rain.gif'
import avatar from './assets/avatar.jpeg'
import insanAulia from './assets/insan-aulia.png'
import fks from './assets/fks.png'
import './App.css'
import { AlarmClock, CalendarClock, CalendarDays, House, MapPinned } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const AvatarElement = () => {
  return (
    <div className='w-[200px] h-[200px] border-4 border-[#ec998b] rounded-full'>
      <img src={avatar} className="w-full h-full rounded-full border-4 border-[#fff]" alt="" />
    </div>
  )
}

function App() {

  const secondSectionRef = useRef(null);  //
  const firstSectionRef = useRef(null);  //

  useEffect(() => {
    firstSectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // Scroll to the top of the section
    });
    return () => {

    }
  }, [])

  const open = () => {
    document.body.style.overflow = 'scroll'; // Disable scroll
    if (secondSectionRef.current) {
      secondSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scroll to the top of the section
      });
    }
  };

  return (
    <>
      <div className="w-full p-0 flex justify-center items-center">
        <div className="w-[100%] md:w-[550px] sm:w-[550px] xs:w-[550px] lg:w-[550px]">
          <section ref={firstSectionRef} id="first" className="w-full h-screen relative">
            <div className="flower-right z-30 top-0 right-0 w-[30%] rotate-90 absolute inline-flex justify-end">
              <img className="w-[100%]" src={flowerOne} alt="" />
            </div>
            <div className="flower-left z-30 top-0 left-0 w-[30%] absolute inline-flex justify-end">
              <img className="w-[100%]" src={flowerOne} alt="" />
            </div>
            {/* top */}
            <img className="w-full h-screen object-cover" src={imageBackground} alt="" />
            <div className="flower-left z-10 top-0 left-0 [transform:rotateY(180deg)] w-[100%] absolute inline-flex justify-end">
              <img className="w-[100%]" src={rain} alt="" />
            </div>
            <div className='absolute top-[0] left-[50%] bottom-0 flex flex-col justify-start pt-[20px] items-center w-full [transform:translateX(-50%)] p-[20px]'>
              <div className="w-full relative flex justify-center">
                <p className='text-eb-garamond text-[#6f3617] pt-[30px] text-[25px] font-bold text-center relative'>
                  UNDANGAN
                  <div className="w-[60px] z-50 absolute left-[-80px] top-[20px]">
                    <img src={fks} alt="" />
                  </div>
                  <div className="w-[70px] z-40 absolute right-[-100px] top-[10px]">
                    <img src={insanAulia} alt="" />
                  </div>
                </p>

              </div>
              <p className='text-eb-garamond text-[18px] text-[#6f3617] font-bold text-center'>SEMINAR PARENTING</p>
              <p className='text-[#6f3617] mt-[10px] text-center font-bold uppercase text-eb-garamond text-[18px]'>
                Kepada Bapak/ibu/saudara/i
              </p>
              <p className='text-[#6f3617] mt-[10px] text-center font-normal text-eb-garamond text-[14px]'>
                Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir di acara seminar parenting
              </p>
              <p className='text-[#6f3617]  mt-[10px] text-center font-bold text-eb-garamond text-[18px]'>
                SDIT Insan Aulia
              </p>
              <div className='w-full flex justify-center items-center mt-[10px]'>
                <AvatarElement></AvatarElement>
              </div>
              <div className='flex justify-center items-center  mt-[10px]'>
                <div className="flex flex-row  justify-center items-start">
                  <p className='inline-flex  text-eb-garamond text-[14px] font-bold w-[90px]  text-[#6f3617]'> Pembicara  :  </p>
                  <div className='inline-flex flex-col'>
                    <p className=' inline-flex   text-eb-garamond text-[14px]  font-bold text-[#6f3617]'>
                      Muhammad Iqbal S. Psi., M. Sc., Ph. D.
                    </p>
                    <p className=' inline-flex  text-eb-garamond text-[14px] font-bold  text-[#6f3617]'>
                      Pakar Psikolog , CEO Rumah Konseling
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full flex justify-center mt-[10px] items-center'>
                <span className="inline-flex text-[#6f3617]  mt-[10px] text-center font-bold text-eb-garamond text-[22px]">DES</span>
                <span className="inline-flex bg-[#ec998b] text-[#000] w-[80px] h-[80px] justify-center items-center rounded-full  mt-[10px] text-center font-bold text-eb-garamond text-[30px] mx-[10px]">14</span>
                <span className="inline-flex text-[#6f3617]  mt-[10px] text-center font-bold text-eb-garamond text-[22px]">2024</span>
              </div>

              <div className='flex justify-center items-center mt-[10px]'>
                <button onClick={open} className='rounded-2xl text-white bg-[#6f3617] py-[10px] px-[20px] font-bold'>
                  Buka Undangan
                </button>
              </div>
            </div>
            {/* bottom */}
            <div className="flower-right z-30 bottom-0 right-0 w-[30%] rotate-180 absolute  inline-flex justify-end">
              <img className="w-[100%]" src={flowerOne} alt="" />
            </div>
            <div className="flower-left z-30 bottom-0 left-0  [transform:rotateX(180deg)] w-[30%] absolute  inline-flex justify-end">
              <img className="w-[100%]" src={flowerOne} alt="" />
            </div>
          </section>

          <section id="second" ref={secondSectionRef} className="w-full h-screen relative">
            <div className="flower-right z-30 top-0 right-0 w-[30%] absolute  inline-flex justify-end">
              <img className="w-[100%]" src={imageFlower} alt="" />
            </div>
            <div className="flower-left z-30 top-0 left-0 [transform:rotateY(180deg)] w-[30%] absolute  inline-flex justify-end">
              <img className="w-[100%]" src={imageFlower} alt="" />
            </div>
            {/* top */}
            <img className="w-full h-screen object-cover" src={imageBackground} alt="" />
            <div className="flower-left z-10 top-0 left-0 [transform:rotateY(180deg)] w-[100%] absolute inline-flex justify-end">
              <img className="w-[100%]" src={rain} alt="" />
            </div>

            {/* content */}
            <div className='absolute top-[0] left-[50%] bottom-0 flex flex-col justify-start  items-center w-full [transform:translateX(-50%)] p-[20px]'>
              <House size={32} color="#b3404a" />
              <p className='text-eb-garamond text-[20px] mt-[10px] text-[#6f3617] font-bold text-center'>SEMINAR PARENTING</p>
              <p className='text-[#b84c65] text-pinyon-script mt-[20px] text-center font-bold text-[50px]'>
                Generasi Strawberry
              </p>

              <p className='text-black   text-center font-bold uppercase text-eb-garamond text-[14px]'>
                "Dibully tak tumbang, dipuji tak terbang"
              </p>
              <p className='text-black   text-center font-bold uppercase text-eb-garamond text-[14px]'>
                "mendidik Si tangguh, agar tak mudah rapuh"
              </p>
              <div className='w-full flex justify-center items-center my-[50px]'>
                <AvatarElement></AvatarElement>
              </div>
              <div className='flex justify-center items-center  mt-[20px]'>
                <div className="flex flex-row  justify-center items-start">

                  <div className='flex w-full justify-center flex-col'>
                    <p className='flex  text-eb-garamond text-center text-[16px] justify-center font-bold text-[#6f3617]'> Pembicara  :  </p>
                    <p className=' flex  text-eb-garamond text-[16px]  font-bold justify-center text-[#6f3617]'>
                      Muhammad Iqbal S. Psi., M. Sc., Ph. D.
                    </p>
                    <p className=' flex  text-eb-garamond text-[16px] font-bold justify-center  text-[#6f3617]'>
                      Pakar Psikolog , CEO Rumah Konseling
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom */}
            <div className="flower-right z-30 bottom-0 left-0 w-[30%] rotate-180 absolute  inline-flex justify-end">
              <img className="w-[100%]" src={imageFlower} alt="" />
            </div>
            <div className="flower-left z-30 bottom-0 right-0  [transform:rotateX(180deg)] w-[30%] absolute  inline-flex justify-end">
              <img className="w-[100%]" src={imageFlower} alt="" />
            </div>
          </section>

          <section id="third" className="w-full h-screen relative">
            <div className="flower-right z-30 top-0 right-0 w-[30%] rotate-90 absolute  inline-flex justify-end">
              <img className="w-[100%]" src={flowerOne} alt="" />
            </div>
            <div className="flower-left z-30 top-0 left-0 w-[30%] absolute inline-flex justify-end">
              <img className="w-[100%]" src={flowerOne} alt="" />
            </div>
            {/* top */}
            <img className="w-full h-screen object-cover" src={imageBackground} alt="" />
            <div className="flower-left z-10 top-0 left-0 [transform:rotateY(180deg)] w-[100%] absolute inline-flex justify-end">
              <img className="w-[100%]" src={rain} alt="" />
            </div>
            {/* content */}
            <div className='absolute top-[0] left-[50%] bottom-0 flex flex-col justify-start pt-[20px] items-center w-full [transform:translateX(-50%)] p-[20px]'>
              <div className='w-full flex justify-center'>
                <div className='flex flex-col'>
                  <div className='w-full justify-center items-center flex flex-col'>
                    <CalendarDays size={40} color="#6f3617" />
                    <p className='text-dm-sans text-[16px] mt-[10px] text-[#6f3617] font-bold text-center ml-[20px]'>Yang akan dilaksanakan pada : </p>
                  </div>


                  <div className='flex w-full items-center mt-[20px]'>
                    <CalendarClock size={30} color="#6f3617" />

                    <p className='text-dm-sans text-[16px] text-[#6f3617] font-bold text-center ml-[20px]'>Sabtu, 14 Desember 2024</p>
                  </div>
                  <div className='flex w-full items-center mt-[10px]'>
                    <AlarmClock size={30} color="#6f3617" />
                    <p className='text-dm-sans text-[16px] text-[#6f3617] font-bold text-center ml-[20px]'>Pukul : 07.30 - 11.00 WIB</p>
                  </div>
                  <div className='flex w-full items-center mt-[10px]'>
                    <MapPinned size={30} color="#6f3617" />
                    <div className='inline-flex flex-col items-start ml-[20px]'>
                      <p className='text-dm-sans text-[14px] text-[#6f3617] font-bold text-center'>SDIT Insan Aulia</p>
                      <p className='text-dm-sans text-[14px] text-[#6f3617] font-bold text-center'>Jl. An nahl no. 1 ,Mustika Jaya</p>
                      <p className='text-dm-sans text-[14px] text-[#6f3617] font-bold text-center'>Bekasi ,Jawa Barat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-center flex-col items-center mt-[20px]'>
                <div className='w-full flex justify-center items-center'>
                  <a href="https://maps.app.goo.gl/Dapz8EcfZdKcYtHR7" target='blank' className=" text-white px-[20px] py-[10px] bg-[#6f3617] rounded-full ">
                    Google Maps
                  </a>
                </div>
                <div className='w-full items-center justify-center flex mt-[20px]'>
                  <div className='w-[200px]'>
                    <iframe
                      className='w-full'
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.706909799433!2d107.0277327!3d-6.302187699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6991e7d49ac699%3A0xd0132900be78aa78!2sSDIT%20Insan%20Aulia!5e0!3m2!1sid!2sid!4v1732465049493!5m2!1sid!2sid"
                      width="200"
                      height="150"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <div className='w-full flex justify-center items-center mt-[20px]'>
                  <a href="https://maps.app.goo.gl/Dapz8EcfZdKcYtHR7" target='blank' className=" text-white px-[20px] py-[10px] bg-[#6f3617] rounded-full ">
                    Konfirmasi Kehadiran
                  </a>
                </div>
                <p className='mt-[30px] text-dm-sans text-[14px] text-[#6f3617] font-bold text-center'>Hormat Kami</p>
                <p className='text-dm-sans text-[14px] text-[#6f3617] font-bold text-center'>Panitia Seminar parenting Akbar</p>
                <p className='text-dm-sans text-[14px] text-[#6f3617] font-bold text-center'>FKKS SDIT INSAN AULIA</p>

              </div>
            </div>
            {/* bottom */}
            <div className="flower-right z-30 bottom-0 right-0 w-[30%] rotate-180 absolute  inline-flex justify-end">
              <img className="w-[100%]" src={flowerOne} alt="" />
            </div>
            <div className="flower-left z-30 bottom-0 left-0  [transform:rotateX(180deg)] w-[30%] absolute  inline-flex justify-end">
              <img className="w-[100%]" src={flowerOne} alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
