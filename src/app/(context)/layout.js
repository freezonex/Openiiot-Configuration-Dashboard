"use client";
import React, { useState } from "react";

import UserContext from "@/utils/user-context";

export default function Layout({ children }) {
  //get user info from supos, fetch or create user in localdb to maintain the related flow info
  const [user, setUser] = useState(null);
  return (
    <React.Fragment>
      <UserContext.Provider
        value={{
          user: user,
          setUser,
          isLoggedIn: !!user,
        }}
      >
        <div>{children}</div>
      </UserContext.Provider>
    </React.Fragment>
  );
}
