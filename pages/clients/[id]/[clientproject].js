import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
    const router = useRouter();
    console.log(router);

    return (
        <div>
            <h1>Specific Project Page</h1>
        </div>
    );
}

export default SelectedClientProjectPage;
