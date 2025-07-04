import { AuthServiceSteps } from './auth.service.steps';

import { User } from '../models/User';

describe('AuthService', () => {
  let steps: AuthServiceSteps;

  beforeEach(() => {
    steps = new AuthServiceSteps();
  });

  it('should be created', () => {
    steps.givenISetup().thenIExpectServiceInitializedSuccessfully();
  });

  describe('constructor', () => {
    it('should populate users and user info when it exist', () => {
      const usersString =
        '[{"email":"shaun@email.com","password":"123","displayName":"xxshaunxx"}]';
      const userString =
        '{"email":"shaun@email.com","password":"123","displayName":"xxshaunxx"}';

      const expectedAllUsers = [
        { email: 'shaun@email.com', password: '123', displayName: 'xxshaunxx' },
      ];
      const expectedCurrentUser = {
        email: 'shaun@email.com',
        password: '123',
        displayName: 'xxshaunxx',
      };

      steps
        .givenGetItemReturnsSequentially(usersString, userString)
        .givenISetup()
        .thenIExpectUsersToBe(expectedAllUsers)
        .thenIExpectCurrentUserToBe(expectedCurrentUser);
    });

    it('should populate default users and user value when not exist', () => {
      const usersString = null;
      const userString = null;

      const expectedAllUsers: User[] = [];
      const expectedCurrentUser = undefined;

      steps
        .givenGetItemReturnsSequentially(usersString, userString)
        .givenISetup()
        .thenIExpectUsersToBe(expectedAllUsers)
        .thenIExpectCurrentUserToBe(expectedCurrentUser);
    });
  });

  it('should register a local account', () => {
    const email = 'shaun@mymail.com';
    const password = '1234';
    const displayName = 'shaun583';

    steps
      .givenISetup()
      .whenISignup(email, password, displayName)
      .thenIExpectUsersToBe([{ email, password, displayName }])
      .thenIExpectSetItemToBeCalled(1);
  });

  describe('login', () => {
    it('should login to a registered local account', () => {
      const existingUsers =
        '[{"email":"shaun@email.com","password":"123","displayName":"xxshaunxx"}]';

      const expectedCurrentUser = {
        email: 'shaun@email.com',
        password: '123',
        displayName: 'xxshaunxx',
      };

      steps
        .givenGetItemReturnsSequentially(existingUsers)
        .givenISetup()
        .whenILogin(expectedCurrentUser.email, expectedCurrentUser.password)
        .thenIExpectCurrentUserToBe(expectedCurrentUser)
        .thenIExpectNoErrorThrown();
    });

    it('should throw when login to an unregistered local account', () => {
      const existingUsers =
        '[{"email":"shaun@email.com","password":"123","displayName":"xxshaunxx"}]';

      steps
        .givenGetItemReturnsSequentially(existingUsers)
        .givenISetup()
        .whenILogin('invalid email', 'invalid pw')
        .thenIExpectCurrentUserToBe(undefined)
        .thenIExpectErrorThrown();
    });
  });

  it('should logout', () => {
    steps.givenISetup().whenISignOut().thenIExpectRemoveItemToBeCalled(1);
  });
});
