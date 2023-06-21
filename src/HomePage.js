import { useGetPostsQuery } from './api/api';


const HomePage = () => {


                const { data: posts, isLoading, isError } = useGetPostsQuery();


                if (isLoading) {
                        return <div>Loading...</div>;
                }

                if (isError) {
                        return <div>Error fetching posts</div>;
                }

                return (
                    <div>

                            {posts && posts.map((post) => (
                                <div key={post.id}>
                                        <h2>{post.title}</h2>
                                        <p>{post.author}</p>
                                </div>
                            ))}
                    </div>
                );

}
export default HomePage;


