import { createAction } from '@ngrx/store';
import { ApodImageResponse } from '../../models/apod-image-response';
import { ApodRequest } from '../../models/apod-request';

export const getNewApod = createAction('[Apod Component] Get new apod');
export const getNewApodFail = createAction('[Apod Component] Get new apod - fail', (payload: string) => ({payload}));
export const getNewApodSuccess = createAction('[Apod Component] Get new apod - success', (payload: ApodImageResponse) => ({payload}));

export const getApods = createAction('[Apod Component] Get apods', (payload: ApodRequest) => ({payload}) );
export const getApodsFail = createAction('[Apod Component] Get apods - fail', (payload: string) => ({payload}));
export const getApodsSuccess = createAction('[Apod Component] Get apods - success', (payload: ApodImageResponse[]) => ({payload}));

export const appendApods = createAction('[Apod Component] Append apods', (payload: ApodRequest) => ({payload}) );
export const appendApodsFail = createAction('[Apod Component] Append apods - fail', (payload: string) => ({payload}));
export const appendApodsSuccess = createAction('[Apod Component] Append apods - success', (payload: ApodImageResponse[]) => ({payload}));
