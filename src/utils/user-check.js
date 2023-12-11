import { httpToSupos } from "./http";
export async function getUserFromSupos() {
  const data = await httpToSupos
    .get("user/current")
    .then((res) => {
      const userInfoArray = res.data.data.split("-").map((str) => str.trim());
      const userInfo = { name: userInfoArray[0], role: userInfoArray[1] };
      console.log(user);
      return userInfo;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      setUser(null);
      router.push("/login");
    });
  return data;
}
export async function checkOrCreateUser(user) {
  console.log("check or create user");
  const res = await fetch("/api/user/" + user.name)
    .then((res) => res.json())
    .then((res) => setUser(res));
  console.log(res);
  if (!res.data) {
    const body = JSON.stringify(user);
    const res = await fetch("api/user/create", { method: "POST", body })
      .then((res) => res.json())
      .then((res) => setUser(res));
    return res.data;
  }
  return res.data;
}
