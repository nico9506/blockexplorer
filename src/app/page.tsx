"use client";

import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [balance, setBalance] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`/api/alchemy?address=${searchQuery}`);

    if (!res.ok) {
      const text = await res.text(); // helpful for debugging
      console.log(`Raw response: ${text} --- type: ${typeof text}`);
      throw new Error(`API error: ${res.status} - ${text}`);
    }

    const data = await res.json();

    if (data) {
      setBalance(data.balance);
      alert(data.balance);
    } else {
      alert("Error fetchin data");
    }
  };

  return (
    <div className="text-center pt-12">
      <h1 className="text-3xl capitalize font-bold mb-4">
        Ethereum MainNet Explorer
      </h1>

      <form className="max-w-11/12 mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
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
          </div>
          <input
            type="search"
            value={searchQuery}
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-zinc-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search block hash, block number or address"
            required
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:focus:ring-blue-800 cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>

      <p className="text-[16px]">Powered by Alchemy SDK and Next.js</p>
    </div>
  );
}
