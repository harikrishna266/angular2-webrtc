import { TrainerPage } from './app.po';

describe('trainer App', function() {
  let page: TrainerPage;

  beforeEach(() => {
    page = new TrainerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
