# Jekyll/Cloudcannon Project Template #

This project uses Gulp, Webpack, Jekyll, React. It is meant for hosting on CLoudcannon, but it is possible to reconfigure for Firebase or GithubPages hosting.

## Getting Started ##
1. Install Bundler: `gem install bundler`
2. Install dependencies: `bundle install`
3. Install Node packages: `npm install`

## Daily Startup ##
1. `cd` to project directory
2. Start environment: `npm start`
3. Navigate to [http://localhost:9999/](http://localhost:9999/)

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
rm -rf jekyll-cloudcannon.git
git clone git@bitbucket.org:ocupop/<repo-name>
```
