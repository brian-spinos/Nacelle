import React, { useState, useEffect } from "react";
import {
  NotificationState,
  notificationType,
  NotificationTypes,
} from "../../store/storeInterfaces";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  deleteNotification,
  fetchData,
  saveNotification,
} from "../../store/notificationSlice";
import Util from "../../utils/Util";
import NotificationDisplay from "./NotificationDisplay";

const NacelleNotification = () => {
  const { notifications } = useSelector(
    (state: { notification: NotificationState }) => state.notification
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  /**
   * When this state is changed, the notification witll trigger
   */
  const [notificationConfig, setNotificationConfig] = React.useState({
    id: "",
    message: "",
    type: "success", // default
  });

  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setNotificationConfig((prev) => {
      return { ...prev, message: event.target.value };
    });
  };

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const str = event.target.value;
    setSelectedOption(str);
    setNotificationConfig((prev) => {
      return { ...prev, type: str };
    });
  };

  return (
    <>
      <h1
        className="ml-10 text-4xl font-extrabold text-gray-700"
        data-testid="notifications-title"
      >
        Notifications
      </h1>
      <div className="m-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((data: any) => (
              <tr
                key={data.id}
                className={`bg-white border-b dark:bg-gray-900 dark:border-gray-700`}
              >
                <td className="px-6 py-4">{data.id}</td>
                <td className="px-6 py-4">{data.message}</td>
                <td className="px-6 py-4">{data.type}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      dispatch(deleteNotification(data.id));
                    }}
                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => {
                      setNotificationConfig({
                        id: data.id,
                        message: data.message,
                        type: data.type,
                      });
                    }}
                    className="ml-5 bg-gray-200 text-gray font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  >
                    Trigger
                  </button>
                </td>
              </tr>
            ))}
            <tr
              key={"new-notification"}
              className={`bg-white border-b dark:bg-gray-900 dark:border-gray-700`}
            >
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4">
                <input
                  id="inputString"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter a message"
                />
              </td>
              <td className="px-6 py-4">
                <select
                  id="dropdown"
                  value={selectedOption}
                  onChange={(e) => handleDropdownChange(e)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option disabled>Select a type</option>
                  <option selected value={NotificationTypes.SUCCESS}>
                    {NotificationTypes.SUCCESS}
                  </option>

                  <option value={NotificationTypes.INFO}>
                    {NotificationTypes.INFO}
                  </option>

                  <option value={NotificationTypes.ERROR}>
                    {NotificationTypes.ERROR}
                  </option>
                </select>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => {
                    dispatch(
                      saveNotification({
                        id: Util.generateRandomId(),
                        message: notificationConfig.message,
                        type: notificationConfig.type as notificationType,
                      })
                    );
                  }}
                  className="bg-gray-200 text-gray font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ================ */}

      {/* When the state for the notification changes, the notification is displayed, for 3 seconds */}
      {notificationConfig.id && (
        <NotificationDisplay
          message={notificationConfig.message}
          type={notificationConfig.type as notificationType}
          duration={3000}
          show={true}
        />
      )}

      {/* ================ */}
    </>
  );
};

export default NacelleNotification;
