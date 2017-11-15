import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,Dimensions } from 'react-native';
import { moviesApiCall } from '../action/ActionForMovies';
const width = Dimensions.get('window').width;
import { connect } from "react-redux";
import { SearchBar } from "react-native-elements";
class Movies extends Component {
  constructor(props) {
    super(props);
  
  }

  componentDidMount() {
    this.props.LoadMovies()
  
  }

  render() {
    if (this.props.loading) {
      return (
        <View style={{flex: 1, paddingTop: 20,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
    renderSeparator=()=>
    {
        
        <View style={{backgroundColor:'#000',height:5,width:width,}}>
        </View>
    }
    renderHeader = () => {
        return <SearchBar placeholder="Type Here..." lightTheme round />;
      };
      renderFooter = () => {
        if (!this.state.loading) return null;
    
        return (
          <View
            style={{
              paddingVertical: 20,
              borderTopWidth: 1,
              borderColor: "#CED0CE"
            }}
          >
            {/* <ActivityIndicator animating size="large" /> */}
          </View>
        );
      };

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <FlatList
        data={this.props.movies}
        ListFooterComponent={this.renderFooter}
        ListHeaderComponent={this.renderHeader}
        ItemSeparatorComponent = { this.renderSeparator}
        keyExtractor = {(item, index) => item.title}
        renderItem={({item}) =>(
        <View style={{shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,shadowColor: 'green',
    elevation: 2,}}>
          <Text style={{fontSize:18,textAlign:'center',padding:5}}>{item.title}, {item.releaseYear}
        </Text>
       
            </View>)
        }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
    return {
        movies: state.moviesReducer.movies,
      error: state.moviesReducer.error,
      loading: state.moviesReducer.loading
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      LoadMovies: () => {
        dispatch(moviesApiCall());
      }
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movies);
  