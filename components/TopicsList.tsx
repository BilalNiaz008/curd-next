import RemoveBtn from "@/components/RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";


const getTopics = async () => {
    try{
        const res = await fetch("http://localhost:3000/api/topics",{
            cache: "no-cache",
        });
        if(!res.ok){
            throw new Error("Failed to fetch data");
        }
        return res.json();
    }catch (e) {
        console.log(e);
    }
}
export default async function  TopicsList() {
    const {topics} = await getTopics();
    return(
       <>
           {topics.map((topics) => (
           <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
               <div>
                   <h2 className="font-bold text-2xl" >{topics.title}</h2>
                   <div>{topics.description}</div>
               </div>
               <div className="flex gap-2">
                   <RemoveBtn id={topics._id}   />
                   <Link href={`/editTopic/${topics._id}`}><HiPencilAlt size={24}  /></Link>
               </div>

           </div>
           ))}
       </>
    )
}