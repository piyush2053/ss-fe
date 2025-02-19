import { API } from "../Constants/service_constants";
import { getBaseUrl } from "../Utils/function";

const BASE_URL = getBaseUrl()
export const Signup = async (userData: any) => {
 
  const response = await fetch(`${BASE_URL}/users`, {
    method: API?.POST,
    headers: API?.HEADERS,
    body: JSON.stringify(userData),
  });

  return response.json();
};

export const LoginService = async (username: string, password: string, school_name: string) => {
  const response = await fetch(`${BASE_URL}/users`);
  const users = await response.json();

  return users.find(
    (user: any) =>
      user.username === username && user.password === password && user.school_name === school_name
  );
};

export const fetchHTMLResponse = async (query: string) => {
  try {
    const response = await fetch(`https://p-gen-v.vercel.app/api/hello/?query="${query}"`, {
      method:  API?.GET,
      headers: API?.HEADERS,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.text();
  } catch (error) {
    console.error("Error fetching HTML response:", error);
    return null;
  }
};
export const fetchThoughts = async () => {
  try {
    const response:any = await fetch(`https://p-gen-v.vercel.app/api/hello/?query="Give me Though of the day for School and education, in less than 200 words"`, {
      method:  API?.GET,
      headers: API?.HEADERS,
    });
    const res = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return res?.response;
  } catch (error) {
    console.error("Error fetching HTML response:", error);
    return null;
  }
};
