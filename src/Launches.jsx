import React from "react";
import * as dayjs from "dayjs";
import { useFetch } from "./hooks";
import { LaunchModal } from "./LaunchModal";

const Launches = ({ callApi }) => {
    const { response } = useFetch(callApi, {}, [callApi]);

    return (
        <section className="text-gray-500 body-font bg-gray-900">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap">
                    {(response || []).map((res) => (
                        <div
                            key={res.flight_number}
                            className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800"
                        >
                            <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">
                                {res.mission_name}
                            </h2>
                            <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font mb-4">
                                {dayjs(res.launch_date_local).format(
                                    "dddd, MMMM D YYYY, h:mm A"
                                )}
                            </h3>
                            <p className="leading-relaxed text-base mb-4">
                                {res.details}
                            </p>

                            <LaunchModal />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

Launches.defaultProps = {
    callApi: "https://api.spacexdata.com/v3/launches",
};

export default Launches;
