'use client'

export default function ReportUsera({reppo}){

    const keys=Object.keys(reppo)
    console.log(reppo)
    return<div>
        {keys.map(key=>(
            <p key={key}>{key+": "+reppo[key]}</p>
        ))}
    </div>
}