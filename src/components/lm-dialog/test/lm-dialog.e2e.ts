import { newE2EPage } from '@stencil/core/testing';

describe('lm-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lm-dialog></lm-dialog>');

    const element = await page.find('lm-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
