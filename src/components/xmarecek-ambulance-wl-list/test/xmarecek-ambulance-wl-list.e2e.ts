import { newE2EPage } from '@stencil/core/testing';

describe('xmarecek-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xmarecek-ambulance-wl-list></xmarecek-ambulance-wl-list>');

    const element = await page.find('xmarecek-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
