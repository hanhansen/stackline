import React, { useMemo } from "react";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { IRootState } from "./redux/store";

import "./RetailSales.scss";

const RetailSales = () => {
  const { items } = useSelector((state: IRootState) => state.items);
  const formattedData = useMemo(() => {
    const [item] = items;
    return (item?.sales ?? []).map((item: any) => {
      const month = new Date(item.weekEnding).toLocaleString("default", {
        month: "short",
      });
      return {
        ...item,
        month,
      };
    });
  }, [items]);

  return (
    <div className="retailSales">
      <div className="retailSales__title">Retail Sales</div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={formattedData}>
          <XAxis
            dataKey="month"
            ticks={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
          />
          <Line
            type="monotone"
            dataKey="retailSales"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RetailSales;
