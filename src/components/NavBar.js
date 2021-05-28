import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from '@material-ui/core/Button';


export default function Navbar() {
  const location = useLocation();
  const history = useHistory()



  return (
    <div style={{ width: "100%", backgroundColor: "lightgray" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "33%",

        }}
      >
        <Button color="primary"
          onClick={() => {

            history.push("/")
          }}
        >
          Find Book
        </Button>
        {!location.pathname.includes("/library") ? (
          <Button color="primary"
            onClick={() => {

              history.push("/library")
            }}
          >
            Library
          </Button>
        ) : (
          <div> Library</div>
        )}

      </div>
    </div>
  );
}
