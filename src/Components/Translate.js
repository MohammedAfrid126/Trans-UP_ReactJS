import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Translate() {
    const [options, setOptions] = useState([])
    const [to, setTo] = useState("en")
    const [from, setFrom] = useState("en")
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    useEffect(() => {
        axios.get('https://libretranslate.com/languages',
        {headers:{'Accept': 'application/json'}}).then((resp)=>{
            setOptions(resp.data)
        })
    }, [])

    const handleInput =(inp)=>{
        setInput(inp.target.value)
    }
    
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    const handleTranslate = () =>{
    axios.post('https://libretranslate.de/translate',params,
    {
        headers:{
            'accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    }).then((response) => {
        setOutput(response.data.translatedText)
    })
    }

    return (
        <>
            <div className="container">
                <div className="langContainer">
                    <div className="fromHolder">
                        FROM : (language code : {from}):
                        <select onChange={(e)=>{setFrom(e.target.value)}}>
                            {options.map((option)=>{
                            return <option key={option.code} value={option.code}> {option.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="toContainer">
                        To : (language code : {to}):
                        <select onChange={(e)=>{setTo(e.target.value)}}>
                            {options.map((option)=>{
                            return <option key={option.code} value={option.code}> {option.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className="textContainer">
                    <div className="textInput">
                        <textarea onChange={handleInput} value={input} placeholder="Please Enter your Text here..." cols="60" rows="12"></textarea>
                    </div>
                    <i className="fa-solid fa-right-left"></i>
                    <div className="textInput">
                        <textarea defaultValue={output} placeholder="Your Output will be Displayed here!" cols="60" rows="12"></textarea>
                    </div>
                </div>
            </div>
            <div className="buttonContainer">
                <button className='btnTranslate' onClick={handleTranslate}>Translate</button>
            </div>
        </>
    )
}