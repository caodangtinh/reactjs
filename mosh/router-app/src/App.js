import React, {Component} from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import ProductDetails from "./components/productDetails";

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="content">
                    <Switch>
                        <Route path="/products/:id" render={(props) => <ProductDetails {...props} />}/>
                        <Route path="/products" render={(props) => <Products {...props} sortBy="newest"/>}/>
                        <Route path="/posts" render={(props) => <Posts {...props} title="my title"/>}/>
                        <Route path="/admin" component={Dashboard}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
