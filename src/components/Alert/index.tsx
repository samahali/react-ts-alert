import { X } from "lucide-react";
import { ReactNode } from "react";
import { AlertItem } from "../../types";
import "./index.scss";

interface IProps extends AlertItem{
  children?: ReactNode;
}
interface IAlertProps extends IProps {
    key?: number | string; // For React's key prop (optional)
  }
const Alert = ({ type, icon, title, description, children }: IAlertProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>

        <X className="close" size={20} />
      </div>

      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;