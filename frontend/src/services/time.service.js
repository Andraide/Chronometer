import { handleResponse } from "../utils/handle-response";

export const timeService = {
    setTime,
}

async function setTime(payload) {
    const url = 'http://localhost:3000/api/saveTimeMark'
    console.log("Seding payload", payload)
    let obj = { payload: payload }

    const requestOptions = {
        method: 'POST',
        timeoutInterval: 15000,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ time: payload })
    }

    return fetch(url, requestOptions)
            .then(handleResponse)
            .then(response => {
                return Promise.resolve(response)
            }).catch((err) => {
                console.log("Error ===>", err)
                return Promise.reject(err)
            })
}
