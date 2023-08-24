// 获取远程项目模板

import axios from 'axios';

// 用户可以通过命令行来配置
export const defaultConfig = {
    organazation: "xinmu-qinwa",
    accsesstoken: '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'
}
const url = `https://api.github.com/orgs/${defaultConfig.organazation}/repos`
const Bearer = `Bearer ${defaultConfig.accsesstoken}`
export async function getOrgnazationProjects() {
    const res = await axios.get(url,{
        headers:{
            "Authorization": Bearer
        }
    })
    return res
}
