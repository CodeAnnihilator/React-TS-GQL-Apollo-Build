import { lazy as lazyRoute } from 'react';

const lazy = {
	Login: lazyRoute(() => import('modules/Auth/Login')),
	Admin: lazyRoute(() => import('modules/Admin')),
	Producer: lazyRoute(() => import('modules/Producer')),
}
export default lazy;