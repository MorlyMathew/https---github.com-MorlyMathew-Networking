import React, {Component} from "react";
import {View, Text, StyleSheet, ActivityIndicator, FlatList} from 'react-native'
import { createIconSet } from "react-native-vector-icons";
import axios from "axios";

export default class CategoryOne extends Component {

    constructor(){
        super();
        
        this.state = {
            loader: false,
            DATA : []
        }
    }

    getAxiosData(){
        this.setState({loader: true})

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState({loader: false})

            const jsonArray = response.data;
            this.setState({DATA: jsonArray})

            // jsonArray.forEach(jsonObject => {
            //     console.log('JSON Object:', jsonObject.id);
            //     this.setState({DATA: jsonObject})
      

            //   });

        //     this.setState({loader: false})
        //     console.log('axios response', response.data)
        //     if(response.length>0){
        //            this.setState({DATA: response.data})

        //    }
        })
        .catch((error) => {
            this.setState({loader: false})
        
            console.log('axios ERROR IS:',error)
        })
    }
    componentDidMount(){
        this.getAxiosData()
    }

    render(){
        const { DATA } = this.state;

        if (DATA.length === 0) {
          return <Text>No data available</Text>;
        }
      
        const renderItem = ({item}) => (
         
            console.log('axios data IS:',item),
            <View style= {styles.itemContainer}>
            <Text style= {styles.itemText}>{item.title}</Text>
            <Text style= {styles.itemDes}>{item.body}</Text>
        </View> 
        )
        return(
            
            <View style= {styles.container}>
               
                <ActivityIndicator size = {40} color= 'blue' animating= {this.state.loader}/>
                <Text style= {styles.homeText}
                    onPress= {()=> this.getAxiosData()}>Hi This Is Category List with axios api calling method</Text>
                <FlatList 
                style= {{width: '95%',marginTop: 10}}
                    data= {this.state.DATA}
                    keyExtractor={(item) => item.id.toString()}
                    // data = {response.data}
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