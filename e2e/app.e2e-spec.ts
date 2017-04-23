import { AngularCrudMaterialPage } from './app.po';

describe('angular-crud-material App', () => {
  let page: AngularCrudMaterialPage;

  beforeEach(() => {
    page = new AngularCrudMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
