import React from "react";

const PortfolioItem = ({ img, title }) => {
    return (
       <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadown-gray-400 rounded-lg group hover:scale-90 ease-in" >
            <img src={img} alt={title} className="rounded-md group-hover:opacity-10" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50] translate-x-[-50%] translate-y-[-50%] ">
                <h3 className="text-2xl font-bold">
                    {title}
                </h3>
                <a>
                    <p className="text-center p-3 rounded-lg bg-gray-00 font-bold cursor-pointer text-lg text-white">More Info</p>
                </a>
            </div>
       </div>
    );
};

export default PortfolioItem;
