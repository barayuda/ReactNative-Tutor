import * as React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { WebView } from 'react-native-webview';

export default function ES({navigation}) {

    const data = [{title:"Introduction",para:"JavaScript (not to be confused with Java) is a dynamic, weakly-typed, case-sensitive language used for client-side as well as server-side scripting. This tutorial covers the most basic and frequently used features of the JavaScript/ES6 that we come across while developing the ReactNative App. Readers are required to have a solid grasp of these essential concepts to understand the content of this website. \n\nThe tutorial is for developers who are unfamiliar with the ES6/Node.js programming language. Here, we will briefly discuss the following ES6 concepts-\n\n1. Let and Const keyword\n2. Template Literals \n3. Arrow Functions\n4. Currying \n5. Modules, Import, and Export"} ]
    const lc =  {title:"let and const keywords",embed_code:"<script src='https://gist.github.com/karanjagota/d7349883fb922a64bfcc9c6457e2bb62.js'></script>",para:"Until ES5, var was the only way to declare a variable, and it only mattered if you write it within a function body. However, ES6 introduces two new ways to define variables. \n\n Const\nWe declare a constant by using the const keyword. By using the const keyword, we create a block-scope variable whose value we cannot reassign.\n\n Let\nlet is what we should use for everything unless we are required to use a const. Let also creates a block scope like const. We can reassign its value though \n"}    
    const tl = {title:"Template Literals",embed_code:"<script src='https://gist.github.com/karanjagota/b43546b16fe34ea740a6dc4d594a7b91.js'></script>",para:"It is a feature with which we can create dynamic strings. We use backtick ( ` )  characters to create a Template Literal, add (\\n) escape sequence to provide support for multiline-strings, and ( ${} ) to put values in the strings. "}
    const af = {title:"Arrow Functions",embed_code:"<script src='https://gist.github.com/karanjagota/6933fa2754301da4f102f8222cfd596d.js'></script>",para:"Arrow functions are shorthand syntax for function expressions and best suited for smaller function bodies. It makes code easier to read. Few things to keep in mind- \n\n1. Parenthesis () are a must if we are passing more than one argument.\n\n2. We cannot use arrow functions as constructors.\n\nArrow Function with Array Objects \n\nThe map (), reduce () and filter () are array functions. It transforms the array according to the applied function and returns the updated array.\n\n"}
    const cur = {title:"Currying",embed_code:"<script src='https://gist.github.com/karanjagota/631e6085e5b48758b04adee9d4c52cdf.js'></script>",para:"In Javascript, Every function is a first-class citizen. It means that we can pass it as an argument into another as functions are objects in a fundamental sense. These functions, In programming, are referred to as Higher-Order Functions. \n"}
    const mie = {title:"Modules, Import and Exports",embed_code:"<script src='https://gist.github.com/karanjagota/e42c0628a12b8ed3afd9611d0801069e.js'></script>",para:"A lot of times, we are required to share modules from one file to the other. We do it with the help of export and import. In React terms, one can use one component inside the other, which resides in a different module or file with the help of export and import.\n\nNamed Export \nWith named exports, one can have one or multiple named exports per file.\n\nDefault Export \nOne can have only one default export per file. In Default Export, we can use any name to import the component. \n "}
    const presshandler = (link,s)=>{ navigation.push('DApplication',{link:link,setq:s});}
    return (
      <ScrollView>
        <Card>
              <Card.Title style={{color:'#6C63FF'}}>ES6 Essentials</Card.Title>
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
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{lc.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{lc.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: lc.embed_code}} style={{flex:1,height:Dimensions.get('window').height/4,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(lc.embed_code,0)} /> 
              </Card>
              <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{tl.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{tl.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: tl.embed_code}} style={{flex:1,height:Dimensions.get('window').height/4,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(tl.embed_code,0)} /> 
              </Card>
              <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{af.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{af.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: af.embed_code}} style={{flex:1,height:Dimensions.get('window').height/4,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(af.embed_code,0)} /> 
              </Card>
              <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{cur.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{cur.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: cur.embed_code}} style={{flex:1,height:Dimensions.get('window').height/4,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(cur.embed_code,0)} /> 
              </Card>
              <Card>
                  <Card.Title style={{textAlign:'left',color:'#6C63FF'}}>{mie.title}</Card.Title>
                  <Card.Divider/>
                  <View>
                  <Text style={{fontSize:16,textAlign:'justify'}}>{mie.para}</Text>
                  </View>              
                  <Card.Title style={{textAlign:'left',marginTop:10}}>Code</Card.Title>
                  <Card.Divider/> 
                  <WebView startInLoadingState={true} originWhitelist={['*']} source={{ html: mie.embed_code}} style={{flex:1,height:Dimensions.get('window').height/4,width:Dimensions.get('window').width}}/> 
                  <Button 
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,backgroundColor:"#6C63FF"}}
                    title='Get Full Gist'  onPress={()=> presshandler(mie.embed_code,0)} /> 
              </Card> 
             

    </ScrollView>
    );
  }