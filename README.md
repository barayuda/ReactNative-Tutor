# How To Develop Mobile App using React Native

We are living in the 21st-century. A place where people are so obsessed with technology that most of them cannot live without their smartphones. We live in a world of a variety of mobile devices majorly dominated by two platforms - iOS and Android. I am sure we all can agree on that. Building a mobile app is not an easy task though 

For iOS, we have to write code in Objective-C and Swift, while for Android, We have to code in java and Kotlin. Apart from using these different programming languages, the dev tools required to develop applications that can run on any of these platforms differs too. It's like two entirely different tech stack used by people to create applications for eighter of the mobile platforms. 

Modern-day developers, on the other hand, use a specific set of technology (HTML, CSS, and JavaScript) that is not only used to build web apps but also native mobile apps. These frameworks fall under an entirely separate category, also known as Cross-Platform Hybrid Frameworks. These are the sets of classes and libraries used by developers to create dynamic apps for different mobile devices. One such framework that we will be going to discuss in this tutorial is <b>ReactNative</b>. It is a cross-platform development framework that allows developers to create native apps for Android and iOS. 

## Aim of the tutorial
The tutorial aims to help JavaScript developers to build mobile apps (iOS and Android) using React Native. This tutorial is also for people who are aspiring developers and want to learn and develop mobile applications in less than a week. We will briefly discuss the following things in this tutorial:
- What is React Native? What are its pros and cons? 
- Step by step tutorial to develop a React Native mobile app
- How to boost productivity as a ReactNative Developer?
- How to deploy a React Native app on Google Play Store and Apple App Store? 

So without wasting any more second, let us get started.  

## About React Native
ReactNative is a cross-platform development framework allowing you to create native apps for Android and iOS. Unlike some other frameworks likes PhoneGap and Cordova, It does not have any web views. Instead, React Native uses native components that are provided by platforms like iOS and Android, giving developers a full-fledged native development experience while ensuring the safety of the users' experience. 

## Why should you choose ReactNative for your Next Mobile Project? 

- In a nutshell, one should use ReactNative for developing mobile apps for the love of JavaScript. Yes, you read it right! If you know JavaScript, you can use your existing JavaScript skills to build Native Mobile Apps using ReactNative. You don't need to hire two separate teams of developers to handle the two different mobile app code bases. Write apps using JavaScript, and share your product across Android and iOS. It is the sole reason why ReactNative exist in the first place (According to me).

- It provides a feature called Hot Reloading that increases the developer's productivity and also enhances the developer's experience. It allows developers to see the reflected change made in the code of the application instantaneously. Any change made in the large codebase will show in the app in less than 1 second. It is one feature that even the native mobile app development framework does not provide.

- One can use ReactNative in an existing Android or iOS app or can develop the new application from scratch with ease. 

- React Native follows the "Learn Once, Write Everywhere" philosophy. It allows developers to use the components that best follow the native concept of each platform. ReactJs is used to develop web apps, whereas ReactNative can be used to build mobile apps. 

## Developing our very first React Native App

In a simple language, ReactNative allows us to build mobile applications that look, feel, and perform much more like native apps. It uses the same fundamental UI building blocks as used by regular iOS and Android apps. We just put those building blocks together using JavaScript and React. The best thing is that we use similar concepts that we use while developing web applications.  

We write the "hello world" program whenever we learn any new programming language. Similarly, the first app that you will develop while learning React Native is the "Hello World" App.

### Pre-requisites: Setting Up the Development Environment
To dive deeply into the React Natives ecosystem, we need to install a few things first to get started. Let us go through each of them one by one. 

### Node JS 
ReactNative uses NodeJs, a JavaScript runtime, to build our Javascript code. If you don't have Nodejs installed already, you can get it from its official website. 
Link: <a href="https://nodejs.org/">https://nodejs.org/</a>

### CLI
There are two ways to develop our first mobile app in ReactNative. We can do it with the help of either the <b>Expo CLI</b> or <b>ReactNative CLI.</b> 

### What is Expo CLI and ReactNative CLI? 
The primary use of both the CLI is to scaffold a starter project containing everything we need to build and run a ReactNative App. We will install one of the CLI with the help of the Node Package Manager. The Package Manager will install this CLI tool as a global module. 

- The first way to develop a starter ReactNative App is with the help of Expo CLI. Expo is a set of tools built around React Native. If you are new to mobile development, I would highly recommend you to use it as it can get you started within minutes. 

- The second is through ReactNative CLI. It is best to install ReactNative CLI when we want to use native code in our app. It does not require the expo library. However, it makes things a little complex for code Newbies. 

For simplicity, I will use Expo CLI here, as it is easy and as simple as writing the hello world program.

One can download expo-cli using npm

```npm install -g expo-cli```

### Start a React Native Project 
To create a new app, we will use the expo init command that will set up a new ReactNative app called HelloWorld.

``` 
expo init HelloWorld

cd AppName

```

### Small Tiny Steps: One At a Time 
Let's look at the file structure and understand each file and folder one by one. 

![Alt text](https://github.com/karanjagota/ReactNative-Tutor/blob/main/assets/raw_images/file_structure.png?raw=true "Title")

#### App.js 
The first file in any react native app that is the entry point of the app development process. Whatever you write inside this file, it will get displayed on mobile devices.

```
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

#### package.json 
It is where every dependency installed gets listed. 

```
{
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "eject": "expo eject"
  },
  "dependencies": {
    "expo": "~39.0.2",
    "expo-status-bar": "~1.0.2",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": "https://github.com/expo/react-native/archive/sdk-39.0.3.tar.gz",
    "react-native-web": "~0.13.12"
  },
  "devDependencies": {
    "@babel/core": "~7.9.0"
  },
  "private": true
}
```

#### gitignore 
gitignore file is a file that can be any file or a folder that contains all the files that we want to ignore. The developers ignore files that are not necessary to execute the project.

```
node_modules/**/*
.expo/*
npm-debug.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
web-build/

# macOS
.DS_Store
```

#### node_modules/ 
It is a folder that contains all the dependencies/ packages used to develop and run our mobile application.

#### ios/ 
It is for containing an Xcode project and the code required to bootstrap the app for ios devices. Since we are using expo-cli, the folder may not be seen explicitly in our starter project.

#### android/ 
It is for containing the Android-related code to bootstrap the app for android devices. Since we are using expo-cli, the folder may not be seen explicitly in our starter project.

#### App Registry 

AppRegistory is the Js entry point to run a React Native Application. App Component or any other root component in the app should register by using App Registry.registerComponent such that the native system can load the bundle of the app and run the app by starting the AppRegistory.runApplication method. 

### Run The App
Run the below command in the terminal-

```
npm start
```

The command will start the development server at-
link: exp://127.0.0.1:19000

Clicking on the link, Metro Bundler will open in the browser.

![Alt text](https://github.com/karanjagota/ReactNative-Tutor/blob/main/assets/raw_images/metrobundler.png?raw=true "Title")

### Install Expo and Test App
We will also need to install the Expo app on the ios and Android phone to test our mobile app. After installing from App Store and Google Play Store, connect it with the same wireless network.

Open the app and scan the QR code that appears in the Metro Bundler to test the app.

![Alt text](https://github.com/karanjagota/ReactNative-Tutor/blob/main/assets/raw_images/exposcan.jpg?raw=true "Title")

Change the text in the app.js file to HelloWorld to get the desired result. 

### Building Blocks Of ReactNative

<b>Components</b> are the visual elements that you see on the screen in a ReactNative App. There are several components made available for you to use by the ReactNative core. That's what makes ReactNative great! To understand it better, we can categorize these components into different categories:

- Core Components : 
These include - View, Text, Image, ScrollView, TextInput, StyleSheet.

- List Components : 
These include - FlatList and Section List.

- Form Control Components:
These include Button, Slider, Picker, Switch.

- Platform Dependent Specific Components:
iOS : AlertIOS, PushNotificationIOS, ActionSheetIOS, etc. 
Android: ToastAndroid, PermissionsAndroid, DatePickerAndroid, etc. 

- Miscellaneous Components : 
There are tons of other components that ReactNative provide for us to make developers job easy. Some of these include Alert, Animated, CameraRoll, Dimensions, Keyboard, WebView, etc. 

Apart from these built-in components, we can create our custom components, or we can incorporate custom components created by someone else into our projects. For instance, In this app, I am using <b>Card</b> Component provided by the <b>react-native-elements</b> library created by a community of ReactNative developers. 

Let us look at how to use these components one by one in detail-

#### View
We start by declaring a View component, which is the basic building block in a ReactNative file. It maps the fundamental native iOS (UIView) and Android's (View) Components. You can think of this component as a div element from HTML. Hence, the View component can contain nested components. 

#### StyleSheet
We provide styles to the View component via the Stylesheet. Stylesheet in ReactNative provides a way to create styles inside the component file. It takes a JavaScript object as it does from above and returns a new StyleSheet object from it. There is no id or class in ReactNative, like in Web development. To create a new style object, we can use Stylesheet.create() method. 

#### Text 
The text component, in many ways, is just like the View component, except that it is specifically available to display text. Also, like a View component, it supports styling.   

#### Code

```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewstyle}>
      <Text style={styles.textstyle}>Text Component Inside a View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewstyle:{
   flex:1,
   margin:10 
  },
  textstyle: {
    fontSize:18,
    backgroundColor: '#f50057',
    marginBottom: 10,
    color:'#ffffff',
    padding:10,
    textAlign: 'center',
    borderRadius:20
  },
});
```

#### ScrollView 
As the name suggests, it provides a solution to scrolling content across any screen height. It supports both vertical and horizontal scrolling along with an optional option to pinch to zoom feature. 

#### Flat List
It is a component that allows developers to present a list of similarly structured data items in a scrollable way. It is generally preferred over the scroll view when the number of data items in the list changes over time. 

### Code
```
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

export default function App() {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <ScrollView>
                  { 
                      arr.map((num)=>
                      <View>
                      <Text style={styles.textstyle}>Scrollable Content Text {num}</Text>
                      </View>
                      )}
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  textstyle: {
    fontSize:18,
    backgroundColor: '#00B0FF',
    marginBottom: 5,
    color:'#000000',
    padding:20,
    textAlign: 'center',
  },
});
```
#### Image
It is a component that provides a way to display images on the screen. It supports images from any format. One can get the picture from either the local storage or the network. 

#### Dimensions 
The dimension component of ReactNative allows the developers to get the dimensions of the application's window / mobile screen. It may change according to device rotation and type.

#### Code

```
import React from 'react';
import { StyleSheet,View, Image, Dimensions } from 'react-native';

export default function App() {
  return (
    <View>
      <Image 
        source={require('..assets/images/my_image.png')}
        style = {styles.im}
      />            
   </View>
  );
}

const styles = StyleSheet.create({
  im:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height/2
  }
});
```

#### Button
As the name suggests, the button component is the easiest way to allow the developers to provide a way for their users, handle touch gestures on the mobile screen. 

#### Text Input 
It is a core component that lets users input text on the screen. 

#### Pressable
It is a core component of ReactNative that provides a more flexible way to respond to touch gestures on the mobile screen. With its help, we can make the child components feel and appear much more native. 

#### ToastAndroid
ToastAndroid component of ReactNative exposes the Android platform's ToastAndroid module as a JS module. It will only appear on mobile phones with Android as an Operating System.  

#### Alert 
Alert Component of React Native provides an Alert box with title and message. It can be merely compared to a dialogue box, as seen on Android or iOS devices. It has an option to provide optional buttons for users to interact.

#### Code

```
import React from 'react';
import { StyleSheet,View,Button, Alert, Platform, ToastAndroid, TextInput } from 'react-native';

export default function App() {
  const showalert = ()=>{ Alert.alert('Alert Component','You Pressed Alert Button!')}
  const showtoast = ()=>{ if(Platform.OS=="android")ToastAndroid.show('You Pressed ToastMessage',ToastAndroid.SHORT)}
  return (
    <View>
      <Button 
        style = {styles.button} 
        onPress={showalert} 
        title="Button For Alert" />
      <Button
        style = {styles.button}
        onPress={showtoast}
        title="Button For Toast" />    
      <TextInput 
        style={styles.tinput}
        placeholder="This is a Text Input Component!" />  
    </View>
  );
}

const styles = StyleSheet.create({
  button:{padding:10,marginBottom:10,backgroundColor:"#F9A826",color:"#ffffff" },
  tinput:{ padding:10, marginBottom:5,fontSize:15 }
});
```

### Props, State and Hooks 

Props, State and Hooks are utilized to customize the components and make them interactive. In general, while developing, we will use these components (built-in and user-defined), props state, and hooks together to create a stunning mobile app. We will briefly discuss and implement the code for each of the above, one by one.

#### Props
Props, short form for Properties are the parameters for components. They are the easiest way to customize it at the time of creation. 

For instance: In Text(core component), style is a prop provided by React Native.

The only thing to remember is that we can pass data or functions as props. With props and core components combined, we can create a wide variety of stunning visuals for our app by reutilizing one component with different props as parameters whenever required. Let us look at a simple example:

In the above code snippet, we have developed a customized core React Native component <Text> to <MyComponent>, where we can <addtext> as a prop.

#### Code

```
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Mycomponent(props){
  return(
      <Text style={styles.textstyle}>
        Hello {props.addtext}
      </Text>
  );
}

export default function App() {
  
  return ( 

   <View style={styles.cv}>
     <Mycomponent addtext="From 1st Prop" />
     <Mycomponent addtext="From 2nd Prop" />
    </View>

  );
}

const styles = StyleSheet.create({ viewstyle:{ flex:1, margin:10 },
  textstyle: {fontSize:18,backgroundColor: '#f50057',marginBottom: 10,color:'#ffffff',padding:10,textAlign: 'center',borderRadius:20},
  cv:{
    marginBottom:15
  }
});
```
#### State
We use a state for the data that is going to change over time. Consider state as mutable while props immutable in a React Native App.   

#### Hooks
Hooks in React are functions that allow developers to use React state and a component's lifecycle methods in a functional Component. React provides a few built-in Hooks like useState and use effect. Developers can also create their Hooks to re-use the stateful behavior between different components. It provides an API to ReactNative concepts such as props, state, context, refs, and lifecycle.

#### Difference between Props and State and When to use what? 
Props, in general, are immutable and are fixed throughout the lifetime of the component. State, on the other hand, is mutable and can be changed at any time in the future. 

#### Code

```
import React, { useState } from 'react';
import { StyleSheet, TextInput,Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  return ( 
  <View style = {styles.viewstyle}>
      <TextInput
          style={{height: 40, padding:20,margin:15}}
          placeholder="Type Anything! "
          onChangeText={name => setName(name)}
        />
      <Text style={styles.textstyle}>{name}</Text>  
  </View>
  );
}
const styles = StyleSheet.create({
  viewstyle:{flex:1,margin:10 },
  textstyle: {
    fontSize:18,
    backgroundColor: '#f50057',
    marginBottom: 10,
    color:'#ffffff',
    padding:10,
    textAlign: 'center',
    borderRadius:20},
});
```

### Permissions

Permission modal for users varies from platform to platform. However, in here, we will look at how to ask for permissions in ReactNative, specific to the Android Platform. 

In Android, SDK level 23 (Marshmallow), and above, there are two types of permissions - one that needs to add in the manifest file, which the user grants at the time of installation of the app, and second that the developers need to ask at the runtime for granting permission. These permissions not only needs to be included in the manifest file but also has to include at the runtime. These permissions that require a dialogue prompt at the run time is called Dangerous Permissions.

Some of them that we will see in this tutorial are as follows:

<b>CAMERA</b>

<b>READ_CONTACTS</b>

<b>WRITE_CONTACTS</b>

<b>RECORD_AUDIO</b>

<b>READ_EXTERNAL_STORAGE</b>

<b>WRITE_EXTERNAL_STORAGE, and many more.</b> 

Let us look at each of them with the help of an example. 

#### Code

```
import React, { useState } from "react";
import { StyleSheet, Text, View, PermissionsAndroid, Button,Alert } from "react-native";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Camera Permission!",
        message:
          "Need Permission to access camera",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      });
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {  } else { }
     } catch (err) { console.warn(err);}};

export default function App() {
  const [perm, setPerm] = useState('Check Camera Permission!')
  const checkPerm = async ()=>{
    const res = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
    if(res==true){setPerm("Camera Permission Granted")}
      else if(res==false){setPerm("Camera Permission Not Guranted")}
  }
  return ( 
    <View style={{padding:20,margin:20}}>
    <Text style={{fontSize:18,color:'#ffffff',backgroundColor:'#F50057',padding:12,marginBottom:2,textAlign:'center'}}>{perm}</Text>
    <Button title="REQUEST FOR CAMERA PERMISSION" onPress={requestCameraPermission} style={{borderRadius: 0, padding:10, marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#F9A826"}} />
    <Button title="CAMERA PERMISSION STATUS" onPress= {checkPerm} style={{borderRadius: 0, padding:10, marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#F9A826"}} />
    </View>  
  );
}
```

### Navigation
Navigating through screens is a necessary part of any mobile application. It is vital for every mobile application. We all can agree with that, I am sure. However, for mobile applications, React Native does not provide a standard way or approach to solving the problem of navigating through different screens. Therefore, there are various options out there on the web to get the job done. 

#### Different Navigation Solutions
When we talk about navigation, there are many libraries out there on the web because there is no standard way in the ReactNative documentation for navigating screens. Because of ReactNative popularity, a large number of open-source developers came together and developed a solution to the problem. We can categorize each of these navigating solutions into two separate categories-

- JavaScript Navigators: These are navigators written and executed in the JavaScript language. 

- Native Navigators: These are navigators written in the platform (iOS and Android) native language (typically Objective-C or Java) and are exposed to React Native via a JavaScript API. 

#### Why ReactNavigation? 
Honestly, I don't know. I searched online, and ReactNavigation came up at the top of the web page search result. I looked at the documentation, tried out one of its samples application, and voila! I found the solution to the navigating problem in my ReactNative App. ReactNavigation has more than 18k stars on Github and has an active community of developers working on the project consistently. ReactNavigation is built and funded by expo and Software Mansion, with contributions from many individual sponsors.

It is a powerful library that provides different types of navigation options like :
- Stack Navigator
- Drawer Navigator
- Bottom Tab Navigator
- Material Top Tab Navigator and many more. 

In this tutorial, we will briefly discuss <b>React Navigation</b>, a third-party open-source library for routing and navigating in the ReactNative Apps.  It has more than 18k stars on Github, and almost everyone I know in the ReactNative community has heard and used it at some point in their project. We will implement a Simple Stack Navigator, the one that React Native Tutor app also uses. So without wasting any more second, let us get started.

#### Stack Navigator 
In StackNavigator, we place a new screen on top of a stack in StackNavigator. ReactNative Tutor uses a StackNavigator as a navigator solution to navigate through different screens. So, we will try to replicate it in this tutorial. 



















