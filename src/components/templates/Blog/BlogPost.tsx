import React, { PropsWithChildren } from "react";
import Link from "@docusaurus/Link";
import { Heading, Text } from "../../typography";
import IconFactory from "../../factories/IconFactory";
import { formatDateOnly } from "../../../helpers";
import styles from "./BlogPost.module.css";

type Props = {
  title: string;
  date: string;
  imageUrl?: string,
  imageAlt?: string,
  permalink?: string
} & PropsWithChildren;

const BlogPostItem = ({
  imageUrl,
  imageAlt,
  title,
  date,
  permalink,
  children
}: Props) => {
  return (
    <article className={styles.item}>
      <header>
        <figure className={styles.item__figure}>
          {imageUrl && (
            <img
              className={styles.item__img}
              src={imageUrl}
              loading="lazy"
              alt={imageAlt || ""}
            />
          )}
        </figure>
        <Heading as="h2" size="h3">
          {title}
        </Heading>
        <div className={styles.item__time}>
          <Text
            as="time"
            dateTime={date}
            size="xxs"
            color="ifm-color-content-secondary"
          >
            {formatDateOnly(date)}
          </Text>
        </div>
      </header>
      <section className={styles.item__section}>{children}</section>
      <footer>
        {permalink && (
          <Link to={permalink} className={styles.item__link}>
            <IconFactory
              icon="arrow"
              size={15}
              className={styles.item__arrow}
            />
            <span>Keep Reading</span>
          </Link>
        )}
      </footer>
    </article>
  );
};

BlogPostItem.displayName = "Templates.BlogPostItem";


export default BlogPostItem;
