import RegisterForm from "../components/fragments/RegisterForm";
import AutLayout from "../components/layouts/AutLayout";

const Register = () => {
  return (
    <>
    <AutLayout title='Register' description='Please Enter your data'>
      <RegisterForm />
    </AutLayout>
    </>
  );
};

export default Register;
