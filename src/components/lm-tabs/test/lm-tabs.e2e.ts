import { newE2EPage } from '@stencil/core/testing';

describe('lm-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lm-tabs></lm-tabs>');

    const element = await page.find('lm-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
