import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  
  return (
    <View style={{padding: 50}}>
      <View>
        <TextInput 
         placeholder="Course Goal"
         style={{borderColor:"black", borderWidth: 1, padding:10}}/>
        <Button title="ADD"/>
      </View>
      <View>

      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({});
