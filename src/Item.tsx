import React from "react";
import { useSelector } from "react-redux";
import { IRootState } from "./redux/store";

import "./Item.scss";

const ItemDetails = (): JSX.Element | null => {
  const { items } = useSelector((state: IRootState) => state.items);
  const { title, image, subtitle, tags } = items?.[0];
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
