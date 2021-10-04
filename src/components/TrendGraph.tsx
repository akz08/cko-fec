import React from 'react';
import { Line } from 'react-chartjs-2';
import { useProductTrends } from '../providers/ProductTrendsProvider';

const dataTemplate = {
  labels: [],
  datasets: [
    {
      label: '# of Orders',
      data: [],
      fill: false,
      backgroundColor: 'rgb(107, 225, 230)',
      borderColor: 'rgb(163, 242, 245)',
      borderWidth: 3,
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const options = {
  scales: {
    x: {
      grid: { borderColor: 'rgb(255, 255, 200)' },
      ticks: { color: 'rgb(255, 255, 200)' },
    },
    y: {
      grid: { borderColor: 'rgb(255, 255, 200)' },
      ticks: { color: 'rgb(255, 255, 200)' },
    },
  },
  plugins: {
    legend: {
      labels: { color: 'rgb(255, 255, 200)' },
    },
  },
};

export default function TrendGraph(): JSX.Element {
  const { trends } = useProductTrends();

  // transform trends into chart data - we could refactor into a hook in the future
  const labels = trends.map((t) => t.date);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const datasetVal: any = trends.map((d) => d.value);

  const data = { ...dataTemplate, labels: labels };
  data.datasets[0].data = datasetVal;

  return (
    <div
      className="trend-graph-container"
      style={{
        flexGrow: 1,
        flexBasis: '700px',
      }}
    >
      <h2>Product Trends</h2>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
