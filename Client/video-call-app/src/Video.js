import React, {Component} from 'react';

class Video extends Component {
    constructor(props) {
        super(props);
        this.videoTag = React.createRef();       
    }

    componentDidMount() {

        navigator.mediaDevices
            .getUserMedia({video: true})
            .then(stream => this.videoTag.current.srcObject = stream)
            .catch(console.log);
    }

    render() {
        return(
          <div className="video-container">
            <video ref={this.videoTag} autoPlay></video>
            <canvas id="user-video"></canvas>
          </div>
        )
      }
}

export default Video;