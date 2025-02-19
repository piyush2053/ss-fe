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
  console.log(BASE_URL,'#############')
  const response = await fetch(`${BASE_URL}/users`);
  const users = await response.json();

  return users.find(
    (user: any) =>
      user.username === username && user.password === password && user.school_name === school_name
  );
};
