import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const Book = styled(Card)`
    max-width: 300px;
    height: 100%;
    box-shadow: 4px 4px 10px black;

    & button {
        margin-bottom: 10px;
        text-transform: uppercase;
    }
`;

export const BookBody = styled(Card.Body)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & div:first-child {
        text-align: center;
    }

    & div p {
        font-size: 18px;
    }
    & div span {
        font-weight: bold;
    }

    & div:nth-child(3) {
        & span {
            font-size: 15px;
        }
    }
    & div:nth-child(4) {
        margin-bottom: 10px;
    }
`;
