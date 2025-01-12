import { useState, useEffect } from "react";
import {
  notificationType,
  NotificationTypes,
} from "../../store/storeInterfaces";

interface NotificationDisplayProps {
  message: string;
  type: notificationType;
  duration: number;
  show: boolean;
}

const NotificationDisplay = ({
  message,
  type = NotificationTypes.SUCCESS,
  duration = 3000,
  show: _show,
}: NotificationDisplayProps) => {
  const [show, setShow] = useState(_show);

  useEffect(() => {
    setShow(_show);
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, type, message]);

  const getTypeColor = (type: notificationType): string => {
    let color = "";
    switch (type) {
      case NotificationTypes.SUCCESS: {
        color = "bg-green-500";
        break;
      }
      case NotificationTypes.ERROR: {
        color = "bg-red-500";
        break;
      }
      case NotificationTypes.INFO: {
        color = "bg-blue-500";
        break;
      }
    }

    return color;
  };

  const handleClose = () => {
    setShow(false); // Close the notification when the button is clicked
  };

  return (
    show && (
      <div
        className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg ${getTypeColor(
          type
        )} transform transition-transform duration-300 ${
          show ? "animate-slide-in" : "animate-slide-out"
        }`}
      >
        <div className="flex justify-between items-center">
          <p className="text-white">{message}</p>
          <button
            onClick={handleClose}
            className="ml-4 text-white font-bold text-lg"
          >
            &times;
          </button>
        </div>

        {/* Progress bar */}
        <div className="relative h-1 mt-2 bg-gray-300 rounded">
          <div
            className="absolute top-0 left-0 h-full bg-white rounded"
            style={{
              animation: `progress-bar ${duration}ms linear forwards`,
            }}
          />
        </div>
      </div>
    )
  );
};

export default NotificationDisplay;
