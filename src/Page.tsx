import React from "react";
import Header from "./Header";
import Item from "./Item";
import "./Page.scss";
import RetailSales from "./RetailSales";
import SalesTable from "./SalesTable";
const Page = () => {
  return (
    <div>
      <Header />
      <div className="page__content">
        <Item />
        <div className="page__sales">
          <RetailSales />
          <SalesTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
