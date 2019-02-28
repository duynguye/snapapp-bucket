import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import TextButton from './TextButton';

const stories = storiesOf('TextButton', module);
const options = {
    Light: 'fal',
    Regular: 'far',
    Solid: 'fas',
    Brands: 'fab'
};

// Add Decorators to allow for controls, notes and giving the button some padding
stories.addDecorator(withKnobs);
stories.addDecorator(withNotes);
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{ story() }</div>);

/**
 * Standard button with text.
 */
stories.add('with text', () => <TextButton onClick={ action('Clicked!') } disabled={boolean('Disabled', false)}>{ text('Label', 'Hello World!') }</TextButton>);

/**
 * Standard button with leading icon and text.
 */
stories.add('with text and leading icon', () => (
    <TextButton
        onClick={ action('Clicked!') }
        disabled={ boolean('Disabled', false) }
        config={ [select('Icon Weights', options, 'fal', 'ALL'), text('Icon', 'long-arrow-right')] }
    >
        { text('Label', 'Hello World!') }
    </TextButton>
));
