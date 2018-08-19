import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Items = ({ data }) => {
  // TODO:
  return (
    <div className="items">
      {data.map(item => <span key={item.number} className="item" data-type={item.type} />)}
    </div>
  );
};

const Day = ({ date, data }) => {
  const isEmpty = date === null;
  const day = isEmpty ? '' : date.getDate();
  const className = cn({ day: true, empty: isEmpty });
  return (
    <li className={className}>
      <div>{day}</div>
      <Items data={data} />
    </li>
  );
};

export default Day;
