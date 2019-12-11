import React, { Component } from  'react';
import { ScrollView ,Text,View} from 'react-native';
import Detay from '../taylorVeri/Detay';
import axios from 'axios';


class Liste extends Component{
 
    state = { data: [] };

    componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ data:response.data }));

    }

    componentDidMount() {
    
     console.log('Kubilay');

    }

    renderData() {

    return this.state.data.map((responseData,Id) =>
     
     <Detay key={Id} data={responseData}/>
     );

    }
    render() {
        
    return(
   <ScrollView style={{ marginTop: 10}}>
   {this.renderData()}
   </ScrollView>
    );
    };
}

export default Liste;