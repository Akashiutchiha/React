import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const [ data, error, isPending ] = useFetch('http://localhost:8000/blogs/' + id);
  console.log(data);

  return (
    <div className="data-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { data && 
        <div>
            <article>
          <h2>{ data.title }</h2>
          <p>Written by { data.author }</p>
          <div>{ data.body }</div>
        </article>
        </div>
      }
    </div>
  );
}
 
export default BlogDetails;