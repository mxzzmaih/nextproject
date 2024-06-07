import DashBoardCard from "@/components/dashboard/DashBoardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5"></div>
       <DashBoardCard title="Posts" count = {100} icon ={<Newspaper className="text-slate-600 dark:text-slate-400 w-12 h-12 size={72}" />}/>
       <DashBoardCard title="Categories" count = {12} icon ={<Folder className="text-slate-600 dark:text-slate-400 w-12 h-12 size={72}" />}/>
       <DashBoardCard title="Users" count = {750} icon ={<User className="text-slate-600 dark:text-slate-400 w-12 h-12 size={72}" />}/>
       <DashBoardCard title="Comments" count = {1200} icon ={<MessageCircle className="text-slate-600 dark:text-slate-400 w-12 h-12 size={72}" />}/>
    </>
  );
}
