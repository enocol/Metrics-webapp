import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchcategories } from '../redux/CategoriesSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('fetchcategories action creator', () => {
  it('dispatches the correct actions on success', async () => {
    const store = mockStore({ category: [], status: 'idle', error: null });

    await store.dispatch(fetchcategories());

    const actions = store.getActions();
    const expectedActions = [
      fetchcategories.pending.type,
      fetchcategories.fulfilled.type,
    ];

    expect(actions.map((action) => action.type)).toEqual(expectedActions);
  });
});
