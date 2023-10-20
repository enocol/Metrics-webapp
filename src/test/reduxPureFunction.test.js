import { test, expect } from '@jest/globals';

describe('categoryReducer', () => {
  test('should update state with the category from the action', () => {
    const initialState = {
      status: 'pending',
      category: null,
    };

    const action = {
      type: 'SET_CATEGORY',
      payload: 'exampleCategory',
    };

    const categoryReducer = (state, action) => {
      state.status = 'fulfilled';
      state.category = action.payload;
    };

    const newState = { ...initialState };
    categoryReducer(newState, action);

    expect(newState).toEqual({
      status: 'fulfilled',
      category: 'exampleCategory',
    });
  });
});
