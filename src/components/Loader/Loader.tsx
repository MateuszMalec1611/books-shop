import { Spinner } from 'react-bootstrap';
import * as S from './styles';

const Loader = () => {
    return (
        <S.Wrapper>
            <Spinner animation="border" />
        </S.Wrapper>
    );
};

export default Loader;
