import { Alert, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { login } from "../../modules/fetch";

const LoginForm = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [statusLogin, setStatusLogin] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      window.location.href = "/home";
    }
  }, [statusLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(formData.email, formData.password);
      console.log(result);
      window.localStorage.setItem("token", result.token);
      setStatusLogin(true);
    } catch (err) {
      setError(true);
      setErrorMessage(`${err.message}`);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <TextField
        id="email"
        label="email"
        variant="outlined"
        type="email"
        value={formData.email}
        className="w-full"
        onChange={handleChange}
        placeholder="example@mail.com"
      />
      <TextField
        id="password"
        label="password"
        variant="outlined"
        type="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full"
        sx={{ marginY: "1rem" }}
        placeholder="Enter your password"
      />
      {error && (
        <Alert severity="error" className="my-2">
          {errorMessage}
        </Alert>
      )}
      <div className="flex justify-center mt-4">
        <Button variant="contained" size="large" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};
export default LoginForm;
