# Infiviz Shots Rewrite


## Pre requisites

- [node version: v10.19.0 or v12.16.3](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [React-native-cli: 2.0.1](https://www.npmjs.com/package/react-native-cli)
- [Xcodebuild: 11.3.1](https://developer.apple.com/xcode/)
- [Cocoapods: 1.8.4](https://guides.cocoapods.org/using/getting-started.html)
- [Android Studio](https://developer.android.com/studio/install)

## Running the Project.
   - iOS 
      - Make sure to install the device components. [Please refer this article for the refrence](https://medium.com/@hacknicity/working-with-multiple-versions-of-xcode-e331c01aa6bc).
      - ```npm install && cd ios && pod install && cd ..``` run this command to install all the npm packages and pods.
      - ```npm run ios --simulator "--iPhone11"``` the iPhone11 specifies the version of iOS device component in xcode and make sure the version is installed.
      - To run the build on physical device refer this [document here](https://reactnative.dev/docs/running-on-device).
   
   ###### - Android
      - Please refer this article to setup android studio on your windows machine [here](https://codeburst.io/setting-up-development-environment-using-react-native-on-windows-dd240e69f776). For macbook refer [here](https://medium.com/@randerson112358/setup-react-native-environment-for-ios-97bf7faadf77).
      - Follow the instructions given in this [article](https://reactnative.dev/docs/running-on-device) to run the app on a physical android device. 
      - Follow these [instructions To create an APK](https://medium.com/@hasangi/making-a-signed-apk-for-your-react-native-application-98e8529678db)


:runner:
