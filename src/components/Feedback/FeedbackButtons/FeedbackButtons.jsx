import { Box } from "components/Box";
import { Button } from './FeedbackButtons.styled';

const buttonsLable = [
    { lable: 'Good' },
    { lable: 'Neutral' },
    { lable: 'Bad' },
];

export const FeedbackButtons = () => {
    return (
        <Box
            display="flex"
            justifyContent="space-around"
            mb={5}
        >
            {buttonsLable.map(({ lable }, index) => (
                <Button
                    key={lable}
                    type="button">
                    {lable}
                </Button>
            ))}
        </Box>
    );
}