import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect, InferThunkActionCreatorType } from 'react-redux';
import Loader from 'src/components/Loader/Loader';
import { HandleOrderAction } from 'src/store/CartStore/Cart.actions';
import { handleOrder } from 'src/store/CartStore/Cart.actions';
import { CartItem, Order } from 'src/store/CartStore/Cart.types';
import { RootState } from 'src/store/Store';
import Alert from 'src/components/Alert/Alert';
import * as S from './styles';

interface OrderFormProps {
    orders: CartItem[];
    totalAmount: number;
    loading: boolean;
    error?: string;
    handleOrder: InferThunkActionCreatorType<HandleOrderAction>;
}

const OrderForm: React.FC<OrderFormProps> = ({
    orders,
    totalAmount,
    loading,
    error,
    handleOrder,
}) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleOrderAction = () => {
        const orderedItems = orders.map(order => ({
            id: order.id,
            quantity: order.quantity,
        }));

        const order: Order = {
            order: orderedItems,
            first_name: name,
            last_name: lastName,
            city: city,
            zip_code: zipCode,
        };
        handleOrder(order);
    };

    const handleName = ({ target }: React.ChangeEvent<HTMLInputElement>) => setName(target.value);
    const handleLastName = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setLastName(target.value);
    const handleCity = ({ target }: React.ChangeEvent<HTMLInputElement>) => setCity(target.value);
    const handleZipCode = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setZipCode(target.value);

    return (
        <>
            {!loading  && (
                <S.FormWrapper>
                    <h2>Składanie zamówienia</h2>
                    <S.FormBox>
                        <Form.Group className="mb-3">
                            <Form.Label>Imię</Form.Label>
                            <Form.Control onChange={handleName} value={name} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nazwisko</Form.Label>
                            <Form.Control onChange={handleLastName} value={lastName} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Miejscowość</Form.Label>
                            <Form.Control onChange={handleCity} value={city} type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kod pocztowy</Form.Label>
                            <Form.Control onChange={handleZipCode} value={zipCode} type="text" />
                        </Form.Group>
                    </S.FormBox>
                    <S.SummaryBox>
                        <h3>Całkowita kwota:</h3>
                        <p>{totalAmount} zł</p>
                        <Button onClick={handleOrderAction} variant="success">
                            ZAMAWIAM I PŁACĘ
                        </Button>
                    </S.SummaryBox>
                </S.FormWrapper>
            )}
            {loading && <Loader />}
            {error && !loading && <Alert space={false} variant="danger">{error}</Alert>}
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    totalAmount: state.cartStore.totalAmount,
    orders: state.cartStore.cart,
    loading: state.cartStore.loading,
    error: state.cartStore.error,
});
export default connect(mapStateToProps, { handleOrder })(OrderForm);
