import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import styled from 'styled-components';
import { useState } from 'react';
import { Formik } from 'formik';
import schema from '../../Schema';

import ModalForm from '../ModalForm';

const Section = styled.section`
    width: 85%;
    margin: 1.75rem auto;
    padding: 1.5rem 1rem;
    border: 2px solid #000;

    p {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #212529;
        font-size: 1.25rem;

        span {
            font-weight: 500;
        }
    }

    @media screen and (min-width: 768px){
        width: 90%;
        padding: 2.5rem 4rem;
    }

    @media screen and (min-width: 1220px){
        width: 50%;
    }
`

const CampoForm = styled(InputGroup)`
    width: 80%;
    margin: 0 auto;
`

const Email = styled(Form.Control)`
    border-radius: 0;
    border: 1px solid #000;
    
    ::placeholder {
        color: #6C757D;
    }
`

const Botao = styled(Button)`
    border-radius: 0;
    border: 1px solid #9353FF;
    background-color: #9353FF;
    color: #FFF;
    padding: .56rem 1rem;

    &:hover{
        background-color: #0b5ed7;
    }
`

const ErrorMsg = styled.div`
    text-align: center;
    color: #FF0000;
    margin-top: .25rem;
`;


export default function Formulario() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


    return (
        <>
            <Section>
                <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? <span>Cadastre-se!</span></p>

                <Formik
                    validationSchema={schema}
                    validateOnMount
                    onSubmit={handleShow}
                    initialValues={{
                        email: '',
                    }}
                >
                    {(props) => (
                        <Form onSubmit={props.handleSubmit}>
                            <CampoForm>
                                <Email
                                    type="email"
                                    placeholder="Digite seu email"
                                    onChange={props.handleChange}
                                    value={props.values.email}
                                    name="email"
                                    onBlur={props.handleBlur}
                                />
                                <Botao
                                    type="submit"
                                    disabled={!props.isValid}
                                >
                                    Enviar
                                </Botao>
                            </CampoForm>
                            <ErrorMsg>
                                {props.touched.email && props.errors.email ? props.errors.email : null}
                            </ErrorMsg>
                        </Form>
                    )}
                </Formik>

                {show && (
                    <ModalForm
                        show={show}
                        handleClose={handleClose}
                    />
                )}
            </Section>
        </>
    );
}
