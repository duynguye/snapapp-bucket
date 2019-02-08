import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

const stories = storiesOf('Avatar', module);
stories.addDecorator(story => <div style={{ backgroundColor: '#2a4494', padding: '0 3rem', height: '100px', display: 'flex', alignItems: 'center' }}>{story()}</div>);
stories.add('default', () => <Avatar url={'https://randomuser.me/api/portraits/men/32.jpg'} />);
