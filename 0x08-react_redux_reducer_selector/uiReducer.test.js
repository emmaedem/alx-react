import { uiReducer } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

test('should return the initial state when no action is passed', () => {
  const state = uiReducer(undefined, {});
  expect(state).toEqual({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  });
});

test('should return the initial state when SELECT_COURSE action is passed', () => {
  const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
  expect(state).toEqual({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  });
});

test('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
  const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
  expect(state.isNotificationDrawerVisible).toBe(true);
});

