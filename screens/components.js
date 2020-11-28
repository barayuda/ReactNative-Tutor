import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'

export default function Component({ navigation }) {
    
    const data = [{title:"Getting Started",id:1}, {title:"Core Components",id:2}, {title:"State Hooks and Props",id:3},{title:"Storage In React Native",id:4},{title:"Permissions In React Native",id:5},{title:"React Native Navigation",id:6},{title:"Animations In React Native",id:7},{title:"ES6 Essentials",id:8},{title:"Open Source Libraries",id:9}];
    const presshandler = (id)=>{navigation.push('DComponent',{id:id});}
    
    return (
        <ScrollView>
        <Card>
              <Card.Title >Step By Step Tutorials</Card.Title>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/undraw_teacher.png')} />             
              </Card>
        {
          data.map( (title)=> 
          <Card key={title.id}>
         <Button 
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
              title={title.title}  id={title.id} onPress={()=>presshandler(title.id)}/>
          </Card>
          
          )
        }
        
        </ScrollView>
    );
  }
  