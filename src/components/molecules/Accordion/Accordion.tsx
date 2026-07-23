import * as RadixAccordion from "@radix-ui/react-accordion";
import clsx from "clsx";

import { Icon, Text } from "@/components/atoms";

import styles from "./Accordion.module.scss";

export interface AccordionItem {
  value: string;
  header: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  addClassName?: string;
  items: AccordionItem[];
}

const Accordion = ({ addClassName, items }: AccordionProps) => {
  return (
    <RadixAccordion.Root
      type="single"
      collapsible
      className={clsx(styles.container, addClassName)}
    >
      {items.map(({ value, header, content }) => (
        <RadixAccordion.Item key={value} value={value} className={styles.item}>
          <RadixAccordion.Header className={styles.header}>
            <RadixAccordion.Trigger className={styles.trigger}>
              <Text type="span" content={header} />
              <Icon
                iconName="ChevronDown"
                className={styles.chevron}
                size={16}
              />
            </RadixAccordion.Trigger>
          </RadixAccordion.Header>
          <RadixAccordion.Content className={styles.content}>
            <div className={styles.contentInner}>{content}</div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
};

export default Accordion;
