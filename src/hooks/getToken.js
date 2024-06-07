import { jwtDecode } from "jwt-decode";

const getToken = () => {
  const token = window.localStorage.getItem("token");
  const decodeToken = jwtDecode(token)
  return decodeToken
}
export default getToken