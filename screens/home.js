import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Alert } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'


export default function Home({ navigation }) {
   
  const data = [
    {title: "About ReactNative",source:require("../assets/raw_images/about-us.png"),info:" Learn About the basics of React Native, Why you should use react Native .. ", id:1},
    {title: "Basic Components",source:require("../assets/raw_images/components-s.png"),info:" Learn About the nuts and bolts of react native components .. How to create components and more .", id:2},
    {title: "Creative Applications",source:require("../assets/raw_images/mobile-app-2.png"),info:" Learn how to create applications with ReactNative .. How to create mobile apps and much more .", id:3},
    {title: "Connect With People",source:require("../assets/raw_images/startup-connection.png"),info:"  Find Jobs and Connect with the React Community ..Get to know people with similar interests .", id:4}
  ]
  
    const presshandler = (id)=>{
            //navigation.push('Component');
            if(id==1){
              navigation.push('About')
            }else if(id==2){
              navigation.push('Component')
            }else if(id==3){
              navigation.push('Application')
            }else if(id==4){
              navigation.push('Connect')
            }
    }
    const CARD_COMPONENT = (props)=> {
      return(
        <Card>
        <Card.Title>{props.title}</Card.Title>
        <Card.Divider/>
        <Card.Image source={props.source} />
        <Text style={{marginBottom: 8}}>
            {props.info}
        </Text>
        <Button 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#ffbe55"}}
              title='Learn More' id ={props.id} onPress={()=> presshandler(props.id)}/>
        </Card>);
  }
    
    return (
        <ScrollView>
          <CARD_COMPONENT title={data[0].title} source={data[0].source} info={data[0].info} id={data[0].id} />
          <CARD_COMPONENT title={data[1].title} source={data[1].source} info={data[1].info} id={data[1].id} />
          <CARD_COMPONENT title={data[2].title} source={data[2].source} info={data[2].info} id={data[2].id} />
          <CARD_COMPONENT title={data[3].title} source={data[3].source} info={data[3].info} id={data[3].id} />
        </ScrollView>
    );
  }
  