import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const BookCol = styled(Col)`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const PaginationWrapper = styled(Row)`
    display: flex;
    justify-content: center;

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & ul li {
        margin: 0 3px;
        display: flex;

        & a {
            padding: 5px 15px;
            text-decoration: none;
            color: black;
            font-size: 20px;
            font-weight: bold;

            &.active {
                border: 1px solid #212529;
                border-radius: 50%;
                background-color: #212529;
                color: white;
            }
        }
        &.disabled {
            a {
                color: gray;
            }
        }
    }
`;
