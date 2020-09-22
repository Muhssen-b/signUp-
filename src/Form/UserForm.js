import React from 'react';
import FormUserDetails from './FormUserDetails.js';
import Confirm from './Confirm.js'
import Success from './Success'
class UserForm extends React.Component {
       state = {
           step: 1,
           userName: "",
           email: "",
           linkedIn: "",
           instagram: "",
        }
  //Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  }
  //proceed to prev step
  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value});
  }
 
  render() {
      const {step} = this.state;
      const {userName, email, phoneNumber, instagram, linkedIn } = this.state;
      const values = {userName, email, phoneNumber, instagram, linkedIn}
      
      switch(step) {
        case 1:
          return (
            <FormUserDetails
              nextStep = {this.nextStep}
              handleChange= {this.handleChange}
              values = {values}
            />
          )
        case 2: 
        return (
          <Confirm
            nextStep = {this.nextStep}
            handleChange= {this.handleChange}
            prevStep = {this.prevStep}
            values = {values}
          />
        )
        case 3: 
          return <Success
            handleChange= {this.handleChange}
            prevStep = {this.prevStep}
            values = {values}
          />

      }  
      return (
      <div>
         <FormUserDetails />
      </div>
      )
    }
}


export default UserForm
