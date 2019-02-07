import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import Button from './Button';

const stories = storiesOf('Button', module);
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
stories.add('with text', () => <Button onClick={ action('Clicked!') } disabled={boolean('Disabled', false)}>{ text('Label', 'Hello World!') }</Button>);

/**
 * Standard button with leading icon and text.
 */
stories.add('with text and leading icon', () => (
    <Button
        onClick={ action('Clicked!') }
        disabled={ boolean('Disabled', false) }
        config={ [select('Icon Weights', options, 'fal', 'ALL'), text('Icon', 'long-arrow-right')] }
    >
        { text('Label', 'Hello World!') }
    </Button>
));

 /**
 * Standard button with text.
 */

/**
 * Standard button without text.
 */
stories.add('without text', () => <Button></Button>, {
    notes: 'This is a button without text.'
});