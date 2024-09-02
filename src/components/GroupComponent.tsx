import { FunctionComponent } from "react";
import "./GroupComponent.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={`contrasa-parent ${className}`}>
      <div className="contrasa">Contrasña</div>
      <div className="frame-container">
        <div className="lock-wrapper">
          <img className="lock-icon" alt="" src="/lock.svg" />
        </div>
        <input className="indtroduce-la" placeholder="Contrasña" type="text" />
      </div>
      <div className="component-item" />
    </div>
  );
};

export default GroupComponent;
