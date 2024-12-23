const API_SUFFIX = '/api';
const apiPath = (path: string) => `${API_SUFFIX}${path}`;

export const LOGIN_API_PATH = apiPath('/auth/login');
export const SIGNUP_API_PATH = apiPath('/auth/signup');
export const REFRESH_API_PATH = apiPath('/auth/refresh');
export const LOGOUT_API_PATH = apiPath('/auth/logout');

export const USER_API_PATH = apiPath('/users');
export const USER_PROFILE_API_PATH = apiPath('/users/profile');


export const CASE_API_PATH = apiPath('/cases');
export const CASE_DETAIL_API_PATH = (id: string) => apiPath(`/cases/${id}`);
