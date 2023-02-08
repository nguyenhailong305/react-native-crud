import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';


export default function Modal(props) {
    const {width , height , title ,  visible  } = props
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog} >
        <Dialog.Actions>
         
         <View >
         <Text className="text-3xl font-semibold pb-4">{title}</Text>
         <TextInput className="w-[310] h-[50] border p-3 rounded-md"
          onChangeText={(text) => {setNameUpdate(text) }}
          value={nameUpdate}
          
        />

      <View className="flex flex-row py-5 justify-evenly">
     

        <TouchableOpacity  className=" text-center bg-green-600  p-3 rounded-lg shadow-lg"
          onPress={() => {nameUpdate ? handleUpdateItem({ name: nameUpdate, id: idUpdate }) : alert("Vui lòng nhập tên cập nhật") ,setNameUpdate(''), hideDialog(true) }} >
          <Text className="font-medium"> Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity  className=" text-center bg-red-500  p-3 rounded-lg shadow-lg"
          onPress={() => hideDialog(true)} >
          <Text className="font-medium"> Cancel</Text>
        </TouchableOpacity>
      </View>

         </View>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};



