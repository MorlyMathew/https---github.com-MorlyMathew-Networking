import React, {Component} from "react";
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native'
import { createIconSet } from "react-native-vector-icons";

export default class CategoryTwo extends Component {

    constructor(){
        super();
        this.state = {
            loader: false,
            DATA : []
        }
    }

    getData(){
        this.setState({loader: true})
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((response)=> {
            if(response.length>0){
                this.setState({DATA: response})
            }
            this.setState({loader: false})
            // console.log('YOUR RESPONSE IS:', response)
        })
        .catch((error) => {
            this.setState({loader: false})
            console.log('ERROR IS:',error)
        })
    }

 
    componentDidMount(){
        this.getData()
      
    }

    render(){
        const renderItem = ({item}) => (
            // console.log('fetch data IS:',item.title),
           <View style= {styles.itemContainer}>
               <Text style= {styles.itemText}>{item.title}</Text>
               <Text style= {styles.itemDes}>{item.body}</Text>
           </View> 
        )
        return(
            <View style= {styles.container}>
               
                <ActivityIndicator size = {40} color= 'blue' animating= {this.state.loader}/>
                <Text style= {styles.homeText}
                    onPress= {()=> this.getData()}>Hi This Is Category List with fetch api calling method</Text>

                    {/* <Text style= {styles.refresh}
                    onPress= {()=> this.getData()}>refresh</Text> */}
                <FlatList style= {{width: '95%',marginTop: 10}}
                    data= {this.state.DATA}
                    renderItem= {renderItem}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eeeeee'
    },
    homeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    refresh: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000',
        width:'100%',
        height : 30,
        alignContent:'flex-end'
    },
    itemContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 4,
        marginBottom: 10

    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    itemDes: {
        fontSize: 14,
        color: '#369',
        fontWeight: 'bold',
        marginTop: 10
    }
})