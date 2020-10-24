import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'

export default function AN() {

    const data = [
        {title:"Introduction",para:"Every app needs Animation. It makes a mobile app visually appealing. It is the easiest way to make an app not only cool but also enhances the user experience. From Onboarding screens to laying out the layouts on the screen, it is used almost everywhere in the app. \n\nIn this tutorial, we will briefly discuss Animation in ReactNative. We will create a splash screen that utilizes the Animated API of  ReactNative to animate image views in the ReactNative app. Animated API can animate the built-in components like View, Text, ScrollView, Flat List, and Section List in a performant way. It also allows us to create our Animation using the CreateAnimatedComponent() method.\n "},
        {title:"",para:""},
        {title:"",para:""},
        {title:"",para:""},
        {title:"",para:""},
        {title:"Summary",para:"In this tutorial, we learned the following things-\n\n1. Discussed the Animated API. \n\n2. Implemented the animation code using the Animated API.\n\ "},
    ]

    return (
      <ScrollView>
        <Card>
              <Card.Title style={{color:'#6C63FF'}}>Animations In Reaact Native</Card.Title>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/start.png')} />             
              </Card>
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