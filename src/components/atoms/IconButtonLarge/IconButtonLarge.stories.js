import React from 'react';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { action } from '@storybook/addon-actions';
import IconButtonLarge from './IconButtonLarge';

const stories = storiesOf('Icon Button (lg)', module);
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>);
stories.add('standard', () => <IconButtonLarge action={action('Clicked')}><FontAwesomeIcon icon={['far', 'plus']} /></IconButtonLarge>);