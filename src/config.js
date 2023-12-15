let ipUrl = null; //接口
let serverUrl = null;
if (process.env.NEXT_PUBLIC_DOMAIN_ENV === "development") {
  ipUrl = "http://localhost:81";
  serverUrl = "http://localhost:8085";
} else {
  ipUrl = "http://openiiot-consolemanager-service.openiiot:81";
  serverUrl = " http://openiiot-server-service.openiiot:8085";
}
let envPath = {
  ipUrl: ipUrl,
  serverUrl: serverUrl,
};
export default envPath;
