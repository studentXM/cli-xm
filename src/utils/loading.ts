import ora from "ora";

export const warpLoading = async (message:string,fn:()=>void)=>{
    const spinner = ora(message)

    spinner.start();

    const res = await fn()//将用户的逻辑包裹loading

    spinner.succeed()

    return res
}