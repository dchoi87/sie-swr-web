import styles from "./Button.module.scss";

export interface ButtonProps {
  label?: string;
}

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {label}
    </button>
  );
};

export default Button;
