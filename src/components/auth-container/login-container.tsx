import { Component, h, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'login-container',
  styleUrl: 'login-container.scss',
  shadow: true,
})
export class LoginContainer {
  /**
   * Props below
   */

  @Event() handleLogin: EventEmitter<unknown>;
  @Element() host: HTMLElement;

  userData = {
    login: '',
    password: '',
  };

  tabs = ['Login', 'Registro'];

  loginForm = [
    {type: 'text', placeholder: 'E-mail', value: ''},
    {type: 'password', placeholder: 'Senha', value: ''}
  ]

  setInput = (key, value) => {
    console.log({ key, value });
    this.userData[key] = value.detail;
  };

  loginClick = () => {
    this.handleLogin.emit(this.userData);
  };

  onHandleLogin = ({detail}) => {
    console.log('Handle Login ::: ', detail);
  }

  render() {
    return (
      <div class="login-wrapper">
        <lm-tabs tabs={this.tabs}>
          <div class="tab__content">
            <lm-login form={this.loginForm} onHandleLogin={(data) => this.onHandleLogin(data)}/>
          </div>
          <div class="tab__content">
            <lm-register />
          </div>
        </lm-tabs>
      </div>
    );
  }
}
