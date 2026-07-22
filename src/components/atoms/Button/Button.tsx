import clsx from "clsx";

import { Icon } from "@/components/atoms";

import styles from "./Button.module.scss";

export interface ButtonProps {
  addClassName?: string;
  label?: string;
  type?: "primary" | "secondary";
  onClick?: () => void;
}

const Button = ({
  addClassName,
  label,
  type = "primary",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, styles[type], addClassName)}
      {...props}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
