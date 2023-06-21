import { useGetPostsQuery } from './api/api';
import Card from "./components/ui/Card";


const HomePage = () => {


                const { data: posts, isLoading, isError } = useGetPostsQuery();


                if (isLoading) {
                        return <div>Loading...</div>;
                }

                if (isError) {
                        return <div>Error fetching posts</div>;
                }

                return (<Card>
                    <div>

                            {posts && posts.map((post) => (
                                <div key={post.id}>
                                        <h2>Title: {post.title}</h2>
                                        <p>Author: {post.author}</p>
                                </div>
                            ))}
                    </div>
                    </Card>
                );

}
export default HomePage;


