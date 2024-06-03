import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { IRootState } from "./redux/store";
import "./SalesTable.scss";
import { Caret } from "./Caret";

const SalesTable = () => {
  const { items } = useSelector((state: IRootState) => state.items);
  const [item] = items;
  const formatDate = (inputDate: string) => {
    return moment(inputDate).format("MM-DD-YYYY");
  };

  const formatMoney = (inputSale: number) => {
    return `$${(inputSale / 100).toFixed(2)}`;
  };
  return (
    <div className="salesTable">
      <table className="salesTable__table">
        <thead className="salesTable__header">
          <tr className="salesTable__header-row">
            <th className="salesTable__header-column">
              <span className="salesTable__header-column-container">
                Week Ending <Caret />
              </span>
            </th>
            <th className="salesTable__header-column">
              <span className="salesTable__header-column-container">
                Retail Sales <Caret />
              </span>
            </th>
            <th className="salesTable__header-column">
              <span className="salesTable__header-column-container">
                Wholesale Sales <Caret />
              </span>
            </th>
            <th className="salesTable__header-column">
              <span className="salesTable__header-column-container">
                Units Sold <Caret />
              </span>
            </th>
            <th className="salesTable__header-column">
              <span className="salesTable__header-column-container">
                Retailer Margin <Caret />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {(item?.sales ?? []).map((item: any, index: number) => (
            <tr className="salesTable__body-row" key={index}>
              <td className="salesTable__body-column">
                {formatDate(item.weekEnding)}
              </td>
              <td className="salesTable__body-column">
                {formatMoney(item.retailSales)}
              </td>
              <td className="salesTable__body-column">
                {formatMoney(item.wholesaleSales)}
              </td>
              <td className="salesTable__body-column">{item.unitsSold}</td>
              <td className="salesTable__body-column">
                {formatMoney(item.retailerMargin)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
