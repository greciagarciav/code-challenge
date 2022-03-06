import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Provider store={store}>Hello React</Provider>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;