import React from "react";
import { IoFilterOutline } from "react-icons/io5";
import { LuMoveVertical } from "react-icons/lu";
import {
    EyeOff,
    ArrowUpDown,
    Filter,
    MoveHorizontal,
    Download,
    Upload,
    Share2,
    Plus
} from "lucide-react";
import { RxPinBottom, RxPinTop } from "react-icons/rx";
import { FaRegShareSquare } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Toolbar = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 border-b bg-white border-gray-300 ">
            {/* Left section */}
            <div className="flex items-center space-x-4 text-1xl text-gray-950 gap-7 " >
                <button className="flex items-center space-x-1 hover:underline text-1xl  border-r-2  border-gray-200 p-[5px]">
                    <h1 className="font-Inter, font-sans-serif">Tool bar</h1>
                    <RiArrowRightDoubleFill size={26} className="text-gray-400"/>
                </button>
                <button className="flex items-center space-x-1 hover:text-black">
                    <EyeOff size={18} className="text-gray-600" />
                    <span>Hide fields</span>
                </button>

                <button className="flex items-center space-x-1 hover:text-black">
                    <ArrowUpDown size={18} className="text-gray-600" />
                    <span>Sort</span>
                </button>

                <button className="flex items-center space-x-1 hover:text-black">
                    <IoFilterOutline size={18} className="text-gray-600" />
                    <span>Filter</span>
                </button>

                <button className="flex items-center space-x-1 hover:text-black">
                    <LuMoveVertical size={18} className="text-gray-600" />
                    <span>Cell view</span>
                </button>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-2 text-sm h-12">
                <button className="flex items-center border px-1 py-1 justify-center rounded-md text-gray-700 hover:bg-gray-100  border-gray-300 h-12 w-30">
                    <RxPinBottom className="mr-1"  size={18}/>
                    Import
                </button>

                <button className="flex items-center justify-center border px-1 py-1 rounded-md text-gray-700 hover:bg-gray-100  border-gray-300 h-12 w-30">
                    <RxPinTop size={18} className="mr-1" />
                    Export
                </button>

                <button className="flex items-center justify-center border px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100  border-gray-300 h-12 w-30">
                    <FaRegShareSquare size={18} className="mr-1" />
                    Share
                </button>

                <button className="flex items-center bg-[rgb(67,101,74)] hover:bg-green-800 text-white  rounded-md  border-gray-300 h-12 w-45 justify-center text-[15px] p-[7px]">
                    <Plus size={22} className="mr-1" />
                    New Action
                </button>
            </div>
        </div>
    );
};

export default Toolbar;
