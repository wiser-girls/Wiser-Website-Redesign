# Jekyll/Cloudcannon Suite Project Template #

This project uses Gulp, Jekyll, Cloudcannon Suite. It is meant for hosting on Cloudcannon, but it is possible to reconfigure for Firebase or GithubPages hosting.

## Getting Started ##
1. Install Node packages: `npm install`
2. Install Gem Dependencies: `gulp dev:install`


## Daily Startup ##
1. `cd` to project directory
2. Start environment: `npm start`
3. Navigate to [http://localhost:4000/](http://localhost:4000/)

## Deployment to ghPages ##
1. `cd` to project directory
2. Start environment: `npm run deploy`


============

### Mirror this template: ###
New repository must be created prior

https://help.github.com/articles/duplicating-a-repository/

Create a bare clone

`git clone --bare git@github.com:ocupop/jekyll-cloudcannon.git`

Push mirror to new repository

```
cd jekyll-cloudcannon.git
git push --mirror git@bitbucket.org:ocupop/<repo-name>
```

Remove temporary local instance

```
cd ../
cd
git clone git@bitbucket.org:ocupop/<repo-name>
```
Update project name the following files
.ruby-gemset
config.yml
package.json
README.md

Generate favicon: https://favicon.io