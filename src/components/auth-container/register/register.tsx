import { Component, h, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'lm-register',
  styleUrl: 'register.scss',
  shadow: true,
})
export class Register {
  /**
   * Props below
   */
  @Event() handleLogin: EventEmitter<unknown>;
  @Element() host: HTMLElement;

  userData = {
    login: '',
    password: '',
  };

  setInput = (key, value) => {
    console.log({ key, value });
    this.userData[key] = value.detail;
  };

  loginClick = () => {
    this.handleLogin.emit(this.userData);
  };

  render() {
    return (
      <h>
        <div class="grid">
          <outlined-input placeholder="Nome" onChangeInput={value => this.setInput('nome', value)}></outlined-input>
          <outlined-input placeholder="E-mail" onChangeInput={value => this.setInput('login', value)}></outlined-input>
        </div>
        <div class="grid">
          <password-outlined-input placeholder="Senha" onChangeInput={value => this.setInput('password', value)}></password-outlined-input>
          <password-outlined-input placeholder="Confirmar Senha" onChangeInput={value => this.setInput('confirmPassword', value)}></password-outlined-input>
        </div>
        <lm-button onHandleClick={() => this.loginClick()}>Registrar</lm-button>
      </h>
    );
  }
}
