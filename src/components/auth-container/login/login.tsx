import { Component, Prop, h, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'lm-login',
  styleUrl: 'login.scss',
  shadow: true,
})
export class Login {
  /**
   * Props below
   */
  @Prop({ mutable: true }) form: Array<any>;

  @Event() handleLogin: EventEmitter<unknown>;
  @Element() host: HTMLElement;

  userData = {
    login: '',
    password: '',
  };
  componentDidLoad() {
    console.log('Form ::: ', this.form);
  }

  setInput = (key, {detail}) => {
    this.form[key].value = detail;
  };

  loginClick = () => {
    this.handleLogin.emit(this.form);
  };

  render() {
    return (
      <h>
        <outlined-input placeholder="Login ou E-mail" onChangeInput={value => this.setInput('login', value)}></outlined-input>
        <password-outlined-input placeholder="Senha" onChangeInput={value => this.setInput('password', value)}></password-outlined-input>
        <lm-button onHandleClick={() => this.loginClick()}>Login</lm-button>
      </h>
    );
  }
}
