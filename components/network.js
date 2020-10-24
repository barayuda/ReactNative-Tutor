import * as React from 'react';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, PermissionsAndroid, TextInput, ActivityIndicator,FlatList, Alert } from "react-native";
import { Card, Button,Icon } from 'react-native-elements'

export default function NW() {
  const [isLoading, setLoading] = useState(true);
  const [data, setD] = useState([]);
  const url = 'https://jobs.github.com/positions.json?search=react' 
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setD(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, []);
    const data2 = [
        {title:"Develop an App using Third-party API",para:"Developing an app using third party APIs are quite common. We are often required to get the data from a remote server. ReactNative provides an elegant way to get data from the external URL. \n\nIn this tutorial, We will get data from the external URL using the fetch API using React Hooks."},
        {title:"",para:""},
        {title:"",para:""},
        {title:"",para:""},
        {title:"",para:""},
        {title:"",para:""},
    ]
    const regex = /(<([^>]+)>)/ig;
    const presshandler = ()=>{ 
      
    }
    return (

      <View style={{ padding: 24 }}>
      
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
            <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{item.title}</Card.Title>
                  
                  <Card.Divider/>
                  <Card.Image resizeMode='center' source={{ uri: item.company_logo }} /> 
                  <View >
                  
                  <Text style={{fontSize:16,textAlign:'justify',margin:2}}>{item.type}, {item.location}</Text>
                  <Button 
                    buttonStyle={{borderRadius: 0, padding:10, marginTop:10,marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#6C63FF"}}
                    title='View Full Description'  onPress= {()=> Alert.alert("Job Description",item.description.replace(regex,''))} /> 
                 <Button 
                    buttonStyle={{borderRadius: 0, padding:10, marginTop:10,marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#6C63FF"}}
                    title='Apply Online Now' onPress={presshandler} /> 
                 
                  </View>                 
              </Card>
              </View>       
          )}
        />
      )}
    </View>
     
    );
  }