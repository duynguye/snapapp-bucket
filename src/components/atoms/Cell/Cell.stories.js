import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import storyRouter from 'storybook-react-router';
import Cell from './Cell';
import { TableRow } from '../../molecules';
import SectionHeader from '../../organisms/SectionHeader/SectionHeader';

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

const stories = storiesOf('Cell', module);
stories.addDecorator(storyRouter());
stories.add('default', () => (
    <React.Fragment>
        <div style={{ display: 'grid', width: '100%' }}>
            <div>
                <TableRow>
                    <Cell header>Key</Cell>
                    <Cell header>Client</Cell>
                    <Cell header>Station</Cell>
                    <Cell header>Draw Date</Cell>
                    <Cell header>Request Type</Cell>
                    <Cell header>Assignee</Cell>
                    <Cell header>Entries</Cell>
                </TableRow>
            </div>

            <div>
                <TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow>
            </div>
        </div>
    </React.Fragment>
));

stories.add('with section header', () => (
    <React.Fragment>
         <SectionHeader 
            filters={filters}
            title={'Contests'}
            tabs={tabs}
        />

        <div style={{ display: 'grid', width: '100%' }}>
            <div>
                <TableRow>
                    <Cell header>Key</Cell>
                    <Cell header>Client</Cell>
                    <Cell header>Station</Cell>
                    <Cell header>Draw Date</Cell>
                    <Cell header>Request Type</Cell>
                    <Cell header>Assignee</Cell>
                    <Cell header>Entries</Cell>
                </TableRow>
            </div>

            <div>
                <TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow><TableRow>
                    <Cell link='/contest/231'>SRP-32020</Cell>
                    <Cell link='/contest/231'>2019 Australian Open Trip Giveaway</Cell>
                    <Cell>KRXI</Cell>
                    <Cell>12.31.2018</Cell>
                    <Cell>Poll</Cell>
                    <Cell>Chip Adams</Cell>
                    <Cell>Down</Cell>
                </TableRow>
            </div>
        </div>
    </React.Fragment>
));