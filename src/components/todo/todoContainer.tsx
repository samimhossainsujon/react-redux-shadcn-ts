import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import TodoCard from "./todoCard";


const TodoContainer = () => {
    const { todos } = useAppSelector((state) => state.todos)

    return (
        <div>
            <div className="flex justify-between mb-7">
                <AddTodoModal />
                <TodoFilter />

            </div>
            <div className="bg-primary-gradient w-full h-fit rounded-xl p-[5px]">
                {todos.length > 0 ? (
                    <div className="bg-white p-5 w-full h-full rounded-lg space-y-6">
                        {todos.map((item) => (
                            <TodoCard {...item} />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white text-2xl font-bold p-5 flex justify-center rounded-md">
                        There is no task pending
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoContainer;