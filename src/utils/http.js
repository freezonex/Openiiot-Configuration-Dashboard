import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const httpToSupos = axios.create({
  baseURL: "/suposapi",
  withCredentials: true,
  timeout: 100000,
});

httpToSupos.interceptors.request.use(
  (config) => {
    console.dir(localStorage.getItem("token"));
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    if (Cookies.get("isv_token") != null) {
      config.headers.userToken = Cookies.get("isv_token");
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

httpToSupos.interceptors.response.use(
  function (response) {
    if (response.data.code === 401) {
      removeLoginInfo();
      login();
      return Promise.reject();
    }
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      removeLoginInfo();
      login();
      return Promise.reject();
    } else {
      return Promise.reject(error);
    }
  }
);

export function getQueryString(key) {
  var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substring(1).match(reg);
  if (r != null) {
    return decodeURIComponent(r[2]);
  }
  return null;
}

/**
 * 删除URL中指定search参数,会将参数值一起删除
 * @param {string} url 地址字符串
 * @param {array} aParam 要删除的参数key数组，如['name','age']
 * @return {string} 返回新URL字符串
 */
export function ridUrlParam(url, aParam) {
  aParam.forEach((item) => {
    const fromindex = url.indexOf(`${item}=`); //必须加=号，避免参数值中包含item字符串
    if (fromindex !== -1) {
      // 通过url特殊符号，计算出=号后面的的字符数，用于生成replace正则
      const startIndex = url.indexOf("=", fromindex);
      const endIndex = url.indexOf("&", fromindex);
      const hashIndex = url.indexOf("#", fromindex);

      let reg;
      if (endIndex !== -1) {
        // 后面还有search参数的情况
        const num = endIndex - startIndex;
        reg = new RegExp(`${item}=.{${num}}`);
        url = url.replace(reg, "");
      } else if (hashIndex !== -1) {
        // 有hash参数的情况
        const num = hashIndex - startIndex - 1;
        reg = new RegExp(`&?${item}=.{${num}}`);
        url = url.replace(reg, "");
      } else {
        // search参数在最后或只有一个参数的情况
        reg = new RegExp(`&?${item}=.+`);
        url = url.replace(reg, "");
      }
    }
  });
  const noSearchParam = url.indexOf("=");
  if (noSearchParam === -1) {
    url = url.replace(/\?/, ""); // 如果已经没有参数，删除？号
  }
  return url;
}

// export function refLogin() {
//   sessionStorage.removeItem("isv_token");
//   Cookies.remove("isv_token");
//   let redirectUrl = ridUrlParam(window.location.href, ["state", "code"]);
//   router.push(
//     `${
//       process.env.NEXT_PUBLIC_SUPOS_URL
//     }/inter-api/auth/v1/oauth2/authorize?responseType=code&state=1&redirectUri=${encodeURIComponent(
//       redirectUrl
//     )}`
//   );
// }

export function removeLoginInfo(router) {
  sessionStorage.removeItem("isv_token");
  Cookies.remove("isv_token");
  router.push("/login");
}

export function login(callback, router) {
  if (typeof window !== "undefined") {
    // CSR
    let token = Cookies.get("isv_token"); //use Cookies instead of session storage
    if (!token) {
      let code = getQueryString("code") || "";
      if (code) {
        console.log("get code info", code, window.location.search);
        //如果有code则调用接口换取token
        httpToSupos
          .get("/auth/accessToken", {
            params: {
              code,
            },
          })
          .then((res) => {
            const { code, data, msg } = res.data;
            console.log("login info display", code, data, msg);

            console.log("http-----", httpToSupos);
            if (code !== 0) return ElementUI.Message.error(msg);
            if (data) {
              // //请求结束获取到数据
              // window.sessionStorage.setItem("isv_token", data);
              Cookies.set("isv_token", data, { expires: 1 });
              console.log("登录信息获取完毕", data);
              callback();
            }
          });
      } else {
        console.log(window.location.href);
        router.push(
          `${
            process.env.NEXT_PUBLIC_SUPOS_URL
          }/inter-api/auth/v1/oauth2/authorize?responseType=code&state=1&redirectUri=${encodeURIComponent(
            window.location.href
          )}`
        );
      }
    } else {
      callback();
    }
  }
}
