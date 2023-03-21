import { CommentsSteps } from './comments.component.steps';

describe('CommentsComponent', () => {
  let steps: CommentsSteps;

  beforeEach(async () => {
    steps = new CommentsSteps();

    const comment = {
      id: 323456,
      deleted: false,
      type: 'comment',
      by: 'duskblade',
      time: 1639118165,
      dead: false,
      kids: [],
      text: `<p>Hello world&#39;s</p>`,
      parent: 123456,
    };

    steps.givenIHaveTheFollowingComment(comment);
    await steps.givenISetupAsync();
  });

  it('should create', () => {
    steps.whenIDetectChanges().thenIExpectComponentToBeConstructed();
  });

  it('should bind story to property after being fetched', () => {
    steps.whenIDetectChanges();

    const component = steps.component;
    expect(component.comment.id).toBe(component.commentId);
    expect(component.comment.by).toBe('duskblade');
    expect(component.comment.kids?.length).toBe(0);
    expect(component.comment.type).toBe('comment');
  });

  it('should populate `posted` based on calculations', () => {
    const date = new Date(1639118165 * 1000);

    steps.whenIDetectChanges().thenIExpectPostedDateToBe(date);
  });

  it('should render to html accordingly based on data provided', () => {
    steps
      .whenIDetectChanges()
      .whenIQuery('.comment .author span')
      .thenIExpectElementToHaveTextContent('duskblade')
      .whenIQuery('.comment .author')
      .thenIExpectElementToHaveTextContent('10 Dec, 2021')
      .whenIQuery('.comment article')
      .thenIExpectElementToHaveTextContent("Hello world's");
  });

  it('should not render any of the subcomments given there is none', () => {
    steps
      .whenIDetectChanges()
      .whenIQuery('.subcomments')
      .thenIExpectElementTextToBeEmpty();
  });
});
