# React Native API-Driven
## Goal # 370

### Initial Setup
Install React Native dependencies
```
brew install node
brew install watchman
```
Install React Native CLI
```
npm install -g react-native-cli
```
[Install Xcode](https://developer.apple.com/xcode/downloads/)<br>
[Install AndroidStudio](https://developer.android.com/studio/index.html)<br>
[Install Java SE Development Kit](www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)<br>

Create a new project
```
react-native init gymFinder
cd gymFinder
react-native run-ios
```


#### Context

Build an app with a simple UI. Stay away from too many form fields, and keep the components’ state management minimal.

This is a great project to jump start your skills in mobile development, using react-native. 

#### Specifications

- [x] 10: You have an app component that feeds both Android and iOS JS files
- [x] 10: You can start the app with both react-native run-ios and react-native run-android
- [x] 10: You have at least 3 tests written using jest
- [x] 10: You have a home page that contains at least one touchable navigation button
- [x] 10: You have at least one extra screen to navigate to with rendered data
- [x] 10: Your rendered data is minimal in design and clean
- [x] 10: Your code is clean, and components are explicity named and have minimal responsibilities
- [x] 50: You are able to render third API data through navigating to a separate screen (example: a search button that onClick takes you to a results page.
- [x] 30: You have a complete readme that documents how to start your app and set up the dev environment hint: the scaffold repo will start you in the right direction
- [x] 30: You are properly protecting sensitive API ids and secret keys using config or env
