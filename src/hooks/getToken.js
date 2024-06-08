import { jwtDecode } from "jwt-decode";

const getToken = () => {
  const token = window.localStorage.getItem("token");
  if(!token){
    return false
  }
  const decodeToken = jwtDecode(token)
  return decodeToken
}
export default getToken