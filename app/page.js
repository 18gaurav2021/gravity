"use client";
import useToastNotification from "./hooks/useToastNotification";
import ToastNotification from "./components/ToastNotification";

export default function Home() {
  const { notification, showNotification, dismissNotification } =
    useToastNotification();

  const handleClick = (type) => {
    showNotification(type, `This is a ${type} notification`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => handleClick("success")}
        >
          Success
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => handleClick("info")}
        >
          Info
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => handleClick("warning")}
        >
          Warning
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleClick("error")}
        >
          Error
        </button>
      </div>
      <ToastNotification
        notification={notification}
        dismissNotification={dismissNotification}
      />
    </div>
  );
}
