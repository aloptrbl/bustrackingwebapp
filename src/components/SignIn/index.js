import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { PasswordForgetLink } from '../PasswordForget';
import Bus from '../../img/realbus.jpg';
const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const Background = 'https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80';
    const mystyle = {
      background:`url(${Bus})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    };
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
      <div class="bg-blue-400 h-screen w-screen">
      <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{height: 500}}>
              <div class="flex flex-col w-full md:w-1/2 p-4">
                  <div class="flex flex-col flex-1 justify-center mb-8">
                      <h1 class="text-4xl text-center font-thin">Sign In</h1>
                      <div class="w-full mt-4">
                              <div class="flex flex-col mt-4">
                              <input
                            id="email"
                            class="flex-grow h-8 px-2 border rounded border-grey-400" 
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
                              </div>
                              <div class="flex flex-col mt-4">
                              <input
                              id="password"
          name="password"
          value={password}
          class="flex-grow h-8 px-2 rounded border border-grey-400"
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
                              </div>
                              <div class="flex items-center mt-4">
                                  <input type="checkbox" name="remember" id="remember" class="mr-2" /> <label for="remember" class="text-sm text-grey-dark">Remember Me</label>
                              </div>
                              <div class="flex items-center mt-4">
                              {error && <p>{error.message}</p>}
                              </div>
                              <div class="flex flex-col mt-8">
                                  <button type="submit" disabled={isInvalid}  class="bg-blue-700 disabled:opacity-25 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                      Sign In
                                  </button>
                              </div>
                             
                          <div class="text-center mt-4">
                              <a class="no-underline hover:underline text-blue-dark text-xs" href="{{ route('password.request') }}">
                                  Forgot Your Password?
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="hidden md:block md:w-1/2 rounded-r-lg" style={mystyle}></div>
          </div>
      </div>
  </div>
      </form>  
    );
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
export default SignInPage;
export { SignInForm };