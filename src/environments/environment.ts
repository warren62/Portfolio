import { IEnvironment } from '@environments/ienvironment';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: IEnvironment = {
  production: false,
  enableDebugTools: true,
  logLevel: 'debug',
  nasaApiUrl: 'https://api.nasa.gov/planetary/apod?api_key=OUglulkWhUypTytmdHNOa5V383PWM1woloIg3Nn6'
};
