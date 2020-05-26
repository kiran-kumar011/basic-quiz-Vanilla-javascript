# Infiviz Shots Rewrite


## Pre requisites

- [node version: v10.19.0 or v12.16.3](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [react-native-cli: 2.0.1](https://www.npmjs.com/package/react-native-cli).
- [xcodebuild: 11.3.1](https://developer.apple.com/xcode/)
- [cocoapods: 1.8.4](https://guides.cocoapods.org/using/getting-started.html)

## Running the Project.
   - iOS 
      - Make sure to install the device components. [Please refer this article for the refrence](https://medium.com/@hacknicity/working-with-multiple-versions-of-xcode-e331c01aa6bc).
      - ```npm install && cd ios && pod install && cd ..``` run this command to install all the npm packages and pods.
      - ```npm run ios --simulator "--iPhone11"``` the iPhone11 specifies the version of iOS device component in xcode and make sure the version is installed.
      - To run the build on physical device refer this [document here](https://reactnative.dev/docs/running-on-device).
   
   - Android
      - Make sure to install the android studio and install the device images
      - Please refer this article to setup android studio on your windows machine [here](https://codeburst.io/setting-up-development-environment-using-react-native-on-windows-dd240e69f776). For macbook refer [here](https://medium.com/@randerson112358/setup-react-native-environment-for-ios-97bf7faadf77).
      -Follow the instructions given in this [article](https://reactnative.dev/docs/running-on-device) to run the app on a physical android device. 

3. Follow these [instructionsTo create an APK](https://medium.com/@hasangi/making-a-signed-apk-for-your-react-native-application-98e8529678db)


:runner:
