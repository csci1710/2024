# 2023

`cd` into `my-app` and run `npm install` to install the dependencies on your local machine.

run `npm start` to run locally.

To deploy, run `npm run deploy` on your local machine. NOTE: It will deploy whatever state your local files reflect, and has nothing to do with files that have been pushed/comitted to github (except, of course, to the gh-pages branch which is where we "deploy" to). (Making changes locally and deploying will deploy the local version without affecting the comitted/pushed files in the working branches). This allows you to quickly toggle between deployed versions of the site by switching between branches on your local machine and deploying (for example, to temporarily put up a maintenence page, or similar).
