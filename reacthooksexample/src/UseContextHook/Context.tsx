import { createContext, useContext } from "react";

import { User } from ".";

//step1: creating a context
export const DashboardContext = createContext<User | undefined>(undefined);

//step2:
//this is a custom hook used to check if user is available or not(to avoid undefined)
//and returing user
export function useUserContext() {
  const user = useContext(DashboardContext); // we can directly use this line in the components to access DashboardContext
  if (user === undefined) {
    throw new Error("useUserContext must be used with Dashboard Context");
  }
  return user;
}
