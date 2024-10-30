import fs from 'fs'
import path from 'path'

const currentFile = path.basename(__filename)

const modules = {}
fs.readdirSync(__dirname)
    .filter(file => (file !== currentFile) && file.endsWith('.js'))
    .forEach(file => {
        const moduleName = path.basename(file, '.js')
        modules[moduleName] = require(`./${file}`)
    })

export default modules
