import React, { useEffect, useState } from 'react';
import { CometChat } from "@cometchat-pro/chat";
import "@shopify/polaris/styles.css";
import { SkeletonPage, Layout, Card, SkeletonBodyText, TextContainer, SkeletonDisplayText } from '@shopify/polaris';

import ChatContainer from "./ChatContainer";
import {CC_APP_ID as appID, CC_API_KEY as apiKey, CC_API_REGION as region} from "../../constants";

const Base = (props) => {
    const UID = props.match.params.uid
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        init();
        login()
    }, []);

    const init = async () => {
        CometChat.init(appID, new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build());

    }

    const login = async () => {
        try {
            const user = await CometChat.login(UID, apiKey)
            console.log("user login: ", user)
            setUser(user);
            setTimeout(() => {
                setLoading(false);
            },1000);
        }
        catch (error) {
            console.log("-----error", error);
        }
    }

    const getCurrentUser = async () => {
        const user = await CometChat.getLoggedinUser()
        console.log("user getCurrentUser: ", user)

    }

    const handleLogout = () => {
        CometChat.logout().then(() => {
            window.location.reload(true);
        }, error => {
            window.location.reload(true);
        })
    }
    if (loading) {
        return (
            <SkeletonPage primaryAction secondaryActions={2}>
                <Layout>
                    <Layout.Section>
                        <Card sectioned>
                            <SkeletonBodyText />
                        </Card>
                        <Card sectioned>
                            <TextContainer>
                                <SkeletonDisplayText size="small" />
                                <SkeletonBodyText />
                            </TextContainer>
                        </Card>
                        <Card sectioned>
                            <TextContainer>
                                <SkeletonDisplayText size="small" />
                                <SkeletonBodyText />
                            </TextContainer>
                        </Card>
                    </Layout.Section>
                    <Layout.Section secondary>
                        <Card>
                            <Card.Section>
                                <TextContainer>
                                    <SkeletonDisplayText size="small" />
                                    <SkeletonBodyText lines={2} />
                                </TextContainer>
                            </Card.Section>
                            <Card.Section>
                                <SkeletonBodyText lines={1} />
                            </Card.Section>
                        </Card>
                    </Layout.Section>
                </Layout>
            </SkeletonPage>
        );
    }

    return (
        <ChatContainer user={user} handleLogout={handleLogout} />);
}

export default Base;