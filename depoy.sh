#!/bin/bash

#定义变量，配置URL，文件名，提交分支
REPO_URL="git@github.com:你的用户名/你的仓库名.git"
BUILD_DIR="dist"
BRANCH="main"

#1.打包项目
echo "正在打包前端项目..."
npm run build

# 2.检查打包是否成功
if [ $? -ne 0 ]; then
  echo "打包失败，请检查错误！"
  exit 1
fi
#3.进入到打包的目录
echo "准备上传到 GitHub..."

#4.添加git操作
git add .
git commit -m "Deploy: 更新打包文件 $(date '+%Y-%m-%d %H:%M:%S')"
#5.检查推送是否成功
if [ $? -eq 0 ]; then
  echo "成功部署到 GitHub!"
else
  echo "推送失败，请检查 SSH 配置或网络连接！"
  exit 1
fi