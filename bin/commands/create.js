var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { existsSync, rmSync } from "fs";
// 终端询问
import inquirer from "inquirer";
import path from "path";
import { warpLoading } from "../utils/loading.js";
import { getOrgnazationProjects } from '../utils/project.js';
export default function create(name, option) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(name, option);
        const cwd = process.cwd(); //当前项目工作目录,也就是项目的根目录
        const targetDir = path.join(cwd, name); // 把开发者设定的项目名称 作为一个目录 并拼接
        // 判断该目录是否存在
        const isExists = existsSync(targetDir);
        if (isExists) {
            // 清除 存在-f或者-force的指令 都是删除同名目录
            if (option.force) {
                rmSync(targetDir, { recursive: true }); //递归删除目录
                // 询问是否删除
            }
            else {
                let { action } = yield inquirer.prompt([
                    { name: 'action', type: 'list', message: '目录已存在是否要覆盖', choices: [
                            { name: 'overwrite', value: "overwrite" },
                            { name: 'cancel', value: false }
                        ] }
                ]);
                // cancel 取消
                if (!action) {
                    return console.log('取消覆盖');
                }
                // 确认删除
                if (action === 'overwrite') {
                    console.log('removeing...');
                    yield warpLoading('remove', () => {
                        rmSync(targetDir, { recursive: true }); //递归删除目录
                    });
                    console.log('remove Complete');
                }
            }
        }
        else {
            // 拉取项目模板
            let res = yield getOrgnazationProjects();
            console.log(res.data);
        }
    });
}
