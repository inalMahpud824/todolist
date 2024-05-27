import { Button, TextField } from "@mui/material";

const RegisterForm = () => {
  return (
    <form action="" className="">
      <TextField
        id="email"
        label="email"
        variant="outlined"
        type="email"
        className="w-full"
        placeholder="example@mail.com"
      />
      <TextField
        id="password"
        label="password"
        variant="outlined"
        type="password"
        className="w-full"
        sx={{ marginY: "1rem" }}
        placeholder="Enter your password"
      />
      <TextField
        id="confirmPassword"
        label="confirmPassword"
        variant="outlined"
        type="password"
        className="w-full"
        placeholder="Confirm your password"
      />

      <div className="flex justify-center mt-4">
        <Button variant="contained" size="large">
          Register
        </Button>
      </div>
    </form>
  );
};
export default RegisterForm;
