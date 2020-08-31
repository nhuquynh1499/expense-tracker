import React from "react";
import ReportItem from "../components/ReportItem";
import ChartType from "../components/ChartType";
import { GroupContext } from "../contexts/Group";
import "./ReportType.css";

function ReportType({ type, listGroup, listAmount }) {
  const backgroundColor = [
    "#989BCF",
    "#66C4BE",
    "#E7716E",
    "#F5C431",
    "#62B58E",
    "#BC95DF",
  ];

  function sumAmount(list) {
    return list?.reduce((sum, item) => sum + item, 0);
  }

  return (
    <div className="reportType">
      {type ? (
        <div className="sum outflow">
          <p>Khoản chi</p>
          <p className="amount">
            {Number(sumAmount(listAmount)).toLocaleString()}
          </p>
        </div>
      ) : (
        <div className="sum inflow">
          <p>Khoản thu</p>
          <p className="amount">
            {Number(sumAmount(listAmount)).toLocaleString()}
          </p>
        </div>
      )}

      {/* Chart data */}
      <GroupContext.Consumer>
        {({ getInforGroup }) => {
          let data;
          if (listGroup && listAmount) {
            data = listGroup.map((item, index) => {
              return {
                label: getInforGroup(item) ? getInforGroup(item).name : null,
                value: listAmount[index],
              };
            });
          }
          return data && <ChartType chartData={data} />;
        }}
      </GroupContext.Consumer>
      {listGroup?.map((item, index) => {
        return (
          <ReportItem
            key={index}
            groupId={item}
            amount={listAmount[index]}
            bgColor={backgroundColor[index]}
          />
        );
      })}
    </div>
  );
}

export default ReportType;
