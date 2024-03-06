import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';


interface ReactEChartsProps {
  option: any;
}

export const ReactECharts = ({ option }: ReactEChartsProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chart: echarts.ECharts;

    if (chartRef.current) {
      chart = echarts.init(chartRef.current);
      chart.setOption(option);
    }

    return () => {
      chart.dispose();
    };
  }, [option]);

  return <div ref={chartRef} style={{ width: '1039px', height: '500px' }} />;
};
