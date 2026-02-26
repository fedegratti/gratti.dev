
"use client";

import { useState } from "react";

export default function Page() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("");

    return (
        <div className="flex flex-col items-center gap-4 min-h-screen items-center justify-center bg-zinc-50 font-sans">
          <h1 className="text-2xl font-bold text-zinc-800">useState</h1>
          <p className="text-zinc-600">
            This page uses {" "}
            <code className="bg-zinc-100 px-1 rounded">useState</code> hook in
            Next.js.
          </p>

            <div className="flex items-center gap-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer active:bg-blue-700"
                onClick={() => setCount(count + 1)}
              >
                Increment
              </button>
              
              <span className="text-zinc-800">{count}</span>

                <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors cursor-pointer active:bg-red-700"
                onClick={() => setCount(count - 1)}
              >
                Decrement
              </button>
            </div>

            <hr className="w-full border-t border-zinc-300 my-4" />

            <div className="flex items-center gap-4 text-black">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="px-4 py-2 border border-zinc-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <p>Hello, {name}!</p>
            </div>
        </div>
    )
}