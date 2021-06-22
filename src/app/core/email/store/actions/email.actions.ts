import { createAction } from '@ngrx/store';
import { EmailRequest } from '../../models/email-request';

export const sendEmail = createAction('[Email] Send email', (payload: EmailRequest) => ({payload}));
export const sendEmailFail = createAction('[Email] Send email - fail', (payload: string) => ({payload}));
export const sendEmailSuccess = createAction('[Email] Send email - success');
