import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class EditBook extends Component {
  render() {
    
    const {navigation} = this.props;
    const title = navigation.getParam('title', 'NO-TITLE');

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Button
            title="Back To books"
            onPress={() => this.props.navigation.navigate('Tabs')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});