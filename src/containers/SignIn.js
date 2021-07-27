import React, {useState} from 'react';
import InputElement from '../components/InputElement';
import Button from '../components/Button';
import { NavLink } from 'react-router-dom';
import * as routes from '../utils/routes';
import axios from '../utils/axios';
import * as actions from '../utils/actions';
import {connect} from 'react-redux';

const SignIn = ({history,changeUser,changeUrls,changeJwt}) => {
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const signin_handler = () =>{

        const user_data = {
            "username":username,
            "password":password
        };

        axios.post('/api/login',user_data)
            .then(res => {
                console.log(res.data);
                if(res.data){
                    changeUser(res.data.user);
                    changeUrls(res.data.user.urls_list);
                    changeJwt(res.data.jwt);
                    history.push(routes.homepage);
                };
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="register__main">
            <span className="welcome__text">Welcome!</span>
            <h4>Login to continue</h4>
            <div className="register__main__box">
                <InputElement heading="Username" placeholder="Enter your username" value={username} setValue={setUsername} />
                <InputElement password heading="Password" placeholder="Enter your password" value={password} setValue={setPassword} />
                <div className="register__main__box__btn">
                    <Button text="Login" callback={signin_handler} />
                    <NavLink to={routes.signup}>
                        <Button text="New User?"/>
                    </NavLink>
                </div>
                <NavLink to={routes.forgot}>
                    <Button text="Forgot Password" />
                </NavLink>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    changeUser:(user)=>dispatch({type:actions.change_user,payload:user}),
    changeUrls:(urls)=>dispatch({type:actions.change_urls,payload:urls}),
    changeJwt:(jwt)=>dispatch({type:actions.change_jwt,payload:jwt}),
});

export default connect(null,mapDispatchToProps)(SignIn);