import ky from 'ky';
import { BACKENDS, ROUTES } from '../../config';

export const login = ({ email, password }) => ky.post(`${BACKENDS.FLASK_SERVER}/${ROUTES.LOGIN}`, { json: { email, password }, credentials: 'include' });

export const todo = null;
