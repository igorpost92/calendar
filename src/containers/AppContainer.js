import { connect } from 'react-redux';

import App from '../components/App';
import { setData } from '../actions';

const mapStateToProps = (state) => {
  const { activities } = state;
  return { activities };
};

export default connect(mapStateToProps, { setData })(App);
