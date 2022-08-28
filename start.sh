#!bin/bash
#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
#gh auth refresh -h github.com -s admin:public_key
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
				case $accept in "N" | "n") sleep 2; echo "Open the current directory."; exit;; esac
				if [ -d "$(pwd)/.git" ]; then
					read -p 'The ".git" folder was detected. Remove this file? [Y/N default "Y"]: ' accept
					case $accept in "Y" | "y") rm -rf .git; git init;; *) sleep 2;; esac
					else
					sleep 2
					fi
					echo "Proceeding, setting git config."
					sleep 2
					if [ -d "$(pwd)/.git" ]; then
						echo "git detected"
						git add .
						git config --global --add safe.directory /storage/emulated/0/${path#*/sdcard/}
						git commit -am "Firsh commit"
						read -p "Paste the url of your project: " name
						if [ -z $name ]; then
							echo "Paste the url and try again..."
							sleep 2
							exit
							else
							git remote add origin "$name"
							sleep 2
							git push origin master
							sleep 2
							fi
							else
							git config --global user.email "hosting@gmail.com"
							git config --global user.name "@github"
							path=$(pwd)
							git config --global --add safe.directory /storage/emulated/0/${path#*/sdcard/}
							git add .
							git commit -am "Firsh commit"
							read -p "Write a name. By default one will be generated automatically: " name
							if [ -z $name ]; then
								gh repo create $(date +%H.%M.%S) --push --public --source ./
								else
								gh repo create $name --push --public --source ./
								sleep 2
								fi
								fi
								echo "Succesfully"