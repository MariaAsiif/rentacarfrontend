import axios from "axios";
// import { store } from "../store";

const HOSTNAME = "https://sportsweganbackend.herokuapp.com" ;
// const callApi = (endpoint, method, payload) => {
//     let token = store.getState().userAuth.loginInfo.token;
//     const authHeaders = token
//         ? {
//             Authorization: `Bearer ${token}`,
//         }
//         : {};
//     const configaxios = {
//         method,
//         url: `${HOSTNAME}${endpoint}`,
//         data: payload,
//         headers: {
//             Accept: "*/*",
//             "Access-Control-Allow-Origin": "*",
//             "Content-Type": "application/json",
//             "Access-Control-Max-Age": "6000",
//             "Access-Control-Allow-Headers": "*",

//             ...authHeaders,
//         },
//     };
//     return new Promise((resolve, reject) => {
//         axios(configaxios)
//             .then((res) => {
//                 resolve(res.data);
//             })
//             .catch((error) => {
//                 reject(error);
//             });
//     });
// };

const callPublicApi = (endpoint, method, payload) => {
    const HOSTNAME = "https://sportsweganbackend.herokuapp.com";
    const configaxios = {
        method,
        url: `${HOSTNAME}${endpoint}`,
        data: payload,
        headers: {
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            "Access-Control-Max-Age": "6000",
            "Access-Control-Allow-Headers": "*",
            // ...authHeaders,
        },
    };
    return new Promise((resolve, reject) => {
        axios(configaxios)
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};


 const sendContactForm = async (data) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),

    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
});




export { callPublicApi , sendContactForm , HOSTNAME};
