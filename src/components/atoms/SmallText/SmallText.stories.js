import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs'; 
import SmallText from './SmallText';

const stories = storiesOf('Small Text', module);
stories.addDecorator(withKnobs());
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{ story() }</div>);
stories.add('standard', () => (
    <React.Fragment>
        <SmallText>{'Build: 1130.01'}</SmallText>
        <br />
        <SmallText>{'Bucket ID: dd22c07c-13d6-4d41-a53e-a4a01623183a'}</SmallText>
    </React.Fragment>
));
