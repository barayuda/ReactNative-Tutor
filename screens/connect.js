import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'

export default function Connect({ navigation }) {
    
    const presshandler = ()=>{
            //navigation.navigate('About'); or 
            //navigation.push('Detail_Component');
          // else if(id==2){navigation.push('Components');} // theres also a pop function like push .. 

    }
    
    return (
        <ScrollView>
          
          <Card>
          <Card.Title>Connect Meetups</Card.Title>
          <Card.Divider/>
         <Button 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#ffbe55"}}
              title='Learn More'  onPress={presshandler}/>
          </Card>

        </ScrollView>
    );
  }
  