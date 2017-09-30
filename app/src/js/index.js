import React from 'react';

import {
    AppRegistry,
    StyleSheet,
    View,
    Button
} from 'react-native';

import ReactAnimationFrame from 'react-animation-frame';
import ProgressBar from './ProgressBar';

const PROGRESS_DURATION_MS = 2000;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            showProgressBar: false,
        };
    }

    toggleProgressBar = () => {
        const { showProgressBar } = this.state;

        this.setState({
            showProgressBar: !showProgressBar,
        });
    }

    render() {
        const { showProgressBar } = this.state;

        return (
            <View style={styles.container}>
                <Button title="Toggle Progress Bar"
                        onPress={this.toggleProgressBar} />
                { showProgressBar && <ProgressBar durationMs={PROGRESS_DURATION_MS} /> }
            </View>
        );
    }
}

AppRegistry.registerComponent('App', () => App);
