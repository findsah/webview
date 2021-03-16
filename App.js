import React from 'react';
import{View} from 'react-native';
import {WebView} from 'react-native-webview';

export default demo= ()=> {
     return(
       <View>
       <WebView
        source={{uri:'http://backend-inventory-app.herokuapp.com/'}}
        style={{ marginTop: 20 }}
       />
       </View>
     );
}