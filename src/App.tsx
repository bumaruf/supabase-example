import { useState } from "react";
import { useEffect } from "react";
import supabase from "./services/supabase";

type People = {
  id: string;
  name: string;
}

function App() {

  const [people, setPeople] = useState<People[] | null>([]);

  async function fetchPeople() {
    const { data } = await supabase.from<People>('people').select()

    setPeople(data);
  }

  useEffect(() => {
    fetchPeople();
  }, [])

  return (
    <main>
      { people?.map(user => <p key={user.id}>{user.name}</p>)   }
    </main>
  );
}

export default App;
