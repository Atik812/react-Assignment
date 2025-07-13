import React from "react";
import { FiLink } from "react-icons/fi";
import { RefreshCw, Plus, CalendarDays, Globe } from "lucide-react";
import { FaCodeBranch, FaHashtag, FaRegUser } from "react-icons/fa";
import { PiSuitcaseSimple } from "react-icons/pi";
import { MdEmojiEmotions, MdKeyboardArrowDown } from "react-icons/md";
import { GrStatusGood } from "react-icons/gr";
import { HiMiniHandRaised } from "react-icons/hi2";

const statusStyles = {
    "In-process": "bg-yellow-100 text-yellow-800",
    "Need to start": "bg-blue-100 text-blue-800",
    "Complete": "bg-green-100 text-green-800",
    "Blocked": "bg-red-100 text-red-800",
};

const priorityStyles = {
    High: "text-red-600 font-semibold",
    Medium: "text-yellow-600 font-semibold",
    Low: "text-blue-600 font-semibold",
};

const tableData = [
    {
        id: 1,
        job: "Launch social media campaign for product",
        submitted: "15-11-2024",
        status: "In-process",
        submitter: "Aisha Patel",
        url: "www.aishapatel.com",
        assigned: "Sophie Choudhury",
        priority: "Medium",
        dueDate: "20-11-2024",
        value: "6,200,000 ₹",
    },
    {
        id: 2,
        job: "Update press kit for company redesign",
        submitted: "28-10-2024",
        status: "Need to start",
        submitter: "Irfan Khan",
        url: "www.irfankhan.com",
        assigned: "Tejas Pandey",
        priority: "High",
        dueDate: "30-10-2024",
        value: "3,500,000 ₹",
    },
    {
        id: 3,
        job: "Finalize user testing feedback for app",
        submitted: "05-12-2024",
        status: "In-process",
        submitter: "Mark Johnson",
        url: "www.markjohnson.com",
        assigned: "Rachel Lee",
        priority: "Medium",
        dueDate: "10-12-2024",
        value: "4,750,000 ₹",
    },
    {
        id: 4,
        job: "Design new features for the website",
        submitted: "10-01-2025",
        status: "Complete",
        submitter: "Emily Green",
        url: "www.emilygreen.com",
        assigned: "Tom Wright",
        priority: "Low",
        dueDate: "15-01-2025",
        value: "5,900,000 ₹",
    },
    {
        id: 5,
        job: "Prepare financial report for Q4",//Prepare financial report for Q4
        submitted: "25-01-2025", //25-01-2025
        status: "Blocked",
        submitter: "Jessica Brown", //Jessica Brown
        url: "www.jessicabrown.com", //www.jessicabrown.com
        assigned: "Kevin Smith", //Kevin Smith
        priority: "Low",//Low
        dueDate: "30-01-2025", //30-01-2025
        value: "2,800,000 ₹", //2,800,000 ₹
    },
    {
        id: 6,
        job: "",
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },
    {
        id: 7,
        job: "",
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },
    {
        id: 8,
        job: "",
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },
    {
        id: 9,
        job: "",
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },
    {
        id: 10,
        job: "",
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },
    {
        id: 11,
        job: "",
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },
    {
        id: 12,
        job: "",
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },
    {
        id: 13,
        job: "", //Prepare financial report for Q4
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },
    {
        id: 14,
        job: "",
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },

    {
        id: 15,
        job: "",
        submitted: "",
        status: "",
        submitter: "",
        url: "",
        assigned: "",
        priority: "",
        dueDate: "",
        value: "",
    },





];

const TableSheet = () => {
    return (
        <div className="">
            <table className="min-w-full table-auto border border-gray-300 mt-0 border-t-0">
                <thead className="bg-gray-100 text-sm font-semibold text-gray-700">
                    <tr>
                        <th className="p-2border-2 border-white  bg-white  text-gray-500"> </th>
                        <th className="p-2  border-2 border-white text-left  " colSpan={4}><div className="flex items-center">
                            <div className="flex gap-2 bg-white p-1  text-gray-500">
                                <FiLink color="#007BFF" size={18} /> Q3 Financial Overview</div>
                            <RefreshCw className="ml-2 h-4 w-4 text-red-500" />
                        </div>
                        </th>
                        <th className="p-2   border-white bg-white"></th>
                        <th className="p-2 border-2  border-white bg-[rgb(174,198,178)]">
                            <div className="flex items-center justify-center gap-1  text-gray-500 text-[17px]">
                                <FaCodeBranch className="invert-75" />
                                <h1>ABC</h1>
                                <span>....</span>
                            </div>
                        </th>
                        <th className="p-2 border-2  border-white bg-[rgb(197,190,226)]" colSpan={2}>
                            <div className="flex items-center justify-center gap-1  text-gray-600 text-[17px]">
                                <FaCodeBranch className="invert-50" />
                                <h1>  Answer a question</h1>
                                <span>....</span>

                            </div>
                        </th>
                        <th className="p-2 border-2 border-white bg-[rgb(240,209,201)]">
                            <div className="flex items-center justify-center gap-1 text-gray-600 text-[17px]">
                                <FaCodeBranch className="invert-50" />
                                <h1> Extract</h1>
                                <span>....</span>
                            </div>
                        </th>
                        <th className="p-2 border-2 border-white w-25"> + </th>

                    </tr>
                </thead>
                <thead className="bg-gray-100 text-sm font-semibold text-gray-500">
                    <tr>
                        <th className="p-2 border-none w-[64px] "> <FaHashtag /></th>
                        <th className="p-2 border-2 border-white text-left"> <div className="flex items-center justify-between"> <div className="flex items-center gap-2">
                            <PiSuitcaseSimple size={20} />Job Request
                        </div>
                            <div><MdKeyboardArrowDown size={20} /></div></div>
                        </th>
                        <th className="p-2 border-2 border-white w-[120px]">
                            <div className="flex items-center justify-between"> <div className="flex items-center gap-2">
                                <CalendarDays size={18} /> Submitted
                            </div>
                                <div><MdKeyboardArrowDown size={20} /></div></div>
                        </th>
                        <th className="p-2  border-2 border-white w-[135px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <GrStatusGood size={18} />  Status
                                </div>
                                <div><MdKeyboardArrowDown size={20} /></div>
                            </div>

                        </th>
                        <th className="p-2  border-2 border-white w-[140px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <FaRegUser size={18} /> Submitter
                                </div>
                                <div><MdKeyboardArrowDown size={20} /></div>
                            </div>
                        </th>
                        <th className="p-2  border-2 border-white w-[25px]">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Globe size={18} />  URL
                                </div>
                                <div><MdKeyboardArrowDown size={20} /></div>
                            </div>

                        </th>
                        <th className="p-2 border-2 border-white  bg-[rgb(218,235,221)] w-[140px]"> <div className="flex items-center justify-center"><div className="flex m-0 p-0">
                            <HiMiniHandRaised /><MdEmojiEmotions />
                        </div>
                            Assigned
                        </div></th>
                        <th className="p-2  border-2 border-white bg-[rgb(227,222,250)] text-left w-[150px]">Priority</th>
                        <th className="p-2 border-2 border-white bg-[rgb(227,222,250)] text-left w-[130px]">Due Date</th>
                        <th className="p-2  border-gray-200 bg-[rgb(253,221,212)] w-[120px] text-left">Est. Value</th>
                        <th className="p-2 bg-white  border-gray-200" ></th>


                    </tr>
                </thead>
                <tbody className="text-sm">
                    {tableData.map((row, index) => (
                        <tr key={index} className="border-b text-gray-500 font-medium border-gray-200">
                            <td className="p-2 border text-center text-gray-500 border-gray-200">{row.id}</td>
                            <td className="p-2 border  border-gray-200 w-72">{row.job}</td>
                            <td className="p-2 border text-right text-gray-500 border-gray-200">{row.submitted}</td>
                            <td className="p-2 border text-center text-gray-500 border-gray-200">
                                <span
                                    className={`px-4 py-1 rounded-3xl text-xs  text-gray-500 font-medium ${statusStyles[row.status]}`}
                                >
                                    {row.status}
                                </span>
                            </td>
                            <td className="p-2 border text-left border-gray-200 text-gray-500">{row.submitter}</td>
                            <td className="p-2 border-gray-200 text-left">
                                <a
                                    href={`https://${row.url}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="!text-gray-500 no-underline hover:text-gray-700"
                                >
                                    {row.url.slice(0, 20)}
                                </a>
                            </td>

                            <td className="p-2 border text-left text-gray-500 border-gray-200">{row.assigned}</td>
                            <td className={`p-2 border text-center border-gray-200 ${priorityStyles[row.priority]}`}>
                                {row.priority}
                            </td>
                            <td className="p-2 border text-right text-gray-500 border-gray-200">{row.dueDate}</td>
                            <td className="p-2 border text-right border-r !border-dashed
                            text-gray-500 border-gray-200">{row.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSheet;
