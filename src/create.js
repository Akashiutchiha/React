import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')
   const [author, setAuthor] = useState('mario')
   const [isPending, setPending] = useState(false);
   const history = useHistory();

   

   const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setPending(true);
    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
    }).then(() => {
        console.log('new blog added');
        setPending(false);
        history.push("/")

    })

   }
   
    return ( 
        <div className="create">
            <form onSubmit={handleSubmit} action="/">
                <label htmlFor="">Blog Title:</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>

                <label htmlFor="" value={body}>Blog Body:</label>
                <textarea value={body} onChange={(e)=>{setBody(e.target.value)}} required></textarea>

                <label htmlFor="">Blog Author:</label>
                <select name="" id="" value={author} onChange={(e)=>{setAuthor(e.target.value)}}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                <button>
                    {isPending ? 'Loading...' : 'Add Blog'}
                </button>
                <p>{ title }</p>
                <p>{ body }</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;