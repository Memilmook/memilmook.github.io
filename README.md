# GitHub 기본 사용방법

## 새로운 repository를 생성했을 때

```
echo "# [github repository name] >> README.md

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Memilmook/[repository_NAME].git
git push -u origin main

```

## 기존에 생성된 repository에 push할 때

```
git remote add origin https://github.com/Memilmook/[repository_NAME].git
git branch -M main
git push -u origin main
```
