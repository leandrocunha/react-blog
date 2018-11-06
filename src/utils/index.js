/**
 * @function preview Truncate string with 100 characters
 * @param {string} str String to be truncated
 * @example
 * const str = 'Lorem ipsum dolor sit';
 * preview(str);
 */
export const preview = str => {
  return `${str.substring(0, 100)}...`;
};
