import React from "react";

import Logo from "../logo/component";
import { Social } from "../../assets/icons";
import { MobileMd, NotMobileMd } from "../../responsive/component";

const Footer = () => {
    return (
        <>
            <MobileMd>
                <div className=" bg-blue shrink-0 flex-col items-center justify-center gap-2 m-auto  p-4 text-main  ">
                    <div className="w-full items-center flex justify-center">
                        <Logo styleWidth=" max-w-[180px] p-4 flex item-center duration-700" />
                    </div>
                    <div className="flex justify-center gap-2 max-w-1/2 p-1">
                        <a
                            href="#"
                            className="w-fit p-1 flex items-center  border-2 rounded-full  hover:text-aqua duration-300 ease-in-out hover:scale-110 hover:border-aqua"
                        >
                            <Social.fb className="w-7 h-7 p-1   " />
                        </a>

                        <a
                            href="#"
                            className="w-fit p-1 flex  items-center rounded-full hover:text-aqua ease-in-out duration-300 hover:scale-110 border-2 hover:border-aqua   "
                        >
                            <Social.twit className="w-8 h-8 p-1 " />
                        </a>
                        <div className=" flex gap-2 group items-center  cursor-pointer justify-center group hover:text-aqua group">
                            <span className=" w-fit p-1 border-2 rounded-full group-hover:text-aqua group-hover:border-aqua group-hover:scale-110 duration-300 ">
                                <Social.tel className="w-8 h-8 p-1  " />
                            </span>
                            <span>+38 (000) 000 00 00</span>
                        </div>
                    </div>
                </div>
            </MobileMd>
            <NotMobileMd>
                <div className=" bg-blue w-full shrink-0  m-auto py-4 text-main ">
                    <div className="w-[70%]  items-center justify-center mx-auto gap-10 laptop:gap-3 lg:flex lg:justify-center ">
                        <div className=" w-full items-center flex justify-center lg:w-fit">
                            <Logo styleWidth=" max-w-[270px] px-4 py-4 flex item-center transform duration-700 md:min-w-[170px]" />
                        </div>
                        <div className="flex gap-4 max-w-1/2 p-1 items-center justify-center mt-4">
                            <a
                                href="#"
                                className="w-fit p-1 flex gap-3 items-centerz hover:text-aqua duration-300 ease-in-out hover:scale-110 border-2 rounded-full hover:border-aqua "
                            >
                                <Social.fb className="w-8 h-8 p-1 " />
                            </a>
                            <a
                                href="#"
                                className="w-fit p-1 flex gap-3 items-center group hover:text-aqua ease-in-out duration-300 hover:scale-110 border-2 hover:border-aqua  rounded-full"
                            >
                                <Social.twit className="w-8 h-8 p-1 " />
                            </a>
                            <div className="w-fit p-1  flex gap-2 group items-center  cursor-pointer justify-center group hover:text-aqua ">
                                <span className=" w-fit p-1 group-hover:text-aqua group-hover:border-aqua group-hover:scale-110 duration-300 border-2 rounded-full ">
                                    <Social.tel className="w-8 h-8 p-1 " />
                                </span>
                                <span className="duration-500">
                                    +38 (000) 000 00 00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </NotMobileMd>
        </>
    );
};

export default Footer;
