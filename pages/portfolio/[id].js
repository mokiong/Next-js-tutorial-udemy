import { useRouter } from 'next/router';

function PortfolioProjectPage() {
    const router = useRouter();

    console.log(router.pathname);

    return (
        <div>
            <h1>portfolio project page</h1>
        </div>
    );
}

export default PortfolioProjectPage;
