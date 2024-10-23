import { Task, useGetProjectsQuery, useGetTasksQuery } from '@/app/state/api';
import React from 'react'
import TaskCard from "@/components/TaskCard";
import Header from '@/components/Header';


type Props = {
    id: string;
    setIsModalNewTaskOpen: (isOpen: boolean) => void;
}

const ListView = ({ id, setIsModalNewTaskOpen }: Props) => {
    const{
        data:tasks,
            error,
            isLoading,
    }= useGetTasksQuery({ projectId :Number(id)});

    if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred while fetching tasks</div>;

  return (
    
    <div>
        <div className='px-4 pb-8 xl:px-6'>
        <div className='pt-5'>
            <Header name="List" />
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-col-2 lg:grid-cols-3 lg:gap-6'>\
            {tasks?.map((task:Task)=>(
                <TaskCard  key={task.id} task={task}/>
            ))}
        </div>
    </div>
    </div>
  )
}

export default ListView