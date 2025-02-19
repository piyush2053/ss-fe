export const getBaseUrl = () => {
    const env = process.env.REACT_APP_NODE_ENV
    if (env === 'DEV') {
        return 'http://localhost:5000';
    } else {
        return 'http://localhost:5000';
    }
};
