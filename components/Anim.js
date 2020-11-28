import * as React from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements'
import { WebView } from 'react-native-webview';
import AnimateImage from '../components/animcomp';


export default function AN({navigation}) {
  
    const data = [
        {title:"Introduction",para:"Every app needs Animation. It makes a mobile app visually appealing. It not only makes the app cool for the users but also enhances their experience. From Onboarding screens to laying out the Components on the screen, it is used almost everywhere in the app. \n\nIn this tutorial, we will briefly discuss the Animated API in ReactNative. We will create a component that utilizes the Animated API of  ReactNative to animate an image view in the ReactNative app.  "},
        {title:"About Animated Library",para:"Animated module of the ReactNative provides developers an easy way to add smooth animations to the React Native app. Animated API can animate the built-in components like View, Text, ScrollView, Flat List, and Section List in a performant way. It also allows us to create our Animation using the CreateAnimatedComponent() method.\n"}    
      ]
    const an = {title:"Animation Tutorial",embed_code:"<script src='https://gist.github.com/karanjagota/6575ff2bc0ab93e5592b03e3e795bede.js'></script>",explanation:"In the above code snippet, we use the Animated API to animate an image that is in the asset directory. Animated provides a sequence() method that builds the composition of two animations. These animations will be executed sequentially(one after the other).\n\nThe first timing() method manages the Scale Value from the state with a duration of 1.5 seconds in an Easing manner. It also changes the value from 1 to 1.4x. The second timing() method makes the scale value of the image from 1.4x to 1.\n\nWe are also using a callback function animateImage() to perform the Image Animation in the loop.\n",para:"We will create an animation where we change the size of the image from 1x to 1.4x and then will make it resize from 1.4x to 1x over a few seconds.\n"}  
    const sumry = {title:"Summary",para:"In this tutorial, we learned the following things-\n\n1. Discussed the Animated API. \n\n2. Implemented the animation code using the Animated API. \n"}
    const presshandler = (link,s)=>{ navigation.push('DApplication',{link:link,setq:s});}
    return (
      <ScrollView>
        <Card>
              <Card.Title style={{color:'#6C63FF'}}>Animations In Reaact Native</Card.Title>
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
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{an.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{an.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left'}}>Example</Card.Title>
                  <Card.Divider/>   
                  <View>
                    <AnimateImage/>
                  </View>
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: an.embed_code}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(an.embed_code,0)} /> 
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Explanation</Card.Title>
                  <Card.Divider/> 
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{an.explanation}</Text>
                  </View> 
              </Card>


              <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{sumry.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{sumry.para}</Text>
                  </View>                 
              </Card>


    </ScrollView>
    );
  }
