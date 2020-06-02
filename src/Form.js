import React from 'react';
import useForm from './useForm';
import { Link } from 'react-router-dom';
import Signup from './Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Form = () => {
    const { values, handleChange, handleSubmit } = useForm(login);

    function login() {
        console.log(values)
    }

    return (
      <Router>
        <Switch>
        <Route path="/" exact render={() => {
          return (
            <div className="section is-fullheight">
              <div className="container">
                <div className="column is-4 is-offset-4">
                  <div className="box">
                    <form onSubmit={handleSubmit}>
                      <div className="field">
                        <label className="label">Email Address</label>
                        <div className="control">
                          <input className="input" type="email" name="email" onChange={handleChange} value={values.email} required />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                          <input className="input" type="password" name="password" onChange={handleChange} value={values.password} required />
                        </div>
                      </div>
                      <button type="submit" className="button is-block is-info is-fullwidth">Login</button>
                    </form>
                  </div>
                  <Link to="/Signup">Click here to sign up if not a member.</Link>
                </div>
              </div>
            </div>
          );
        }}/>
        <Route path="/Signup" component={Signup} />
      </Switch>
      </Router>
    );
};

export default Form;  