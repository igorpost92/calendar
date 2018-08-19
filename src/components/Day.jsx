import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// TODO:
// not a good architecture

export default class Day extends React.Component {
  // TODO:
  static propTypes = {
    dayNumber: PropTypes.number,
    activities: PropTypes.array,
  };

  renderItems = () => {
    const { activities } = this.props;
    if (!activities.length) {
      return null;
    }

    const items = activities.map(item => <span key={item.number} className="item" data-type={item.type} />);

    return (
      <div className="items">
        {items}
      </div>
    );
  };

  render() {
    const { dayNumber } = this.props;

    const className = cn({
      day: true,
      empty: dayNumber === '',
    });

    return (
      <li className={className}>
        <div>{dayNumber}</div>
        {this.renderItems()}
      </li>
    );
  }
}
