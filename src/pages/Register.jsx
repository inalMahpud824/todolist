import RegisterForm from "../components/fragments/RegisterForm";
import AutLayout from "../components/layouts/AutLayout";

const RegisterPage = () => {
  return (
    <>
    <AutLayout title='Register' description='Please Enter your data'>
      <RegisterForm />
    </AutLayout>
    </>
  );
};

export default RegisterPage;
