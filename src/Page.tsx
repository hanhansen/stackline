import React from "react";
import Header from "./Header";
import Item from "./Item";
import { data } from "./store";
import "./Page.scss";
import RetailSales from "./RetailSales";
import SalesTable from "./SalesTable";

const Page = () => {
  // replace with provider
  const [item] = data;
  return (
    <div>
      <Header />
      <div className="page__content">
        <Item data={item} />
        <div className="page__sales">
          <>
            <div className="retailSales__title">Retail Sales</div>
            <RetailSales salesData={item.sales} />
          </>
          <SalesTable data={item.sales} />
        </div>
      </div>
    </div>
  );
};

export default Page;
