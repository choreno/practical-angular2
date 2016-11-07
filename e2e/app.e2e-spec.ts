import { Practicalng2Page } from './app.po';

describe('practicalng2 App', function() {
  let page: Practicalng2Page;

  beforeEach(() => {
    page = new Practicalng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
