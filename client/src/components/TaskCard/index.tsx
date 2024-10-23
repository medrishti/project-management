import { Task } from '@/app/state/api'
import React from 'react'
import {format} from "date-fns"
import Image from 'next/image'

type Props = {
    task:Task
}

const TaskCard = ({task}: Props) => {
  return (
    
    <div>
        <div className='mb-3 rounded bg-white p-4 shaded dark:bg-dark-secondary dark:text-white'>
            {task.attachments && task.attachments.length > 0 && (
                <div>
                    <strong>ATTACHMENT</strong>
                    <div className='flex flex-wrap'>
                    {task.attachments && task.attachments.length > 0 && (
                        <Image
                          src={`/${task.attachments[0].fileURL}`}
                          alt={task.attachments[0].fileName}
                          width={400}
                          height={200}
                          className="h-auto w-full rounded-t-md"
                        />
                    )}
                    </div>

                </div>
                
             )}
             <p>
                <strong>ID:</strong> {task.id}
             </p>
             <p>
                <strong>DESCRIPTION:</strong> {task.description || "NO DESCRIPTION"}
             </p> <p>
                <strong>STATUS:</strong> {task.status}
             </p> <p>
                <strong>TITLE:</strong> {task.title}
             </p> <p>
                <strong>PRIORITY:</strong> {task.priority}
             </p> <p>
                <strong>TAGS:</strong> {task.tags || "NO TAGS"}
             </p> <p>
                <strong>START DATE:</strong> {task.startDate ? format(new Date(task.startDate),"p") : "no set"} 
             </p> <p>
                <strong>DUE DATE:</strong> {task.dueDate ? format(new Date(task.dueDate),"p") : "no set"} 
             </p> <p>
                <strong>AUTHOR:</strong> {task.author ? task.author.username : "unknown"}
             </p> <p>
                <strong>ASSIGNEE:</strong>{task.assignee ? task.assignee.username : "unknown"}
             </p>
        </div>
    </div>
  )
}

export default TaskCard;