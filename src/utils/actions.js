"use server";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/db";
import { revalidatePath } from "next/cache";
import envPath from "@/config";
import JSONbig from "json-bigint";
import axios from "axios";
import Cookies from "js-cookie";

const serverUrl = envPath.serverUrl;

export const httpToBackendAtServer = axios.create({
  baseURL: serverUrl,
  withCredentials: true,
  timeout: 100000,
  transformResponse: [
    async function (data) {
      try {
        return JSONbig.parse(data);
      } catch (err) {
        console.log("convertion failed", err);
        return data;
      }
    },
  ],
});

export async function getEdges(token) {
  noStore();
  try {
    console.log("Fetching edge data...");
    //await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await httpToBackendAtServer.get("edge/get", {
      headers: { userToken: token },
    });

    return response.data.data;
    //const resposne = await httpToBackend.get("edge/get");

    console.log("Data fetch completed after 1 seconds.");
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest edges.");
  }
}
export async function getFlowInfo(id) {
  noStore();
  try {
    console.log("Fetching flow data...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    let flowInfo = {};
    const apiUrl = envPath.ipUrl;
    console.log(apiUrl);
    await fetch(`${apiUrl}/api/flows/${id}`, { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        flowInfo = res.data;
      });
    console.log("Data fetch completed after 1 seconds.");

    return flowInfo;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest flow.");
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

export async function updateDashboard(data) {
  try {
    console.log(data);
    const updatedDashboard = await prisma.dashboard.update({
      where: {
        id: data.id,
      },
      data: {
        grafanaUrl: data.grafanaUrl,
        odmUrl: data.odmUrl,
        biUrl: data.biUrl,
      },
    });
    console.log(updateDashboard);
  } catch (error) {
    return { message: "Database Error: Failed to Update Core." };
  }
  revalidatePath(`/flows/${data.id}?mode=view`);
}

export async function updateFlowInfo(data) {
  try {
    console.log(data);
    const updatedFlow = await prisma.flow.update({
      where: {
        id: data.id,
      },
      data: {
        name: data.name,
        description: data.description,
      },
    });
    console.log(updatedFlow);
  } catch (error) {
    return { message: "Database Error: Failed to Update Core." };
  }
  revalidatePath(`/flows/${data.id}?mode=view`);
}

export async function updateEdge(data, flowId, currentEdge) {
  try {
    console.log(data);

    const exisitingEdges = data
      .filter((edge) => edge.id)
      .map((edge) => edge.id);
    const edgeToRemove = currentEdge.filter((e) => {
      return !exisitingEdges.includes(e.edge.id);
    });
    const removalPromises = edgeToRemove.map(async (edge) => {
      await prisma.edge.delete({
        where: { id: edge.edgeId },
      });
    });

    await Promise.all(removalPromises);

    const newEdges = data.filter((edge) => !edge.id);
    const edgeCreationPromises = newEdges.map(async (edgeData) => {
      const edge = await prisma.edge.create({
        data: {
          type: edgeData.type,
          description: edgeData.description,
          url: edgeData.url,
        },
      });

      // 然后创建FlowEdgeMap实例来连接Flow和Edge
      return await prisma.flowEdgeMap.create({
        data: {
          flow: {
            connect: { id: flowId },
          },
          edge: {
            connect: { id: edge.id },
          },
        },
      });
    });

    await Promise.all(edgeCreationPromises);
  } catch (error) {
    return { message: "Database Error: Failed to Update Core." };
  }
  revalidatePath(`/flows/${flowId}?mode=view`);
  //redirect(`/flows/${flowId}?mode=view`);
}
