import Link from 'next/link';

function ClientPage() {
    return (
        <div>
            <h1>The clients page</h1>
            <ul>
                <li>
                    <Link href="/portfolio/max">Max</Link>
                </li>
                <li>
                    <Link href="/portfolio/man">Man</Link>
                </li>
            </ul>
        </div>
    );
}

export default ClientPage;
