import {useSelector} from "react-redux";
import {selectAllPost} from "./postSlice.js";

const  PostsList=()=>{

    const posts=useSelector(selectAllPost)

    const renderPosts=posts.map(post=>(
        <article className={"text-white m-5 border-2 border-solid border-white border-r-5  p-5"} key={post.id}>
            <h3 className={"text-[18px] font-semibold"}>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ))

    return(
        <div className={"w-[100%] h-[100vh] flex items-center flex-col bg-gray-600 opacity-0.5"}>

            <div>
                <h2 className={"text-[24px] font-bold text-white"}>Posts</h2>
            </div>

            <div>
                {renderPosts}
            </div>



        </div>
    )
}

export default  PostsList;