import * as React from "react";
import { Modal } from "./Modal";

export function LaunchModal() {
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
                    title="Falcon Sat"
                    content={<p>Add your content here</p>}
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
