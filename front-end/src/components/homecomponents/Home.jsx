import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import homeImage from '../../images/home.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
`;

const CreateButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  max-width: 200px; /* Limit the width of the button */
`;

const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow blogs to wrap to the next line */
  justify-content: center; /* Center blogs horizontally */
  gap: 20px; /* Add some space between blogs */
`;

const BlogCard = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: calc(120% - 20px); /* Adjust the width for 3 blogs per row */
  max-width: 300px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Story = styled.p`
  margin-bottom: 10px;
  font-size: 14px; /* Make the story text smaller */
`;

const Category = styled.p`
  font-style: italic;
`;

const BlogImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Home = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const createBlog = () => {
    navigate('/createBlog', { replace: false });
  };

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:2000');
      setBlogs(response.data);
    } catch (error) {
      console.log('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container>
      <Image src={homeImage} alt="Home" />
      <CreateButton onClick={createBlog}>Create Blog</CreateButton>
      <BlogContainer>
        {blogs.map((blog) => (
          <BlogCard key={blog._id}>
            <Title>{blog.title}</Title>
            <Story>{blog.story}</Story>
            <Category>Category: {blog.category}</Category>
            <BlogImage src={`/Images/${blog.image}`} alt="my image" />
          </BlogCard>
        ))}
      </BlogContainer>
    </Container>
  );
};

export default Home;
