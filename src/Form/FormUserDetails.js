import React, { Component } from 'react'
import { createMuiTheme, StylesProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import './Form.css'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { values, handleChange } = this.props;
        return (
            <div>
            <h1 className="Header">Sign Up Today!</h1>
            <div className = "form">
                <div className="textfields">
                <TextField
                id="standard-basic" label="Username" 
                color="primary"
                onChange={handleChange('userName')}
                defaultValue={values.userName}
                style={styles.textFields}
                />
                <br />
                <TextField
                hintText="Enter your email"
                id="standard-basic" label="Email" 
                color="primary"
                onChange={handleChange('email')}
                defaultValue={values.email}
                style={styles.textFields}
                />
                <br />
                <TextField
                id="standard-basic" label="Mob Number" 
                color="primary"
                onChange={handleChange('phoneNumber')}
                defaultValue={values.phoneNumber}
                style={styles.textFields}
                />
                <br />
                </div>
                <TextField
                id="standard-basic" label="Instagram" 
                color="primary"
                onChange={handleChange('instagram')}
                defaultValue={values.instagram}
                style={styles.textFields}
                />
                <br />
                <TextField
                id="standard-basic" label="linkedIn" 
                color="primary"
                onChange={handleChange('linkedIn')}
                defaultValue={values.instagram}
                style={styles.textFields}
                />
                <br />
                <Button variant="contained" color="primary" style={styles.button} onClick = {this.continue}>
                  Submit
                 </Button>
            </div>
            </div>
        )
    }
}
const styles = {
    button: {
        marginTop: 30,
        backgroundColor: "rgb(65, 160, 192)"
    },
    textFields: {
        marginTop: 30,
        width: 300,
    }
}
export default FormUserDetails
