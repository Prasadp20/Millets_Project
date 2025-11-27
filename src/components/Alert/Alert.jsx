import { useContext } from "react";
import { AlertContext } from "../../context/AlertContext";

export default function Alert() {
  const { alert } = useContext(AlertContext);

  if (!alert) return null;

  return (
    <div
      className={`alert alert-${alert.type} text-center m-0`}
      role="alert"
      style={{ position: "fixed", top: "0px", left: 0, right: 0, zIndex: 9999 }}
    >
      {alert.msg}
    </div>
  );
}
