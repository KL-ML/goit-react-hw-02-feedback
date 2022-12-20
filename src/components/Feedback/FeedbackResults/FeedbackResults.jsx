import { Box } from "components/Box";
import { TableTd } from "./FeedbackResults.styled";

const statisticsResults = [
    { lable: 'Good:', number: '2' },
    { lable: 'Neutral:', number: '1' },
    { lable: 'Bad:', number: '0' },
    { lable: 'Total:', number: '3' },
    { lable: 'Positive feedback:', number: '67%' },
    
]

export const FeedbackResults = () => {
    return (
        <Box
            as="table"
            width="100%"
        >
            <tbody>
                {statisticsResults.map(({ lable, number }, index) => (
                    <tr
                        key={lable}>
                        <TableTd>{lable}</TableTd>
                        <TableTd>{number}</TableTd>
                    </tr>
                ))}
                
            </tbody>
        </Box>
    );
}