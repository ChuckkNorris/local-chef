import { LocalChefPage } from './app.po';

describe('local-chef App', () => {
  let page: LocalChefPage;

  beforeEach(() => {
    page = new LocalChefPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
