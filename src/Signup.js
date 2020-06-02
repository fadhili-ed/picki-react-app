import React from 'react';
import useForm from './useForm'

const Signup = () => {
    const { values, handleChange, handleSubmit } = useForm(signup);

    function signup() {
      console.log(values)
    }

    return (
        <div className="section is-fullheight">
          <div className="container">
            <div className="column is-4 is-offset-4">
              <div className="box">
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">Full Name</label>
                    <div className="control">
                      <input className="input" type="text" name="name" onChange={handleChange} value={values.name} required />
                    </div>
                  </div>                      
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
                  <button type="submit" className="button is-block is-info is-fullwidth">Signup</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Signup;