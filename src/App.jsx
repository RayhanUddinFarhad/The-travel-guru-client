import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Header/Navbar'
import img1 from '../src/assets/icons/Sajek.png'
import banner from './../src/assets/icons/Rectangle 1.png'
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Link, Outlet } from 'react-router-dom'





function App() {
  const [category, setCategory] = useState([])

  useEffect(() => {

    fetch(`https://travel-guru-server-rayhanuddinfarhad.vercel.app/category`)
      .then(res => res.json())
      .then(data => setCategory(data))



  }, [])

  return (
    <div>


      <Navbar></Navbar>



      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/C8YHkTh/Rectangle-1.png")` }}>

        <div className='hero-overlay bg-black bg-opacity-75'>








        </div>


        <div className="hero-content flex-col lg:flex-row w-full">

          <div className='text-white w-[50%]'>


            <Outlet></Outlet>
          </div>
          <div className='w-[50%]'>

            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper "
            >



              {


                category && category.map(category => {

                  return (

                    <SwiperSlide>
                      <Link to={`category/${category.id}`} className='w-96'>

                      <div className="card-body relative  h-96 image-full">
                        <figure><img className='h-96 ' src={category.image} /></figure>
                        <div className="relative card-body">
                          <h2 className="card-title absolute bottom-10 left-0">{category.name}</h2>

                        </div>
                      </div>
                      
                      </Link>
                    </SwiperSlide>


                  )




                })
              }






            </Swiper>












          </div>

        </div>
      </div>
    </div>




  )
}

export default App
