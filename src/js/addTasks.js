import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "./firebaseConfig";
import renderTasks from "./renderTasks";

const addTasks = async (title, date, time, category, priority) => {
  try {
    const task = {
      title,
      date,
      time,
      category,
      priority,
      isCompleted: false,
      createdAt: serverTimestamp(),
    };
    await addDoc(collection(database, "tasks"), task);
    renderTasks();
  } catch (error) {
    console.log(error, "Error adding the task");
  }
};

export default addTasks;
