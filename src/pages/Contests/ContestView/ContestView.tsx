import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { Howl } from 'howler';

import { fetchContest, fetchContestList } from '../../../lib/contests';

class ContestView extends Component<any> {
  state = {
    codePosition: 0,
    loading: true
  };

  private sound = new Howl({
    src: ['https://s3.amazonaws.com/compulse-orca/pacman_beginning.wav']
  })

  componentDidMount = () => {
    const allowedKeys: any = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      65: 'a',
      66: 'b'
    };

    const konami = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

    document.addEventListener('keydown', (e: any) => {
      const key = allowedKeys[e.keyCode];
      const requiredKey = konami[this.state.codePosition];

      if (key == requiredKey) {
        this.setState({
          codePosition: this.state.codePosition + 1
        }, () => {
          if (this.state.codePosition == konami.length) {
            this.sound.play();
            this.setState({ codePosition: 0 });
          }
        });
      } else {
        this.setState({ codePosition: 0 });
      }
    });

    this.getContest();
  }

  getContest = () => {
    // fetchContest(this.props.match.params.id).then(response => {
    //   this.setState({ loading: false }, () => console.log('Contest was loaded'));
    // });

    fetchContestList().then(response => console.log(response));
  }

  render() {
    const { match }: any = this.props;
    const { loading } = this.state;

    if (!isNaN(match.params.id)) {
      if (loading) {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>         
            <Spinner color='#ffb30f' style={{ marginBottom: 50 }} name='pacman'/>   
            <p>Loading</p>
          </div>
        );
      }
    }
  
    return null;
  }
}

export default ContestView;