import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import OutlinedButton from './OutlinedButton';

const withPadding = (WrappedComponent, amount = 5) => {
    class AddPadding extends React.Component {
        render () {
            return (
                <div style={{ paddingRight: amount, display: 'inline-block' }}>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }

    return AddPadding;
};

const PaddedOutlinedButton = withPadding(OutlinedButton, 7);

const stories = storiesOf('Outlined Button', module);
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>);
stories.add('collection', () => (
    <React.Fragment>
        <PaddedOutlinedButton 
            prefix='fal'
            icon='list'
            onClick={action('Clicked!')}
        />

        <PaddedOutlinedButton 
            prefix='fal'
            icon='sliders-h'
            onClick={action('Clicked!')}
        />

        <PaddedOutlinedButton 
            prefix='fal'
            icon='ellipsis-h'
            onClick={action('Clicked!')}
        />
    </React.Fragment>
));