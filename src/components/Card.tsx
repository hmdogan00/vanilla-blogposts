import { FC } from "react";

export interface CardProps {
  imageLink?: string;
  children?: JSX.Element;
  title?: JSX.Element;
  titleString?: string;
  author?: {
    name: string;
    link: string;
  } | null;
  authorLink?: string;
  publishDate?: string;
  article?: string;
  type?: "article" | "blog" | "post";
  category?: string;
}

const Card: FC<CardProps> = ({ title, children, imageLink, author, publishDate, type, category, titleString }) => {
  const typeBiggerCase = type && type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <div className="p-card--highlighted col-4">
      {category && (
        <>
          <h5>{category}</h5>
          <hr />
        </>
      )}
      {imageLink && <img className="p-card__image" src={imageLink} />}
      <div className="p-card__inner row-10 title-container">
        {title && (
          <h3 className="u-no-margin--bottom" title={titleString}>
            {title}
          </h3>
        )}
        {children}
      </div>
      <div className="row-2">
        {author && (
          <h6 className="p-card__inner u-no-margin--bottom">
            By <a href={author.link}>{author.name}</a> on {publishDate}
          </h6>
        )}
        {type && (
          <div className="u-no-margin--bottom">
            <hr />
            <div className="p-card__inner u-no-padding">{typeBiggerCase}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
