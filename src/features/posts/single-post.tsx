import { Container, Text, Image } from '@chakra-ui/react';
import { Post } from '../api';

interface SinglePostProps {
  post: Post;
}

const SinglePost: React.FC<SinglePostProps> = ({ post }) => {
  return (
    <Container variant="card" mt={4}>
      <Text>{post.userId}</Text>
      <Text>{post.desc}</Text>
      <Image src={post.img}></Image>
      <Text>{JSON.stringify(post.likes, null, 2)}</Text>
    </Container>
  );
};

export { SinglePost };
