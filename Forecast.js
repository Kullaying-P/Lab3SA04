import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textmain}>{this.props.main}</Text>
                <Text style={styles.textdescription}>{this.props.description}</Text>
                <Text style={styles.texttemp}>{this.props.temp}°C</Text>
            </View>
        );
    }
}   

const styles = StyleSheet.create({
    container: {backgroundColor: 'white', opacity: 0.7},
    textmain: {paddingTop: 20, fontSize: 60, color: '#800000', textAlign: "center"},
    textdescription: {paddingTop: 10, fontSize: 30, color: '#800000', textAlign: "center"},
    texttemp: {paddingTop: 10, fontSize: 40, color: '#800000', textAlign: "center", paddingBottom: 20},
    backdrop: { width: '100%', height: '100%'},
  });
   