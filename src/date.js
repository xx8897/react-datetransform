import React, { Component } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import tw from "date-fns/locale/zh-TW";

registerLocale("tw", tw);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      date
    });
  }

  render() {
    return (
      <div className="App">
        <body>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={this.state.date}
            onChange={this.handleChange}
            locale='tw'
          />
        </body>
      </div>
    );
  }
}

export default App