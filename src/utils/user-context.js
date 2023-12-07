"use client";

import { createContext } from "react";

const UserContext = createContext({
  isLoggedIn: false,
  user: null,
});

export default UserContext;
