import clsx from "clsx";
import * as icons from "react-bootstrap-icons";

import { Icon } from "@/components/atoms";

import styles from "./Button.module.scss";

export interface ButtonProps {
  addClassName?: string;
  label?: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
  iconName?: keyof typeof icons;
}

const Button = ({
  addClassName,
  label,
  type = "primary",
  onClick,
  iconName,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[type], addClassName)}
      {...props}
      onClick={onClick}
    >
      {label && <span>{label}</span>}
      {iconName && <Icon iconName={iconName} size="24" />}
    </button>
  );
};

export default Button;
