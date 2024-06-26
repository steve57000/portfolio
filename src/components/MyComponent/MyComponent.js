import React from 'react';
import { useInitial } from '../../utils/hooks/useInitial';

const MyComponent = () => {
    const { loading, error } = useInitial();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error occurred while fetching data.</div>;
    }

    return <div>Data fetched successfully!</div>;
};

export default MyComponent;
