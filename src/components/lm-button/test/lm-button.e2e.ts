import { newE2EPage } from '@stencil/core/testing';

describe('lm-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lm-button></lm-button>');

    const element = await page.find('lm-button');
    expect(element).toHaveClass('hydrated');
  });
});
