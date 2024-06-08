"use client";
import { useState, useEffect } from "react";

const ToastNotification = ({ notification, dismissNotification }) => {
  const [position, setPosition] = useState("bottom-center");

  useEffect(() => {
    // Handle position logic based on screen size
  }, []);

  const getNotificationClasses = () => {
    const baseClasses = "fixed p-4 rounded-md shadow-lg z-50 flex items-center";
    const typeClasses = {
      success: "bg-green-500 text-white",
      error: "bg-red-500 text-white",
      warning: "bg-orange-500 text-white",
      info: "bg-blue-500 text-white",
    };

    const positionClasses = {
      "top-left": "top-4 left-4",
      "top-right": "top-4 right-4",
      "top-center": "top-4 left-1/2 transform -translate-x-1/2",
      "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
    };

    return `${baseClasses} ${typeClasses[notification.type]} ${
      positionClasses[position]
    }`;
  };

  return notification ? (
    <div className={getNotificationClasses()}>
      <span>{notification.message}</span>
      <button
        className="ml-auto bg-transparent hover:bg-gray-500 text-white font-semibold py-1 px-2 border border-white rounded"
        onClick={dismissNotification}
      >
        Dismiss
      </button>
    </div>
  ) : null;
};

export default ToastNotification;
