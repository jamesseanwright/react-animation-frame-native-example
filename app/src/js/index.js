import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    hello: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
    },
})

const App = () => (
    <View style={styles.container}>
        <Text style={styles.hello}>Hello, world!</Text>
    </View>
);

AppRegistry.registerComponent('App', () => App);
