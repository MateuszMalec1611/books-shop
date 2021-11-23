import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect, InferThunkActionCreatorType } from 'react-redux';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Loader from 'src/components/Loader/Loader';
import { HandleOrderAction, SetOnSuccessCartAction } from 'src/store/CartStore/Cart.actions';
import { handleOrder, setOnSuccessState } from 'src/store/CartStore/Cart.actions';
import { CartItem, Order } from 'src/store/CartStore/Cart.types';
import { RootState } from 'src/store/Store';
import Alert from 'src/components/Alert/Alert';
import * as S from './styles';

interface OrderFormProps {
    orders: CartItem[];
    totalAmount: number;
    loading: boolean;
    error?: string;
    onSuccess?: boolean;
    handleOrder: InferThunkActionCreatorType<HandleOrderAction>;
    setOnSuccessState: InferThunkActionCreatorType<SetOnSuccessCartAction>;
}

const OrderForm: React.FC<OrderFormProps> = ({
    orders,
    totalAmount,
    loading,
    error,
    onSuccess,
    handleOrder,
    setOnSuccessState,
}) => {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });

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

    useEffect(() => {
        if (onSuccess) {
            const redirectTimeout = setTimeout(() => {
                setOnSuccessState();
                navigate('/', { replace: true });
            }, 1500);

            return () => clearTimeout(redirectTimeout);
        }
    }, [navigate, onSuccess, setOnSuccessState]);

    return (
        <>
            {!loading && !onSuccess && (
                <S.FormWrapper>
                    <h2>Składanie zamówienia</h2>
                    <S.FormBox>
                        <Form.Group className="mb-3">
                            <Form.Label>Imię</Form.Label>
                            <Form.Control
                                {...register('firstName', {
                                    required: true,
                                    value: name,
                                    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) =>
                                        setName(target.value),
                                })}
                                type="text"
                                isInvalid={errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                Proszę podaj prawidłowe imię (minimum 1 znak)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Nazwisko</Form.Label>
                            <Form.Control
                                {...register('lastName', {
                                    required: true,
                                    value: lastName,
                                    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) =>
                                        setLastName(target.value),
                                })}
                                type="text"
                                isInvalid={errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                Proszę podaj prawidłowe nazwisko (minimum 1 znak)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Miejscowość</Form.Label>
                            <Form.Control
                                {...register('cityName', {
                                    required: true,
                                    value: city,
                                    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) =>
                                        setCity(target.value),
                                })}
                                type="text"
                                isInvalid={errors.cityName}
                            />
                            <Form.Control.Feedback type="invalid">
                                Proszę podaj prawidłową miejscowość (minimum 1 znak)
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kod pocztowy</Form.Label>
                            <Form.Control
                                {...register('zipCode', {
                                    required: true,
                                    value: zipCode,
                                    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) =>
                                        setZipCode(target.value),
                                })}
                                type="text"
                                isInvalid={errors.zipCode}
                            />
                            <Form.Control.Feedback type="invalid">
                                Proszę podaj prawidłowy kod pocztowy
                            </Form.Control.Feedback>
                        </Form.Group>
                    </S.FormBox>
                    <S.SummaryBox>
                        <h3>Całkowita kwota:</h3>
                        <p>{totalAmount} zł</p>
                        <Button onClick={handleSubmit(handleOrderAction)} variant="success">
                            ZAMAWIAM I PŁACĘ
                        </Button>
                    </S.SummaryBox>
                </S.FormWrapper>
            )}
            {loading && <Loader />}
            {!!error && !loading && <Alert variant="danger">{error}</Alert>}
            {!loading && onSuccess && (
                <Alert space={true} variant="success">
                    Pomyślnie złożono zamówienie
                </Alert>
            )}
        </>
    );
};

const mapStateToProps = (state: RootState) => ({
    totalAmount: state.cartStore.totalAmount,
    orders: state.cartStore.cart,
    loading: state.cartStore.loading,
    error: state.cartStore.error,
    onSuccess: state.cartStore.onSuccess,
});
export default connect(mapStateToProps, { handleOrder, setOnSuccessState })(OrderForm);
