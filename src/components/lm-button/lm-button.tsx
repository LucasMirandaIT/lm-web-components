import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'lm-button',
  styleUrl: 'lm-button.scss',
  shadow: true,
})
export class LmButton {
  @Prop() type: string = '';
  @Prop() color: string = 'primary';

  @Event() handleClick: EventEmitter<unknown>;

  btnClicked = () => {
    this.handleClick.emit(true);
  }

  render() {
    return (
      <button class={`lm-btn btn-${this.color}`} onClick={this.btnClicked}>
        <slot></slot>
      </button>
    );
  }
}
