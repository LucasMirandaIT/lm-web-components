import { newSpecPage } from '@stencil/core/testing';
import { LmTabs } from '../lm-tabs';

describe('lm-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LmTabs],
      html: `<lm-tabs></lm-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <lm-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lm-tabs>
    `);
  });
});
