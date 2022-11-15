import React, { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import expenseLogo1 from "../assets/expenseLogo1.png";
import expenseLogo2 from "../assets/expenseLogo2.png";
import expenseLogo3 from "../assets/expenseLogo3.png";
import expenseLogo4 from "../assets/expenseLogo4.png";
import expenseLogo5 from "../assets/expenseLogo5.png";
import expenseLogo6 from "../assets/expenseLogo6.png";
import expenseLogo7 from "../assets/expenseLogo7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { dataExpense } from "../data/Data";

import { IExpense } from "../Types";



function Expense() {

  return (
   

    <Swiper
      // install Swiper modules
      loop={true}
      modules={[Autoplay]}
      // spaceBetween={}
      slidesPerView={5}
      // navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
  
    >
 
          {dataExpense.map((expense) => (
      <SwiperSlide>
 

        <div className="text-white cursor-pointer hover:scale-110 duration-1000">
          <div className="flex justify-between mb-[1em]">
            {/* <BsThreeDots/> */}
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <img
                className="h-[4rem] rounded-full transition-[1s]"
                src={expense.logo}
                alt={expense.name}
              />
              <h4>{expense.name}</h4>
              <h6 className="text-red-400">{expense.price}</h6>
            </div>
          </div>
        </div>
      
    </SwiperSlide>
          ))}

      {/* ))} */}
    </Swiper>
  );
}

export default Expense;
