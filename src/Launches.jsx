import React from "react";
import * as dayjs from "dayjs";
import { useFetch } from "./hooks";
import { LaunchModal } from "./LaunchModal";
import noDataImage from "./assets/no_data.jpg";
import falconImage from "./assets/falcon.jpg";

const Launches = ({ callApi }) => {
    const { response, loading } = useFetch(callApi, {}, [callApi]);

    if (loading)
        return (
            <section className="text-gray-500 body-font bg-gray-900 h-screen">
                <div className="container px-5 py-24 mx-auto">
                    <img
                        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
                        alt="hero"
                        src={falconImage}
                    />
                    <div className="flex flex-col text-center w-full">
                        <h1 className="text-xl font-medium title-font mb-4 text-white">
                            Loading...
                        </h1>
                    </div>
                </div>
            </section>
        );

    if ((response || []).length === 0)
        return (
            <section className="text-gray-500 body-font bg-gray-900 h-screen">
                <div className="container px-5 py-24 mx-auto">
                    <img
                        className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
                        alt="hero"
                        src={noDataImage}
                    />
                    <div className="flex flex-col text-center w-full">
                        <h1 className="text-xl font-medium title-font mb-4 text-white">
                            No Data Found. Try changing your filters...
                        </h1>
                    </div>
                </div>
            </section>
        );

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

                            <LaunchModal launchDetail={res} />
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
