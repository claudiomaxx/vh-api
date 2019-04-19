import { Router } from 'express';
import jobsController from '../controllers/jobs-controller';

const router = Router();

router.get('/jobs', jobsController.getJobs);
router.get('/jobs/:id', jobsController.getJobsById);

export default router;
