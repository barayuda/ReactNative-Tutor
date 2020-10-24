import * as React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Alert, PermissionsAndroid,TextInput,Dimensions } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'
import { WebView } from 'react-native-webview';


const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Camera Permission!",
        message:
          "Need Permission to access camera",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    
    } else {}
    
  } catch (err) {
    console.warn(err);
  }
};

export default function PM({navigation}) {
    const [perm, setPerm] = useState('Permission status')
    const presshandler = (link,s)=>{ navigation.push('DApplication',{link:link,setq:s});}
    const data = [
        {title:"Introduction",para:"In today's world, companies all around the world are trying to steal our private data for making profits. Organizations in the name of personalization are taking our sensitive information. Therefore users must know which application is trying to access their sensitive data such as files, contacts, and SMS, as well as mobile features, likes camera and internet. \n\nPermission modal for users varies from platform to platform. However, in this tutorial, we will look at how to ask for permissions in ReactNative, specific to the Android Platform. \n\nIn Android, SDK level 23 (Marshmallow), and above, there are two types of permissions - one that needs to add in the manifest file, which the user grants at the time of installation of the app, and second that the developers need to ask at the runtime for granting permission. These permissions not only needs to be included in the manifest file but also has to include at the runtime. These permissions that require a dialogue prompt at the run time is called Dangerous Permissions.\n\nSome of them that we will see in this tutorial are as follows:\n\n\n1. CAMERA\n\n2. READ_CONTACTS\n\n3. WRITE_CONTACTS\n\n4. RECORD_AUDIO\n\n5. READ_EXTERNAL_STORAGE\n\n6. WRITE_EXTERNAL_STORAGE, and many more. \n\nLet us look at each of them with the help of an example. "}
    ]
    const pr = {embed_code:"<script src='https://gist.github.com/karanjagota/c7616a98a61829de24b4f6fef183ceec.js'></script>",explanation:""}

    const checkPerm = async ()=>{
      const res = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
      if(res==true){setPerm("Camera Permission Granted")}
      else if(res==false){setPerm("Camera Permission Not Guranted")}
    }
    return (
      <ScrollView>
       <Card>
              <Card.Title style={{color:'#6C63FF'}}>Permissions In React Native</Card.Title>
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

           <Card>         
                  <Card.Title style={{textAlign:'left'}}>Example</Card.Title>
                  <Card.Divider/>   
                  <Text style={{fontSize:18,color:'#ffffff',backgroundColor:'#F50057',padding:12,marginBottom:2,textAlign:'center'}}>{perm}</Text>
                   
                  <Button 
                    buttonStyle={{borderRadius: 0, padding:10, marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#F9A826"}}
                    title='REQUEST FOR CAMERA PERMISSION'  onPress={requestCameraPermission} /> 
                  <Button 
                    buttonStyle={{borderRadius: 0, padding:10, marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#F9A826"}}
                    title='CAMERA PERMISSION STATUS'  onPress= {checkPerm}  />   
                
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: pr.embed_code}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(pr.embed_code,0)} />  
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Explanation</Card.Title>
                  <Card.Divider/> 
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{pr.explanation}</Text>
                  </View> 
              </Card>  

    </ScrollView>
    );
  }