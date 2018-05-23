#Project Template#

This project uses Gulp, Webpack, Jekyll, React

##Getting Started##
1. Install Bundler: `gem install bundler`
2. Install dependencies: `bundle install`
3. Install Node packages: `npm install`

##Daily Startup##
1. `cd` to project directory
2. Start environment: `npm start`
3. Navigate to [http://localhost:9999/](http://localhost:9999/)


============

###Mirror this template:###
New repository must be created prior

https://help.github.com/articles/duplicating-a-repository/

Create a bare clone

`git clone --bare git@bitbucket.org:ocupop/website-project.git`

Push mirror to new repository

```
cd website-project.git
git push --mirror git@bitbucket.org:ocupop/<repo-name>
```

Remove temporary local instance

``` 
cd ../
rm -rf website-project.git
git clone git@bitbucket.org:ocupop/<repo-name>
```