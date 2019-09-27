import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: {
        main: 'main', description: 'description', temp: 0
      }
    }
  }
  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.ZipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
      .then((response) => response.json())
      .then((json) => {
        this.setState(
          {
            forecast: {
              main: json.weather[0].main,
              description: json.weather[0].description,
              temp: json.main.temp
            }
          });
      })
      .catch((error) => {
        console.warn(error);
      });
  }
  componentDidMount = () => this.fetchData() 
  componentDidUpdate = (prevProps) => {
    if (prevProps.ZipCode !== this.props.ZipCode) {
      this.fetchData()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
          <Text style={styles.padding}>Zip code is {this.props.ZipCode}.</Text>
          <Forecast {...this.state.forecast} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  backdrop: { width: '100%', height: '100%' },
  padding: { padding: 10, textAlign: "center", fontSize: 30, color: '#800000', backgroundColor: 'white', opacity: 0.7 },
});
