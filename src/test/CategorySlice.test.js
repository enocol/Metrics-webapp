import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchcategories } from '../redux/CategoriesSlice';

const middlewares = [thunk]; // You need to include the 'redux-thunk' middleware for async action creators.
const mockStore = configureStore(middlewares);

describe('fetchcategories action creator', () => {
  it('dispatches the correct actions on success', async () => {
    const store = mockStore({ category: [], status: 'idle', error: null });

    // Mock Axios requests with a library like 'axios-mock-adapter'.

    await store.dispatch(fetchcategories());

    const actions = store.getActions();
    const expectedActions = [
      fetchcategories.pending.type,
      fetchcategories.fulfilled.type,
    ];

    // Ensure the expected actions were dispatched in the correct order.
    expect(actions.map((action) => action.type)).toEqual(expectedActions);
    expect(actions.map((action) => action.type)).toEqual(expectedActions);
    expect(actions.map((action) => action.type)).toEqual(expectedActions);
  });
});
