"use client";
import { Nav } from "@/components";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-black lg:h-[90vh]  relative">
      <div className='bg-[url("/Rectangle3.jpg")] bg-cover  bg-no-repeat h-[90vh] opacity-25 absolute w-full '></div>
      <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute h-[250px] w-full opacity-25"></div>
      <Nav />

      <Image
        src="Group 5.svg"
        width={240}
        height={20}
        alt=""
        className="absolute -z-1 opca right-0 top-[25%]  "
      />
      <div className="lg:grid lg:grid-cols-2 text-white  lg:container lg:px-10 px-4 mx-auto  lg:gap-[122px]   mt-50 flex md:flex-row flex-col justify-center">
        <div className=" mt-[88px] w-full  z-50">
          <div className="  lg:w-[100%] col-span-1">
            <h1 className=" max-w-md font-[400] lg:text-[44px] text-[35px] Leading-[50.63px] text-[#F09804]  font-bernier">
              Bienvenue a Dar d&apos;jaj
            </h1>
            <h1 className=" font-poppins lg:text-[50px] text-[30px] font-[600] leading-normal z-20 text-[#FFF]">
              Votre Restaurant
            </h1>
            <h1 className=" font-poppins lg:text-[50px] text-[30px] font-[600] z-20 lieading-normal w- text-[#FFF] lg:w-auto">
              Unique Et Authentique
            </h1>

            <h1 className=" font-poppins text-[20px] text-[#FFF] font-[400] z-20 leading-normal mt-[30px] ">
              {/* D4D4D4 */}
              Venez decouvrir le goût inmensurable de notre cuisine
              <br />
              Car la rôtisserie de qualité, c&apos;&apos;est notre métier.
            </h1>

            <button className="border-[#D7B686] border-2   max-w-sm  text-[#FFF]font-popins text-[16px] font-[600] leading-normal py-[18px] px-[60px] mt-[60px] cursor-pointer z-50">
              VOIR MENU
            </button>
          </div>
        </div>
        <div className="lg:flex  relative  mt-[30px]  ">
          {/* <div className=" bg-[#E3C08D]  w-[245px] masked h-[290px] lg:top-[35%] lg:left-[10%]  relative mt-[160px]  z-20 lg:mt-0 ">
            <div className="  w-[235px] h-[280px] masked  absolute mt-[160px]  z-20 lg:mt-0  flex items-center justify-center"></div>
          </div> */}
          <div className="masked h-[290px] w-[245px]  bg-[#e3c18d49] flex items-center justify-center  absolute  lg:top-[35%] lg:left-[10%] mt-[135px] lg:mt-[0px]  z-50">
            <div className="masked w-[240px] h-[285px]">
              {" "}
              <Image
                src="/_DSC4816.jpg"
                alt=""
                fill
                className="object-cover object-center  "
              />
            </div>
          </div>
          <div className=" w-[80%] masked2 flex items-center justify-center bg-[#e3c18d49]  lg:w-[495px] h-[500px] absolute right-0 ">
            <div className="masked2 lg:w-[490px] h-[495px] w-[97%]">
              <Image
                src="/_DSC4793.jpg"
                alt=""
                fill
                classname="object-cover object-center "
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/Group 5.svg"
        alt=""
        width={173}
        height={91}
        className="absolute bottom-0 right-0 md:left-0 md:-bottom-52 z-20 lg:bottom-2"
      />
      <Image
        L
        src="/Group 5 vertical.svg"
        alt=""
        width={91}
        height={173}
        className="absolute bottom-0 right-0 md:left-0 md:-bottom-52 z-20 lg:bottom-2"
      />
    </div>
  );
}
// /_DSC4793.jpg
// /_DSC4816.jpg
