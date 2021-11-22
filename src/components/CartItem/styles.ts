import styled from 'styled-components';

export const CartItemBox = styled.li`
    padding: 12px;
    display: flex;
    background-color: #fff;
    align-items: center;
    border-bottom: 1px solid #c8c8c8;

    &:last-child {
        border-bottom: none;
    }
`;

export const ImageBox = styled.div`
    width: max-content;
    & img {
        height: 100px;
        min-width: 65px;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2 {
        margin-left: 10px;
        text-align: center;
        font-size: 20px;
    }
`;

export const ButtonsBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
        margin: 5px 8px;
    }

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;

        & p {
            margin-bottom: -2px;
        }

        & p:last-child {
            font-weight: bold;
        }
    }
`;
