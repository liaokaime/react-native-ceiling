
# react-native-ceiling

## Getting started

`$ npm install react-native-ceiling --save`

### Mostly automatic installation

`$ react-native link react-native-ceiling`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-ceiling` and add `RNCeiling.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCeiling.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNCeilingPackage;` to the imports at the top of the file
  - Add `new RNCeilingPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-ceiling'
  	project(':react-native-ceiling').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-ceiling/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-ceiling')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNCeiling.sln` in `node_modules/react-native-ceiling/windows/RNCeiling.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Test.RNCeiling;` to the usings at the top of the file
  - Add `new RNCeilingPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNCeiling from 'react-native-ceiling';

// TODO: What to do with the module?
RNCeiling;
```
