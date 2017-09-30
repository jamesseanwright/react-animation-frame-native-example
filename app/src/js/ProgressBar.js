import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ReactAnimationFrame from 'react-animation-frame';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: 20,
        padding: 5,
    },
});

class ProgressBar extends React.Component {
    constructor() {
        super();

        this.state = {
            startTime: Date.now(),
        };
    }

    onAnimationFrame(time) {
        const { endAnimation, durationMs } = this.props;
        const { startTime } = this.state;
        const progress = (time - startTime) / durationMs * 100;

        this.view.setNativeProps({
            style: {
                width: `${progress}%`,
            },
        });

        if (progress >= 100) {
            endAnimation();
        }
    }

    render() {
        return (
            <View style={styles.container} ref={view => this.view = view} />
        );
    }
}

export default ReactAnimationFrame(ProgressBar);
