import { useAuth } from "../store/auth";
import Cursor from "../components/cursor/Page";

const About = () => {

  const { enter } = useAuth();

  return (
    <div>
      {/* <p>{`Hello ${enter.username}`}</p> */}
      <p>Welcome, { enter ? enter.username : "in over website."}</p>
      <h1>This is a About page</h1>

    <Cursor/>

    </div>
  )
}

export default About;