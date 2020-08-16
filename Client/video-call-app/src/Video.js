import React, {Component} from 'react';

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            v1:null,
            v2:null,
            constraints: { audio: false, video: {width:400, height: 300}},
            video: document.querySelector('video'),
            devices: null
        };
        
    }

    getCameraSelection = async() => {
        devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        const options = videoDevices.map(videoDevices => {
            return '<optionvalue="${videoDevice.deviceID}">${videoDevice.label}</option>>'
        });
        cameraOptions.innerHTML = options.join('');
    }

    componentDidMount() {
        this.getCameraSelection();
        this.startStream();
    }

    startStream = async (constraints) => {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        handleStream(stream);
    }
    
    handleStream = (stream) => {
        video.srcObject = stream;
        
    }

    render() {
        return(
          <div className="video-container">
            <video autoplay id="video-canvas"></video>
            <canvas id="user-video"></canvas>
          </div>
        )
      }
}

export default Video;