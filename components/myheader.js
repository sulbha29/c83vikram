import React ,{Component} from 'react'
import {Header,Icon} from 'react-native-elements'
import {View,Stylesheet} from 'react-native'

const Myheader = props=>{
    return(
        <Header 
        leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}

        centerComponent={{text:props.title,style:{color:"white",fontSize:14,fontWeight:"bold"}}}
        backgroundColor="black"
        />
    )
}
export default Myheader 