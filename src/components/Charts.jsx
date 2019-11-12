import React from 'react';
import PropTypes from 'prop-types';
import Chart from './Chart';

const Charts = ({ coinData }) => (
  <div className="charts">
    {coinData.map((coin) => (
      <div className="chart__container" key={coin.name}>
        <h2 className="coin__title">{coin.name}</h2>
        <h4 className="coin__symbol">{coin.symbol}</h4>
        <div className="coin__logo">
          <img src={coin.image} height="40" alt={coin.name} />
        </div>
        <Chart sparklineData={coin.sparkline_in_7d.price} />
      </div>
    ))}
  </div>
);

Charts.propTypes = {
  coinData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      symbol: PropTypes.string,
      image: PropTypes.string,
      sparkline_in_7d: PropTypes.shape({
        price: PropTypes.string,
      }),
    }),
  ).isRequired,
};

export default Charts;
