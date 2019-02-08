import React from 'react';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { action } from '@storybook/addon-actions';
import IconButtonSmall from './IconButtonSmall';

const stories = storiesOf('Icon Button (sm)', module);
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>);
stories.add('standard', () => <IconButtonSmall action={action('Clicked')}><FontAwesomeIcon icon={['far', 'plus']} /></IconButtonSmall>);
