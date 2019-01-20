import React, { Component } from 'react';
//import axios from 'axios';
import './Blog.css';
import Posts from "../Blog/Posts/Posts";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import asyncComponent from "../../hoc/asyncComponent";
//import NewPost from "../Blog/NewPost/NewPost";
const AsyncNewPost = asyncComponent(() => {
    return import("../Blog/NewPost/NewPost");
});

class Blog extends Component {
    state = {
        auth: true
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                exact to="/posts" 
                                activeClassName="my-active" 
                                activeStyle={{color: "#fa923f", textDecoration: "underline"}}>Posts</NavLink></li>
                            <li><NavLink to={{ 
                                pathname: "/new-post", 
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/*<Route path="/" exact render={() => <Posts />} />*/}
                    { this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not Found!</h1>} />
                    {/*<Route path="/" component={Posts} />*/}
                    {/*<Redirect from="/" to="/posts" />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;