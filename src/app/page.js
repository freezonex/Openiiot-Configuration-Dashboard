"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, []);

  return <div />;
}
