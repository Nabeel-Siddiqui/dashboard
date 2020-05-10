import React from 'react';
import { Segment, Item } from 'semantic-ui-react'
import '../Styling/Reddit.css'

export default function Reddit( { reddit } ) {
    return (
    <div>
    <Segment vertical>
    <Item.Group>
    <Item>
        {reddit.thumbnail.includes("http") &&
        <img className="ui avatar image" alt="reddit" src={ reddit.thumbnail } height="175" width="175"></img> }
        <br/>
        <a href={reddit.url}>
        {reddit.title}
        </a>
        Subreddit - r/{reddit.subreddit}
        Posted By - u/{reddit.author}
        <br/>
        Comments - {reddit.num_comments}
        <br/>
        <div className="upvote">Upvotes - {reddit.score}</div>
        </Item>
        </Item.Group>
    </Segment>
    </div>
    )
}