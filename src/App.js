import React, { useEffect, useState } from "react";

import "./App.css";
import Launches from "./Launches";
import { BASE_URL } from "./constants";

function getLaunchColor(launch, state) {
    return launch === state ? "text-blue-500" : "";
}

function getCallApi(launch, status) {
    let callApi;
    switch (launch) {
        case "all":
            callApi = `${BASE_URL}/launches`;
            break;
        case "upcoming":
            callApi = `${BASE_URL}/launches/upcoming`;
            break;
        case "past":
            callApi = `${BASE_URL}/launches/past`;
            break;
        default:
            callApi = `${BASE_URL}/launches`;
    }
    if (status === "all") return callApi;
    return `${callApi}?launch_success=${status === "successful"}`;
}

function App() {
    const [launch, setLaunch] = useState("all");
    const [launchStatus, setLaunchStatus] = useState("successful");

    useEffect(() => {
        const addMouseClass = function () {
            document.body.classList.add("using-mouse");
        };
        document.body.addEventListener("mousedown", addMouseClass);

        // Re-enable focus styling when Tab is pressed
        const removeMouseClass = function (event) {
            if (event.keyCode === 9) {
                document.body.classList.remove("using-mouse");
            }
        };
        document.body.addEventListener("keydown", removeMouseClass);
        return () => {
            document.body.removeEventListener("mousedown", addMouseClass);
            document.body.removeEventListener("keydown", removeMouseClass);
        };
    }, []);

    return (
        <>
            <header className="fixed text-gray-500 bg-gray-900 body-font w-screen">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <button
                        type="button"
                        className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
                    >
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
                    </button>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                        <button
                            type="button"
                            className={`mr-5 hover:text-white cursor-pointer ${getLaunchColor(
                                launch,
                                "all"
                            )}`}
                            onClick={() => setLaunch("all")}
                        >
                            All Launches
                        </button>
                        <button
                            type="button"
                            className={`mr-5 hover:text-white cursor-pointer ${getLaunchColor(
                                launch,
                                "upcoming"
                            )}`}
                            onClick={() => setLaunch("upcoming")}
                        >
                            Upcoming Launches
                        </button>
                        <button
                            type="button"
                            className={`mr-5 hover:text-white cursor-pointer ${getLaunchColor(
                                launch,
                                "past"
                            )}`}
                            onClick={() => setLaunch("past")}
                        >
                            Past Launches
                        </button>
                    </nav>
                    <div className="flex ml-6 items-center">
                        <span className="mr-3">Launch Status</span>
                        <div className="relative">
                            <select
                                value={launchStatus}
                                className="rounded border border-gray-700 bg-gray-800 appearance-none py-2 focus:outline-none focus:border-blue-500 text-white pl-3 pr-10"
                                onChange={(e) =>
                                    setLaunchStatus(e.target.value)
                                }
                            >
                                <option value="all">All</option>
                                <option value="successful">Successful</option>
                                <option value="unsuccessful">
                                    Unsuccessful
                                </option>
                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-4 h-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
            <Launches callApi={getCallApi(launch, launchStatus)} />
        </>
    );
}

export default App;
