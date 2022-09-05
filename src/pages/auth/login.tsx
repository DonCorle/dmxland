/* eslint-disable */
import LayoutAuth from "../../Components/Auth/LayoutAuth";
import { useFetchUser } from "../../lib/authContext";
import { default as LoginComponent } from "../../Components/Auth/Login";

const Login = () => {
  const { user } = useFetchUser();

  return (
    <LayoutAuth user={user}>
      <LoginComponent />
    </LayoutAuth>
  );
};

export default Login;
