# ReadMe Node-API-Boilerplate
#node-api-boilerplate

Absolutely basic setup for a ::Node | Express | TypeScript | MongoDB:: based backed development environment. Build is prepped to be easily connected with **MongoDB service providers** such as [[MongoDB Hosting: mLab](https://mlab.com/)] or your own local MonboDB database.

## Setup
After cloning the repository, unpack, go to its folder and run installation script. The build requires globally installed TypeScript as well. For those, you need to run ::
```bash
> yarn global add typescript
	.../...
> yarn install
	.../...
> npm run build
	.../...
```

## NPM Scripts
* `> npm run build` :: Builds contents of the `~/lib` folder into the `~/dist` 					folder.
* `> npm run dev` :: Serves files from the `~/lib` folder for development purposes
* `> npm run start` :: Starts pre-built application served from the `~/dist` folder
* `> npm run prod` :: Builds and then Starts the application from the `~/dist` folder
* `> npm run patch:<type>` :: Pushes current commits to GitHub repo after updating its version. Available types ::
	* `patch` :: 0.0.0 -> 0.0.1
	* 	`minor` :: 0.0.0 -> 0.1.0
	* 	`major` :: 0.0.0 -> 1.0.0
 
## Current stack
#### Engines
* Node  `>=8.11.2`
* Npm  `>=5.6.0`
* Yarn  `>=1.5.0`

#### Global Dependancies
* TypeScript `>=3.0.0`

#### Dependancies
* @types/express `^4.16.0`
* body-parser `^1.18.3`
* express  `^4.16.3`
* mongoose  `^5.2.13`
* nodemon  `1.18.4`
