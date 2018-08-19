import { connect } from 'react-redux';

import Day from '../components/Day';

// TODO:
// add reselect

const mapStateToProps = (state, ownProps) => {
  const { activities } = state;
  const { date } = ownProps;

  const isEmpty = date === null;
  const dayNumber = isEmpty ? '' : date.getDate();
  const data = isEmpty ? [] : activities.filter(item => item.date.getTime() === date.getTime());
  return { activities: data, dayNumber };
};

export default connect(mapStateToProps)(Day);
