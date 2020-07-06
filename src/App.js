import React, { useState } from "react";

import "./App.css";
import Launches from "./Launches";
import { BASE_URL } from "./constants";

function getLaunchColor(launch, state) {
    return launch === state ? "text-blue-500" : "";
}

function getCallApi(launch) {
    switch (launch) {
        case "all":
            return `${BASE_URL}/launches`;
        case "upcoming":
            return `${BASE_URL}/launches/upcoming`;
        case "past":
            return `${BASE_URL}/launches/past`;
        default:
            return `${BASE_URL}/launches`;
    }
}

function App() {
    const [launch, setLaunch] = useState("all");

    return (
        <>
            <header className="text-gray-500 bg-gray-900 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="ml-3 text-xl">SpaceX Launches</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <a
                            className={`mr-5 hover:text-white cursor-pointer ${getLaunchColor(
                                launch,
                                "all"
                            )}`}
                            onClick={() => setLaunch("all")}
                        >
                            All Launches
                        </a>
                        <a
                            className={`mr-5 hover:text-white cursor-pointer ${getLaunchColor(
                                launch,
                                "upcoming"
                            )}`}
                            onClick={() => setLaunch("upcoming")}
                        >
                            Upcoming Launches
                        </a>
                        <a
                            className={`mr-5 hover:text-white cursor-pointer ${getLaunchColor(
                                launch,
                                "past"
                            )}`}
                            onClick={() => setLaunch("past")}
                        >
                            Past Launches
                        </a>
                    </nav>
                </div>
            </header>
            <Launches callApi={getCallApi(launch)} />
        </>
    );
}

export default App;
