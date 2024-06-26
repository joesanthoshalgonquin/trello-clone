"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-blue-400 to-[#76e6d2] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1280px-Trello_logo.svg.png"
          alt="Trello Logo"
          width={300}
          height={300}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none"
            />
            <button hidden type="submit">
              Search
            </button>
          </form>
          <Avatar name="Joe Santhosh" round color="#4dc897" size="50" />
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5 rounded-xl w-fit shadow-xl bg-white italic max-w-3xl text-[#4dc897]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#4dc897] mr-1" />
          GPT is summmarizing your tasks
        </p>
      </div>
    </header>
  );
};

export default Header;
