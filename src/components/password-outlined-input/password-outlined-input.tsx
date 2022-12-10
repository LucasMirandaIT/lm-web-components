import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'password-outlined-input',
  styleUrl: 'password-outlined-input.css',
  shadow: true,
})
export class PasswordOutlinedInput {
  @Prop() placeholder: string = 'Placeholder';
  @Prop({ mutable: true }) type: string = 'password';
  @Prop({ mutable: true }) value: string = '';

  @Event() changeInput: EventEmitter<string>;

  togglePassword = () => {
    this.type === 'password' ? (this.type = 'text') : (this.type = 'password');
  };

  handleChange = e => {
    var searchText = e.target.value;
    console.log('Search Text ::: ', searchText);
    this.changeInput.emit(searchText);
  };

  render() {
    return (
      <Host>
        <label class="pure-material-textfield-outlined">
          <input placeholder=" " type={this.type} onInput={event => this.handleChange(event)} />
          <span>{this.placeholder}</span>
          <img class="eye-icon" src={this.type === 'password' ? 'assets/eye-show.svg' : 'assets/eye-hide.svg'} onClick={this.togglePassword} />
        </label>
      </Host>
    );
  }
}
