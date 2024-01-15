import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import TodoCard from "./todoCard";


const TodoContainer = () => {
    return (
        <div>
            <div className="flex justify-between mb-7">
                <AddTodoModal />
                <TodoFilter />

            </div>
            <div className="bg-primary-gradient w-full h-fit rounded-xl  p-[5px]">
                {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center rounded-md">There is no task Pending</div>                */}
                <div className="bg-white p-5 w-full h-full rounded-lg space-y-6">
                    <TodoCard />
                    <TodoCard />
                    <TodoCard />
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;