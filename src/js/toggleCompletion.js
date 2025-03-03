import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "./firebaseConfig";
import renderTasks from "./renderTasks";

const toggleCompletion = async (id, tableRow) => {
  try {
    const taskToComplete = doc(database, "tasks", id);
    const taskSnapshot = await getDoc(taskToComplete);
    const currentIsCompletedState = taskSnapshot.data().isCompleted;
    const updatedIsCompletedProperty = !currentIsCompletedState;
    await updateDoc(taskToComplete, { isCompleted: updatedIsCompletedProperty });
    if (updatedIsCompletedProperty) {
      tableRow.classList.add("task--completed");
    } else {
      tableRow.classList.remove("task--completed");
    }
  } catch (error) {
    console.error(error, "Error updating task completion");
  }
};

export default toggleCompletion;
