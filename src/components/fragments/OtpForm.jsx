import { Button, TextField } from "@mui/material";

const OtpForm = () => {
  return (
    <>
      <form action="" className="">
        <TextField
          id="email"
          label="email"
          type="number"
          variant="outlined"
          className="w-full"
          placeholder="example@mail.com"
        />
        <div className="flex justify-center mt-4">
          <Button variant="contained" size="large">
            Confirm
          </Button>
        </div>
      </form>
    </>
  );
};
export default OtpForm;
