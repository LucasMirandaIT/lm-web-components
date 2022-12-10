import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'outlined-input',
  styleUrl: 'outlined-input.css',
  shadow: true,
})
export class OutlinedInput {
  @Prop() placeholder: string = 'Placeholder';
  @Prop() type: string = 'text';

  @Prop({mutable: true}) value: string = "";
  @Event() changeInput: EventEmitter<string>;

  toggleType = this.type;

  togglePassword = () => {
    this.toggleType === 'password' ? (this.toggleType = 'text') : (this.toggleType = 'password');
    console.log('Toogle Password');
  };

  handleChange = (e) => {
    var searchText = e.target.value;

    this.changeInput.emit(searchText);
  }

  render() {
    return (
      <Host>
        <label class="pure-material-textfield-outlined">
          <input placeholder=" " type={this.toggleType} onInput={(event) => this.handleChange(event)} />
          <span>{this.placeholder}</span>
          {this.type === 'password' && (
            <i class="eye-icon" onClick={this.togglePassword}>
              eyes
            </i>
          )}
        </label>
      </Host>
    );
  }
}
