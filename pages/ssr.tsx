import React from "react";

type ServerSideRenderProps={
    serverData:string;
}

const ServerSideRender:React.FC<ServerSideRenderProps> = ({ serverData }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Server-Side Rendering(SSR)</h1>
      <p>Server Data:{serverData}</p>
    </div>
  );
};

export const getServerSideProps = async () => {
  const serverData = "The data was feteched from server-side";
  return {
    props: { serverData },
  };
};

export default ServerSideRender;
