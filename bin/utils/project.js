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
        yield warpLoading('项目安装', () => __awaiter(this, void 0, void 0, function* () {
            const cloneCommand = `git clone --no-checkout https://github.com/studentXM/ysy.git ${name}`;
            yield execAsync(cloneCommand);
        }));
        yield warpLoading('安装依赖', () => __awaiter(this, void 0, void 0, function* () {
            const installCommand = `yarn install`;
            // 进入目录
            process.chdir(name);
            // 安装依赖
            yield execAsync(installCommand);
        }));
    });
}
