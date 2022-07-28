import * as React from 'react';
import { View, Text,Button,Image,ScrollView,Pressable,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YoutubePlayer from 'react-native-youtube-iframe';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
   
  
  },
   tiltle:{
    alignItems:'center',
    fontSize:30,
    marginTop:50,
    fontWeight:'bold',
    backgroundColor: 'white',
    padding:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    marginBottom:30,

  },
   header:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   

  },
  footer:{

    flex:2,
    backgroundColor:'white',
      
    borderTopLeftRadius:60,
    
    justifyContent:'center',
  
  },
   letter:{
    fontSize:15,
    marginTop:60,
    backgroundColor:'#a2d5c6',
    padding:10,
  
    fontWeight:'bold',
  },

});
function IdeaScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'black' }}>
      <Image source={require('./assets/idealogo.png')}/>
      <Text style={{color:"white",fontSize:25,marginBottom:20}}>SSIPMT RAIPUR</Text>
      <Button title='Explore' onPress={()=>navigation.navigate('Details')}/>
    </View>
  );
}
function IdeaHome({navigation}) {
  return (
   <ScrollView style={{backgroundColor:'black'}}>
     <View style={{alignItems:'center'}}>
     <Text style={{color:'orange',justifyContent:'center',fontSize:30,fontWeight:'bold'}}>India's First AICTE IDEA LAB</Text>
     <YoutubePlayer height={300} width={'100%'} play={false} videoId={'L92PnsSums0'}/>
     </View>
     <View style={{alignItems:'center'}}>
       <Image source={{uri:'https://gifographics.co/wp-content/uploads/2016/10/about-us.gif'}} style={{height:200,width:'100%'}}/>
       <Pressable onPress={()=> navigation.navigate('About')}><Text style={{color:'orange',justifyContent:'center',fontSize:30,fontWeight:'bold'}}>About Idea Lab</Text></Pressable>
     </View>

     <View style={{alignItems:'center'}}>
       <Image source={{uri:'https://i.pinimg.com/originals/bb/0c/c7/bb0cc783196fa9b2119864ff90eb5702.gif'}} style={{height:220,width:'100%',marginTop:30}}/>
       <Pressable onPress={()=> navigation.navigate('Faculty')}><Text style={{color:'orange',justifyContent:'center',fontSize:30,fontWeight:'bold'}}>Faculty Incharge</Text></Pressable>
     </View>

     <View style={{alignItems:'center'}}>
       <Image source={{uri:'https://i.pinimg.com/originals/a1/ba/2c/a1ba2c150d44d387f565a87c54351bf8.gif'}} style={{height:220,width:'100%',marginTop:30}}/>
       <Pressable onPress={()=> navigation.navigate('Projects')}><Text style={{color:'orange',justifyContent:'center',fontSize:30,fontWeight:'bold'}}>Projects Under idea Lab</Text></Pressable>
     </View>

     <View style={{alignItems:'center'}}>
       <Image source={{uri:'https://technologystudent.com/pics/thermy6a.gif'}} style={{height:250,width:'100%',marginTop:30}}/>
       <Pressable onPress={()=> navigation.navigate('About')}><Text style={{color:'orange',justifyContent:'center',fontSize:30,fontWeight:'bold',fontWeight:'bold'}}>Courses under idea Lab</Text></Pressable>
     </View>
     <View style={{alignItems:'center'}}>
       <Image source={{uri:'https://www.gifcen.com/wp-content/uploads/2021/07/well-done-gif-12.gif'}} style={{height:220,width:'100%',marginTop:30}}/>
       <Pressable onPress={()=> navigation.navigate('About')}><Text style={{color:'orange',justifyContent:'center',fontSize:30,fontWeight:'bold'}}>Achievement's</Text></Pressable>
     </View>

    <View style={{alignItems:'center'}}>
    <Text style={{color:'white',marginBottom:40,marginTop:40,fontSize:20}}>app created and designed by @Achiever</Text>
    </View>

    
   </ScrollView>
  );
  
}
function Aboutpage(){
  return(
    <ScrollView style={{backgroundColor:'black',flex:1}}>    
      <View style={{alignItems:'center'}}>
        <Text style={{color:'#fff',fontSize:50,fontWeight:'bold',marginBottom:20}}>About Idea Lab</Text>
      </View>
      <View style={{marginBottom:20}}>
      <Text style={{color:'#fff',fontSize:20}}>
      On February 8, 2022, Chhattisgarh's School Education Minister Dr. Premsai Singh Tekam inaugurated the country's first All India Council for Technical Education (AICTE) Idea Lab at Shri Shankaracharya Institute of Professional Management and Technology College, Raipur, Chhattisgarh.
      </Text>
      </View>
      <View>
      <YoutubePlayer height={300} width={'100%'} play={false} videoId={'3o1TWvKEr3g'} style={{marginBottom:20}}/>
      </View>
      <View style={{marginBottom:20}}>
      <Text style={{color:'#fff',fontSize:20}}>
        Minister Dr Tekam said that the Idea Lab has been set up with the objective of making the students understand the basic principles of Science, Technology, Engineering and Mathematics and gain practical experience by using it. With the establishment of this lab, excellent facilities will be available to the students for research and innovation.
      </Text>
      </View>
      <View>
      <Text style={{color:'#fff',fontSize:20}}>
      This idea lab will play an important role in giving shape to the imagination and thinking of the students studying in technical institutions. This lab can be used by the students as well as the general public.
  Youth starting a new venture will be able to take full advantage of it. If any student has any technical idea, then they can come to this lab and make their dream come true and they can patent their idea. The products designed by him can be developed here. This will be a big step in the field of self-employment.
      </Text>
      </View>
    </ScrollView>
  );
}

function Puil({navigation}){
  return(
    <ScrollView style={{flex:1,backgroundColor:'black'}}>
      <View alignItems={'center'}>
      <Text  style={{color:'#fff',fontSize:40}}>Project Based Learning</Text>
      </View>

      <View style={{marginTop:10,alignItems:'center'}}>
      <Text style={{color:'#EB1D36',fontSize:40}}  >
      1. Board Cleaner
      </Text>
      <Text style={{color:'#fff',fontSize:20}}>We have used Arduino Uno along with L298n motor driver, 12V low rpm DC motor and power supply. By using HC05 Bluetooth chip we can control and move it towards right or left direction to clean the board.</Text>
      <YoutubePlayer height={300} width={'100%'} play={false} videoId={'6SawbVxLYPk'}/>
      </View>

      <View style={{marginTop:10,alignItems:'center'}}>
      <Text style={{color:'#EB1D36',fontSize:40}}  >
      2. Clap Controlled Car
      </Text>
      <Text style={{color:'#fff',fontSize:20}}>
      In this we used variety of electronic equipment like Arduino Uno , Motor Driver, Jumper Wires , LED, Batteries & It's Connectors , Breadboard. It works by just a Clap. On one clap it turns ON and on 2nd clap it turns OFF.
        </Text>
      <YoutubePlayer height={300} width={'100%'} play={false} videoId={'yddOuYgzVHk'}/>
      </View>

      <View style={{marginTop:10,alignItems:'center'}}>
      <Text style={{color:'#EB1D36',fontSize:40}}  >
      3. Game Controller
      </Text>
      <Text style={{color:'#fff',fontSize:20}}>
      We are using mpu6050 module which is having an accelerometer and gyroscope sensor. The Arduino takes the raw values from the sensor and calculates angles like pitch and roll to give analog-like control and transfers the real-time data to the computer through USB        </Text>
      <YoutubePlayer height={300} width={'100%'} play={false} videoId={'w3QivSs-hBg'}/>
      </View>

      <View style={{marginTop:10,alignItems:'center'}}>
      <Text style={{color:'#EB1D36',fontSize:40}}  >
      4. Smart Wash Basin
      </Text>
      <Text style={{color:'#fff',fontSize:20}}>
      It is an Automatic Washbasin with bio-sand filter for re-using impure water. It consist of Arduino UNO, Relay module, Bread board, Jumper cables, Water pump, 12V 1A Power adapter, 12V 1A Universal adapter, 3 Containers, Tap.        </Text>
      <YoutubePlayer height={300} width={'100%'} play={false} videoId={'u2W30GrRSIA'}/>
      </View>

      <View style={{marginTop:10,alignItems:'center'}}>
      <Text style={{color:'#EB1D36',fontSize:40}}  >
      5. Egg Incubator
      </Text>
      <Text style={{color:'#fff',fontSize:20}}>
      An Egg Incubator is a device simulating avian incubation by keeping eggs warm at a particular temperature range and in the correct humidity.        </Text>
      <YoutubePlayer height={300} width={'100%'} play={false} videoId={'yH8oCJ2ZY28'}/>
      </View>
  
    </ScrollView>
  );
}

function Faculty(){
  return (
    <ScrollView>
    <View style={styles.container}>

       <View style={styles.header}>

     <Text style= { styles.tiltle}> Faculty Incharge </Text>
 </View>
 <View style={styles.footer}>
 <Text  style={styles.letter}> DR.JP.Patra -                              Coordinator      </Text>
 <Text  style={styles.letter}> Mr.Atul Chalarwarti                      Coordinator      </Text>
 <Text  style={styles.letter}> Mr.Sumit. Roy                              Guru, IDEA LAB</Text>
 <Text  style={styles.letter}> Mr.Pankaj. Yadav                           Guru, IDEA LAB</Text>
 <Text  style={styles.letter}> Mr.Arun Kumar                          Guru, IDEA LAB</Text>

 
  </View>
  
    </View>
    </ScrollView>
  );
  
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Idea Lab"  component={IdeaScreen} />
        <Stack.Screen name="Details" component={IdeaHome} />
        <Stack.Screen name="About" component={Aboutpage}/>
        <Stack.Screen name='Projects' component={Puil}/>
        <Stack.Screen name='Faculty' component={Faculty}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default App;
