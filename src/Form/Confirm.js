import React, { Component } from 'react'
import {List, ListItem} from '@material-ui/core';
import Button from '@material-ui/core/Button'
import './Form.css'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const { values: {userName, email, phoneNumber, instagram, linkedIn} } = this.props;
        return (
            <div>
            <h1 className="Header">Confirm Your Details</h1>
            <div className = "form">
                <div className="result">
                   <ul>
                       <h4 style = {styles.result}>User Name</h4>
                       <h6 style = {styles.response}>{userName}</h6>
                       
                       <h4 style = {styles.result}>Email</h4>
                       <h6 style = {styles.response}>{email}</h6>
                       
                       <h4 style = {styles.result}>Mobile Number</h4>
                      <h6 style = {styles.response}>{phoneNumber}</h6>
                       
                      <h4 style = {styles.result}>Instagram</h4>
                       <h6 style = {styles.response}>{instagram}</h6>
                       
                       <h4 style = {styles.result}>LinkedIn</h4>
                       <h6 style = {styles.response}>{linkedIn}</h6>
                    </ul>
                </div>
                </div>
                <div className="button">
                <Button variant="contained" color="primary" style={styles.button} onClick = {this.back}>
                  Back
                 </Button>
                 <Button variant="contained" color="primary" style={styles.button} onClick = {this.continue}>
                  Confirm Details
                 </Button>
                </div>
            </div>
        )
    }
}
const styles = {
    button: {
        marginLeft: 30,
        marginTop: 30,
        backgroundColor: "rgb(65, 160, 192)",
    },
    textFields: {
        marginTop: 30,
        width: 300,
    },
    result: {
        marginTop: 30,
        fontSize: 20,

    },
    response: {
        marginTop: 20,
        fontSize: 15,
        textDecoration: "underline",
        color: "rgb(65, 160, 192)"
    }
}
export default FormUserDetails