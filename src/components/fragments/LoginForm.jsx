import { Alert, Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../modules/fetch";

const LoginForm = () => {
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // useEffect(() => {
  //   if (email) {
  //     navigate("/otp");
  //   }
  // }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError(true);
      setErrorMessage("Password tidak sama");
      return;
    }

    try {
      await register(formData.email, formData.password);
      // await setEmail(formData.email);
    } catch (err) {
      setError(true);
      setErrorMessage(`${err.message}`);
      console.log(error);
    }
  };

  return (
    <form className="">
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
          Register
        </Button>
      </div>
    </form>
  );
};
export default LoginForm;
