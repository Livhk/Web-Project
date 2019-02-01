import React, {Component} from 'react'
import {Tab} from 'semantic-ui-react'
import LeagueTable from "./LeagueTable";
import LeagueSeasonTable from "./LeagueSeasonTable";

const panes = [
    {
        menuItem: 'لالیگا', render: () => <Tab.Pane>
            <LeagueTable/>
            <LeagueSeasonTable/>
        </Tab.Pane>
    },
    {
        menuItem: 'لوشامپیونه', render: () => <Tab.Pane>
            <LeagueTable/>
            <LeagueSeasonTable/>
        </Tab.Pane>
    },
    {
        menuItem: 'لیگ برتر خلیج فارس', render: () => <Tab.Pane>
            <LeagueTable/>
            <LeagueSeasonTable/>
        </Tab.Pane>
    },
];

export default class LeagueTab extends Component {
    render() {
        return (
            <Tab menu={{fluid: true, vertical: true,}} panes={panes} style={{margin: "20px"}}/>
        );
    }
}
