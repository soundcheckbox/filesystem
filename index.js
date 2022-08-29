import { test } from '/modules/tests/frontend/src/index.mjs'
(async () => {
    test('/tests/fileSystem/index.test.js', true).catch(e => {console.log('error devtool', e)})
})()
