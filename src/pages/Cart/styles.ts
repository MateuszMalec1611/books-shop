import styled from 'styled-components';

export const CartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CartItemsBox = styled.ul`
    margin-top: 10px;
    padding: 0;
    list-style: none;
    border: 1px solid #c8c8c8;
    border-radius: 10px;
    box-shadow: 4px 4px 10px black;
    overflow: hidden;
    max-width: 600px;
`;
