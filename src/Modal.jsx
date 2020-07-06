import * as React from "react";

export function Modal({ isVisible = false, title, content, footer, onClose }) {
    React.useEffect(() => {
        document.addEventListener("keydown", keydownHandler);
        return () => document.removeEventListener("keydown", keydownHandler);
    });

    function keydownHandler({ key }) {
        switch (key) {
            case "Escape":
                onClose();
                break;
            default:
        }
    }

    return !isVisible ? null : (
        <div className="modal" onClick={onClose}>
            <div
                className="modal-dialog text-gray-500 body-font bg-gray-900"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h3 className="modal-title sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        {title}
                    </h3>
                    <div
                        className="modal-close sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
                        onClick={onClose}
                    >
                        &times;
                    </div>
                </div>
                <div className="modal-body">
                    <div className="modal-content">{content}</div>
                </div>
                {footer && <div className="modal-footer">{footer}</div>}
            </div>
        </div>
    );
}
