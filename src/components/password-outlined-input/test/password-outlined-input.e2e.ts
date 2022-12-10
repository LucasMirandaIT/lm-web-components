import { newE2EPage } from '@stencil/core/testing';

describe('outlined-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outlined-input></outlined-input>');

    const element = await page.find('outlined-input');
    expect(element).toHaveClass('hydrated');
  });
});
