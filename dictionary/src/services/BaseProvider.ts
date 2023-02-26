import { header } from "./config";
// import dotenv from 'dotenv'
// dotenv.config()

type Resp204<T> = T & any;
type NotValidJson<T> = T & any;

async function handleResponse<T = any>(response: Response): Promise<T> {
  try {
    if (response.status === 204) {
      const resp: Resp204<T> = {};
      return resp;
    }
    let data;
    try {
      data = await response.json();
    } catch (e) {
      const resp: NotValidJson<T> = {
        message: "Unable to convert response to a JSON",
      };
      return resp;
    }

    if (!response.ok) {
      if ([401, 403].includes(response.status)) {
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function get<T = any>(
  url: string,
  params: any | undefined = undefined
): Promise<T> {
  try {
    const requestOptions = {
      ...header(),
      method: "GET",
      ...params,
    };
    // TODO create .env
    const response = await fetch(`http://localhost:5000${url}`, requestOptions);

    return handleResponse<T>(response);
  } catch (e) {
    return Promise.reject(e);
  }
}

const fetchWrapper = {
  get,
};
export { fetchWrapper };
