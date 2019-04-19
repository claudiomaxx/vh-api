import { Router } from 'express';

const getJobs = ({ res }) => {
    res.send([
        {
            id: 1,
            title: 'Senior AngularJS developer',
        },
    ]);
};

const getJobsById = (req, res) => {
    res.send({
        id: 1,
        title: `Senior AngularJS develoer ${req.params.id}`,
    });
};

const router = Router();
router.get('/', getJobs);
router.get('/:id', getJobsById);

export default router;
