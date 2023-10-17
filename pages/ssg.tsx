import React from 'react'

type SaticSiteGenerationProps={
    staticData:string;
}

const SaticSiteGeneration:React.FC<SaticSiteGenerationProps> = ({staticData}) => {
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Static Site Generation (SSG)</h1>
    <p>Static Data: {staticData}</p>
  </div>
  )
}

export const getStaticProps=async ()=>{
    const staticData="The data was fetched at build time";
    return{
        props:{staticData}
    }
}

export default SaticSiteGeneration
