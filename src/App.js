import React from 'react';
import './App.css';
import { Button, Comment, Form, Header, Container } from 'semantic-ui-react';
import faker from 'faker';
import CommentDetail from './components/CommentsDetail'

function App() {
  const title = 'Comments';
  const addReply = 'Add Reply';
  return (
    <div>
      <Container>
        <Comment.Group>
          <Header as='h3' dividing>
            {title}
          </Header>
          <CommentDetail
            author={faker.name.findName()}
            timeAgo={faker.date.past().toString()}
            content="Nice blog post"
            avatar={faker.image.avatar()}
          />
          <CommentDetail
            author={faker.name.findName()}
            timeAgo={faker.date.past().toString()}
            content="I like the subject"
            avatar={faker.image.avatar()}
          />
          <CommentDetail
            author={faker.name.findName()}
            timeAgo={faker.date.past().toString()}
            content="I like the writing"
            avatar={faker.image.avatar()}
          />
          <Form reply>
            <Form.TextArea />
            <Button content={addReply} labelPosition='left' icon='edit' primary />
          </Form>
        </Comment.Group>
      </Container>
    </div>
  );
}

export default App;
