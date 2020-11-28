import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import GS from '../components/GettingStarted';
import BB from '../components/buildingblocks';
import SPH from '../components/hooks';
import ST from '../components/Storage';
import NV from '../components/navigate';
import PM from '../components/Perm';
import LB from '../components/libr';
import ES from '../components/es6_essentials';
import AN from '../components/Anim';

export default function DComponent({ route, navigation }) {
    let a = route.params.id;
    const na = navigation
    if(a==1){ return(<View><GS navigation={na} /></View>);}
    else if(a==2){return(<View><BB navigation={na} /></View>);}
    else if(a==3){return(<View><SPH navigation={na} /></View>);}
    else if(a==4){return(<View><ST navigation={na} /></View>);}
    else if(a==5){return(<View><PM navigation={na} /></View>);}
    else if(a==6){return(<View><NV navigation={na} /></View>);}
    else if(a==7){return(<View><AN navigation={na} /></View>);}
    else if(a==8){return(<View><ES navigation={na} /></View>);}  
    else if(a==9){return(<View><LB navigation={na} /></View>);}
    
  }
  