import { ReactNode, useEffect, useState } from "react";
import axios from "axios";

type UserResponse = [UserProps: UserProps];

type UserProps = {
  id: number;
  nome: string;
};

const BASE_URL = "http://localhost:8080/api/usuario";

export function Card() {
  const [user, setUser] = useState<UserResponse>();
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [idUsuario, setIdUsuario] = useState(0);
  const [checked, setChecked] = useState(false);
  const [clickUser, setClickUser] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  const postUser = () => {
    axios.post(`${BASE_URL}?nome=${nomeUsuario}`, {
      nomeUsuario,
    });
  };

  const updateUser = () => {
    user?.filter((u) => {
      if (nomeUsuario === u.nome) {
        setIdUsuario(u.id);
        console.log(nomeUsuario);
        console.log(u.nome);
        console.log(u.id);
      }
    });

    axios.put(`${BASE_URL}/${idUsuario}?nome=${nomeUsuario}`, {
      idUsuario,
      nomeUsuario,
    });
  };

  function handleChecked(e: any) {
    var valorId = document.getElementById("idCheckbox");
    const value = e.target.value;
    if (checked === true) {
      var tableData = document.getElementById("tableData");
      console.log(tableData);
    }
    console.log(e.target.value);
  }
  const postData = () => {
    console.log(nomeUsuario);
    // console.log(user?.[1].nome);
    // console.log(checkbox);
  };

  return (
    <>
      {/* {data?.map(t => console.log(t))} */}

      <div>
        <h2>Cria usuário: </h2>
        <label htmlFor="">Digite seu nome: </label>
        <input
          id="nome"
          type="text"
          placeholder="Guilherme"
          onChange={(e) => setNomeUsuario(e.target.value)}
        />
        <button onClick={postUser} type="submit">
          Enviar
        </button>
      </div>

      <div>
        <h2>Lista de usuários</h2>
        {user?.map((u) => (
          <div>
            <table>
              <th>
                <td>Id </td>
                <td>Nome </td>
              </th>
              <tr>
                <td>{u.id}</td>
                <td id="tableData">{u.nome}</td>
                <td>
                  <input
                    id="idCheckbox"
                    onClick={handleChecked}
                    // onChange={e => setChecked(e)}
                    type="checkbox"
                    value={u.id}
                  />
                </td>
              </tr>
            </table>
          </div>
        ))}
      </div>

      <div>
        <h2>Atualiza usuário:</h2>
        <label htmlFor="">Digite seu nome: </label>
        <input
          id="nome"
          type="text"
          placeholder="Gustavo"
          onChange={(e) => setNomeUsuario(e.target.value)}
        />
        <button onClick={updateUser} type="submit">
          Enviar
        </button>
      </div>
    </>
  );
}

// async function api() {
//     try {
//         const response = await fetch('http://localhost:8080/api/usuario')
//         const dataResponse = await response.json();

//     } catch (error) {
//         console.log(error)
//     }
// }
