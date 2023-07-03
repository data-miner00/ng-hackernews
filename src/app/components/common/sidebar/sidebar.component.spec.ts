import { SidebarSteps } from './sidebar.component.steps';

describe('SidebarComponent', () => {
  let steps: SidebarSteps;

  beforeEach(async () => {
    steps = new SidebarSteps();

    await steps.givenISetupAsync();
    steps.whenIDetectChanges();
  });

  it('should create', () => {
    steps.thenIExpectComponentToBeConstructed();
  });

  it('should be hidden initially', () => {
    steps.thenIExpectSidebarToBeHidden();
  });

  it('should be shown and hidden when toggleSidebar is called accordingly', () => {
    steps
      .whenIToggleSidebar()
      .thenIExpectSidebarToBeShown()
      .whenIToggleSidebar()
      .thenIExpectSidebarToBeHidden();
  });

  it('should be hidden when click event is fired on overlay', () => {
    steps
      .givenOverlayIsNotHidden()
      .whenIClickOnOverlay()
      .thenIExpectSidebarToBeHidden();
  });

  it('should not close when click inside the sidebar', () => {
    steps
      .givenISpyOnStopPropagation()
      .givenOverlayIsNotHidden()
      .whenIClickOnSidebar()
      .thenIExpectStopPropagationToBeCalled(1)
      .thenIExpectSidebarToBeShown();
  });
});
