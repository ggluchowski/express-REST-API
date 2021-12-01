import React from 'react';
import { Button, Progress, Alert } from 'reactstrap';
import io from 'socket.io-client';

import './SeatChooser.scss';

class SeatChooser extends React.Component {

  componentDidMount() {
    this.socket = io(process.env.PORT || 'http://localhost:8000');
    const { loadSeats } = this.props;
    loadSeats();
  }

  componentDidUpdate() {
    this.socket = io(process.env.PORT || 'http://localhost:8000');
    const { loadSeatsData } = this.props;
    this.socket.on('seatsUpdated', async (seats) => await loadSeatsData(seats));
  }

  isTaken = (seatId) => {
    const { seats, chosenDay } = this.props;

    return (seats.some(item => (item.seat === seatId && item.day === chosenDay)));
  }

  prepareSeat = (seatId) => {
    const { chosenSeat, updateSeat } = this.props;
    const { isTaken } = this;

    if (seatId === chosenSeat)
      return <Button key={seatId} className="seats__seat" color="primary">{seatId}</Button>;
    else if (isTaken(seatId)) {
      return <Button key={seatId} className="seats__seat" disabled color="secondary">{seatId}</Button>;
    } else
      return <Button key={seatId} color="primary" className="seats__seat" outline onClick={(e) => updateSeat(e, seatId)}>{seatId}</Button>;
  }

  countChosenSeat = (tab) => {
    let count = 0;
    tab.map(element => {
      if (element.props.disabled) { count++ };
      return count;
    })
    return count;
  }

  render() {

    const { prepareSeat } = this;
    const { requests } = this.props;
    let tab = [];
    let countSeat = 0;
    let allSeats = 0;

    return (
      <div>
        <h3>Pick a seat</h3>
        <small id="pickHelp" className="form-text text-muted ml-2"><Button color="secondary" /> – seat is already taken</small>
        <small id="pickHelpTwo" className="form-text text-muted ml-2 mb-4"><Button outline color="primary" /> – it's empty</small>
        {(requests['LOAD_SEATS'] && requests['LOAD_SEATS'].success) &&
          <div className="seats">
            {tab = [...Array(50)].map((x, i) => prepareSeat(i + 1))}
          </div>}

        <div className="freeSeats">
          <div className="displayNone">
            {countSeat = this.countChosenSeat(tab)}
            {allSeats = tab.length}
          </div>
          Free seats: {(allSeats - countSeat) + '/' + allSeats}
        </div>

        {(requests['LOAD_SEATS'] && requests['LOAD_SEATS'].pending) && <Progress animated color="primary" value={50} />}
        {(requests['LOAD_SEATS'] && requests['LOAD_SEATS'].error) && <Alert color="warning">Couldn't load seats...</Alert>}

      </div>

    )
  };
}

export default SeatChooser;