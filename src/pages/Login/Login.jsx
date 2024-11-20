import useAlert from "rtc-alerts2/useAlert";
import FieldForm from "../../components/FieldForm/FieldForm";
import { API } from "../../utils/API";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { alert } = useAlert();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    const [email, pass] = e.target;

    const { error, response } = await API({
      endpoint: "/auth.php",
      body: { client: email.value, secret: pass.value },
      method: "POST",
    });

    if (error) {
      alert({
        type: "error",
        title: "Error en el login",
        text: error,
      });
    }

    localStorage.setItem("token", response.token);

    navigate("/catalogue");
  };

  return (
    <form onSubmit={submit} className="loginform">
      <FieldForm labelText="Email" type="email" ph="prueba@email.com" />
      <FieldForm labelText="Contraseña" type="password" ph="******" />
      <button>Login</button>
    </form>
  );
};

export default Login;
