import Link from 'next/link';

function ClientPage() {
    const clients = [
        {
            id: 'max',
            name: 'Max',
        },
        {
            id: 'man',
            name: 'Man',
        },
    ];

    return (
        <div>
            <h1>The clients page</h1>
            <ul>
                {clients.map((client) => (
                    <Link
                        href={{
                            pathname: '/clients/[id]',
                            query: { id: client.id },
                        }}
                        key={client.id}
                    >
                        {client.name}
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default ClientPage;
