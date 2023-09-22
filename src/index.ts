#! /usr/bin/env node
console.log(`Welcome to Cli-xm`)
import {Command, program} from "commander";
import { createRequire } from "module";
// 终端字体样式模块
import chalk from "chalk";
import { dirname,join } from "path";
import { fileURLToPath } from "url";
// import.meta.url当前文件所在的绝对路径
const __filename = fileURLToPath(import.meta.url) //用于解析绝对路径，比如 file://c/xxx.js 会被解析为 c/xxx.js
const __dirname = dirname(__filename) //该文件的所在路径

const require = createRequire(import.meta.url)//在esmodule中编写commonjs 创建一个require函数
const pkg = require(join(__dirname,'../package.json')) //path.join拼接路径 使用require导入json json最好是使用require导入 import 会麻烦


program.version(`my-cli@${pkg.version}`).usage("<command> [option]")


// 2配置拉取的信息，配置系统文件，conifg

// 创建一个指令 create
program.command('create <project-name>').
// 描述
description("create a project").
// 该指令的配置项
option('-f, --force <path>',"overwrite target directory").
// 因为不支持require写法 所以使用 import动态导入 动态导入是返回的promise对象 所以可以使用async
action(async (name,option)=>{
    // 括号包过预防出错
    (await import('./commands/create.js')).default(name,option)
})

program.command("config [value]").
// 该指令的配置项
option('-s, --set <path>',"set").
action(async (name,option)=>{
    (await import('./commands/config.js')).default(name,option)
})

program.addHelpText('after',`Please use specific instructions , and use the ${chalk.magentaBright('help')} command to view all instructions,请使用具体指令再使用${chalk.magentaBright('help')}指令查看`)

// 解析用户用户传递的参数
program.parse(process.argv)

