import React from 'react';
import { storiesOf } from '@storybook/react';
import storyRouter from 'storybook-react-router';
import Cell from './Cell';

const stories = storiesOf('Cell', module);
stories.addDecorator(storyRouter());
stories.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>);
stories.add('default', () => (
    <React.Fragment>
        <table>
            <thead>
                <tr>
                    <Cell header>Client</Cell>
                    <Cell header>Station</Cell>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                </tr>
            </tbody>
        </table>
    </React.Fragment>
));