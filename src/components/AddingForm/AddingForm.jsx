import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorAlert from "../../components/ErrorAlert/ErrorAlert";
const AddingForm = () => {
    const [title,setTitle] = useState('')
    const [boxer,setBoxer] = useState('')
    const [boxer1,setBoxer1] = useState('')
    const [rounds,setRounds] = useState('')
    const [error,setError] = useState(null)
    const navigation = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const match = {
            title,
            boxer,
            boxer1,
            rounds
        }
        const response = await fetch('/api/matches', {
            method: 'POST',
            body: JSON.stringify(match),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();
        if (!response.ok) {
            setError(json.error)
            console.log(json)
        }
        if (response.ok) 
        {
            setError(null)
            setBoxer('')
            setBoxer1('')
            setTitle('')
            setRounds('')
            navigation("/")
        }
    }
    return (  
                    <div className="p-3 w-screen items-center text-center justify-center bg-gray-800 text-white gap-5">
                <h1 className="text-3xl text-center p-10">Add new match</h1>
                <form onSubmit={handleSubmit}>
                    <h3 className="text-3xl text-center p-3">Match title</h3>
                    <input type="text" className="form-input rounded text-purple-500" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..." required/>
                    <h3 className="text-3xl text-center p-3">Fight between:</h3>
                    <div className="flex justify-center text-center align-center"><input className="form-input rounded text-purple-500" type="text" value={boxer} onChange={(e) => setBoxer(e.target.value)} placeholder="First boxer..." required/><p className="p-3">vs</p><input className="form-input rounded text-purple-500" type="text" value={boxer1} onChange={(e) => setBoxer1(e.target.value)} placeholder="Second boxer" required/></div>
                    <h3 className="text-3xl text-center p-3">Rounds:</h3>
                    <input type="number" className="form-input rounded text-purple-500" value={rounds} onChange={(e) => setRounds(e.target.value)} placeholder="Rounds..." required max='15'/>
                    <br></br>
                    <button className="m-3 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-3xl hover:cursor-pointer
        hover:rounded-xl
        transition-all duration-500 ease-linear" type="submit">Add</button>
                </form>
                {error && <ErrorAlert error={error}/>}
            </div>
    );
}
 
export default AddingForm;