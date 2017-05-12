import { AngularioTutorialPage } from './app.po';

describe('angulario-tutorial App', () => {
  let page: AngularioTutorialPage;

  beforeEach(() => {
    page = new AngularioTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
