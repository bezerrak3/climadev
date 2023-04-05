import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import InputWithSugestions from "../form/inputWithSugestions/InputWithSugestions";

export default function SearchCity(props){
    const [searchText,setSearchText] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const router = useRouter()

const fetchCitiesList = async () => {
    const CITIES_LIMIT = 5
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${CITIES_LIMIT}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
    const json = await response.json()
    handleList(json)
}

const handleList = (list) => {
    const formatedList = list.map((obj)=> ({text: `${obj.name}, ${obj.state}, ${obj.country}`, 
    onClick:()=> router.push(`/info/${obj.lat}/${obj.lon}`)
}))
    setSuggestions(formatedList)
}


useEffect(()=>{
    if(searchText.length >= 3) fetchCitiesList() // se searchText for maior que 3, mostra a lista
    else setSuggestions([]) // menor que 3, fecha a lista
},[searchText])



    return(
        <InputWithSugestions placeholder="Digite o nome da cidade" 
        value={searchText} onChange={(event) => setSearchText(event.target.value)} suggestions={suggestions} {...props}/>
    )
}