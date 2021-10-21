import { useRouter } from 'next/router';

function ClientProjectsPage() {
    const router = useRouter();

    function loadProjectHandler() {
        router.push('/clients/max/projecta');
    }

    return (
        <div>
            <h1>The projects of given client</h1>
            <button onClick={loadProjectHandler}>Load Project</button>
        </div>
    );
}

export default ClientProjectsPage;
