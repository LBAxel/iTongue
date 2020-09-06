import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, Header, Icon } from "semantic-ui-react";

import Layout from "../../containers/Layout";
import Followers from "./followers";
import Following from "./following";
import Placeholder from "../Placeholder";

import "./ifollowersiFollowing.scss";

const IfollowersiFollowing = ({
    currentUser,
    fetchIfollowers,
    fetchIfollowing,
    allFollowers,
    allFollowing,
    setSelectedUserToFetchSubscriptions,
    selectedUserToFetchSubscriptions,
    followIfollowersPage,
    unfollowIfollowersPage,
}) => {
    const { pathname } = useLocation();
    useEffect(() => {
        fetchIfollowers();
        fetchIfollowing();

        return () => {
            setSelectedUserToFetchSubscriptions({});
        };
    }, [fetchIfollowers, fetchIfollowing]);

    const [activeItem, setActiveItem] = useState(pathname.substring(1));
    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };

    return (
        <Layout titlePage="Follows">
            <div className="ifollowersiFollowing">
                <Header size="tiny" className="ifollowersiFollowing-profil_back">
                    <Link to={`/user/${selectedUserToFetchSubscriptions.userSlug}`}>
                        <Icon name="chevron circle left" size="small" />
                        Back to profil
                    </Link>
                </Header>

                <Menu className="ifollowersiFollowing-menu" pointing secondary>
                    <Menu.Item
                        className="ifollowersiFollowing-menu__item"
                        name="ifollowers"
                        children={
                            <Header size="small">
                                {allFollowers ? allFollowers.length : 0} iFollowers
                            </Header>
                        }
                        active={activeItem === "ifollowers"}
                        onClick={handleItemClick}
                    />
                    <Menu.Item
                        className="ifollowersiFollowing-menu__item"
                        name="ifollowing"
                        children={
                            <Header size="small">
                                {allFollowing ? allFollowing.length : 0} iFollowing
                            </Header>
                        }
                        active={activeItem === "ifollowing"}
                        onClick={handleItemClick}
                    />
                </Menu>
            </div>
            {(!allFollowers || !allFollowing) && <Placeholder />}
            {activeItem === "ifollowing" ? (
                allFollowing ? (
                    allFollowing.map((following) => (
                        <Following
                            key={following.id}
                            allFollowing={allFollowing}
                            user={following}
                            currentUser={currentUser}
                            currentUserId={currentUser.id}
                            userSlugId={selectedUserToFetchSubscriptions.userId}
                            follow={followIfollowersPage}
                            unFollow={unfollowIfollowersPage}
                        />
                    ))
                ) : (
                    <div className="">You don't follow anyone</div>
                )
            ) : allFollowers ? (
                allFollowers.map((follower) => (
                    <Followers
                        key={follower.id}
                        allFollowing={allFollowing}
                        currentUserId={currentUser.id}
                        currentUser={currentUser}
                        userSlugId={selectedUserToFetchSubscriptions.userId}
                        follow={followIfollowersPage}
                        unFollow={unfollowIfollowersPage}
                        user={follower}
                    />
                ))
            ) : (
                <div className="">No one follow you</div>
            )}
        </Layout>
    );
};

export default IfollowersiFollowing;
