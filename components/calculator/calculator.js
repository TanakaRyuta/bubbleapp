import React from 'React';
import {View, Text, StyleSheet,ImageBackground } from 'react-native'
//import { WSATYPE_NOT_FOUND } from 'constants';
const Circle='./circle.png';

export class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaging_number:null
        };
       /* moji=['AC','+/-','%','÷',
            '7','8','9','×',
            '4','5','6','-',
            '1','2','3','+']*/
        this.moji0=['AC','+/-','%','÷']
        this.moji1=['7','8','9','×']
        this.moji2=['4','5','6','-']
        this.moji3=['1','2','3','+']
    }
  
    static navigationOptions = ({ navigation }) => {
      return {
         header: () => null
      } 
    }
  
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.button}>
                <View style={styles.leftbutton}>
                </View>
                <View style={styles.space}></View>
                <View style={styles.rightbutton}>
                </View>
            </View>

            <View style={styles.table}> 
                <View style={styles.result}></View>
                <Node array={this.moji0}/>
                <Node array={this.moji1}/>
                <Node array={this.moji2}/>
                <Node array={this.moji3}/>   
                <View style={styles.Row}>
                <View style={styles.node}></View>
                </View>
            </View>
        </View>
      );
    }
}
const Node = (props)=>{
    return(
    <View style={styles.Row}>
    {
        props.array.map((value,index)=>{
         return(
            <View style={styles.node} key={index}>
            <ImageBackground  source={require (Circle)} style={styles.CircleButton}>
                <View style={styles.text}><Text>{value}</Text></View>
            </ImageBackground>
            </View>
        )
    })
    }
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    button: {
      marginTop: 20,
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'row'
    },
    leftbutton: {
      flex: 1,
      backgroundColor: 'pink',
    },
    space: {
      flex: 2,
    },
    result:{
        flex:1.4,
    },
    rightbutton: {
      flex: 1,
      backgroundColor: 'pink',
    },
    table: {
      flex: 9,
      backgroundColor: 'blue',
      
    },
    calbutton: {
        flex: 7,
        flexDirection:'column',
        flexWrap:'wrap',
    },
    Row:{
        flex:1.1,
        flexDirection:'row',
        backgroundColor: 'green',
    },
    CircleButton:{
        flex:1,
        padding: 2,
        
    },
    text:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    ImageBackground:{
        padding: 5,
        flex:1
    },
    node: {
        borderWidth: 2,
        borderColor: 'green',
        padding: 5,
        flex: 1,
        //justifyContent: 'center',
        //alignItems:'center',
    }
});
  
export class OptCalculator extends React.Component{



    render() {



        return (



          <View/>



        );



    }



}