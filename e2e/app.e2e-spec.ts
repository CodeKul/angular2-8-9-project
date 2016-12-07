import { Angular2Batch89Page } from './app.po';

describe('angular2-batch-8-9 App', function() {
  let page: Angular2Batch89Page;

  beforeEach(() => {
    page = new Angular2Batch89Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
