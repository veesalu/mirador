import { createSelector } from 'reselect';
import { getWorkspace } from './getters';
import { miradorSlice } from './utils';

/** Returns the elastic layout from the state
 * @param {object} state
 * @returns {object}
*/
export function getElasticLayout(state) {
  return miradorSlice(state).elasticLayout;
}

/** Returns if fullscreen is enabled
 * @param {object} state
 * @returns {boolean}
 */
export const getFullScreenEnabled = createSelector(
  [getWorkspace],
  workspace => workspace.isFullscreenEnabled,
);

/** Returns the latest error from the state
 * @param {object} state
 */
export function getLatestError(state) {
  const [errorId] = miradorSlice(state).errors.items;

  return miradorSlice(state).errors[errorId];
}

/**
 * Selector that returns the type of the workspace
 * @param {object} state
 * @returns {string} 'mosaic' | 'elastic'
 */
export const getWorkspaceType = createSelector(
  [getWorkspace],
  ({ type }) => type,
);

/**
 * Selector that returns the ID of the focused window.
 * @param {object} state
 * @returns {string|undefined}
 */
export const getFocusedWindowId = createSelector(
  [getWorkspace],
  ({ focusedWindowId }) => focusedWindowId,
);

/** Check if the current window is focused
 * @param {object} state
 * @param {string} windowId
 * @returns {boolean}
*/
export const isFocused = (state, { windowId }) => (
  getFocusedWindowId(state) === windowId
);
