import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Card, Button,Icon } from 'react-native-elements'
export default function About() {

  const data = [
    {title:"Introduction",para:"We are currently in the 21st-century. A place where people are so obsessed with technology that most people cannot live without their smartphones. We live in a world of a variety of mobile devices majorly dominated by two platforms - iOS and Android. I am sure we all can agree on that. Building a mobile app is not an easy task though \n\nFor iOS, we have to write code in the Objective-C and Swift, while for Android, We have to code in java and Kotlin. Apart from using these different programming languages, the dev tools required to develop applications that can run on any of these platforms differs too. It's like two entirely different tech stack used by people to create applications for eighter of the mobile platforms.\n\nModern-day developers, on the other hand, use a specific set of technology (HTML, CSS, and JavaScript) that is not only used to build web apps but also native mobile apps. These frameworks fall under an entirely separate category, also known as Cross-Platform Hybrid Frameworks. These are the sets of classes and libraries used by developers to create dynamic apps for different mobile devices.\n"},
     {title:"What is React Native?", para:"ReactNative is a cross-platform development framework allowing you to create native apps for Android and iOS. Unlike some other frameworks likes PhoneGap and Cordova, It does not have any web views. Instead, React Native uses native components that are provided by platforms like iOS and Android, giving developers a full-fledged native development experience while ensuring the safety of the users' experience.\n"},
      {title:"Is ReactJs and ReactNative same?",para:"No, React is a library for creating User Interfaces and Web Applications. It follows the concept of using reusable web-based components. It is where HTML and Javascript come together. ReactNative, on the other hand, is a cross hybrid mobile app development framework that combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. It uses native components instead of web components as building blocks for developing Mobile UI. \n"},
      {title:"Under the Hood",para:"Under the hood, React Native has an instance of JavaScript Core to execute JS code when an application starts. It uses RCTBridge Module to make a connection between native code and JavaScript code.  On the other hand, developers work with React components that wrap the existing native code and interact with native APIs via the React declarative UI paradigm and JavaScript.\n"},
     {title:"Why should you choose ReactNative for your Next Mobile Project?",para:"In a nutshell, one should use ReactNative for developing mobile apps for the love of JavaScript. Yes, you read it right! If you know JavaScript, you can use your existing JavaScript skills to build Native Mobile Apps using ReactNative. You don't need to hire two separate teams of developers to handle the two different mobile app code bases. Write apps using JavaScript, and share your product across Android and iOS. It is the sole reason why ReactNative exist in the first place (According to me).\n\nIt provides a feature called Hot Reloading that increases the developer's productivity and also enhances the developer's experience. It allows developers to see the reflected change made in the code of the application instantaneously. Any change made in the large codebase will show in the app in less than 1 second. It is one feature that even the native mobile app development framework does not provide. \n\nOne can use ReactNative in an existing Android or iOS app or can develop the new application from scratch with ease.\n\nReact Native follows the 'Learn Once, Write Everywhere' philosophy. It allows developers to use the components that best follow the native concept of each platform. ReactJs is used to develop web apps, whereas ReactNative can be used to build mobile apps.\n"},
    {title:"What Companies are using ReactNative?",para:"The following organizations are using ReactNative -\n\n 1. Instagram\n 2. Wix\n 3. Tesla\n 4. Facebook Ads Manager\n 5. Uber Eats\n 6. Walmart\n 7. Salesforce\n 8. Myntra\n 9. Shopify and Many more. \n"},
    {title:"What is the Average Salary of a React Native Developer?",para:"Based on Glassdoor data-  \n\nThe average salary of a ReactNative developer in New York is $95k-$125k. In India, the average pay is between Rupees. 6L-10L.Meanwhile, in Amsterdam, the average salary is around 70k Euros.\n"}
  ]

    return (
      <ScrollView>
              <Card>
                <Card.Image resizeMode='cover' source={require('../assets/raw_images/reactlogo.png')} />             
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
    </ScrollView>
    );
  }
  