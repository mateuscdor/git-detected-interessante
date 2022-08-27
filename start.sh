#!bin/bash
#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
sleep 2
if [ -f /data/data/com.termux/files/usr/bin/git ]; then
echo "\033[0;32mModules were found, proceeding..."
sleep 2
else
echo '\033[1;33mThe "git" module was not installed. installing...'
sleep 2
pkg install git
sleep 2
if [ $? -eq 0 ]; then
echo '\033[0;32mThe "git" module was successfully installed.'
sleep 2
else
echo '\033[1;33mThe "git" module was not installed. Please try again.'
fi
fi
if [ -f /data/data/com.termux/files/usr/bin/gh ]; then
echo "\033[0;32mModules were found, proceeding..."
sleep 2
else
echo '\033[1;33mThe "gh" module was not installed. installing...'
sleep 2
pkg install gh
sleep 2
if [ $? -eq 0 ]; then
echo '\033[0;32mThe "gh" module was successfully installed.'
sleep 2
else
echo '\033[1;33mThe "gh" module was not installed. Please try again.'
fi
fi
echo '\033[1;33mSetting "git" wait...'
sleep 2
read -p 'The current directory will be hosted... do you agree? [Y/N default "Y"]: ' accept
case $accept in "N" | "n") exit;; esac
if [ -d "$(pwd)/.git" ]; then
read -p 'The ".git" folder was detected. Remove this file? [Y/N default "Y"]: ' accept
case $accept in "Y" | "y") rm -rf .git;; *) sleep 2;; esac
else
sleep 2
fi
echo "Proceeding, setting git config."
sleep 2
git config --global user.email "hosting@gmail.com"
git config --global user.name "setting"
path=$(pwd)
git config --global --add safe.directory /storage/emulated/0/${path#*/sdcard/}
git init
git add .
git commit -am "Firsh commit"
read -p "Write a name. By default one will be generated automatically: " name
if [ -z $name ]; then
echo "$(date +%H:%M:%S)"
gh repo create $(date +%H.%M.%S) --push --public --source ./
else
gh repo create $name --push --public --source ./
sleep 2
echo "Succesfully"
fi