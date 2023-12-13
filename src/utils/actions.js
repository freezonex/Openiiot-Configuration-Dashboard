"use server";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/db";
import { revalidatePath } from "next/cache";

export async function getFlowInfo(id) {
  noStore();
  try {
    console.log("Fetching flow data...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let flowInfo = {};
    await fetch("http://localhost:3000/api/flows/" + id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        flowInfo = res.data;
      });
    console.log("Data fetch completed after 1 seconds.");

    return flowInfo;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function getAllFlow(uid) {
  noStore();
  try {
    console.log("Fetching flow data...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let flows = {};
    await fetch("/api/user/flows/" + uid)
      .then((res) => res.json())
      .then((res) => (flows = res));
    console.log("Data fetch completed after 1 seconds.");

    return flowInfo;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}

export async function updateCore(data) {
  try {
    console.log(data);
    const updatedCore = await prisma.core.update({
      where: {
        id: data.id,
      },
      data: {
        mqttUrl: data.mqttUrl,
        tsdbUrl: data.tsdbUrl,
        s3Url: data.s3Url,
      },
    });
    console.log(updatedCore);
  } catch (error) {
    return { message: "Database Error: Failed to Update Core." };
  }
  revalidatePath(`/flows/${data.id}?mode=view`);
}
