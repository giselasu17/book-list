import React, { Component } from 'react';

import BookList from '../containers/container_book_list'; 
import BookDetail from '../containers/container_book_detail';

class App extends Component {
    render () {
        return (
            <div className = "content">
                <BookList />
                <BookDetail />
            </div>
        )
    }
}

export default App;