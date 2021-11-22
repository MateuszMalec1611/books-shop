import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect, InferThunkActionCreatorType } from 'react-redux';
import { sendOrder } from 'src/store/CartStore/Cart.services';
import { CartItem, Order, SendOrderAction } from 'src/store/CartStore/Cart.types';
import { RootState } from 'src/store/Store';
import * as S from './styles';

interface OrderFormProps {
    orders: CartItem[];
    totalAmount: number;
    sendOrder: InferThunkActionCreatorType<SendOrderAction>;
}

const OrderForm: React.FC<OrderFormProps> = ({ orders, totalAmount, sendOrder }) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const handleOrder = () => {
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
        sendOrder(order);
    };

    const handleName = ({ target }: React.ChangeEvent<HTMLInputElement>) => setName(target.value);
    const handleLastName = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setLastName(target.value);
    const handleCity = ({ target }: React.ChangeEvent<HTMLInputElement>) => setCity(target.value);
    const handleZipCode = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
        setZipCode(target.value);

    return (
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
                <Button onClick={handleOrder} variant="success">
                    ZAMAWIAM I PŁACĘ
                </Button>
            </S.SummaryBox>
        </S.FormWrapper>
    );
};

const mapStateToProps = (state: RootState) => ({
    totalAmount: state.cartStore.totalAmount,
    orders: state.cartStore.cart,
});
export default connect(mapStateToProps, { sendOrder })(OrderForm);
