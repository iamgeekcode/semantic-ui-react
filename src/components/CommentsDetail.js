import React from 'react'
import { Comment } from 'semantic-ui-react';

const CommentDetail = (props) => {
    console.log(props)
    return (
        <React.Fragment>
            <Comment>
                <Comment.Avatar src={props.avatar} alt="avatar" />
                <Comment.Content>
                    <Comment.Author as='a'>{props.author}</Comment.Author>
                    <Comment.Metadata>
                        <div>{props.timeAgo}</div>
                    </Comment.Metadata>
                    <Comment.Text>{props.content}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        </React.Fragment>
    );
};

export default CommentDetail;