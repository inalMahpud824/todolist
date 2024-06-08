import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const HeaderBar = () => {
  const [token, setToken] = useState(null)
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    setToken(token)
  }, [])

  const handleLogout= () => {
    window.localStorage.removeItem('token')
    window.location.href = '/'
  }
  return (
    <>
    <header className="flex justify-between bg-blue-400 sticky w-full mb-2 items-center">
      <h1 className="text-white text-2xl mx-3 my-4 font-semibold">To Do List App</h1>
      <div className={`${token ? 'block' : 'hidden'}`}>
      <Button variant="success" sx={{ backgroundColor: 'blue', color:'white' }} onClick={() => handleLogout()}>Logout</Button>
      </div>
    </header>
    </>
  );
};

export default HeaderBar;
