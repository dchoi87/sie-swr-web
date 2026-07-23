import clsx from "clsx";

import { Text } from "@/components/atoms";

import styles from "./Section.module.scss";

export interface SectionProps {
  addClassName?: string;
  header?: string;
  subheader?: string;
  children?: React.ReactNode;
}

const Section = ({
  addClassName,
  header,
  subheader,
  children,
}: SectionProps) => {
  return (
    <section className={clsx(styles.container, addClassName)}>
      {header && <Text type="h3" content={header} />}
      {subheader && <Text type="p" content={subheader} />}
      <div className={styles.children}>{children}</div>
    </section>
  );
};

export default Section;
