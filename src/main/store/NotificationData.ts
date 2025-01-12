import { Notification, NotificationTypes } from "./storeInterfaces";

export const notificationData: Notification[] = [
  {
    id: "qKvT0001",
    message: "Email successfully sent",
    type: NotificationTypes.SUCCESS,
  },
  {
    id: "qKvT0003",
    message: "API endpoint does not exist",
    type: NotificationTypes.ERROR,
  },
  {
    id: "qKvT0005",
    message: "You have 3 messages",
    type: NotificationTypes.INFO,
  },
];
