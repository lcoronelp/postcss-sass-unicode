let postcss = require('postcss')
let plugin = require('./index.js')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.warnings()).toHaveLength(0)
  expect(result.css).toEqual(output)
}

it('should translate unicode literal to escaped unicode', async () => {
  let escapedUni = '"\\2192\\2193\\1242\\5555"'
  await run('a{ content: \'→↓ቂ啕\'; }', `a{ content: ${ escapedUni }; }`, {})
})
