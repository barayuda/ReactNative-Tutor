import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Alert } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'


export default function Home({ navigation }) {
   
  const data = [
    {title: "About ReactNative",source:require("../assets/raw_images/reactlogo.png"),info:"Learn About the basics of React Native, Why you should use react Native .. ", id:1},
    {title: "Learn React Native (Step By Step)",source:require("../assets/raw_images/ab.png"),info:"Learn About the nuts and bolts of react native components .. How to create components and more .", id:2},
    {title: "Find React Jobs",source:require("../assets/raw_images/jobs.png"),info:"Find New Everyday React Jobs and Apply Online Instantaneously.", id:3},
    {title: "Generate Bundle & Deploy",source:require("../assets/raw_images/dply.png"),info:"Learn How to deploy app on Google play store and Apple App Store", id:4}
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
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
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
  