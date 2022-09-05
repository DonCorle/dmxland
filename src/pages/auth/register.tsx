/* eslint-disable */
import LayoutAuth from "../../Components/Auth/LayoutAuth";
import { useFetchUser } from "../../lib/authContext";
import { default as RegisterComponent } from "../../Components/Auth/Register";

const Register = () => {
  const { user } = useFetchUser();
  return (
    <LayoutAuth user={user}>
      <RegisterComponent />
    </LayoutAuth>
  );
};

export default Register;
