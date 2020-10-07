import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'

export default function Component({ navigation }) {
    
    const presshandler = ()=>{
            //navigation.navigate('About'); or 
            navigation.push('Detail_Component');
          // else if(id==2){navigation.push('Components');} // theres also a pop function like push .. 

    }
    
    return (
        <ScrollView>
          
          <Card>
          <Card.Title>Getting Started</Card.Title>
          <Card.Divider/>
         <Button 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#ffbe55"}}
              title='Learn More'  onPress={presshandler}/>
          </Card>

          <Card>
          <Card.Title>Built-In Components</Card.Title>
          <Card.Divider/>
         <Button 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#ffbe55"}}
              title='Learn More'  onPress={presshandler}/>
          </Card>


          <Card>
          <Card.Title>State, Hooks and Props</Card.Title>
          <Card.Divider/>
         <Button 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#ffbe55"}}
              title='Learn More'  onPress={presshandler}/>
          </Card>


          <Card>
          <Card.Title>Styled Components</Card.Title>
          <Card.Divider/>
         <Button 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#ffbe55"}}
              title='Learn More'  onPress={presshandler}/>
          </Card>

          <Card>
          <Card.Title>Animations In ReactNative</Card.Title>
          <Card.Divider/>
         <Button 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#ffbe55"}}
              title='Learn More'  onPress={presshandler}/>
          </Card>

          <Card>
          <Card.Title>Navigation</Card.Title>
          <Card.Divider/>
         <Button 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#ffbe55"}}
              title='Learn More'  onPress={presshandler}/>
          </Card>


        </ScrollView>
    );
  }
  