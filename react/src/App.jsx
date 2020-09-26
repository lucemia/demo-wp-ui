import React, { Component } from 'react';
import { FlagsProvider } from 'flagged';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';
/**
 * Internal dependencies
 */
import EditStory from './components/edit-story/app';

// @todo: Find better way to mock these.
const config = {
  allowedMimeTypes: {
    image: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
    audio: [],
    video: ['video/mp4'],
  },
  allowedFileTypes: ['png', 'jpeg', 'jpg', 'gif', 'mp4'],
  storyId: 1234,
  api: {
    stories: '',
    media: '',
    fonts: '',
  },
  metadata: {
    publisher: {
      name: '',
      logo: '',
    },
    poster: '',
  },
  capabilities: {
    hasUploadMediaAction: false,
    hasAssignAuthorAction: false,
    hasPublishAction: false,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HelloWorld title="Hello from React webpack" />
        <FlagsProvider features={{}}>
          <EditStory config={config} />
        </FlagsProvider>
      </div>
    );
  }
}

export default hot(App);
