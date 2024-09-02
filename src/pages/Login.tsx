import { FunctionComponent } from "react";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import Boton from "../components/Boton";
import "./Login.css";

const Login: FunctionComponent = () => {
  return (
    <div className="login-4">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <img
          className="imagen-2023-02-22-093739282-re-icon"
          loading="lazy"
          alt=""
          src="/imagen-20230222-093739282removebgpreview-1@2x.png"
        />
        <div className="frame-parent">
          <div className="frame-group">
            <div className="inicio-de-sesion-wrapper">
              <div className="inicio-de-sesion">Inicio de sesion</div>
            </div>
            <GroupComponent1 />
          </div>
          <GroupComponent />
        </div>
        <Boton />
      </div>
    </div>
  );
};

export default Login;
