# deploy.ps1
$REPO_URL = "git@github.com:GuoQingMa24/mianwa-SpeedFlex_Create_Template.git"
$BUILD_DIR = "dist"
$BRANCH = "main"

Write-Host "正在打包前端项目..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "打包失败，请检查错误！"
    exit 1
}

Write-Host "进入构建目录 $BUILD_DIR..."
Set-Location $BUILD_DIR
if (-not $?) {
    Write-Host "无法进入 $BUILD_DIR，目录不存在！"
    exit 1
}

Write-Host "准备上传到 GitHub..."
git add .
git commit -m "Deploy: 更新打包文件 $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin $BRANCH
if ($LASTEXITCODE -eq 0) {
    Write-Host "成功部署到 GitHub!"
} else {
    Write-Host "推送失败，请检查 SSH 配置或网络连接！"
    exit 1
}