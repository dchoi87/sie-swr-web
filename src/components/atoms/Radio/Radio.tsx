import clsx from "clsx";

import { Icon, Text } from "@/components/atoms";

import styles from "./Radio.module.scss";

export interface RadioProps {
  addClassName?: string;
  label: string;
  subtext?: string;
}

const Radio = ({ addClassName, label, subtext }: RadioProps) => {
  return (
    <button className={clsx(styles.container, addClassName)}>
      <Icon iconName="Circle" size={24} />
      <div className={styles.label}>
        <Text type="span" content={label} addClassName={styles.text} />
        {subtext && (
          <Text type="span" content={subtext} addClassName={styles.subtext} />
        )}
      </div>
    </button>
  );
};

export default Radio;
