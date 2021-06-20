import { createAction } from '@ngrx/store';
import { ApodImageResponse } from '../../models/apod-image-response';

export const getNewAPOD = createAction('[APOD Component] Get new apod');
export const getNewAPODFail = createAction('[APOD Component] Get new apod - fail', (payload: string) => ({payload}));
export const getNewAPODSuccess = createAction('[APOD Component] Get new apod - success', (payload: ApodImageResponse) => ({payload}));
