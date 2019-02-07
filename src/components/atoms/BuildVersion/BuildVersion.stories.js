import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs'; 
import BuildVersion from './BuildVersion';

const stories = storiesOf('Build Version', module);
stories.addDecorator(withKnobs());
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{ story() }</div>);
stories.add('standard', () => <BuildVersion version={ text('Version', '1130.01') } />);
