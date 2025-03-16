# deploy.ps1
$REPO_URL = "git@github.com:GuoQingMa24/mianwa-SpeedFlex_Create_Template.git"
$BUILD_DIR = "dist"
$BRANCH = "main"

Write-Host "Building..."
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Build fail！"
    exit 1
}

Write-Host "cd dist $BUILD_DIR..."
Set-Location $BUILD_DIR


Write-Host "Ready to push GitHub..."
git add .
git commit -m "Deploy: update tarball $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
git push origin $BRANCH
if ($LASTEXITCODE -eq 0) {
    Write-Host "Success deploy GitHub!"
} else {
    Write-Host "Fail,please check out the Network！"
    exit 1
}