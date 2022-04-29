import React from 'react';

const  MapModal = () => {

    return (
        <div className="map-modal-wrap">
            <div className="map-modal-wrap-overlay"></div>
            <div className="map-modal-item">
                <div className="map-modal-container fl-wrap">
                    <div className="map-modal fl-wrap">
                        <div id="singleMap" data-latitude="40.7" data-longitude="-73.1"></div>
                    </div>
                    <h3><span>Location for : </span><a href="#">Listing Title</a></h3>
                    <div className="map-modal-close"><i className="fal fa-times"></i></div>
                </div>
            </div>
        </div>
    );
}

export default MapModal;