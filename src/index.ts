#!/usr/bin/env node
import { program } from 'commander'; // 创建命令
import chalk from 'chalk'; // 命令行样式
import fs from 'fs-extra'; // 路径的输入
import path from 'path'; // 路径
import inquirer from 'inquirer'; // 捕获用户的输入
import clone from "./clone";
import {nameToRepoURL} from "./constant";
import {projGuideCommands} from "./constant";
// 首行提示
program
    .name('speed-create')
    .usage('<command> [option]')//尖括号必填 方括号选填
    .description(chalk.green('一个快速并便利的模板创建脚手架！'));

// 版本
program.version(`v${require('../package.json').version}`);

//对命令进行说明
//对包的版本和package.json中的文件进行绑定
//创建项目的命令
program.command('create <app-name>')
    .description('Clone a repository into a newly created directory')
    .action(async (name) => {
        //1.拿到当前目录
        const targetPath = path.join(process.cwd(),name);
        //2.判断是否存在
        if(fs.pathExistsSync(targetPath))
        {
            //3.用一个常量来接收输入的结果
            const answer = await inquirer.prompt([
                {
                    type:'confirm',
                    message:chalk.red('该目录下已存在相同文件名的文件是否进行覆盖?'),
                    default:false,
                    name:'overwrite'
                }

            ])
            //4.对常量中的overwrite的布尔值进行判断
            if(answer.overwrite){
                fs.remove(targetPath);
                console.log(chalk.green('删除成功！'));
            }
        }
        const choices1 = Object.keys(nameToRepoURL).map((key)=>({
            name:key,
            value:key
        }));
        //5.新建一个项目

        const result = await inquirer.prompt([
            {
                type:'list',
                name:'type',
                message:'请选择你要创建的模板：',
                choices:choices1
            },
            {
                type:'list',
                name:'cache1',
                message:'是否对degit进行cache的配置?',
                choices:[
                    {
                        name:'是',
                        value:true
                    },
                    {
                        name:'否',
                        value:false
                    }
                ]

            },
            {
                type:'list',
                name:'force1',
                message:'是否对degit进行force的配置?',
                choices:[
                    {
                        name:'是',
                        value:true
                    },
                    {
                        name:'否',
                        value:false
                    }
                ]

            }
        ])
        console.log(result);

        //clone操作
        try{
            await clone(result.cache1, result.force1,targetPath,result.type);

            console.log(chalk.green('Success!'));



        }catch(error){

            console.log(chalk.red('Error:',error));

        }


        // const repoURL = ProjectList[key];
        // const spinner = ora(chalk.yellow('正在下载模板，请稍候...')).start(); // 显示加载动画
        //
        // gitClone(repoURL, name, { checkout: 'main' }, function (err) {
        //     if (err) {
        //         // 下载失败
        //         spinner.fail(chalk.red('模板下载失败，请检查仓库地址是否正确！'));
        //         console.error(chalk.red('错误信息：'), err.message);
        //     } else {
        //         // 下载成功
        //         spinner.succeed(chalk.green('模板下载成功！'));
        //         fs.remove(path.join(targetPath,'.git'));
        //         console.log(chalk.green('项目已成功创建，请执行以下的操作：'));
        //         console.log(chalk.green(`\n cd ${name}`));
        //         console.log(chalk.green(`npm install`));
        //         console.log(chalk.green(`npm run dev\n`));
        //     }
        // });



    });