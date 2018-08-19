import React from 'react';
import PropTypes from 'prop-types';

import DayComponent from '../containers/DayComponent';

export default class Month extends React.Component {
  static propTypes = {
    month: PropTypes.instanceOf(Date).isRequired,
  };

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

  // TODO: refacto

  renderDays = (monthDate) => {
    const month = monthDate.getMonth();
    const year = monthDate.getFullYear();

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
          return <DayComponent date={date} />;
        })}
      </ul>
    );
  };

  render() {
    const { month } = this.props;

    const formatter = new Intl.DateTimeFormat('ru', { month: 'long' });
    const monthName = formatter.format(month);

    return (
      <div className="month-cell">
        {this.renderHeader(monthName)}
        {this.renderWeekdays()}
        {this.renderDays(month)}
      </div>
    );
  }
}
