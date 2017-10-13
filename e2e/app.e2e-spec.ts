import { AngularTaskManagementPage } from './app.po';

describe('angular-task-management App', () => {
  let page: AngularTaskManagementPage;

  beforeEach(() => {
    page = new AngularTaskManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
