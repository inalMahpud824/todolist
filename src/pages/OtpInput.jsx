import OtpForm from "../components/fragments/OtpForm";
import AutLayout from "../components/layouts/AutLayout";

const OtpInputPage = () => {
  return (
    <>
      <AutLayout
        title="Enter OTP code"
        description="Cek your email to get data OTP"
        
      >
        <>
        <h2 className="font-light text-xs text-center mb-2 md:text-sm">
          Please do not refresh this page, if you do that you will have to 
          <b> Register again to get the OTP code</b>, by the way the OTP code is valid for one hour
        </h2>
        <OtpForm />
        </>
      </AutLayout>
    </>
  );
};

export default OtpInputPage;
