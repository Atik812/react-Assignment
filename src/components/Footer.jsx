import React from 'react';

const FooterTabs = () => {
    const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];
    const selectedTab = "All Orders"; // You can make this dynamic with useState

    return (
        <div className="flex items-center  border-gray-300 px-4 py-2 bg-white ml-[52px]">
            {tabs.map((tab) => (
                <div
                    key={tab}
                    className={`p-[10px] rounded h-12  flex items-center justify-center mt-0
                        ${tab === selectedTab
                            ? "text-[rgb(67,101,74)] bg-[rgb(224,251,229)] font-semibold text-[18px] border-t-[3px] border-[rgb(67,101,74)]"
                            : "text-gray-500 text-[18px]"
                        }`}
                >
                    {tab}
                </div>
            ))}
            <div className="text-gray-500 text-xl font-light cursor-pointer text-[18px]">+</div>
        </div>
    );
};

export default FooterTabs;
