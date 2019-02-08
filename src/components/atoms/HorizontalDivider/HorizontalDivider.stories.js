import React from 'react';
import { storiesOf } from '@storybook/react';
import HorizontalDivider from './HorizontalDivider';

const stories = storiesOf('Horizontal Dividier', module);
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>);
stories.add('default', () => <HorizontalDivider />);
