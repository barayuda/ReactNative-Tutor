import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image,Dimensions,TextInput } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements';

export default function LB({navigation}) {

    const data = [
    {title:"Intoduction",para: "Developers all around the world use open-source libraries in their software and applications. It not only helps developers to complete their day-to-day work on time but, to the most extent, improves their developing experience. I am sure about the fact that almost every app on the Google play store and Apple App Store use at least one open-source library. If not, then I feel sorry for the developer. Even I have used two open-source libraries in ReactNative Tutor:\n\n1. React Native Elements\n2. React Navigation\n\nHere, we will discuss the top 7 React Native libraries that are widely used by Developers in their React Native projects. \n"}, 
    {title:"React Native Elements",para:"It is a cross-platform UI toolkit for React Native. It has more than 19.6k stars on GitHub and provides a useful set of reusable components for React Native applications. \n\nLink: https://github.com/react-native-elements/react-native-elements \n"},
    {title:"React Navigation",para:"Navigation is an essential part of every application. React Native does not provide a standard way to navigate through screens in the applications. Therefore, there are many routing and navigation libraries out there on the web. React Navigation is one of them. Honestly, It's the best I have used up till now. It has more than 18k stars on Github.\n\nLink: https://github.com/react-navigation/react-navigation\n"},
    {title:"React Native Animatable",para:"Every app needs Animation. It makes a mobile app visually appealing. It is the easiest way to make an app not only cool but also enhances the user experience. From Onboarding screens to laying out the layouts on the screen, it is used almost everywhere in the app. React Native Animatable is one of them. It has more than 8k stars on Github and provides easy to use animations for React Native applications.\n\nLink: https://github.com/oblador/react-native-animatable"},
    {title:"React Native Localize",para:"The library provides the simplest and easiest way to internationalize the React Native app. With more than 1.3K stars on Github, it helps developers localize the app. \n\nLink: https://github.com/zoontek/react-native-localize"},
    {title:"Prop Types",para:"Prop-types is a package that allows developers to add runtime type checking to the components that ensure the types of props passed to Components are correct. It is genuinely a useful package that enhances my development experience. It has more than 3.6k stars on Github.\n\nLink: https://github.com/facebook/prop-types\n"},
    {title:"Want More-",para:"Apart from the above, there are tons of other useful libraries out there on the web. Search on your own according to your own need. We can also develop a library if something is not available already. \n"}
]
    return (
      <ScrollView>
       <Card>
              <Card.Title style={{color:'#6C63FF'}}>Top Libraries To Boost Productivity</Card.Title>
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
    </ScrollView>
    );
  }