import { useState } from "react";
export default function AddTaskForm({ onAdd }) {
  const [Name, setName] = useState("");
  const [Day, setDay] = useState("");
  const [Reminder, setReminder] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (!Name) {
      alert("Please Enter Name of the task");
      return;
    }
    if (!Day) {
      alert("Please Enter Day of the task");
      return;
    }

    onAdd({ Name, Day, Reminder });

    setName("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={submit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Enter Task Name "
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="Enter Task Day "
          value={Day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={Reminder}
          value={Reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
}
