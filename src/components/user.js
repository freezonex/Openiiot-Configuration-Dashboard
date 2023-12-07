"use client";
import { httpToSupos } from "@/utils/http";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function User() {
  const [userInfo, setUserInfo] = useState("");
  const router = useRouter();

  const getUser = async () => {
    httpToSupos
      .get("user/current")
      .then((res) => {
        console.log(res.data.data);
        setUserInfo(res.data.data);
      })
      .catch((error) => {
        // It's important to handle errors in promises.
        console.error("Error fetching user data:", error);
        setUserInfo("Failed to fetch data");
        router.push("/login");
      });
  };
  return (
    <div>
      <Button onClick={getUser}> click to show user</Button> <p>{userInfo}</p>
    </div>
  );
}

export default User;
