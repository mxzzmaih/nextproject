import { Card, CardContent } from "@/components/ui/card"

import { LucideIcon } from "lucide-react";

interface DashBoardCard{
    title: string;
    count: number;
    icon: React.ReactElement<LucideIcon>
}

const DashBoardCard = ({ title, count, icon }: DashBoardCard) => {
    return (
        <Card className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <CardContent>
                <h3 className="text-3xl text-center mb-4 font-bold text-slate-800 dark:text-slate-400">{title }</h3>
                <div className="flex gap-5 justify-center items-center">
                    {icon}
                    <h3 className="text-5xl font-semibold text-slate-800 dark:text-slate-400">{count}</h3>
                </div>
            </CardContent>
        </Card>
    );
}

export default DashBoardCard;