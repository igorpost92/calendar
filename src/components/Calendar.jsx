import React from 'react';
import PropTypes from 'prop-types';

import Month from './Month';

export default class Calendar extends React.Component {
  static propTypes = {
    year: PropTypes.instanceOf(Date).isRequired,
    prevYear: PropTypes.func.isRequired,
    nextYear: PropTypes.func.isRequired,
  };

  renderMonths = () => {
    const yearNumber = this.props.year.getFullYear();

    const items = [...Array(12)].map((el, ind) => {
      const month = new Date(yearNumber, ind);
      return <Month key={`month${ind}`} month={month} />;
    });

    return (
      <div className="months">
        {items}
      </div>
    );
  };

  render() {
    const { year } = this.props;

    return (
      <div className="calendar">
        <div>
          <button className="year-nav" type="button" onClick={this.props.prevYear}>&#x2329;</button>
          <span className="year-title">{year.getFullYear()}</span>
          <button className="year-nav" type="button" onClick={this.props.nextYear}>&#x232A;</button>
        </div>

        {this.renderMonths()}
      </div>
    );
  }
}
