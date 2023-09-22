import util from 'util';

const execAsync = util.promisify(exec);
import { exec } from "child_process"
import { warpLoading } from '../utils/loading.js'
export async function getOrgnazationProjects(name: string) {
    await warpLoading('项目安装', async () => {
        const cloneCommand = `git clone https://github.com/studentXM/ysy.git ${name}`
        await execAsync(cloneCommand);
    });
    await warpLoading('安装依赖', async () => {
        const installCommand = `yarn install`;
        // 进入目录
        process.chdir(name);
        // 安装依赖
        await execAsync(installCommand);
    });
    // await warpLoading('细节处理', async () => {
    //     const removeRemoteCommand = `cd ${name}`
    //     await execAsync(removeRemoteCommand);
    // });
    // await warpLoading('细节处理', async () => {
    //     const removeRemoteCommand = `git remote remove origin`
    //     await execAsync(removeRemoteCommand);
    // });
}