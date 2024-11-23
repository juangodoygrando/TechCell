import{useState, useEffect} from "react"


const useFetch = (url) => {
  const [data, SetData]=useState([])
  const [loading, setLoading]=useState(false)
  const [errors, setErrors]=useState(null)


  useEffect(()=>{
    setLoading(true)
    fetch((url))
    .then((resp)=>resp.json())
    .then((result)=>SetData(result))
    .catch((error)=>setErrors(error))
    .finally(()=>setLoading(false))

  },[url])

  return{data,loading,errors}

}

export default useFetch