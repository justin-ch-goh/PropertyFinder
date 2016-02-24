'use strict';

var SearchPage = require('./SearchPage.android');

var React = require('react-native');
var {
    Navigator
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: '#C1DAD6',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

class HelloWorld extends React.Component {
  render() {
    return <React.Text style={styles.text}>Hello World (again)!</React.Text>;
  }
}

class PropertyFinderApp extends React.Component {

  _renderScene(route, navigator) {
    if (route.component) {
      //return <route.component navigator={navigator} {...route.passProps}/>
      return React.createElement(route.component, { ...route.passProps, route, navigator});
    }
  }

/*
  _navigate(property) {
    this.props.navigator.push({
      title: 'PropertyFinder',
      component: SearchPage,
    })
  }
*/

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{
          title: 'PropertyFinder',
          component: SearchPage,
        }}
        /*
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
        */
        renderScene={this._renderScene}
      />
    );
  }
}

React.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp });

