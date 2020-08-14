import React from "react";
import { Grid, Icon, Menu, Segment, Sidebar } from "semantic-ui-react";

import Header from "./header";

import "./header.scss";

const LayoutHeader = (props) => {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className="menu">
            <Grid style={{ height: "100%" }} columns={1}>
                <Grid.Column>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar
                            as={Menu}
                            animation="overlay"
                            icon="labeled"
                            onHide={() => setVisible(false)}
                            vertical
                            direction="right"
                            visible={visible}
                            width="thin"
                        >
                            <Menu.Item as="a">
                                <Icon name="sidebar" />
                                Home
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Icon name="gamepad" />
                                Games
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Icon name="camera" />
                                Channels
                            </Menu.Item>
                        </Sidebar>

                        <Sidebar.Pusher dimmed={visible}>
                            <Segment basic>
                                <div className="">
                                    <Header
                                        visible={visible}
                                        setVisible={setVisible}
                                    />
                                    <div className="">{props.children}</div>
                                </div>
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default LayoutHeader;