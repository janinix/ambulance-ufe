import { newSpecPage } from '@stencil/core/testing';
import { XmarecekAmbulanceWlEditor } from '../xmarecek-ambulance-wl-editor';

describe('xmarecek-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XmarecekAmbulanceWlEditor],
      html: `<xmarecek-ambulance-wl-editor></xmarecek-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <xmarecek-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xmarecek-ambulance-wl-editor>
    `);
  });
});
