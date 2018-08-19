import React from 'react';
import PropTypes from 'prop-types';

import Month from './Month';
import { monthStart, monthEnd } from '../utils/dateUtils';

export default class Calendar extends React.Component {
  static propTypes = {
    startDate: PropTypes.instanceOf(Date).isRequired,
    data: PropTypes.array,
  };

  static defaultProps = { data: [] };

  renderRow = (startMonth, year) => {
    const inRow = 4;

    return (
      <div className="month-row">
        {[...Array(inRow)].map((_, i) => {
          const month = startMonth + i;
          const data = this.props.data
            .filter(({ date }) => date >= monthStart(date) && date <= monthEnd(date));

          return <Month key={month} date={new Date(year, month)} data={data} />;
        })}
      </div>
    );
  };

  render() {
    const { startDate } = this.props;
    const month = startDate.getMonth();
    const year = startDate.getFullYear();

    return (
      <div className="calendar">
        <div>
          <button className="year-nav" type="button" onClick={this.props.prevYear}>&#x2329;</button>
          <span className="year-title">{year}</span>
          <button className="year-nav" type="button" onClick={this.props.nextYear}>&#x232A;</button>
        </div>
        {this.renderRow(month, year)}
        {this.renderRow(month + 4, year)}
        {this.renderRow(month + 8, year)}
      </div>
    );
  }
}
