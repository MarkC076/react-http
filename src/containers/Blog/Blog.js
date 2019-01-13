import React, { Component } from 'react';
//import axios from 'axios';
import './Blog.css';
import Posts from "../Blog/Posts/Posts";
import { Route, Link } from "react-router-dom";
import NewPost from "../Blog/NewPost/NewPost";

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{ 
                                pathname: "/new-post", 
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <Posts />} />*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;