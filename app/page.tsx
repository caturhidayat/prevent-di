"use client";
import Todos from "@/Components/Todos";
import createTask from "@/action/task";

export default function Home() {
    const submitTask = async (formData: FormData) => {
        await createTask(formData);
    };
    return (
        <div className="flex justify-center w-auto">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Prevent Deouble Input!
                    </h1>

                    <p className="mt-4 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et libero nulla eaque error neque ipsa culpa autem, at
                        itaque nostrum!
                    </p>
                </div>

                <form
                    action={submitTask}
                    className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                >
                    <div>
                        <label htmlFor="task" className="sr-only">
                            Task
                        </label>

                        <div className="relative">
                            <input
                                name="task"
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Please Input Task"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
                <div className="py-4">
                    <Todos />
                </div>
            </div>
        </div>
    );
}
