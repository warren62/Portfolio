import { createAction } from '@ngrx/store';
import { ApodImageResponse } from '../../models/apod-image-response';
import { ApodRequest } from '../../models/apod-request';

export const getNewAPOD = createAction('[APOD Component] Get new apod');
export const getNewAPODFail = createAction('[APOD Component] Get new apod - fail', (payload: string) => ({payload}));
export const getNewAPODSuccess = createAction('[APOD Component] Get new apod - success', (payload: ApodImageResponse) => ({payload}));

export const getAPODs = createAction('[APOD Component] Get apods', (payload: ApodRequest) => ({payload}) );
export const getAPODsFail = createAction('[APOD Component] Get apods - fail', (payload: string) => ({payload}));
export const getAPODsSuccess = createAction('[APOD Component] Get apods - success', (payload: ApodImageResponse[]) => ({payload}));
