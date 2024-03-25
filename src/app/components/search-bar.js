import { useState } from "react";
import Link from "next/link";
export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

   // const { data, setNewData } = useGlobalContext();



  return (
    <>
    <div className="relative hidden md:block">
            <Link href={`/search/${searchTerm}`}>
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 cursor-pointer" >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            </Link>
            <input
              type="text"
              id="search-navbar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="font-heading font-[300] md:min-w-[480px] block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-green-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Hmm.. idk what to watch T_T "
            />
          </div> 
    </>
  )
}
