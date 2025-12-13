import { Router } from 'express';
import { CrudHandler } from '../handler/crud_handler';
import { createLimiter, queryLimiter } from '../../../middleware/rateLimiter';
import { validateAqmsInput, logRequest, validateRequestSize } from '../../../middleware/security';

const router = Router();
const crudHandler = new CrudHandler();


router.post(
    '/create',
    logRequest,
    createLimiter,
    validateRequestSize,
    validateAqmsInput,
    (req, res) => crudHandler.createData(req, res)
);

router.get(
    '/latest',
    logRequest,
    queryLimiter,
    (req, res) => crudHandler.queryNewData(req, res)
);

export default router;
