import styled from "@emotion/styled";

export const MainHeader = styled.h1`
    font-family: ${p => p.theme.fonts.heading};
    font-size: ${p => p.theme.fontSizes[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    text-align: center;
`;
export const SecondaryHeader = styled.h2`
    font-family: ${p => p.theme.fonts.heading};
    font-size: ${p => p.theme.fontSizes[3]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
`;
