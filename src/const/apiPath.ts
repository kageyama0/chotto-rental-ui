const API_SUFFIX = '/api';
const apiPath = (path: string) => `${API_SUFFIX}${path}`;

export const LOGIN_PATH = apiPath('/auth/login');
export const SIGNUP_PATH = apiPath('/auth/signup');
export const REFRESH_PATH = apiPath('/auth/refresh');
export const LOGOUT_PATH = apiPath('/auth/logout');

export const USER_PATH = apiPath('/users');


export const CASE_PATH = apiPath('/cases');
export const CASE_DETAIL_PATH = (id: string) => apiPath(`/cases/${id}`);
