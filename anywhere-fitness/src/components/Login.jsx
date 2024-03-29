import React from 'react';

const Login = () => {
    const { login, values, change } = props;


    return ( 
    <div className="loginContainer">
        <form action="login" onSubmit={}>
            <h2>Login</h2>
            <label htmlFor="username"> Username:
                <input type="type"
                    name="username"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={onChange}
                />    
            </label>
            <label htmlFor="password"> Password:
                <input type="type"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={onChange}
                />    
            </label>
            <button onClick={handleSubmit}>Login</button>
        </form>
        <p>
            <img src="./scr/images/fitness.jpg" alt="Time for Fitness"
            />
        </p>
    </div>
    
    );
}
 
export default Login;