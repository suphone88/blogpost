import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    //console.log(props);
    //return <div> Song Detail </div>;
    if(!song){
        return <div> Select a song </div>;
    };
    return (
        <div>
            <h3> Song Detail for : </h3> 
            <p>
                Title : { song.title} <br />
                Duration : { song.duration }
            </p>
        </div>
    );
};

const mapStateToProps = state => {
    return {song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);