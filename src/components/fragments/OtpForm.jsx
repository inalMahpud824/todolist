import { Alert, Button, TextField } from "@mui/material";
import { useState } from "react";
import { sendOtp } from "../../modules/fetch";
import { useNavigate } from "react-router-dom";
import { useUid } from "../../context/UidContext";

const OtpForm = () => {
  const { uid } = useUid();
  const navigate = useNavigate();
  const [codeOtp, setCodeOtp] = useState('')

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setCodeOtp(value)
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendOtp(uid, codeOtp);
      navigate('/')
    } catch (err) {
      setError(true);
      setErrorMessage(`${err.message}`);
    }
  };

  return (
    <>
      {uid && (
        <form onSubmit={handleSubmit} className="">
          <TextField
            id="otp"
            label="OTP Code"
            type="number"
            variant="outlined"
            value={codeOtp}
            onChange={handleChange}
            className="w-full"
            placeholder="Enter your OTP Code"
          />

          {error && (
            <Alert severity="error" className="my-2">
              {errorMessage}
            </Alert>
          )}

          <div className="flex justify-center mt-4">
            <Button variant="contained" size="large" type="submit">
              Confirm
            </Button>
          </div>
        </form>
      )}
    </>
  );
};
export default OtpForm;
