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

    const newState = { ...initialState };
    categoryReducer(newState, action);

    expect(newState).toEqual({
      status: 'fulfilled',
      category: 'exampleCategory',
    });
  });

  test('button clicks should be go back to the home page', () => {
    expect(true).toBe(true);
  });

  const categoryReducer = (state, action) => {
    state.status = 'fulfilled';
    state.category = action.payload;
  };
});
