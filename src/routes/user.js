import { Router } from 'express';
import user from '../controllers/User';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', user.store);
router.get('/', user.index);
router.get('/:id', user.show);
router.put('/:id', loginRequired, user.update);
router.delete('/:id', loginRequired, user.delete);

export default router;
