import { Component, Element, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'lm-dialog',
  styleUrl: 'lm-dialog.scss',
  assetsDirs: ['assets'],
  shadow: false,
})
export class LmDialog {
  @Prop() type: string = 'info';

  @Prop() modalTitle: string;
  @Prop() showCloseButton: boolean = true;
  @Prop() showCancelButton: boolean = true;
  @Prop() showConfirmButton: boolean = true;

  @Element() el: HTMLElement;

  @State() openedDialog: boolean = false;

  componentWillLoad() {
    this.openedDialog = true;
  }

  checkPredefinedDialog() {
    if (this.type === 'generic') return false;
    return true;
  }

  closeDialog() {
    const myModal = document.getElementById('myModal');
    myModal.classList.remove('active');
  }

  render() {
    return (
      <div id="myModal" class="modal active">
        <div class="modal-content">
          <div class="modal-header">
            {this.showCloseButton && (
              <span class="close" onClick={this.closeDialog}>
                &times;
              </span>
            )}
            <h2>{this.modalTitle}</h2>
          </div>
          <div class="modal-body">
            <slot name="body" />
          </div>
          {this.showCancelButton && <div class="modal-footer">{<lm-button>Cancelar</lm-button>}</div>}
          {this.showConfirmButton && <div class="modal-footer">{<lm-button>Confirmar</lm-button>}</div>}
        </div>
      </div>
    );
  }
}
