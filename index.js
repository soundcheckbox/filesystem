import { test } from '/modules/tests/frontend/src/index.mjs'
//TODO подключение файловой системы
// import service from '/service/WCNode/src/fs/index.mjs'
// (async () => {
//  const api = await service()
//  const idbfs = await api.idbfs()
//  idbfs.info()
//     idbfs.set.file('test', {test:'test2'})
//     idbfs.save()
//     console.log('ddddd', await idbfs.get.file('test'))
// })()

//TODO подключение тестов
    test('/tests/fileSystem/index.test.js', true).catch(e => {console.log('error devtool', e)})
