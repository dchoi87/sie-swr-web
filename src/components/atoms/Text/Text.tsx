import { clsx } from "clsx";

import styles from "./Text.module.scss";

export interface TextProps {
  addClassName?: string;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  content: string;
}

const Text = ({ addClassName, type, content }: TextProps) => {
  const Tag = type;
  return <Tag className={clsx(styles.text, addClassName)}>{content}</Tag>;
};

export default Text;
