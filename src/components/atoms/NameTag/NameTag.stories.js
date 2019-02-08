import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Avatar from '../Avatar/Avatar';
import NameTag from './NameTag';

const stories = storiesOf('Name Tag', module);
stories.addDecorator(withKnobs());
stories.addDecorator(story => <div style={{ backgroundColor: '#5c7aff', padding: '0 3rem', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>{story()}</div>);

stories.add('default', () => (
    <React.Fragment>
        <NameTag title={text('Title', 'Web Designer')} right={boolean('Right Aligned', true)}>{text('Name', 'Devin Townsend')}</NameTag>
    </React.Fragment>
));

stories.add('default with Avatar', () => (
    <React.Fragment>
        <NameTag title={text('Title', 'Web Designer')} right={boolean('Right Aligned', true)}>{text('Name', 'Devin Townsend')}</NameTag>
        <Avatar url={'https://randomuser.me/api/portraits/men/32.jpg'} />
    </React.Fragment>
));
