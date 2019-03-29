# Amber
🚑 Amber - Ambulance app for the emergency situations. 🚑

:atom: Built using React Native :atom:

## Installation/Setup
- Install **React Native CLI** setup. [Find the instructions here](https://facebook.github.io/react-native/docs/getting-started.html).
- Run `npm install` or `yarn` to install all the node modules.
- There is one small change you have to do in one of the installed packages in order to compile properly.
Navigate to `node_modules/react-native-maps/lib/android/`, open `build.gradle`
and add these lines before the closing curly bracket.
```
implementation "com.android.support:support-core-utils:28.0.0"
implementation "com.android.support:support-core-ui:28.0.0"
implementation "com.android.support:support-fragment:28.0.0"
```
- Start an *Android Emulator* (through Android Studio) or connect your Android device (make sure to have enabled USB Debugging in Developer options).
- Run `react-native run-android` and wait for it to compile. Once it does, it will open the app in the device.
