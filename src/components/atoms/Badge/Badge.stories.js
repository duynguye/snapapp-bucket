import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Badge from './Badge';
import Avatar from '../Avatar/Avatar';
import NameTag from '../NameTag/NameTag';

const stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs());
stories.addDecorator(story => <div style={{ backgroundColor: '#5c7aff', padding: '0 3rem', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>{story()}</div>);
stories.add('collection', () => (
    <React.Fragment>
        <Badge 
            prefix='fal'
            icon='folder'
            count={number('Folder', 3)}
        />

        <Badge 
            prefix='fal'
            icon='bell'
            count={number('Alerts', 1)}
        />
    </React.Fragment>
));

stories.add('with avatar and name tag', () => (
    <React.Fragment>
        <Badge 
            prefix='fal'
            icon='plus'
            onClick={action('Add New Pressed!')}
        />

        <Badge 
            prefix='fal'
            icon='folder'
            count={number('Folder', 3)}
            onClick={action('Folder Pressed!')}
        />

        <Badge 
            prefix='fal'
            icon='bell'
            count={number('Alerts', 123)}
            onClick={action('Alert Pressed!')}
        />

        <NameTag title={text('Title', 'Web Designer')} right={boolean('Right Aligned', true)}>{text('Name', 'Devin Townsend')}</NameTag>
        <Avatar url={'https://randomuser.me/api/portraits/men/32.jpg'} />
    </React.Fragment>
));