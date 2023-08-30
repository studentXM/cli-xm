var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import util from 'util';
const execAsync = util.promisify(exec);
import { exec } from "child_process";
import { warpLoading } from '../utils/loading.js';
export function getOrgnazationProjects(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const fs = (yield import('fs')).default;
        yield warpLoading('项目安装', () => __awaiter(this, void 0, void 0, function* () {
            console.log(import.meta.url);
            return 123;
            yield execAsync('git clone https://github.com/studentXM/ysy.git');
            // 修改项目名称
            yield fs.rename('ysy', name, () => {
                console.log('更改成功');
            });
        }));
        yield warpLoading('安装依赖', () => __awaiter(this, void 0, void 0, function* () {
            process.chdir(name);
            // 安装依赖
            yield execAsync('yarn install');
        }));
    });
}
