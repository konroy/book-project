import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
import BookcaseItem from './BookcaseItem';

export default class Bookcase extends Component {

  constructor(props){
    super(props);
    this.state={
      isLoading: true,
    }
    this.componentDidMount();
  }

  componentDidMount(){
    return fetch('http://10.1.10.116:3000/books/123')
    .then((response) => response.json())
    .then((responseJson) =>{
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      }, function() {

      });
    })
    .catch((error)=>{
      console.error(error);
    });
  }

  _renderItem = ({item}) => (
    <BookcaseItem
    id={item.idBook}
    title={item.bookTitle}
    author={item.authorName}
    thumbnail={item.image}
    navigation={this.props.navigation}
    />
  );

  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.dataSource}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});