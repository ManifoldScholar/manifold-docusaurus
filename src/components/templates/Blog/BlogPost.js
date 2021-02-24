import React from "react";
import PropTypes from "prop-types";
import Link from "@docusaurus/Link";
import styled from "styled-components";
import { fluidScale } from "../../../styles/mixins";
import { Heading, Text } from "../../typography";
import IconFactory from "../../factories/IconFactory";
import { formatDateOnly } from "../../../helpers";

const BlogPostItem = ({
  className,
  imageUrl,
  imageAlt,
  title,
  date,
  permalink,
  children
}) => {
  return (
    <article className={className}>
      <header>
        <figure className={`${className}__figure`}>
          {imageUrl && (
            <img
              className={`${className}__img`}
              src={imageUrl}
              loading="lazy"
              alt={imageAlt || ""}
            />
          )}
        </figure>
        <Heading as="h2" size="h3">
          {title}
        </Heading>
        <div className={`${className}__time`}>
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
      <section className={`${className}__section`}>{children}</section>
      <footer>
        {permalink && (
          <Link to={permalink} className={`${className}__link`}>
            <IconFactory
              icon="arrow"
              size={15}
              className={`${className}__arrow`}
            />
            <span>Keep Reading</span>
          </Link>
        )}
      </footer>
    </article>
  );
};

BlogPostItem.displayName = "Templates.BlogPostItem";

BlogPostItem.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.node
};

const StyledBlogPostItem = styled(BlogPostItem)`
  border-bottom: 2px solid var(--neutral40);
  max-width: var(--l-container-sm);
  margin: 0 auto var(--padding-sm);

  & + & {
    padding-top: var(--blog-item-margin);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &__figure {
    margin: 0 0 var(--padding-sm);
    padding: 0;
  }

  &__img {
    width: auto;
    height: auto;
    max-height: 460px;
    max-width: 100%;
  }

  &__section {
    padding: ${fluidScale("24px", "20px")} 0 var(--padding-sm);
  }

  &__link {
    display: inline-block;
    margin-bottom: 18px;
    font-size: var(--font-size-sm);
  }

  &__arrow {
    transform: rotate(90deg);
    margin-right: ${fluidScale("16px", "10px")};
    margin-bottom: -2px;
  }
`;

export default StyledBlogPostItem;
