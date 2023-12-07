"use client";

import { createContext, useState } from "react";

export const FlowContext = createContext({});

export default function FlowProvider({ children }) {
  const [refresh, setRefresh] = useState({});
  return (
    <FlowContext.Provider value={{ refresh, setRefresh }}>
      {children}
    </FlowContext.Provider>
  );
}
