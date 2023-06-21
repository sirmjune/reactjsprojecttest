import { useGetPostsQuery, useAddPostMutation } from './api/api';


const HomePage = () => {
// PostList()

    function PostList() {
        const { data: posts, isLoading, isError } = useGetPostsQuery();
        const [addPost, { isLoading: isAdding }] = useAddPostMutation();

        const handleAddPost = async () => {
            const newPost = {
                title: 'New Post',
                author: 'author 1',
            };

            try {
                await addPost(newPost).unwrap();
                console.log('Post added successfully!');
            } catch (error) {
                console.error('Failed to add post:', error);
            }
        };

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (isError) {
            return <div>Error fetching posts</div>;
        }

        return (
            <div>
                <button onClick={handleAddPost} disabled={isAdding}>
                    Add Post
                </button>
                {posts && posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.author}</p>
                    </div>
                ))}
            </div>
        );
    }

    // const {isLoading, data} = useQuery('sures', () => {
    //     return axios.get('http://localhost:8181/api/v1/sures')
    // })
    // console.log(data?.data?._embedded)
    // return <div>
    //     {isLoading ? <h2> Loading...</h2> : (
    //         <div><h1>Data</h1>
    //             {/*<PostList items={data?.data?.slice().reverse()}/>*/}
    //             <PostList items={data?.data?._embedded?.sures}/>
    //         </div>
    //
    //     )
    //     }
    //
    // </div>

}
export default HomePage;


