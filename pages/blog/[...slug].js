import { useRouter } from 'next/router';

function BlogPost() {
    const router = useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>The blog posts</h1>
        </div>
    );
}

export default BlogPost;
