const readline = require('readline-sync');
const fs = require('fs-extra');
const exec = require('child_process').exec;
const time = require('moment-timezone').tz('America/Sao_Paulo').format('-HH-mm-ss');

const logger = async () => {
	return new Promise(async (resolve) => {
		var shell = readline.keyInYNStrict("Are you already logged into heroku?");
		if (shell) {
			const modules = await fs.readdir("/data/data/com.termux/files/usr/bin");
			if (modules.includes("git")) {
				if (modules.includes("heroku")) {
					console.log("All modules were found, proceeding...");
					resolve();
					}
					else {
						exec("npm i heroku -g", async (fail, stdout) => {
							if (fail) return console.log(`The "heroku" module was not installed. Please try again.`);
							console.log(`The "heroku" module was successfully installed.`);
							resolve();
							});
							};
							}
							else {
								exec("pkg install git", async (fail, stdout) => {
									if (fail) return console.log(`The "git" module was not installed. Please try again.`);
									console.log(`The "git" module was successfully installed.`);
									if (modules.includes("heroku")) {
										console.log("All modules were found, proceeding...");
										resolve();
										}
										else {
											exec("npm i heroku -g", async (fail, stdout) => {
												if (fail) return console.log(`The "heroku" module was not installed. Please try again.`);
												console.log(`The "heroku" module was successfully installed.`);
												resolve();
												});
												}
												});
												};
												}
												else {
													console.log(`Please login with your heroku account. Use the command "heroku login"`);
													process.exit();
													};
													});
													};

const config = () => {
	return new Promise(async (resolve) => {
		exec('git config --global user.email "hosting@gmail.com"', (fail, stdout) => {
			exec('git config --global user.name "onload"', (fail, stdout) => {
				exec("git init", async (fail, stdout) => {
					exec('git config --global --add safe.directory ' + process.mainModule.path, (fail, stdout) => {
						resolve();
						});
						});
						});
						});
						});
						};

const create = () => {
	return new Promise(async (resolve) => {
		var shell = readline.question("Write a name. By default one will be generated automatically. ");
		var app;
		if (shell) {
			app = shell.toLowerCase() + time;
			}
			else {
				app = process.mainModule.path.split('/0/')[1].toLowerCase() + time;
				};
				app.length > 30 ? app = app.split("-")[0].slice(0, 21) + time : "";
				exec("heroku apps:create " + app, (fail, stdout) => {
					if (fail) return console.log("Invalid credentials provided. Please login with heroku again.");
					exec("heroku git:remote -a " + app, (fail, stdout) => {
						console.log(`Your app name is "${app}"`);
						resolve();
						});
						});
						});
						};

const pack = (url, name) => {
	return new Promise(async (resolve) => {
		var shell = readline.keyInYNStrict(`Install "${name}"?`);
		if (shell) {
			exec("heroku buildpacks:add " + url, (fail, stdout) => {
				console.log(stdout);
				resolve();
				});
				}
				else {
					resolve();
					};
					});
					};

const ending = () => {
	return new Promise(async (resolve) => {
		exec("git add .", (fail, stdout) => {
			exec('git commit -am "hosting"', (fail, stdout) => {
				console.log(stdout);
				exec("git push heroku master", (fail, stdout) => {
					console.log(stdout);
					resolve();
					});
					});
					});
					});
					};

(async () => {
	const path = await fs.readdir(process.mainModule.path);
	if (path.includes(".git")) {
		var shell = readline.keyInYNStrict(`The ".git" folder was detected. Remove this file? (recommended for the first time)`);
		if (shell) {
			exec("rm -rf .git", async (fail, stdout) => {
				await logger().then(() => {
					config().then(() => {
						create().then(() => {
							pack("https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git", "ffmpeg").then(() => {
								pack("https://github.com/pathwaysmedical/heroku-buildpack-tesseract", "tesseract").then(() => {
									pack("heroku/nodejs", "nodejs").then(() => {
										pack("https://github.com/clhuang/heroku-buildpack-webp-binaries.git", "libwebp").then(() => {
											ending().then(() => console.log("Congratulations! the upload was completed."));
											});
											});
											});
											});
											});
											});
											});
											});
											}
											else {
												await logger().then(() => {
													config().then(() => {
														create().then(() => {
															pack("https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git", "ffmpeg").then(() => {
																pack("https://github.com/pathwaysmedical/heroku-buildpack-tesseract", "tesseract").then(() => {
																	pack("heroku/nodejs", "nodejs").then(() => {
																		pack("https://github.com/clhuang/heroku-buildpack-webp-binaries.git", "libwebp").then(() => {
																			ending().then(() => console.log("Congratulations! the upload was completed."));
																			});
																			});
																			});
																			});
																			});
																			});
																			});
																			};
																			}
																			else {
																				await logger().then(() => {
																					config().then(() => {
																						create().then(() => {
																							pack("https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git", "ffmpeg").then(() => {
																								pack("https://github.com/pathwaysmedical/heroku-buildpack-tesseract", "tesseract").then(() => {
																									pack("heroku/nodejs", "nodejs").then(() => {
																										pack("https://github.com/clhuang/heroku-buildpack-webp-binaries.git", "libwebp").then(() => {
																											ending().then(() => console.log("Congratulations! the upload was completed."));
																											});
																											});
																											});
																											});
																											});
																											});
																											});
																											};
																											})();