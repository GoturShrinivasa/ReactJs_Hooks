import { useState } from "react";
import { DashboardContext } from "./Context";

import Dashboard from "./Dashboard";

export interface User {
  name: string;
  isSubscribed: boolean;
}

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [user] = useState<User>({
    name: "shrinivasa",
    isSubscribed: true,
  });

  //step3:
  //wrapping around the Dashboard component so we can access user in Dashboard's child component
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
}
