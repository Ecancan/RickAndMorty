/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { Method } from 'axios';
import { ApiErrorUseCase } from '../common/constants/errors';
import { HTTP_STATUS, NETWORK_DEFAULTS } from '../common/constants/networkConstants';
import { getHttpCodeErrorLabel, getHttpCodeErrorTitle } from '../utils/errorUtils';

let baseURL = '';
let headers = {};

type IBody = Record<string, unknown> | string | null;

export interface ApiError {
  id?: string;
  errorLabel: string;
  errorTitle?: string;
  useCase: ApiErrorUseCase;
  statusCode: number;
}

export class BaseAxios {
  constructor() {
    this.setBaseUrl();
    this.setHeaders();
    this.setResponseInterceptors();
  }

  private setBaseUrl() {
    baseURL = process.env.APP_URL || '';
  }

  private setHeaders() {
    headers = {
      Accept: 'application/json'
    };
  }

  private setResponseInterceptors() {
    axios.interceptors.response.use(
      (response) => response?.data,
      async (error) => {
        const errorResponse = error?.response;
        const errorStatusCode = errorResponse?.status;
        const errorMessage = errorResponse?.data?.message;

        const apiError: ApiError = {
          errorLabel: errorMessage,
          useCase: ApiErrorUseCase.SHOW_MESSAGE,
          statusCode: errorStatusCode
        };

        if (errorStatusCode && Object.keys(HTTP_STATUS)?.includes(errorStatusCode?.toString())) {
          apiError.errorLabel = getHttpCodeErrorLabel(errorMessage);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[400].code);
          apiError.useCase = ApiErrorUseCase.SHOW_MESSAGE;
        }

        if (!error || !errorResponse) {
          apiError.errorLabel = getHttpCodeErrorLabel(NETWORK_DEFAULTS.NETWORK_ERROR);
          apiError.errorTitle = getHttpCodeErrorTitle(NETWORK_DEFAULTS.NETWORK_ERROR);
          apiError.useCase = ApiErrorUseCase.SHOW_MESSAGE;
        }

        if (errorStatusCode === HTTP_STATUS[400].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(errorMessage);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[400].code);
        }

        if (errorStatusCode === HTTP_STATUS[404].code) {
          apiError.errorLabel = errorMessage;
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[404].code);
        }

        if (errorStatusCode === HTTP_STATUS[500].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(errorMessage);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[500].code);
        }

        if (errorStatusCode === HTTP_STATUS[503].code) {
          apiError.errorLabel = getHttpCodeErrorLabel(errorMessage);
          apiError.errorTitle = getHttpCodeErrorTitle(HTTP_STATUS[503].code);
        }

        return Promise.reject(apiError);
      }
    );
  }

  public async start(method: Method, url: string, body?: IBody, params?: any, rest?: any) {
    const axiosResponse = await axios({
      method,
      url,
      headers,
      baseURL,
      data: body,
      params: { ...params },
      ...rest
    });

    return axiosResponse;
  }
}
