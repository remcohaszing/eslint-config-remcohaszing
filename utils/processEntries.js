/**
 * A function to map over object entries as an array.
 *
 * This is used until Node 10 support is dropped and `Object.fromEntries()` can be safely used.
 *
 * @param {object} object The object whose entries to process
 * @param {function} fn The function that’s called with the object entries.
 */
module.exports = (object, fn) => Object.fromEntries(fn(Object.entries(object)));
