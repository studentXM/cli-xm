import { configPath } from "../constants.js"
import {existsSync,readFileSync} from 'fs'
export default function config(name: string, option: any) {
    console.log('config:', name, option)
    const action = Object.keys(option)[0]
    const {exits,config} = getAllConfig()
    const key = option[action]
    if (action === 'get') {
        console.log()
    } else if (action === 'set') {

    } else if (action === 'delete') {

    }
}

function getAllConfig(){
   let exits =  existsSync(configPath)
   let content = readFileSync(configPath,'utf-8')
   console.log(content)
   return {exits,config:{}}
}
