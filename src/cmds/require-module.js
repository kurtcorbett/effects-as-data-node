/**
 * Creates a `requireModule` action.  `yield` a `requireModule` action to require a module.
 * @param {string} the absolute path to the module.
 * @returns {Object} an action of type `requireModule`.
 * @example //  Test It
 * const { testIt } = require('effects-as-data/test')
 * const { cmds } = require('effects-as-data/node')
 *
 * const testExample = testIt(example)
 *
 * describe('example()', () => {
 *   it('should require a module', testExample(() => {
 *     return [
 *       [null, cmds.requireModule('/path/to/my-module')],
 *       [{ foo: 'bar' }, success({ foo: 'bar' })]
 *     ]
 *   }))
 * })
 *
 * @example //  Write It
 * const { cmds } = require('effects-as-data/node')
 *
 * function * example () {
 *   const result = yield cmds.requireModule('/path/to/my-module')
 *   return result
 * }
 *
 * @example //  Run It
 * const { handlers, run } = require('effects-as-data/node')
 *
 * run(handlers, example).then((result) => {
 *   result.payload == { foo: 'bar' } //  true
 * })
 */
function requireModule(path) {
  return {
    type: 'requireModule',
    path,
  }
}

module.exports = {
  requireModule,
}
