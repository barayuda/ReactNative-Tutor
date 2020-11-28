import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image,TextInput,Dimensions,Alert } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ST({navigation}) {
    const [mydata, setData] = useState('Stored Item Will appear here')
    const [st, setSt] = useState('')

    const data = [
        {title:"Introduction",para:"Every mobile app needs to store some amount of data on the client-side. Storing data on the user devices not only makes it easy for developers to retrieve the user's info fast when he tries to log in to the app again but can also enhance the user's offline app experience.\n\nIn this tutorial, we will briefly discuss the storage options provided by React Native to store data offline. We will create a small application where we will save the information of the user in the device using Async Storage and retrieve it using ReactNative. \n"},
        {title:"What is Async Storage?",para:"AsyncStorage is an unencrypted, asynchronous, persistent, key-value storage system that is global to the app. It is advisable to use Async storage instead of LocalStorage. It provides lots of methods to store, retrieve, and remove data.\n\nOn iOS, AsyncStorage is backed by native code that stores small values in a serialized dictionary. On Android, AsyncStorage will use either RocksDB or SQLite based on what is available.\n"}
    ]
    const stor = {explanation:"In the above code snippet, we have used a third-party library called AsyncStorage.\n\nTo add a library into the React Native project, write the following command in the terminal- \n\nnpm add @react-native-async-storage/async-storage --save \n\nWe first import the module from the -\n\n@react-native-async-storage/async-storage library\n\nWe use two methods provided by the library to store and get the data into the device. The two functions are as follows:\n\nsetItem()\ngetItem()\n\nThe store method of the Async Storage takes two params key and value, whereas we retrieve information from the storage bypassing the key as the argument.\n ",embed_code:"<script src='https://gist.github.com/karanjagota/3735a7cebf866a8684a167365d1be416.js'></script>"}
    
    
    const storeData = async (value)=>{
      const a = await AsyncStorage.setItem('name',value);
      Alert.alert('Data Stored Successfully!','Congrats You Stored Value!\nValue Stored: '+value)
    }
    const getData = async ()=>{
          const jsonValue = await AsyncStorage.getItem('name');
          if(jsonValue){setData(jsonValue)}
          else{setData("No Data in Storage!")}
      }
      const presshandler = (link,s)=>{ navigation.push('DApplication',{link:link,setq:s});}

    return (
      <ScrollView>
      <Card>
              <Card.Title style={{color:'#6C63FF'}}>Storage In React Native</Card.Title>
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
                <Card.Title style={{textAlign:'left'}}>Example</Card.Title>
                  <Card.Divider/>   
                  <Text style={{fontSize:18,color:'#ffffff',backgroundColor:'#F50057',padding:12,marginBottom:2,textAlign:'center'}}>{mydata}</Text>
                      
                  <TextInput 
                      style={{padding:10,marginBottom:5,fontSize:15}}
                      placeholder="Enter Text and Press Store Data!"
                      onChangeText={st => setSt(st)}
                  />  
                  <Button 
                    buttonStyle={{borderRadius: 0, padding:10, marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#F9A826"}}
                    title='Store Data Into Async Storage'  onPress= {()=>storeData(st)} /> 
                  
                  <Button 
                    buttonStyle={{borderRadius: 0, padding:10, marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#F9A826"}}
                    title='Get Data From Async Storage'  onPress= {getData} />   
                 
                  
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: stor.embed_code}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(stor.embed_code,0)}  />  
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Explanation</Card.Title>
                  <Card.Divider/> 
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{stor.explanation}</Text>
                  </View> 
              </Card>  
    </ScrollView>
    );
  }