import { User } from '../shared/interfaces/usuario.interface';

export interface LoginResponse {
    user: User;
    token: string;
}