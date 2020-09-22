import { lazy as lazyRoute } from 'react';

const lazy = {
	Home: lazyRoute(() => import('modules/dummyModules/Home')),
	About: lazyRoute(() => import('modules/dummyModules/About')),
	Users: lazyRoute(() => import('modules/dummyModules/Users'))
}
export default lazy;