import React, {Component} from 'react';
import {Alert, Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import avatar from "../../avatar.png";
import {Link} from "react-router-dom";
import AuthenticationService from "../../services/AuthenticationService";
import Header from "../Header";

class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {user: undefined};
    }

    componentDidMount() {
        const user = AuthenticationService.getCurrentUser();
        this.setState({user: user});
    }

    render() {
        let userInfo = "";
        const user = this.state.user;

        // login
        if (user && user.accessToken) {

            let roles = "";


            userInfo = (
                <div style={{marginTop:"20px"}}>
                    <Alert variant="info">
                        <h2>User Info</h2>
                        <ul>
                            <li>Username: {user.username}</li>
                            <li>Access Token: {user.accessToken}</li>
                            <li>Authorities: {roles}</li>
                        </ul>
                    </Alert>
                </div>
            );
        } else { // not login
            userInfo = <div style={{marginTop:"20px"}}>
                <Alert variant="primary">
                    <h2>Profile Component</h2>
                    <Button color="success"><Link to="/signin"><span style={{color:"white"}}>Login</span></Link></Button>
                </Alert>
            </div>
        }

        return (
            <div>
                <Container fluid>
                    {userInfo}
                </Container>
            </div>
        );
    }
}

export default Profile;