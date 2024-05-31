import {compose, pipe} from 'lodash/fp'
import './App.css'
import Counter from "./feature/counter/Counter.jsx";
import PostsList from "./feature/post/PostsList.jsx";


function App() {

    return (
        <main>
            <PostsList/>
        </main>
    )
}

export default App
