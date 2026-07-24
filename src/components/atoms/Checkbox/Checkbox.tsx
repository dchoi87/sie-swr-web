import clsx from "clsx";

import { Text } from "@/components/atoms";

import styles from "./Checkbox.module.scss";

export interface CheckboxProps {
  addClassName?: string;
  label: string;
  subtext?: string;
}

const Checkbox = ({ addClassName, label, subtext }: CheckboxProps) => {
  return (
    <button className={clsx(styles.container, addClassName)}>
      <div className={styles.checkbox}></div>
      <div className={styles.label}>
        <Text type="span" content={label} addClassName={styles.text} />
        {subtext && (
          <Text type="span" content={subtext} addClassName={styles.subtext} />
        )}
      </div>
    </button>
  );
};

export default Checkbox;
