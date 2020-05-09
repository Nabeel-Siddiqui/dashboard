import React from 'react';
import { Item } from 'semantic-ui-react'
import '../Styling/Reddit.css'

export default function Reddit( { reddit } ) {
    
    return (
        <div className="ui raised segments">
            <div className="ui segment">
                 <Item.Group>
                    <Item>
                        {reddit.thumbnail.includes("http") &&
                        <img className="ui avatar image" alt="reddit" src={ reddit.thumbnail } height="175" width="175"></img> }
                        <br/>
                        <Item.Content>
                            <a href={reddit.url}>
                        <Item.Header as='a'>{reddit.title} </Item.Header> 
                            </a>
                        <Item.Meta>Subreddit - r/{reddit.subreddit}</Item.Meta>
                        <Item.Description>
                            Posted By - u/{reddit.author} <br/>
                            Comments - {reddit.num_comments} <br/>
                        <div className="upvote">Upvotes - {reddit.score}</div>
                        </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </div>
        </div>
    )
}