#!/usr/bin/env node
import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import inquirer from 'inquirer';
import clone from './clone';
import { nameToRepoURL, projGuideCommands } from './constant';

program
    .name('speed-create')
    .usage('<command> [option]')
    .description(chalk.green('一个快速并便利的模板创建脚手架！'))
    .version(`v${require('../package.json').version}`);

program
    .command('create <app-name>')
    .description('Clone a repository into a newly created directory')
    .action(async (name) => {
        const targetPath = path.join(process.cwd(), name);

        if (fs.pathExistsSync(targetPath)) {
            const answer = await inquirer.prompt([
                {
                    type: 'confirm',
                    message: chalk.red('该目录下已存在相同文件名的文件是否进行覆盖?'),
                    default: false,
                    name: 'overwrite',
                },
            ]);

            if (answer.overwrite) {
                await fs.remove(targetPath);
                console.log(chalk.green('删除成功！'));
            } else {
                console.log(chalk.yellow('操作取消，未覆盖现有目录。'));
                return;
            }
        }

        if (Object.keys(nameToRepoURL).length === 0) {
            console.log(chalk.red('错误：未定义任何模板！'));
            return;
        }

        const choices1 = Object.keys(nameToRepoURL).map((key) => ({
            name: key,
            value: key,
        }));

        const result = await inquirer.prompt([
            {
                type: 'list',
                name: 'type',
                message: '请选择你要创建的模板：',
                choices: choices1,
            },
            {
                type: 'list',
                name: 'cache1',
                message: '是否对degit进行cache的配置?',
                choices: [
                    { name: '是', value: true },
                    { name: '否', value: false },
                ],
            },
            {
                type: 'list',
                name: 'force1',
                message: '是否对degit进行force的配置?',
                choices: [
                    { name: '是', value: true },
                    { name: '否', value: false },
                ],
            },
        ]);

        console.log(result);

        try {
            await clone(result.cache1, result.force1, targetPath, result.type);
            console.log(chalk.green('Success!'));
        } catch (error) {
            console.log(chalk.red('错误详情：', error.message));
        }
    });

program.parse(process.argv);