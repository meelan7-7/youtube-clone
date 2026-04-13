import { useState } from "react";
import API from "../api/axios";

const CreateChannel = () => {
  const [form, setForm] = useState({
    channelName: "",
    description: ""
  });

  const createChannel = async () => {
    const token = localStorage.getItem("token");

    const res = await API.post("/channels", form, {
      headers: {
        Authorization: token
      }
    });

    alert("Channel created");
    console.log(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Channel</h2>

      <input
        placeholder="Channel Name"
        onChange={(e) =>
          setForm({ ...form, channelName: e.target.value })
        }
      />

      <input
        placeholder="Description"
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button onClick={createChannel}>Create</button>
    </div>
  );
};

export default CreateChannel;