"use client";
import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserContext from "@/utils/user-context";

function User() {
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  return (
    <div>
      <Button onClick={toggle}> toggle to show user</Button>
      {show && (
        <div>
          <p>name: {user.name}</p>
          <p>role: {user.role}</p>
          <p>id: {user.id}</p>
        </div>
      )}
    </div>
  );
}

export default User;
