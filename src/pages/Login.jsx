import LoginForm from "../components/fragments/LoginForm";
import AutLayout from "../components/layouts/AutLayout";

const LoginPage = () => {
  return (
    <>
    <AutLayout title='Login' description='Please Enter Account'>
      <LoginForm />
    </AutLayout>
    </>
  );
};

export default LoginPage;
