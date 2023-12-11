"use client";
import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import FlowOverview from "@/components/Home/Overview";
import { Divider } from "@mui/material";
import { FlowContext } from "@/utils/flow-provider";
import UserContext from "@/utils/user-context";

const OverviewLayout = ({}) => {
  const { refresh } = useContext(FlowContext);
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (user) {
      fetch("/api/user/flows/" + user.id)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData(res.data);
        });
    }
  }, [refresh, user]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {data.map(({ id, name, description, _count, core, dashboard }) => (
        <React.Fragment key={id}>
          <FlowOverview
            flowName={name}
            flowDescription={description}
            edgeCount={_count.edges}
            core={core}
            dashboard={dashboard}
          />
          <Divider sx={{ mt: 2 }} />
        </React.Fragment>
      ))}
    </Box>
  );
};

export default OverviewLayout;
