import { resolve } from 'path';
// 获取远程项目模板

import { exec } from "child_process"

// 用户可以通过命令行来配置
export const defaultConfig = {
    organazation: "xinmu",
    accsesstoken: 'd60c205a5468fe4f0282671ce33e64b0'
}
const url = `https://gitee.com/Xinmu11/testpage.git`
const Bearer = `Bearer ${defaultConfig.accsesstoken}`
export async function getOrgnazationProjects() {
    let res = await new Promise((resolve)=>{
        resolve(exec('git clone https://gitee.com/Xinmu11/xinmuhub.git'))
    })
    return res
}
