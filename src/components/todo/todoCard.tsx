import { removeTodo, toggleComplete } from '@/redux/features/todoSlice';
import { useAppDispatch } from '@/redux/hook';
import { Pencil, Trash2Icon } from 'lucide-react';
import { Button } from '../ui/button';

type TTodoCardProps = {
    id: string,
    title: string,
    description: string,
    isCompleted?: boolean
}

const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
    const dispatch = useAppDispatch()

    const toggleState = () => {
        dispatch(toggleComplete(id))
    }
    return (
        <div>
            <div className="bg-white rounded-sm flex justify-between items-center p-2 border">
                <input
                    onChange={toggleState}
                    type="checkbox" name="complete" id="complete" />

                <p className="font-semibold">{title}</p>
                {/* <p>Time</p> */}
                <p>{isCompleted ? <p className='text-green-500 font-semibold'>Done</p> : <p className='text-red-500 font-semibold'>Pending</p>}</p>
                <p>{description}</p>
                <div className="space-x-12">
                    <Button
                        onClick={() => dispatch(removeTodo(id))}
                        className='bg-red-500'>
                        <Trash2Icon
                        />
                    </Button>
                    <Button className='bg-[#5C53FE]'><Pencil /> </Button>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;