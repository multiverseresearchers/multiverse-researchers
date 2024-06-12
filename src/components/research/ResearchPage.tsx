import { useParams } from 'react-router-dom';

const ResearchPage = () => {
    const { link } = useParams();

    return (
        <div>
            <h1>Research Page: {link}</h1>
            <p>This feature is currently under development.</p>
        </div>
    );
};

export default ResearchPage;