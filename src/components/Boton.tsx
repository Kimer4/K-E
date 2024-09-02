import { FunctionComponent } from "react";
import Button from "./Button";
import "./Boton.css";

export type BotonType = {
  className?: string;
};

const Boton: FunctionComponent<BotonType> = ({ className = "" }) => {
  return (
    <div className={`boton ${className}`}>
      <Button labelText="Iniciar sesion" />
    </div>
  );
};

export default Boton;
