import { TasksProvider } from "../context/TasksProvider";
import ToDo from "../components/ToDo/ToDo";

const TasksPage = () => {
  return (
    <TasksProvider>
      <ToDo />
    </TasksProvider>
  );
};

export default TasksPage;
