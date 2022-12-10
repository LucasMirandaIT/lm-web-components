import { newSpecPage } from '@stencil/core/testing';
import { LmDialog } from '../lm-dialog';

describe('lm-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LmDialog],
      html: `<lm-dialog></lm-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <lm-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lm-dialog>
    `);
  });
});
