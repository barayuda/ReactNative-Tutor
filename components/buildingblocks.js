import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Dimensions,Alert,ToastAndroid, Platform,TextInput } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';

export default function BB({navigation}) {
  
    const data = [
    {title:"Introduction ",para: "Up till now, we have seen how to generate a React Native Project using the cli tool. We briefly discussed each file in the directory structure of a ReactNative app, and we launched our app on our phone using the expo app that we downloaded from the app store and google play store. \n\nIf you are unfamiliar with any of the above text, I would highly recommend you to take a step back and learn about it in the Getting Started with ReactNative tutorial but, If you have already launched your very own Hello World app, then Congratulations! You can now proceed further to hone your ReactNative mobile app development skills.\n\nIn this tutorial, we will briefly discuss the fundamental building block of developing a ReactNative App, and that is Components. We will also implement the code as we discuss each component that the React Native provides in detail.  "},
    {title:"What are the Components? ",para: "Components are the visual elements that you see on the screen in a ReactNative App. There are several components made available for you to use by the ReactNative core. That's what makes ReactNative great! To understand it better, we can categorize these components into different categories:\n\nCore Components : \nThese include - View, Text, Image, ScrollView, TextInput, StyleSheet.\n\nList Components : \nThese include - FlatList and Section List.\n\nForm Control Components:\nThese include Button, Slider, Picker, Switch.\n\nPlatform Dependent Specific Components:\niOS : AlertIOS, PushNotificationIOS, ActionSheetIOS, etc. \nAndroid: ToastAndroid, PermissionsAndroid, DatePickerAndroid, etc. \n\nMiscellaneous Components : \nThere are tons of other components that ReactNative provide for us to make developers job easy.Some of these include Alert, Animated, CameraRoll, Dimensions, Keyboard, WebView, etc. \n\nApart from these built-in components, we can create our custom components, or we can incorporate custom components created by someone else into our projects. For instance, In this app, I am using Card Component provided by the react-native-elements library created by a community of ReactNative developers."},
    {title:"Components In Detail",para: "Let us look at how to use these components one by one in detail and create our very first mobile app using React Native.\n"}]
    const vst = {title:"View, StyleSheet and Text",explanation:"The above code snippet is a typical pattern style that you will see quite often in React Native.\n\nLet us understand the code line by line.\n\nimport React from 'react'\nimport { StyleSheet, Text, View } from 'react-native'\n\nThe first line import the modules required to run the app using React Library.\n\nThe second line imports the specific module from the React Native core Library.\n\nIn the above code, we are importing Stylesheet, Text, and View Component.\n\nexport default function func_name(){\nreturn ( // View )}\n\nAs we know from above that the ReactNative App consists of components. These are the visual blocks that we see on the screen. The above code is a standard way of creating a function-based component that can be used anywhere within the app.\n ",embed_code:"<script src='https://gist.github.com/karanjagota/6b44d789b6fae4f649e4a20285d6f9a9.js'></script>",para:"View\n\nWe start by declaring a View component, which is the basic building block in a ReactNative file. It maps the fundamental native iOS (UIView) and Android's (View) Components. You can think of this component as a div element from HTML. Hence, the View component can contain nested components. \n\nStyleSheet\n\nWe provide styles to the View component via the Stylesheet. Stylesheet in ReactNative provides a way to create styles inside the component file. It takes a JavaScript object as it does from above and returns a new StyleSheet object from it. There is no id or class in ReactNative, like in Web development. To create a new style object, we can use Stylesheet.create() method.\n\nText\n\nThe text component, in many ways, is just like the View component, except that it is specifically available to display text. Also, like a View component, it supports styling.\n"}
    const sv = {title:"ScrollView and FlatList",explanation:"The above code snippet is pretty much self-explanatory.First, we import the module ScrollView from the react-native library. Next, we create a function-based component where we add Views to the ScrollView Component. In the above code, we add list items to the ScrollView Component with an array with the help of JSX. We pass style as a prop to the text component that takes an object created using the StyleSheet component.\n",embed_code:"<script src='https://gist.github.com/karanjagota/2d53cf53635617e60984df9c1a743cac.js'></script>",para:"ScrollView\n\nAs the name suggests, it provides a solution to scrolling content across any screen height. It supports both vertical and horizontal scrolling along with an optional option to pinch to zoom feature.\n\nFlat List\n\nIt is a component that allows developers to present a list of similarly structured data items in a scrollable way. It is generally preferred over the scroll view when the number of data items in the list changes over time. \n"}
    const im =  {title:"Image and Dimensions",explanation:"In the above code snippet, we load an image stored in the assets folder of our project directory. The image component of the React Native takes source as a prop using which we can add our pictures to the screen.  We set the image width and height using the Dimensions component provided by the React Native library that contains methods to capture the dimensions of the application window. \n",embed_code:"<script src='https://gist.github.com/karanjagota/ab9677675f586a9d5ef74ccccecc8134.js'></script>",para:"Image\n\nIt is a component that provides a way to display images on the screen. It supports images from any format. One can get the picture from either the local storage or the network. \n\nDimensions\n\nThe dimension component of ReactNative allows the developers to get the dimensions of the application's window / mobile screen. It may change according to device rotation and type.  \n"}
    const arr = [1,2,3,4,5]
    const bta = {title:"Button, Text Input, ToastAndroid, and Alert",embed_code:"<script src='https://gist.github.com/karanjagota/e715541a19d4d2437382c547fdc2a2a6.js'></script>",para:"Button\n\nAs the name suggests, the button component is the easiest way to allow the developers to provide a way for their users, handle touch gestures on the mobile screen. \n\nText Input\n\nIt is a core component that lets users input text on the screen.\n\nToast\n\nToastAndroid component of ReactNative exposes the Android platform's ToastAndroid module as a JS module. It will only appear on mobile phones with Android as an Operating System.  \n\nAlert\n\nAlert Component of React Native provides an Alert box with title and message. It can be merely compared to a dialogue box, as seen on Android or iOS devices. It has an option to provide optional buttons for users to interact.\n",explanation:"The above code snippet is pretty much self-explanatory. The Button component of ReactNative takes style, title, and onPress props.  In the above code, we pass methods as props that display an alert message and toast message (Android) on the button click. We check the information on the platform by using the Platform component of React Native.\n"}
    const presshandler = (link,s)=>{ navigation.push('DApplication',{link:link,setq:s})}
    const openalert =()=>{Alert.alert('Alert Component','You pressed Alert Button!')}
    const opentoastandroid = ()=>{if(Platform.OS=="android")ToastAndroid.show('You pressed Toast Message',ToastAndroid.SHORT);}
    return (
      <ScrollView>
            <Card>
              <Card.Title style={{color:'#6C63FF'}}>Building Blocks</Card.Title>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/undraw_start_building.png')} />             
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
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{vst.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{vst.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left'}}>Example</Card.Title>
                  <Card.Divider/>   
                  <View>
                    <Text style={{fontSize:18,color:'#ffffff',backgroundColor:'#F50057', marginBottom:10 ,padding:10,textAlign:'center',borderRadius:20}}>Text Component Inside a View</Text>
                  </View>
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: vst.embed_code}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(vst.embed_code,0)} /> 
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Explanation</Card.Title>
                  <Card.Divider/> 
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{vst.explanation}</Text>
                  </View> 
              </Card>

              <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{sv.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{sv.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left'}}>Example</Card.Title>
                  <Card.Divider/>   
                  <ScrollView scrollEnabled={true} style={{height:150}}>
                  { 
                      arr.map((num)=>
                      <View key={num}>
                      <Text style={{fontSize:18,color:'#000000',backgroundColor:'#00B0FF',padding:12,marginBottom:2,textAlign:'center'}}>Scrollable Content Text {num} </Text>
                      </View>
                      )}
                     </ScrollView>
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: sv.embed_code}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(sv.embed_code,0)} />  
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Explanation</Card.Title>
                  <Card.Divider/> 
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{sv.explanation}</Text>
                  </View> 
              </Card>

              <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{im.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{im.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left'}}>Example</Card.Title>
                  <Card.Divider/>   
                  <Card.Image resizeMode='cover' source={require('../assets/raw_images/undraw_react.png')} /> 
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: im.embed_code}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(im.embed_code,0)} />  
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Explanation</Card.Title>
                  <Card.Divider/> 
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{im.explanation}</Text>
                  </View> 
              </Card>      

              <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{bta.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{bta.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left'}}>Example</Card.Title>
                  <Card.Divider/>   
                
                  <Button 
                    buttonStyle={{borderRadius: 0, padding:10, marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#F9A826"}}
                    title='Button For Alert'  onPress={openalert} /> 
                  <Button 
                    buttonStyle={{borderRadius: 0, padding:10, marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#F9A826"}}
                    title='Button For Toast'  onPress={opentoastandroid} />   
                 <TextInput 
                      style={{padding:10,marginBottom:5,fontSize:15}}
                      placeholder="This is a Text Input Component!"
                  />  
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: bta.embed_code}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(bta.embed_code,0)} />  
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Explanation</Card.Title>
                  <Card.Divider/> 
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{bta.explanation}</Text>
                  </View> 
              </Card>  
    </ScrollView>
    );
  }