import { Alert, Button, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../modules/fetch";
import { useUid } from "../../context/UidContext";

const RegisterForm = () => {
  const { uid, setUid } = useUid();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  useEffect(() => {
    if (uid) {
      navigate("/otp");
    }
  }, [uid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError(true);
      setErrorMessage("Password tidak sama");
      return;
    }

    try {
      setLoading(true)
      const result = await register(formData.email, formData.password);
      setUid(result.data.id);
      } catch (err) {
        setError(true);
        setErrorMessage(`${err.message}`);
        console.log(error);
        setLoading(false)
    }
  };

  return (
    <>
    {
      loading ? (
        <div className="w-full flex justify-center">
          <CircularProgress />
        </div>
      ) : (<form onSubmit={handleSubmit} className="">
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
      </form>)
    }
    </>
  );
};
export default RegisterForm;
