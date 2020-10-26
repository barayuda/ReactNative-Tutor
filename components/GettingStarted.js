import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { WebView } from 'react-native-webview';

export default function GS({navigation}) {

  const data = [
    {title:"Introduction",para:"In a simple language, ReactNative allows us to build mobile applications that look, feel, and perform much more like native apps. It uses the same fundamental UI building blocks as used by regular iOS and Android apps. We just put those building blocks together using JavaScript and React. The best thing is that we use the similar concepts that we use while developing web applications.\n\nWe write the 'hello world' program whenever we learn any new programming language. Similarly, the first app that you will develop while learning React Native is the 'Hello World' App.\n"},
    {title:"Pre-requisites:Setting Up the Development Environment", para:"To dive deeply into the ReactNative's ecosystem, we need to install a few things first to get started. Let us go through each of them one by one.\n"},
    {title:"Node JS",para:"React Native uses NodeJs, a JavaScript runtime, to build our Javascript code. If you don't have Nodejs installed already, you can get it from its official website. \n\nLink: https://nodejs.org/"},
    {title:"CLI",para:"There are two ways to develop your first mobile app in ReactNative. You can do it with the help of either:\n\n 1. The Expo CLI \n 2. ReactNative CLI. \n"},
    {title:"What is Expo CLI and ReactNative CLI? ",para:"The primary use of both the CLI is to scaffold a starter project containing everything we need to build and run a ReactNative App. We will install one of the CLI with the help of the Node Package Manager. The Package Manager will install this CLI tool as a global module.\n\nThe first way to develop a starter ReactNative App is with the help of Expo CLI. Expo is a set of tools built around React Native. If you are new to mobile development, I would highly recommend you to use it as it can get you started within minutes.\n\nThe second is through ReactNative CLI. It is best to install ReactNative CLI when we want to use native code in our app. It does not require the expo library. However, it makes things a little complex for code Newbies.\n\nFor simplicity, I will use Expo CLI in this tutorial as it is easy and as simple as writing the hello world program.\n"},
    {title:"Start a React Native Project",para:"Download expo cli using node package manager:\n\nnpm install -g expo-cli\n\nTo create a new app, we will use the expo init command that will set up a new ReactNative app called HelloWorld.\n\n\nexpo init HelloWorld\n\ncd AppName\n"},
    {title:"Small Tiny Steps: One At a Time ",para:"Let's look at the file structure and understand each file and folder one by one.\n"}
      ];

    const data2 = [
    {title:"App.js",embed_code:"<script src='https://gist.github.com/karanjagota/bb94034488f31262ca65dcfb18a32c6c.js'></script>",para:"The first file in any react native app that is the entry point of the app development process. Whatever you write inside this file, it will get displayed on mobile devices.\n"},
    {title:"package.json",embed_code:"<script src='https://gist.github.com/karanjagota/7093429b66246325ce22bebe5b7e74c2.js'></script>",para:"It is where every dependency installed gets listed. \n"},
    {title:"gitignore",embed_code:"<script src='https://gist.github.com/karanjagota/64e9797e4bb96c7f7121d5a6cfbe4a17.js'></script>",para:"gitignore file is a file that can be any file or a folder that contains all the files that we want to ignore. The developers ignore files that are not necessary to execute the project.\n"},
      ];
    const data3 = [
      {title:"node_modules/ ",para:"It is a folder that contains all the dependencies/ packages used to develop and run our mobile application.\n"},
      {title:"ios/",para:"It is for containing an Xcode project and the code required to bootstrap the app for ios devices\n\nSince we are using expo-cli, the folder may not be seen explicitly in our starter project.\n"},
      {title:"android/",para:"It is for containing the android related code to bootstrap the app for android devices.\n\nSince we are using expo, the folder may not be seen explicitly in our starter project.\n"},
      {title:"App Registry ",para:"AppRegistory is the Js entry point to run a React Native Application. App Component or any other root component in the app should register by using App Registry.registerComponent such that the native system can load the bundle of the app and run the app by starting the AppRegistory.runApplication method.\n"}
    ]; 
    const p= 'Run the below command in the terminal- \n\nnpm start \n\nThe command will start the development server at- \n\nlink: exp://127.0.0.1:19000  \n\nClicking on the link, Metro Bundler will open in the browser.\n';
    const ie = 'We will also need to install the Expo app on the ios and Android phone to test our mobile app. After installing from AppStore and Google Play store, connect it with the same wireless network.\n\nOpen the app and Scan the QR Code that appears in the Metro Bundler to test the app.\n';
    const sa = 'Simply, change the text in the app.js file to HelloWorld to get the desired result.\n'  
    const presshandler = (link,s)=>{ navigation.push('DApplication',{link:link,setq:s});}
    
      return (
      <ScrollView>
              <Card>
              <Card.Title style={{color:'#6C63FF'}}>Getting Started</Card.Title>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/start.png')} />             
              </Card>
           {data.map((obj)=>
              <Card key={obj.title}>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{obj.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{obj.para}</Text>
                  </View>                 
              </Card>
           )} 
           <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>File Structure</Card.Title>
                  <Card.Divider/>
                <Card.Image style={{height:Dimensions.get('window').height/3.5}} resizeMode="stretch"  source={require('../assets/raw_images/file_structure.png')} />                         
              </Card>
           {data2.map((obj)=>
              <Card key={obj.title}>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{obj.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <ScrollView>
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: obj.embed_code }} style={{flex:1,height:100,width:Dimensions.get('window').width}}/>
                  </ScrollView>
                  </View>  
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify',marginTop:20}}>{obj.para}</Text>
                  </View>
                  
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(obj.embed_code,0)} />          
              </Card>
            
           )}
           {data3.map((obj)=>
              <Card key={obj.title}>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{obj.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{obj.para}</Text>
                  </View>        
              </Card>
            
           )}

           <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>Run The App</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{p}</Text>
                  </View>        
            </Card>
            <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>Metro Bundler</Card.Title>
                  <Card.Divider/>
                <Card.Image style={{height:Dimensions.get('window').height/3.5}} resizeMode="stretch"  source={require('../assets/raw_images/metrobundler.png')} />                         
              </Card>
                 
            <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>Install Expo and Test App</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{ie}</Text>
                  </View>        
            </Card>    
            <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>HelloWorld App on iOS and Android</Card.Title>
                  <Card.Divider/>
                <Card.Image style={{height:Dimensions.get('window').height/3.5}} resizeMode="center"  source={require('../assets/raw_images/exposcan.png')} />                         
                <Card.Divider />
                <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{sa}</Text>
                  </View> 
              </Card>  
    </ScrollView>
    );
  }