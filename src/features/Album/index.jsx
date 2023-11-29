import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc hoa thịnh hành',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/6/3/e/b63e97f3c6ea78bc43fc3650f7f52d55.jpg',
        },
        {
            id: 2,
            name: 'Nhạc Giáng sinh',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/6/3/e/b63e97f3c6ea78bc43fc3650f7f52d55.jpg',
        },
        {
            id: 3,
            name: 'Trào lưu nhạc hot',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/6/3/e/b63e97f3c6ea78bc43fc3650f7f52d55.jpg',
        },
    ];


    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;