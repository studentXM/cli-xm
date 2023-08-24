// 获取远程项目模板
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
// 用户可以通过命令行来配置
export const defaultConfig = {
    organazation: "xinmu-qinwa",
    accsesstoken: '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'
};
const url = `https://api.github.com/orgs/${defaultConfig.organazation}/repos`;
const Bearer = `Bearer ${defaultConfig.accsesstoken}`;
export function getOrgnazationProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield axios.get(url, {
            headers: {
                "Authorization": Bearer
            }
        });
        return res;
    });
}
