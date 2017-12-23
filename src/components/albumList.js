import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
  state = { albums: [] };

componentWillMount() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
  .then((response) => response.json())
  .then((responseData) => this.setState({ albums: responseData }));
}

rederAlbums() {
  return this.state.albums.map(album => 
    <AlbumDetail key={album.title} album={album} />
  );
}

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.rederAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
