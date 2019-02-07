import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs'; 
import SectionTitle from './SectionTitle';

const stories = storiesOf('Section Title', module);
stories.addDecorator(withKnobs());
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{ story() }</div>);
stories.add('standard', () => <SectionTitle>{ text('Title', 'Contests') }</SectionTitle>);
