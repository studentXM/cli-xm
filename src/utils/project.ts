import util from 'util';

const execAsync = util.promisify(exec);
import { exec } from "child_process"
import { warpLoading } from '../utils/loading.js'
export async function getOrgnazationProjects(name: string) {
    const fs = (await import('fs')).default;
    await warpLoading('项目安装', async () => {
        console.log(import.meta.url)
        return 123
        await execAsync('git clone https://github.com/studentXM/ysy.git');
        // 修改项目名称
        await fs.rename('ysy', name,()=>{
            console.log('更改成功')
        });
    });
    await warpLoading('安装依赖', async () => {
        process.chdir(name);
        // 安装依赖
        await execAsync('yarn install');
    });
}