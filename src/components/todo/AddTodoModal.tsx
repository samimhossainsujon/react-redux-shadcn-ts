import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/redux/features/todoSlice";
import { useAppDispatch } from "@/redux/hook";
import { DialogClose } from "@radix-ui/react-dialog";
import { useState } from "react";

const AddTodoModal = () => {
    const [task, settask] = useState('')
    const [description, setdescription] = useState('')
    const dispatch = useAppDispatch()

    const onSubmit = (e) => {
        e.preventDefault();
        const randomString = Math.random().toString(36).substring(2, 7)
        const taskDetails = {
            id: randomString,
            title: task,
            description: description
        }
        dispatch(addTodo(taskDetails));
        console.log(taskDetails);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient text-xl font-semibold">Add todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>Add Your Tsks that your want to finish</DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit}>
                    <div
                        className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">Task</Label>
                            <Input
                                onBlur={(e) => settask(e.target.value)}
                                id="task"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">Description</Label>
                            <Input
                                onBlur={(e) => setdescription(e.target.value)}
                                id="description"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end ">
                        <DialogClose asChild>
                            <Button type="submit">Save changes</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog >
    );
};

export default AddTodoModal;