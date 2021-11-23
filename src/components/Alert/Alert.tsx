import { Alert as AlertComponent } from 'react-bootstrap';
import * as S from './styles';

interface AlertProps {
    variant: string;
    space?: boolean;
}

const Alert: React.FC<AlertProps> = ({ variant, space, children }) => {
    return (
        <S.Wrapper space={space}>
            <AlertComponent variant={variant}>{children}</AlertComponent>
        </S.Wrapper>
    );
};

export default Alert;
