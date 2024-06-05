
import { useLocation } from "react-router";

function Error() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div>Error</div>
  )
}

export default Error