import { newE2EPage } from '@stencil/core/testing';

describe('xmarecek-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmarecek-ambulance-wl-editor></xmarecek-ambulance-wl-editor>');

    const element = await page.find('xmarecek-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
