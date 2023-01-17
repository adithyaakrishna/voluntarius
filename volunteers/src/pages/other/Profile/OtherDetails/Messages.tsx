import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

// types
import { MessageTypes } from './data';

import { records as data } from './tableData';
import Table from '../../../../components/Table';

const columns = [
    {
        Header: 'Sl No.',
        accessor: 'slno',
        sort: true,
    },
    {
        Header: 'NGO',
        accessor: 'ngo',
        sort: true,
    },
    {
        Header: 'Task',
        accessor: 'task',
        sort: false,
    },
    {
        Header: 'Status',
        accessor: 'status',
        sort: true,
    },
    {
        Header: 'Hours',
        accessor: 'hours',
        sort: false,
    },
    {
        Header: 'Coins',
        accessor: 'coins',
        sort: false,
    },
];

const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: 'All',
        value: data.length,
    },
];

interface MessagesProps {
    messages: MessageTypes[];
}

const Messages = ({ messages }: MessagesProps) => {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <h4 className="header-title">All Opportunities</h4>
                            <p className="text-muted fs-14 mb-4">Browse</p>

                            <Table
                                columns={columns}
                                data={data}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                                isSearchable={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Messages;
