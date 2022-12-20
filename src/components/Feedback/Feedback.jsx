import React from 'react';
import { Box } from "components/Box";
import { FeedbackButtons } from './FeedbackButtons';
import { FeedbackResults } from './FeedbackResults';
import { MainHeader, SecondaryHeader } from './Feedback.styled';

export class Feedback extends React.Component {
    static propTypes = {
        //
    };
    static defaultProps = {
        //
    };
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    render() {
        return (
            <Box
                bg="background"
                boxShadow="boxShadowSection"
                borderRadius="normal"
                overflow="hidden"
                // display="flex"
                // flexDirection="column"
                // justifyContent="center"
                // alignItems="center"
                p={4}

            >
                <MainHeader>Please leave feedback</MainHeader>
                <FeedbackButtons />
                <SecondaryHeader>Statistics</SecondaryHeader>
                <FeedbackResults />
            </Box>
        );
    }
}