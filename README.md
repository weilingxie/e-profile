## Features
### 1.Main frontend technology:
* React.js
* Boostrap

### 2.API:
[BBC news](https://newsapi.org/s/bbc-news-api)

### 3.Libraries:
* fortawesome: provide awesome icons
* animejs: provide varies animation effects
* babel: translate ES6 to lower version
* redux: state management, in this case, store the news info fetched from API
* react-router: route between different URLs or components
* react-transition-group: wrap component with all status (e.g. enter and exit) so that can apply different animation effect according to different status.

### 4.Project Structure:
public
-index.html (the app entry page, including all CDNs of libraries)
src
-actions (including API calls and redux actions)
-components (including pages and elements)
-reducers (redux reducers)
-routers (the router compnent of the app)
-selectors (functions to filter data)
-store (redux store and load/save store from/to local storage)
App.css
App.js
BBC_News.svg
Config.json (config related values e.g. api url )
index.css
index.js


### 5.Functionalities:
* As a user, I can see the list of news with picture and title
* As a user, I can search news by inputting part of the news title
* As a user, I can click on a news to see the detail of this news
* As a user, I can see login page
* As a user, I can see register page
* As a user, I can click on the left-top icon to go back to the home page
* As a user, I can click on icon to turn to the linkedin, facebook and youtube channel of Allied Telesis

### 6.Github 
[https://github.com/weilingxie/alliedtelesis](https://github.com/weilingxie/alliedtelesis)

### 7.Start the application
```
cd alliedtelesis
npm install
npm start
```


## Issues
- 1.As there is front-end only, so both register page and login page cannot truly register and login.
- 2.If directly type the url of one of the news detail without clicking from home page, for instance, `http://localhost:3000/newsdetail/0`, you will find there is only blank page without data. The reason is that the API is only called when loading the home page, then the data from API will be store in redux and localStorage. Therefore, you get no data if skipping the home page
- 3.Sometime when shrink the browser size, the layout of news list will get a bit messy as some of news title are too long so that they take 2 lines which affect the size of thumbnail, then some big space appear between thumbnails and not all line including just 3 thumbnails.


## Improvement
To solve the 3 issues above, I will:
- 1.Find out login and register APIs and add API call on the Login/Register button onChange callback function. Then store the login status, security info (token/session cookie) and basic user info in redux.
- 2.The workaround is to fire an API call if there is no data in redux/localStorage for news detail page as well. But for a formal web application, I prefer to call API to get the list of only picture and titles for all news, then when turn to news detail, fire another API to get the detail of this news. It will be a better performance to do like this when we have a lot of news. Additionally, it is a good habit to only ask for the data you needed for this page.
- 3.I will find the number of characters suit for one line in the thumbnail, and check the title of news, if it exceeds the length, I will cut it and add ‘…’ which keep all the titles take only one line.
- 4.There may exist some crash risk as I don't do null and undefine check and process for all data but only for part of them. If I have time, I will add check.
