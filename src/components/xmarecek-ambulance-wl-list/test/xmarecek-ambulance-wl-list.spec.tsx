import { newSpecPage } from '@stencil/core/testing';
import { XmarecekAmbulanceWlList } from '../xmarecek-ambulance-wl-list';

describe('xmarecek-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmarecekAmbulanceWlList],
      html: `<xmarecek-ambulance-wl-list></xmarecek-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as XmarecekAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
