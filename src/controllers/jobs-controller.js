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

export default {
    getJobs,
    getJobsById,
};
