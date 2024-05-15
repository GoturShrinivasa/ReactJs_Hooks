//import { useContext } from "react";we can access the data using useContext
import { DashboardContext } from "./Context";
import { useUserContext } from "./Context";

interface sidebarProps {}

export function Sidebar({}: sidebarProps) {
  //step4: accesing DashboardContext which has user and using the user data in this component
  //const user = useContext(DashboardContext);//accessing DashbardContext data using useContext
  const user = useUserContext();
  return (
    <div>
      <h3>Sidebar Component:</h3>
      <div>{user.name}</div>
      <div>subscription status: {user.isSubscribed}</div>
    </div>
  );
}

interface profile {}

export function Profile({}: profile) {
  const user = useUserContext();
  return (
    <div>
      <h3>Profile Component:</h3>
      <div>{user.name}</div>
    </div>
  );
}
