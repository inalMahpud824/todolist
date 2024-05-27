import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { register } from "../../modules/fetch";

const RegisterForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return false;
    }

    try {
      const response = await register(formData.email, formData.password);
      console.log("Registration successful", response);
      // Redirect or perform other actions after successful registration
    } catch (err) {
      setError(err.message);
      console.error(error)
      console.log(error)
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
      <TextField
        id="confirmPassword"
        label="confirmPassword"
        variant="outlined"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full"
        placeholder="Confirm your password"
      />

      <div className="flex justify-center mt-4">
        <Button variant="contained" size="large" type="submit">
          Register
        </Button>
      </div>
    </form>
  );
};
export default RegisterForm;
