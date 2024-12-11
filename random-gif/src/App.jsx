import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() 
{
  return (
    <div  className="w-full h-screen flex flex-col background relative items-center ">
      <h1 className="bg-white rounded-sm mt-5  text-center w-11/12 text-4x
      font-bold px-10 py-2">Random GIF</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>
  );
}
