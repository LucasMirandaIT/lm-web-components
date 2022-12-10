import { newSpecPage } from '@stencil/core/testing';
import { OutlinedInput } from '../outlined-input';

describe('outlined-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OutlinedInput],
      html: `<outlined-input></outlined-input>`,
    });
    expect(page.root).toEqualHtml(`
      <outlined-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </outlined-input>
    `);
  });
});
