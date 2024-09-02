import { FunctionComponent } from "react";
import "./GroupComponent1.css";

export type GroupComponent1Type = {
  className?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`email-parent ${className}`}>
      <div className="email">Usuario</div>
      <div className="email-input-box">
        <div className="message-1-wrapper">
          <img className="message-1-icon" alt="" src="/message-1.svg" />
        </div>
        <input className="enter-your-email" placeholder="Usuario" type="text" />
      </div>
      <div className="component-child" />
    </div>
  );
};

export default GroupComponent1;
