export const getBaseUrl = () => {
    
    const env = process.env.REACT_APP_NODE_ENV
    console.log( '@@@@@@@@@@@@@@@@', env)
    if (env === 'DEV') {
        return 'http://localhost:3000';
    } else {
        return 'http://localhost:3000';
    }
};
