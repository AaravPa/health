import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, Modal,ScrollView,KeyboardAvoidingView } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class QuestionScreen extends Component {
  constructor(){
    super()
    this.state={
      age : '',
      weight: '',
      height : false,
      weightGoal : "",
      water : "",
      calorie:"",
      sleep : "",
      exercise : "",
    }
  }
  
  showModal = ()=>(
    
    <Modal style={styles.modalContainer}
      animationType="fade"
      transparent={true}
      //visible={this.state.isVisible}
      >
      <View style={{flex: 1,backgroundColor: "#fff"}}>
        <ScrollView style={{width:'100%'}}>
        <View style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:RFValue(20),fontWeight:"bold",color:"#32867d"}}> SIGN UP </Text>
          </View>
          <View style={{flex:0.95}}>
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Age"}
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                age: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Weight"}
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                weight: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Height"}
            maxLength ={10}
            onChangeText={(text)=>{
              this.setState({
                height: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"Weight Goal"}
            keyboardType ={'email-address'}
            onChangeText={(text)=>{
              this.setState({
                weightGoal: text
              })
            }}
          /><TextInput
            style={styles.formTextInput}
            placeholder ={"How Much Water Do You Drink Daily?"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                water: text
              })
            }}
          /><TextInput
            style={styles.formTextInput}
            placeholder ={"About How Many Calories Do You Take In Daily?"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                calorie: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"How Long Do You Sleep Everyday?"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                sleep: text
              })
            }}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder ={"How Many Days Do You Exercise In A Week?"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                exercise: text
              })
            }}
          />
        </View>
        <View style={{flex:0.2,alignItems:'center'}}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={()=> {
                this.userSignUp(this.state.username, this.state.password, this.state.confirmPassword); this.props.navigation.navigate("TabNavigator")}
              }
            >
            <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={styles.cancelButton}
              //onPress={()=>this.setState({"isVisible":false})}
            >
            <Text style={{  fontSize : RFValue(20),
                fontWeight:'bold',
                color: "#32867d",
                marginTop:RFValue(10)
                }}>
                  Cancel
                </Text>
            </TouchableOpacity>
          </View>
          
        </ScrollView>
      </View>
    </Modal>
  )
  render() {
    return(
      <View style={styles.container}>
        {
          this.showModal()
        }
      </View>
    )
  }
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#6fc0b8'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:60,
    fontWeight:'300',
    // fontFamily:'AvenirNext-Heavy',
    color : '#32867d',
    marginTop:30,
    marginBottom: -50
  },
  loginBox:{
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor:'#32867d',
    fontSize: 20,
    marginBottom:20,
    marginTop:5

  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ffff",
    elevation:10
  },
  buttonContainer:{
    flex:1,
  },
  modalContainer:{
    flex:1,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffff",
    marginRight:30,
    marginLeft : 25,
    marginTop:80,
    marginBottom:80,
    paddingRight:30,
    paddingLeft:20,
    paddingTop: 30,
    paddingBottom:20
  },
  formTextInput:{
      width: "90%",
      height: RFValue(45),
      padding: RFValue(10),
      borderWidth:1,
      borderRadius:2,
      borderColor:"grey",
      paddingBottom:RFValue(10),
      marginLeft:RFValue(20),
      marginBottom:RFValue(14)
  },
  registerButton: {
    width: "85%",
    height: RFValue(50),
    marginTop:RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10),
  },
  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff",
  },
  cancelButton:{
    width:200,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5,
  },
})
