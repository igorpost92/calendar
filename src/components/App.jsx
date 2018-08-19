import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'axios';

import '../styles/App.css';
import CalendarContainer from '../containers/CalendarContainer';

export default class App extends React.Component {
  static propTypes = {
    setData: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const res = await get('http://192.168.0.2/workout/hs/workouts/getData');
    if (res.status !== 200) {
      throw new Error('error during loading');
    }

    const data = res.data.map((item) => {
      const date = new Date(item.date);
      return { date, type: item.type, number: item.number };
    });

    this.props.setData({ data });
  };

  render() {
    return (
      <div className="container">
        <CalendarContainer />
      </div>
    );
  }
}
