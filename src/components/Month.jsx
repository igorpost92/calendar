import React from 'react';
import PropTypes from 'prop-types';

import Day from './Day';

export default class Month extends React.Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.PropTypes.instanceOf(Date).isRequired,
    })),
  };

  static defaultProps = { data: [] };

  renderHeader = monthName => <div className="month-title">{monthName}</div>;

  renderWeekdays = () => (
    <ul className="weekdays">
      <li>П</li>
      <li>В</li>
      <li>С</li>
      <li>Ч</li>
      <li>П</li>
      <li>С</li>
      <li>В</li>
    </ul>
  );

  renderDays = (month, year) => {
    const monthEnd = new Date(year, month + 1, 0);

    const daysNumber = monthEnd.getDate();
    const firstDay = new Date(year, month, 1).getDay() || 7;

    const blanksStart = firstDay === 1 ? 0 : firstDay - 1;
    const blanksEnd = 42 - daysNumber - blanksStart;

    const days = [];
    for (let i = 0; i < blanksStart; i += 1) {
      days.push('');
    }

    for (let i = 1; i <= daysNumber; i += 1) {
      days.push(i);
    }

    for (let i = 0; i < blanksEnd; i += 1) {
      days.push('');
    }

    return (
      <ul className="days">
        {days.map((day) => {
          const isEmpty = day === '';
          const date = isEmpty ? null : new Date(year, month, day);
          const data = isEmpty ? [] : this.props.data
            .filter(item => item.date.getTime() === date.getTime());
          return <Day date={date} data={data} />;
        })}
      </ul>
    );
  };

  // TODO: render weekdays?

  render() {
    const { date } = this.props;

    const month = date.getMonth();
    const year = date.getFullYear();

    const formatter = new Intl.DateTimeFormat('ru', { month: 'long' });
    const monthName = formatter.format(date);

    return (
      <div className="month-cell">
        {this.renderHeader(monthName)}
        {this.renderWeekdays()}
        {this.renderDays(month, year)}
      </div>
    );
  }
}
