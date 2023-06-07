const Create = () => {
    return ( 
        <div className="create">
            <form action="">
                <label htmlFor="">Blog Title</label>
                <input type="text" required/>
                <label htmlFor="">Blog Body</label>
                <textarea></textarea>
                <label htmlFor="">Blog Author</label>
                <select name="" id="">
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
            </form>
        </div>
     );
}
 
export default Create;