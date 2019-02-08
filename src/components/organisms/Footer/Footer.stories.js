import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';

const stories = storiesOf('Footer', module);
stories.addDecorator(story => <div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'flex-end' }}>{ story() }</div>);
stories.add('default', () => <Footer />);