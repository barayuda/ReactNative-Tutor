import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image,Dimensions,TextInput } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements';
import { WebView } from 'react-native-webview';

export default function SPH({navigation}) {

    const data = [
    {title:"Intoduction",para: "In this tutorial, we will look at how to customize the components and make them interactive. In general, while developing, we will use these components (built-in and user-defined), props state, and hooks together to create a stunning mobile app.  We will briefly discuss and implement the code for each of the above, one by one.\n"}, 
]

    const props={title:"Props",explanation:"In the above code snippet, we have customized core ReactNative component MyComponent that takes prop 'addtext' as a parameter. It is a fundamental principle concept provided by React that ensures code reusability. MyComponent is a customized component that can be used anywhere within the app using the import statement.\n",embed_code:"<script src='https://gist.github.com/karanjagota/e40a1860af8398618e771451f30e6856.js'></script>",para:"Props, short form for Properties are the parameters for components. They are the easiest way to customize it at the time of creation.\n\nFor Instance: In Text(core component), style is a prop provided by React Native.\n\nThe only thing to remember is that we can pass data or functions as props. With props and core components combined, we can create a wide variety of stunning visuals for our app by reutilizing one component with different props as parameters whenever required. Let us look at a simple example:\n"}
    const st = {title:"State and Hooks",explanation:"In the above code snippet, We import a hook, UseState provided by the React library to manage the state. We have declared a state called name whose initial value is assigned to be null and attached a method called setName that updates its state value every time the input text is changed. The above is a typical coding style to implement a hook in React Native.\n",embed_code:"<script src='https://gist.github.com/karanjagota/d42e9bfa596c77f983a3464b600df0af.js'></script>",para: "State\n\nWe use a state for the data that is going to change over time. Consider state as mutable while props immutable in a React Native App. \n\nHooks\n\nHooks in React are functions that allow developers to use React state and a component's lifecycle methods in a functional Component. React provides a few built-in Hooks like useState and use effect. Developers can also create their Hooks to re-use the stateful behavior between different components. It provides an API to ReactNative concepts such as props, state, context, refs, and lifecycle.\n"}
    const presshandler = (link,s)=>{ navigation.push('DApplication',{link:link,setq:s});}
    const [name, setName] = useState('')
    const data2 = [    
    {title:"Difference between Props and State and When to use what? ",para:"Props, in general, are immutable and are fixed throughout the lifetime of the component. State, on the other hand, is mutable and can be changed at any time in the future.  \n"},
    {title:"Summary",para:"In this tutorial, we learned the following things:\n\n1. We briefly discuss Props State and Hooks and compare the difference between components Props and State.\n\n2. We implemented the code by creating a short application that demonstrates the working of the Props, State, and Hooks.\n"}
]
    return (
      <ScrollView>
       <Card>
              <Card.Title style={{color:'#6C63FF'}}>Props, State, and Hooks</Card.Title>
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
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{props.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{props.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left'}}>Example</Card.Title>
                  <Card.Divider/>   
                  <View>
                    <Text style={{fontSize:18,color:'#ffffff',backgroundColor:'#F50057', marginBottom:10 ,padding:10,textAlign:'center',borderRadius:20}}>Hello From 1st Component</Text>
                  </View>
                  <View>
                    <Text style={{fontSize:18,color:'#ffffff',backgroundColor:'#F50057', marginBottom:10 ,padding:10,textAlign:'center',borderRadius:20}}>Hello From 2nd Component</Text>
                  </View>
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: props.embed_code}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(props.embed_code,0)} /> 
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Explanation</Card.Title>
                  <Card.Divider/> 
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{props.explanation}</Text>
                  </View> 
              </Card>

              <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{st.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{st.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left'}}>Example</Card.Title>
                  <Card.Divider/> 
                  <View>
                    <Text style={{fontSize:18,color:'#ffffff',backgroundColor:'#F50057', marginBottom:10 ,padding:10,textAlign:'center'}}>{name}</Text>
                  </View>  
                  <TextInput 
                      style={{padding:10,marginBottom:5,fontSize:15,textAlign:'center'}}
                      placeholder="Type Anything!"
                      onChangeText={name => setName(name)}
                  />  
                  
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: st.embed_code}} style={{flex:1,height:Dimensions.get('window').height/2.5,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(st.embed_code,0)} /> 
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Explanation</Card.Title>
                  <Card.Divider/> 
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{st.explanation}</Text>
                  </View> 
              </Card>
              {data2.map((obj)=>
            <Card key={obj.title}>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{obj.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{obj.para}</Text>
                  </View>                 
              </Card>
           )}

    </ScrollView>
    );
  }