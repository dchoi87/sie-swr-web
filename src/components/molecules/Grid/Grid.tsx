import clsx from "clsx";

import styles from "./Grid.module.scss";

export interface GridProps {
  addClassName?: string;
  children?: React.ReactNode;
}

const Grid = ({ addClassName, children }: GridProps) => {
  return (
    <div className={clsx(styles.container, addClassName)}>
      {children && children}
    </div>
  );
};

export default Grid;
