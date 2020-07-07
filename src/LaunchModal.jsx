import * as React from "react";
import { Modal } from "./Modal";

function getYoutubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
}

export function LaunchModal({ launchDetail }) {
    const [isModal, setModal] = React.useState(false);

    return (
        <>
            <a
                onClick={() => setModal(true)}
                className="text-blue-500 inline-flex items-center cursor-pointer"
            >
                Learn More
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </a>
            <div>
                <Modal
                    isVisible={isModal}
                    title={launchDetail.mission_name}
                    content={
                        <section className="text-gray-500 bg-gray-900 body-font">
                            <div className="container px-5 py-5 mx-auto flex flex-col">
                                <div className="lg:w-4/6 mx-auto">
                                    {launchDetail.links.video_link && (
                                        <div className="rounded-lg h-64 overflow-hidden">
                                            <iframe
                                                className="object-cover object-center h-full w-full"
                                                src={`https://www.youtube.com/embed/${getYoutubeId(
                                                    launchDetail.links
                                                        .video_link
                                                )}`}
                                            />

                                            {/* <img */}
                                            {/*    alt="content" */}
                                            {/*    className="object-cover object-center h-full w-full" */}
                                            {/*    src="https://dummyimage.com/1200x500" */}
                                            {/* /> */}
                                        </div>
                                    )}
                                    <div className="flex flex-col sm:flex-row mt-10">
                                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-400 text-gray-600">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="none"
                                                        d="M17.496,4c-1.425,0-3.378,0.256-4.597,1.475C10.794,7.58,9.391,9.03,9.388,9.033 C9.148,9.28,8.795,9.387,8.465,9.316c-0.007,0-2.248-0.435-3.948,0.504l9.694,9.694c0.943-1.702,0.541-3.919,0.536-3.944 c-0.065-0.328,0.037-0.667,0.273-0.903l3.536-3.535c1.896-1.896,1.516-5.498,1.271-6.929C19.289,4.111,18.443,4,17.496,4z M17.142,9.718c-0.781,0.781-2.046,0.781-2.828,0c-0.781-0.782-0.781-2.047,0-2.828c0.782-0.782,2.047-0.782,2.828,0 C17.924,7.671,17.924,8.936,17.142,9.718z"
                                                    />
                                                    <path d="M20.92,2.384C20.857,2.368,19.364,2,17.496,2c-2.585,0-4.663,0.713-6.011,2.061C9.997,5.549,8.857,6.712,8.31,7.273 C7.096,7.136,4.233,7.07,2.293,9.011C2.105,9.198,2,9.452,2,9.718s0.105,0.52,0.293,0.707l11.313,11.313 c0.188,0.188,0.441,0.293,0.707,0.293s0.52-0.105,0.707-0.293c1.954-1.953,1.894-4.814,1.767-6.01l3.184-3.183 c3.191-3.191,1.74-9.182,1.677-9.435C21.559,2.753,21.278,2.473,20.92,2.384z M18.557,11.132l-3.536,3.535 c-0.236,0.236-0.339,0.575-0.273,0.903c0.005,0.025,0.407,2.242-0.536,3.944L4.517,9.82c1.7-0.938,3.941-0.504,3.948-0.504 c0.33,0.07,0.684-0.036,0.923-0.283c0.003-0.003,1.406-1.453,3.512-3.559C14.118,4.256,16.071,4,17.496,4 c0.947,0,1.793,0.111,2.332,0.203C20.072,5.634,20.453,9.235,18.557,11.132z" />
                                                    <circle
                                                        cx="15.728"
                                                        cy="8.304"
                                                        r="2"
                                                    />
                                                    <path d="M5,16c-2,1-2,5-2,5s3,0,5-2L5,16z" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-center text-center justify-center">
                                                <h2 className="font-medium title-font mt-4 text-white text-lg">
                                                    {
                                                        launchDetail.rocket
                                                            .rocket_name
                                                    }
                                                </h2>
                                                <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4" />
                                                <p className="text-base text-gray-600">
                                                    {
                                                        launchDetail.rocket
                                                            .rocket_type
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                            <p className="leading-relaxed text-lg mb-4">
                                                {launchDetail.details}
                                            </p>
                                            <a
                                                href={
                                                    launchDetail.links
                                                        .article_link
                                                }
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-blue-500 inline-flex items-center cursor-pointer"
                                            >
                                                Learn More
                                                <svg
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    className="w-4 h-4 ml-2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    }
                    footer={
                        <button
                            onClick={() => setModal(false)}
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-sm cursor-pointer"
                        >
                            Cancel
                        </button>
                    }
                    onClose={() => setModal(false)}
                />
            </div>
        </>
    );
}
