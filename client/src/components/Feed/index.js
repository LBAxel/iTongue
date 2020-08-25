import React, { useEffect } from 'react';

/* Components */
import { Header } from 'semantic-ui-react';

/* Containers */
import Layout from '../../containers/Layout';
import Irecords from "../../containers/Irecords";

/* Style */
import './feed.scss';

const Feed = ({ fetchAllRecords, allRecordsList }) => {

    useEffect(() => {
        fetchAllRecords();
    }, [fetchAllRecords]);

    return (
        <Layout>
            <div className="feed">
                <Header
                    size="small"
                    content="Fil d'actualités"
                    className="feed-title"
                />
                <div className="feed-list">
                    { allRecordsList && allRecordsList.map(record => (
                        <Irecords
                            key={record.id}
                            record={record}
                            user={record.user}
                            isUserRecord={record.user.id}
                        />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Feed;