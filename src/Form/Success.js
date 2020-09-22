import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './Form.css'

export class Success extends Component {
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        return (
            <div>
            <h1 className="Header">Thanks for your SignUp!</h1>
            <div className = "success">
            <img src = "https://media.giphy.com/media/26BGP98lm74FJgfNS/giphy.gif"  alt = "" width="400" height="310"/>
            <Button variant="contained" color="primary" style={styles.button} onClick = {this.back}>
                  Back
            </Button>
            </div>
            </div>

        )
    }
}
const styles = {
    button: {
        marginRight: 0,
        marginTop: 50,
        backgroundColor: "rgb(65, 160, 192)",
        display: "flex",
        justifyContent: "center",
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
export default Success