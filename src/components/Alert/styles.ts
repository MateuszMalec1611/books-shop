import styled from 'styled-components';

interface WrapperProps {
    space?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ space }) => (space ? '90vh' : 'unset')};
`;
