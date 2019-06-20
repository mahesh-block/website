import React from "react";
import NumberFormat from "react-number-format";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../resources/contactus.css";
import Location from "../../location";
class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <div>
        <div className="footertext">
          <h1>We Would Love To Hear From You!</h1>
          <p>
            <b>
              With our experience and the depth of resources at our disposal, we
              are uniquely positioned and qualified to provide a level of
              expertise and support that you simply will not find elsewhere.
              Complete the form below for a no obligation meeting with the
              YORKTON Contracting team!
            </b>
          </p>
          <p>
            <b>
              Please note that only your name, email, and postal code are
              necessary for completing this form!
            </b>
          </p>
        </div>
        <div className="ui form form-style-2 form-style-9 ">
          <div className="two fields ">
            <div className="field required">
              <label>First Name</label>
              <input placeholder="First Name" type="text" />
            </div>
            <div className="field required">
              <label>Last Name</label>
              <input placeholder="Last Name" type="text" />
            </div>
          </div>
          <div className="two fields">
            <div className="field required">
              <label>Enter Email</label>
              <input placeholder="Email" type="email" />
            </div>
            <div className="field required">
              <label>Confirm Email</label>
              <input placeholder="Confirm Email" type="email" />
            </div>
          </div>
          <div className="field required">
            <label>Postal Code</label>
            <input placeholder="Postal Code" type="text" />
          </div>
          <div className="field">
            <label>Phone </label>
            <NumberFormat
              format="(###) ###-####"
              mask=""
              name="phoneNumberInput"
              placeholder="Phone Number Here"
            />
          </div>
          <div className="field">
            <label>Project Scope</label>
            <input placeholder="Project Scope" type="text" />
          </div>
          <div className="field">
            <label>Description of Project</label>
            <textarea />
          </div>
          <div className="field">
            <label>Estimate </label>
            <div className="ui right labeled input">
              <label htmlFor="amount" className="ui label">
                $
              </label>
              <input type="text" placeholder="Amount" id="amount" />
              <div className="ui basic label">.00</div>
            </div>
          </div>
          <div className="field">
            <label> Estimated Project Start Date</label>
            <div>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label>Drawings, Permits, and other documentation</label>
            <input type="file" />
          </div>
          <div>
            <button type="submit" className="ui primary button">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactUs;
