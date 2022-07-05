import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect , useState } from "react";
import SingleMatch from "../../components/singleMatch/SingleMatch";
const Home = () => {
    const [matches,setMatches] = useState(null)
    useEffect(() => {
        const fetchMatches = async() => {
            const response = await fetch('/api/matches')
            const json = await response.json()
            if (response.ok) {
                setMatches(json)
            }
        }
        fetchMatches()
    },[])

    return ( 
        <>
        <div className="homepage flex">
        <Sidebar />
            <div className="p-3 grid grid-cols-1 w-screen place-items-top bg-gray-800 text-white gap-5 md:grid-cols-2">
                {matches && matches.map((match) => (
                    <SingleMatch key={match._id} match={match}/>
                    ))}
            </div>
        </div>
        </>
     );
}
 
export default Home;