import { Component, Element, h, Prop } from '@stencil/core';

@Component({
  tag: 'lm-tabs',
  styleUrl: 'lm-tabs.scss',
  shadow: true,
})
export class LmTabs {
  @Prop() tabs: any;

  @Element() el: HTMLElement;

  handleChangeTab = evt => {
    let tabContents = this.el.getElementsByClassName('tab__content');
    Array.from(tabContents).map(e => e.classList.remove('active'));
    tabContents[evt].classList.add('active');
  };

  handleChangeSlot = () => {
    let tabContents = this.el.getElementsByClassName('tab__content');
    tabContents[0].classList.add('active');
  }

  render() {
    return (
      <div class="tab-wrap">
        {this.tabs.map((tabName: string, index: number) => (
          <div style={{width: (100/this.tabs.length) + "%"}}>
            <input type="radio" id={`tab${index}`} name="tabGroup1" class="tab" checked={index == 0 && true} onChange={() => this.handleChangeTab(index)} />
            <label htmlFor={`tab${index}`}>{tabName}</label>
          </div>
        ))}
        <slot onSlotchange={this.handleChangeSlot}/>
      </div>
    );
  }
}
