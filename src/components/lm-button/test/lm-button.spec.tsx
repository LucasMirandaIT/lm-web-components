import { newSpecPage } from '@stencil/core/testing';
import { LmButton } from '../lm-button';

describe('lm-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LmButton],
      html: `<lm-button></lm-button>`,
    });
    expect(page.root).toEqualHtml(`
      <lm-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lm-button>
    `);
  });
});
