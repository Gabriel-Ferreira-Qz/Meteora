import Form from 'react-bootstrap/Form';

import { useState } from 'react';
import { Formik } from 'formik';
import schema from '../../Schema';

import { Botao, CampoForm, Email, ErrorMsg, Section } from './style';

import ModalForm from '../ModalForm';

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
