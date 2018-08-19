import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { get } from 'axios';

import resData from '../data';

import '../styles/App.css';
import Calendar from './Calendar';
import { addMonths } from '../utils/dateUtils';

class App extends React.Component {
  static propTypes = {
    startDate: PropTypes.instanceOf(Date).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { startDate: props.startDate, data: [] };
  }

  componentDidMount() {
    this.fetchData();
  }

  prevYear = () => this.setNewPeriod(-1);

  nextYear = () => this.setNewPeriod(+1);

  setNewPeriod = (direction = 1) => {
    // const newDate = addMonths(this.state.startDate, direction * 12);
    this.setState((prev) => {
      const newDate = addMonths(prev.startDate, direction * 12);
      return { startDate: newDate };
    }, this.fetchData);
  };

  fetchData = async () => {
    const { startDate } = this.state;
    const endDate = addMonths(startDate, 11);

    const params = {
      fromMonth: startDate.getMonth() + 1,
      fromYear: startDate.getFullYear(),
      toMonth: endDate.getMonth() + 1,
      toYear: endDate.getFullYear(),
    };

    let res;
    try {
      res = await get('http://192.168.0.2/workout/hs/workouts/getData', { params });
      if (res.status !== 200) {
        throw new Error('error during loading');
      }
    } catch (error) {
      // TODO:
      res = {
        data: JSON.parse(resData),
      };
    }

    const data = res.data.map((item) => {
      const date = new Date(item.date);
      return { date, type: item.type, number: item.number };
    });

    this.setState({ data });
  };

  render() {
    const { startDate, data } = this.state;
    const { prevYear, nextYear } = this;
    return (
      <div className="container">
        <Calendar {...{
          startDate, data, prevYear, nextYear,
        }}
        />
      </div>
    );
  }
}

export default () => {
  ReactDOM.render(
    <App startDate={new Date(2018, 0)} />,
    document.getElementById('root'),
  );
};
