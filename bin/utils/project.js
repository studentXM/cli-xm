var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 获取远程项目模板
import { exec } from "child_process";
// 用户可以通过命令行来配置
export const defaultConfig = {
    organazation: "xinmu",
    accsesstoken: 'd60c205a5468fe4f0282671ce33e64b0'
};
const url = `https://gitee.com/Xinmu11/testpage.git`;
const Bearer = `Bearer ${defaultConfig.accsesstoken}`;
export function getOrgnazationProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield new Promise((resolve) => {
            resolve(exec('git clone https://gitee.com/Xinmu11/xinmuhub.git'));
        });
        return res;
    });
}
