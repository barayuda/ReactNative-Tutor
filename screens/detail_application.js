import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image,Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function DApplication({ route, navigation }) {
  if(route.params.setq==0){
    return (
      <WebView startInLoadingState={true} originWhitelist={['*']} source={{html:route.params.link}} style={{flex:1,height:Dimensions.get('window').height,width:Dimensions.get('window').width}}/> 
     )
  }  
  else if(route.params.setq==1){
  return (
     <WebView startInLoadingState={true} originWhitelist={['*']} source={{uri:route.params.link}} style={{flex:1,height:Dimensions.get('window').height,width:Dimensions.get('window').width}}/> 
    );
  }
}