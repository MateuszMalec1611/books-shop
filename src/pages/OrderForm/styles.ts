import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const FormWrapper = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h2 {
        margin-top: 10px;
    }
`;
export const FormBox = styled(Form)`
    width: 100%;
    max-width: 500px;
`;
export const SummaryBox = styled.div`
    margin-bottom: 20px;
    text-align: center;
    & p {
        color: green;
        font-size: 20px;
    }
`;
