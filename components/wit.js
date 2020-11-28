import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image,TextInput, processColor, Dimensions } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements';
import config from '../config';
import { WebView } from 'react-native-webview';
export default function WIT({navigation}) {

    const [gist, setGist] = useState('Empty')
    
    const data = [
        {title:"Introduction",para:"Data is the new oil. We all have heard it from a lot of people, but it is vital to classify and extract useful data from unstructured data. Data Scientists all around the world are working on developing algorithms to do the same thing as it will help a lot of people to solve many real-world problems. In this tutorial, we will discuss one such service provided by Facebook, and that is wit.ai. Before learning more about wit.ai, it is essential to know the term NLP in computer programming."},
        {title:"Understanding NLP",para:"Natural Language Processing (NLP) or Natural Language Understanding (NLU) is a set of AI techniques that deal with the interactions of humans and machines. NLP is useful to extract useful data out of raw input like Text or Speech. \n\nFor instance, consider a sentence- \n\n'Book a table at a restaurant for two people next Tuesday at around 5:00 pm'.\n\nAs humans, we understand the meaning of the above sentence, but machines cannot. They need very structural information to process the above sentence. Like - \n\n1. what is the Intent- make a reservation.\n\n2. How many people- 2\n\n3. when- DateTime.\n\nIt is where NLP comes into the picture. It acts as a mediator between machines and humans. Because of NLP, computers appear to talk to people without actually doing it"},       
        {title:"What is wit.ai?",para:"Wit.ai is an NLP (natural language processing) interface for applications capable of turning sentences into structured data. And most importantly, it is free!\n\nIf you would ask me, then I would say that it is the easiest way to include AI (NLP) in the app. It is so simple that developers don't even require to write a piece of code. It's just about clicking a few buttons on the website, and they can get an API endpoint.\n"},
        {title:"Few Technical Terms to Know",para:"Utterances\nIt accepts input to train in the text format. It is what your users can say or type. For instance,\n\n'Provide me a code snippet for the Button.'\n\nIntent\nIt tells wit.ai the aim of the utterance. It is what you want to do with the text. Wit.ai already provides a lot of built-in intents for developers to use like Location, Date, etc. Apart from the built-in Intents, developers can create their own as well.\n\nEntity\nIt extracts a meaningful piece of information from the utterance. Wit.ai provides a lot of Recipes that can be used by developers as per their use case. Here, I am using a keyword extraction Entity Recipe.\n"},
        {title:"Tutorial To Create Wit.ai App",para:"In this tutorial, we will create an NLP based HTTP API endpoint using Wit.ai. We will then use this API endpoint in ReactNative tutor to make a code snippet feature.\n\nFollow the steps to create Wit.ai Endpoint -"}
      ]
    const step1 = 'Go to the wit.ai official website and sign in with your Facebook account.'  
    const step2 = 'Click the New App button on the Welcome to Wit.ai page.' 
    const step3 = 'Put ReactNativeTutor as the name of the wit.ai app.'
    const step4 = 'Click on the Understanding section on the left to provide utterances for your app. It is where we will put what our users will type in our app. In our case, we will put \n\n"Give me the code snippet for the Button."'
    const step5 = 'Now, we will add a custom intent name into the app.\n\nWit.ai provides a lot of built-in intents for developers to use, but as per our use case, we will create a custom intent "type"\n\nAfter creating the type Intent, highlight the word Button in the utterances. Next, click the button Train and validate to train the app. '
    const step6 = 'Now, click the entities section on the left nav. Create a new Entity by clicking the blue entity button. In the entity dropdown, type "snippet_type" in the input. Select the "keywords" option in the lookup strategy section and create the new entity.'
    const step7 = 'Add keywords navigation, scrollview, image, animation, textview. '
    const step8 = 'Click on the understanding section from the left nav, and type the sentence containing one of the keywords. It will extract from the sentence.'
    const step9 = 'Click on the Settings section on the left nav, and get the URL and Server Access Token to access the Wit.ai app in ReactNativeTutor. \n\n Congrats, now you have created a Wit.ai app that extracts keywords from the text. '

    const available_gists = {
                          Empty:"<script src='https://gist.github.com/karanjagota/b0e0245795a6263064e9cb6107584cad.js'></script>",
                          button:"<script src='https://gist.github.com/karanjagota/e715541a19d4d2437382c547fdc2a2a6.js'></script>",
                          animation:"<script src='https://gist.github.com/karanjagota/6575ff2bc0ab93e5592b03e3e795bede.js'></script>",
                          imageview:"<script src='https://gist.github.com/karanjagota/ab9677675f586a9d5ef74ccccecc8134.js'></script>",
                          textview:"<script src='https://gist.github.com/karanjagota/6575ff2bc0ab93e5592b03e3e795bede.js'></script>",
                          navigation:"<script src='https://gist.github.com/karanjagota/9fa7d09744d431800986090411d1cd99.js'></script>",
                          scrollview:"<script src='https://gist.github.com/karanjagota/2d53cf53635617e60984df9c1a743cac.js'></script>"    }
    const [snippetname, setSnippetName] = useState('')
    const presshandler=(message)=>{
      let getsnippet = encodeURIComponent(message)
      const url = 'https://api.wit.ai/message?v=20201126&q='+ getsnippet
      console.log(url,config.SECRET_KEY)
      fetch(url,{headers:{Authorization:'Bearer ' + config.SECRET_KEY}})
      .then(res=>res.json())
      //.then(res=>console.log(res))
      .then(res=> setGist(res.entities['snippet_type:snippet_type'][0].value))
      .catch(()=>setGist('Empty'))
    }
    const getgist = (link,s)=>{ navigation.push('DApplication',{link:link,setq:s});}
    return (
      <ScrollView>
       <Card>
              <Card.Title style={{color:'#6C63FF'}}>Wit.ai And React Native</Card.Title>
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
                  <Text style={{fontSize:16,textAlign:'justify'}}>{step1}</Text>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/wit_login.png')} />             
              </Card>

              <Card>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{step2}</Text>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/wit.ai_open.png')} />             
              </Card>

              <Card>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{step3}</Text>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/create_app_name.png')} />             
              </Card>

              <Card>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{step4}</Text>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/firstpage.png')} />             
              </Card>

              <Card>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{step5}</Text>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/create_intent.png')} />             
              </Card>

              <Card>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{step6}</Text>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/entity.png')} />             
              </Card>

              <Card>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{step7}</Text>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/entity_keyword.png')} />             
              </Card>
              <Card>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{step8}</Text>
                  <Card.Divider/>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/checkwit.png')} /> 
                <Card.Divider/>
                <Text style={{fontSize:16,textAlign:'justify'}}>{step9}</Text>            
              </Card>


           <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>Find Code Snippet</Card.Title>
                  <Card.Divider/>
                  <View >
                  <Text style={{fontSize:16,textAlign:'justify',margin:2}}>{gist}</Text>
                  <Card.Divider/>
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: available_gists[gist]}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <TextInput 
                      style={{padding:10,marginBottom:5,fontSize:15,textAlign:'center'}}
                      placeholder="Type: Provide me code snippet for button"
                      onChangeText={snippetname => setSnippetName(snippetname)}
                  />  
                  <Button 
                    buttonStyle={{borderRadius: 0, padding:10, marginTop:10,marginLeft: 0, marginRight: 0, marginBottom: 5,backgroundColor:"#6C63FF"}}
                    title='Get Code Snippet' onPress={()=> presshandler(snippetname)} /> 
                 <Card.Divider/>
                  </View>                 
              </Card>
              <Card>
                 
                 </Card>
    </ScrollView>
    );
  }