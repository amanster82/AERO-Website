# Aero Website Repository

## Installation
Tools you will need, [NodeJS](https://nodejs.org/en/) and [Git](https://git-scm.com/downloads). 

### How to Install

1. Clone the repo ``` git clone https://<YOUR_USERNAME_HERE>@bitbucket.org/uvicaero/blog.git aerosite ```
2. Go to the repo ``` cd aerosite ```
3. Run ``` npm install ``` or if you are on linux ``` sudo npm install ```
3. Run ``` npm run-script dev ```
4. Go to ``` localhost:3000 ``` in your browser

## Tools used

### JavaScript/CoffeeScript
You will need a high level understanding of Javascript and how it relates to Node and Express (fun fact, Node != JavaScript), look this up don't be lazy.

If you understand JavaScript you already understand CoffeeScript (which is what is used on the backend), just think of it as being JavaScript++ where you don't need to use ``` var or ; ``` and it uses white space scoping like python. 

Tutorials are literally everywhere but if you want to take it for a spin checkout [CoffeScript's official site](http://coffeescript.org/) and click on *try CoffeeScript* at the top. You can paste any of the CoffeeScript used on the site into the interpreter and see what it compiles to. This really helps when you are learning about the language.

### Jade
Jade is a tempting language which compiles to html, it is white space scoping and doesnt require end tags you can find more information [at the official Jade site](http://jade-lang.com/). 

## Internal Documentation
### Config
This is going to be a bit of a mess as this site was done quickly. But the basic idea of the config is that you are setting up variables to be rendered in your jade views. The config object is accessible on any of the jade views. i.e When you see ``` layout.intro ``` in the jade view this is referencing the layout member of the config file and the config member within the layout member (just keep reading you will understand soon enough).

Look at ``` config/default.coffee ``` this is where the name of the variables are defined. i.e. ``` layout: require './layout.coffee' ``` tells you that the layout member of the config object is coming from the file ``` layout.coffee ```. If you don't know already look at [the require statement in node](https://gist.github.com/branneman/8048520). Too lazy? the require statement is a way to import other modules into your code