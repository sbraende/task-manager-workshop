import { doc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";
import renderTasks from "./renderTasks";

const toggleCompletion = async (id, isCompleted) => {
  try {
    const taskToComplete = doc(database, "tasks", id);
    await updateDoc(taskToComplete, { isCompleted: !isCompleted });
  } catch (error) {
    console.error(error, "Error updating task completion");
  }
};

export default toggleCompletion;
