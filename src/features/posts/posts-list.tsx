import { Box, Center, Spinner } from '@chakra-ui/react';
import { SinglePost } from './single-post';
import { useGetPostsAllQuery } from '../api';

export const PostsList: React.FC = () => {
  const { data: posts, isLoading, isFetching } = useGetPostsAllQuery();

  console.log(isFetching, isLoading, posts);

  if (isLoading) {
    console.log('isLoading');
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <Box>
      {posts?.map(post => (
        <SinglePost post={post} key={post._id} />
      ))}
    </Box>
  );
};
