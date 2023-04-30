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
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaArrowRight, FaBackspace } from 'react-icons/fa'





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
              navigation={{ 
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="mySwiper "
            >



              {


                category && category.map(category => {

                  return (

                    <SwiperSlide>
                      <NavLink to={`category/${category.id}`} className= "w-96">

                      <div className="card-body relative  h-96 image-full">
                        <figure><img className='h-96 ' src={category.image} /></figure>
                        <div className="relative card-body">
                          <h2 className="card-title absolute bottom-10 left-0">{category.name}</h2>

                        </div>
                      </div>
                      
                      </NavLink>
                    </SwiperSlide>


                  )




                })
              }


<div className='flex space-x-10 justify-center'>


<FaAngleLeft className="swiper-button-prev bg-white rounded-full w-16">

  
</FaAngleLeft>
  <FaAngleRight className="swiper-button-next bg-white rounded-full w-16" >


  </FaAngleRight>

</div>





            </Swiper>












          </div>

        </div>
      </div>
    </div>




  )
}

export default App
