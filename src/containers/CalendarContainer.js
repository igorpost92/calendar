import { connect } from 'react-redux';

import Calendar from '../components/Calendar';
import { prevYear, nextYear } from '../actions';

const mapStateToProps = (state) => {
  const { year } = state;
  return { year };
};

export default connect(mapStateToProps, { prevYear, nextYear })(Calendar);
