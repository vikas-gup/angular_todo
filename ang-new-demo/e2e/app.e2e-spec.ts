import { AngNewDemoPage } from './app.po';

describe('ang-new-demo App', () => {
  let page: AngNewDemoPage;

  beforeEach(() => {
    page = new AngNewDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
