import './BarChart.css';

import React from 'react';

export type BarChartProps = {
  data: number[];
};

export const BarChart = (props: BarChartProps) => (
  <div className="BarChart">
    BarChart
    <div>{JSON.stringify(props.data)}</div>
  </div>
);
