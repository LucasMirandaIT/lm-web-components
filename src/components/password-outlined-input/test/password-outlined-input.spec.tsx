import { newSpecPage } from '@stencil/core/testing';
import { PasswordOutlinedInput } from '../password-outlined-input';

describe('outlined-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PasswordOutlinedInput],
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
