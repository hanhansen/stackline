import React, { FC } from "react";
import "./Item.scss";

type ItemDetailsProps = {
  data: { [key: string]: any } | null;
};

const ItemDetails: FC<ItemDetailsProps> = ({ data }): JSX.Element | null => {
  if (!data) {
    return null;
  }
  const { title, image, subtitle, tags } = data;
  return (
    <div className="item">
      <div className="item__content">
        <img className="item__image" src={image} />
        <div className="item__details">
          <h3 className="item__title">{title}</h3>
          <span className="item__subtitle">{subtitle}</span>
        </div>
      </div>
      <div className="item__tag-container">
        {tags.map((tag: string, index: number) => (
          <div className="item__tag" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemDetails;
