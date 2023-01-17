import React, { useState } from 'react';
import { Card, Tab, Nav } from 'react-bootstrap';

// components
import Activity from './Activity';
import Messages from './Messages';
import Projects from './Projects';
import Tasks from './Tasks';

// dummy data
import { projects } from '../../../apps/Projects/data';
import { todayTasks, upcomingTasks } from '../../../apps/Tasks/List/data';

import { activityTimeline, messages } from './data';

const OtherDetails = () => {
    const [activeTab, setactiveTab] = useState<string>('messages');

    /**
     * handles tab activation
     * @param eventKey currently active tab
     */
    const handleSelect = (eventKey: string | null) => {
        setactiveTab(eventKey!);
    };

    return (
        <Card>
            <Card.Body>
                <Nav
                    as="ul"
                    variant="pills"
                    justify
                    className="navtab-bg p-1"
                    activeKey={activeTab}
                    onSelect={handleSelect}>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="messages">Opportunities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="tasks">Tasks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="activity">Activity</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane active={activeTab === 'activity'} eventKey="activity">
                        <Activity activityTimeline={activityTimeline} />
                    </Tab.Pane>
                    <Tab.Pane active={activeTab === 'messages'} eventKey="messages">
                        <Messages messages={messages} />
                    </Tab.Pane>
                    <Tab.Pane active={activeTab === 'projects'} eventKey="projects">
                        <Projects projects={projects} />
                    </Tab.Pane>
                    <Tab.Pane active={activeTab === 'tasks'} eventKey="tasks">
                        <Tasks tasks={[...todayTasks, ...upcomingTasks]} />
                    </Tab.Pane>
                </Tab.Content>
            </Card.Body>
        </Card>
    );
};

export default OtherDetails;
