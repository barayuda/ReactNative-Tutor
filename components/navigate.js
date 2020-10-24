import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'

export default function NV() {

    const data = [
        {title:"React Navigation",para:"Navigating through screens is a necessary part of any mobile application. It is vital for every mobile application. We all can agree with that, I am sure. However, for mobile applications, React Native does not provide a standard way or approach to solving the problem of navigating through different screens. Therefore, there are various options out there on the web to get the job done. \n\nIn this tutorial, we will briefly discuss React Navigation, a third-party open-source library for routing and navigating in the ReactNative Apps.  It has more than 18k stars on Github, and almost everyone I know in the ReactNative community has heard and used it at some point in their project. We will implement a Simple Stack Navigator, the one that this app also uses. So without wasting any more second, let us get started.\n"},
        {title:"Different Navigation Solutions",para:"When we talk about navigation, there are many libraries out there on the web because there is no standard way in the ReactNative documentation for navigating screens. Because of ReactNative popularity, a large number of open-source developers came together and developed a solution to the problem. We can categorize each of these navigating solutions into two separate categories-\n\n1. JavaScript Navigators: These are navigators written and executed in the JavaScript language. \n\n2. Native Navigators: These are navigators written in the platform (iOS and Android) native language (typically Objective-C or Java) and are exposed to React Native via a JavaScript API.\n "},
        {title:"Why ReactNavigation? ",para:"Honestly, I don't know. I searched online, and ReactNavigation came up at the top of the web page search result. I looked at the documentation, tried out one of its samples application, and voila! I found the solution to the navigating problem in my ReactNative App.\n\nReactNavigation has more than 18k stars on Github and has an active community of developers working on the project consistently. ReactNavigation is built and funded by expo and Software Mansion, with contributions from many individual sponsors.\n\nIt is a powerful library that provides different types of navigation options like :\n\n1. Stack Navigator\n\n2. Drawer Navigator\n\n3. Bottom Tab Navigator\n\n4. Material Top Tab Navigator and many more. \n\nThe one that we build in this tutorial is Stack Navigator. We place a new screen on top of a stack in StackNavigator. This app uses a StackNavigator as a navigator solution to navigate through different screens. So, we will try to replicate it in this tutorial.\n "}
    ];
    
    return (
      <ScrollView>
           {data.map((obj)=>
            <Card>
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