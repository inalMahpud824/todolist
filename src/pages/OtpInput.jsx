import OtpForm from "../components/fragments/OtpForm"
import AutLayout from "../components/layouts/AutLayout"

const OtpInputPage = () => {
  return(
    <>
      <AutLayout title='Enter OTP code' description='Cek your email to get data OTP'>
        <OtpForm />
      </AutLayout>
    </>
  )
}

export default OtpInputPage