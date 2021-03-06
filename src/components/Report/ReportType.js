import React from "react";
import ReportItem from "./ReportItem";
import ChartType from "./ChartType";
import { GroupContext } from "../../contexts/Group";
import "./ReportType.css";

function ReportType({ type, listGroup, listAmount }) {
  console.log(type, listGroup, listAmount )
  
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
          console.log(data);
          return data.length > 0 ? <ChartType chartData={data} /> : <div className="nodata">Không có báo cáo</div>;
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
