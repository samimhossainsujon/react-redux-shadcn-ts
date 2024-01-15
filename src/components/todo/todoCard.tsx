import { Pencil, Trash2Icon } from 'lucide-react';
import { Button } from '../ui/button';


const TodoCard = () => {
    return (
        <div>
            <div className="bg-white rounded-sm flex justify-between items-center p-2 border">
                <input type="checkbox" name="" id="" />
                <p className="font-semibold">Todo Title</p>
                {/* <p>Time</p> */}
                <p>Description</p>
                <div className="space-x-12">
                    <Button className='bg-red-500'><Trash2Icon /></Button>
                    <Button className='bg-[#5C53FE]'><Pencil /> </Button>
                </div>
            </div>
        </div>
    );
};

export default TodoCard;