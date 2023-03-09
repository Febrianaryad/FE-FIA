import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const Landing = () => {

  const slides = [
    {
       url: '/carousel1.png', title: "Carousel"
    }, 

    {
      url: '/bg.jpg', title: "Carousel2"
    }, 
   ];

   const [currentIndex, setCurrentIndex] = useState(0);

   const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
 

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center gap-y-8 bg-gradient-to-b from-[#747474] to-black'>
      <div className='h-[40rem] w-full'>
        <div className="h-full relative group">
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full  bg-center bg-cover duration-500 relative z-0'>
              <div className="max-w-[62.5rem] mx-auto px-8 flex flex-col justify-center h-full Z-50 text-white">
              </div>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl z-10 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl z-10 rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
        </div>  
      </div>


      <div className='items-start max-w-[70rem] px-10'>
      <div className='flex flex-col items-start pt-[2rem] text-white'>
        <div className='pt-1 px-4 bg-gradient-to-tl from-[#905EDF] to-[#682DA2] rounded-md'>
          <h1 className='text-3xl font-extrabold pb-[0.75rem] md:text-5xl'>Visi</h1>
        </div>
        <br />
        <h3 className='text-justify text-base font-bold md:text-xl'>Badan Eksekutif Mahasiswa Fasilkom UI sebagai katalisator yang aktif dan dinamis dalam mewujudkan aspirasi dan ambisi IKM Fasilkom UI melalui pendekatan yang eksploratif.</h3>
      </div>

      <div className='flex flex-col items-start pt-[3rem] text-white'>
        <div className='pt-1 px-4 bg-gradient-to-tl from-[#905EDF] to-[#682DA2] rounded-md'>
          <div className='text-3xl font-extrabold pb-[0.75rem] md:text-5xl'>Misi</div>
        </div>
        <br />
          <ol className='text-justify text-base font-bold list-decimal pl-5 md:text-xl'>
            <li>
              Menjawab permasalahan yang dihadapi oleh IKM Fasilkom UI secara dinamis sesuai dengan situasi dan kondisi yang dihadapi.
            </li>
            
            <li>
              Mengeksplorasi dan mewujudkan aspirasi dan ambisi IKM Fasilkom UI demi kebermanfaatan untuk IKM Fasilkom UI, UI, dan Indonesia.          
            </li>
            
            <li>
              Membangun Lingkungan Kerja yang suportif dan apresiatif serta memberikan kebebasan bagi fungsionaris untuk mengeksplorasi ide dan gagasannya.
            </li>
            
            <li>
              Menjalin hubungan dan berkolaborasi secara aktif bersama dengan pihak-pihak di dalam dan di luar Fasilkom UI.
            </li>
          
            <li>
              Membangkitkan kepekaan IKM Fasilkom UI terhadap pergerakan mahasiswa di bidang sosial, politik, dan lingkungan hidup.
            </li>
          </ol>
      </div>
    </div>

    <div className="h-[4rem]"></div>
    
    
</div>
  )
}

export default Landing