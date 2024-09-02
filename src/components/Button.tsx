import { FunctionComponent } from "react";
import "./Button.css";

export type ButtonType = {
  className?: string;
  labelText?: string;
};

const Button: FunctionComponent<ButtonType> = ({
  className = "",
  labelText = "Iniciar sesion",
}) => {
  return (
    <div className={`button ${className}`}>
      <div className="state-layer">
        <div className="label-text">{labelText}</div>
      </div>
    </div>
  );
};

export default Button;
