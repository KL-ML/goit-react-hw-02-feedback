import { Box } from "components/Box";
import { TableTd } from "./Statistics.styled";

export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
    const statisticsResults = [
        { lable: 'Good:', number: good },
        { lable: 'Neutral:', number: neutral },
        { lable: 'Bad:', number: bad },
        { lable: 'Total:', number: total },
        { lable: 'Positive feedback:', number: positivePercentage },
    ];

    return (
        <Box
            as="table"
            width="100%">
            <tbody>
                {statisticsResults.map(({ lable, number }) => (
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