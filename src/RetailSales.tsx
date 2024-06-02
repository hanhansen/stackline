import React, { FC, useMemo } from "react";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import "./RetailSales.scss";

type RetailSalesProps = {
  salesData: { [key: string]: string | number }[];
};
const RetailSales: FC<RetailSalesProps> = ({ salesData }) => {
  const formattedData = useMemo(() => {
    return (salesData ?? []).map((item) => {
      const month = new Date(item.weekEnding).toLocaleString("default", {
        month: "short",
      });
      return {
        ...item,
        month,
      };
    });
  }, [salesData]);

  return (
    <div className="retailSales">
      <ResponsiveContainer width="100%" height="100%">
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
