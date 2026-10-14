import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreateTask({ getTasks }) {
  const { handleSubmit, register, reset } = useForm();

  const handlerForm = (data) => {
    axios
      .post("http://localhost:8000/tasks", data)
      .then(() => {
        getTasks()
        reset()
    })
      .catch((e) => console.log(e));
  };

  return (
    <form onSubmit={handleSubmit(handlerForm)}>
      <input type="text" {...register("text")} placeholder="Задача" />
      <select {...register("status")} id="status">
        <option value="true">Активная</option>
        <option value="false">Не активная</option>
      </select>
      <input type="date" {...register("date")} />
      <select {...register("category")}>
        <option value="Учёба">Учёба</option>
        <option value="Работа">Работа</option>
        <option value="Личное">Личное</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}
