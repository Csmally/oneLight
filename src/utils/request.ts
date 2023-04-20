import { commonEnum } from "@/interfaces";
import axios, { AxiosResponse } from "axios";

//请求拦截器
axios.interceptors.request.use(
    (config) => {
        // if (config.method?.includes('post') && config.headers) {
        //     const token = getToken();
        //     if (token) config.headers.Authorization = `Bearer ${token}`;
        // }
        return config
    },
    (error) => {
        //请求失败的返回，后面的then或者catch回调随便写不写
        // return Promise.reject(error)
    }
)

//响应拦截器
axios.interceptors.response.use(
    (res) => {
        return res
    },
    (err) => {
        // if (err.response.status === 403) {
        // 统一处理未授权请求，跳转到登录界面
        // document.location = '/login';
        // }
        // return Promise.reject(err)
    }
)

type Data = { [key: string]: any }

type RequestParams = {
    method: commonEnum.ReqMethodName,
    url: string,
    data?: Data
}

export function request({ method, url, data }: RequestParams): Promise<AxiosResponse<any, any>> {
    const isValidMethod = Object.values({ ...commonEnum.ReqMethodName })?.includes(method)
    if (!isValidMethod) return Promise.reject('method is error')

    const baseUrl = '';
    return axios({
        method,
        url: `${baseUrl}${url}`,
        data: data ?? null
    })
}