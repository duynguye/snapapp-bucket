import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Custom Imports
import SectionHeader from './SectionHeader';

// Setup Data
const tabs = [{
    active: true,
    title: 'All',
    count: 0,
    callback: action('Clicked - All')
}, {
    title: 'Recent',
    count: 6,
    callback: action('Clicked - Recent')
}, {
    title: 'Updated',
    count: 9,
    callback: action('Clicked - Updated')
}];

const filters = [{
    prefix: 'fal',
    icon: 'list',
    callback: action('Clicked Filter - List')
}, {
    prefix: 'fal',
    icon: 'sliders-h',
    callback: action('Clicked Filter - Sliders')
}, {
    prefix: 'fal',
    icon: 'ellipsis-h',
    callback: action('Clicked Filter - Ellipsis')
}];

const stories = storiesOf('Section Header', module);
stories.add('collection', () => (
    <SectionHeader 
        filters={filters}
        title={'Contests'}
        tabs={tabs}
    />
));
