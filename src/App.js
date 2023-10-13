import { useContext, useState } from "react";
import styled from "styled-components";
import { ResetGlobal } from "./estilizacao/Reset";
import { themeContext, themes } from "./context/Theme-context";

function App(props) {

  /* const {theme} = props; */
  const { theme, TrocarTema} = useContext(themeContext);

  function excluirTodo() {

    console.log('exlcuindo todo');
  }

  function excluirConcluidos() {
    console.log("concluidos sendo excluidos");
  }

  function MostrarTodos() {
    console.log("mostrar todos");
  }

  function MostrarAtivos() {
    console.log("mostrar ativos");
  }

  function MostrarCompletos() {
    console.log("mostrar completos");
  }

  return (
    <AppEstilizado className="App" theme={theme}>
      <ResetGlobal />
      <section>
        <div className="header-area">
          <h1>TODO</h1>
          <button onClick={()=>TrocarTema(theme === themes.light ? themes === false : themes === true)}>
            {theme === themes.light
              ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" /></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" /></svg>
            }
          </button>
        </div>
        <div className="criador-todo-area">
          <label>
            <input type="radio"></input>
            <input value={"Create a new todo.."}></input>
          </label>
        </div>
        <div className="todos-area">
          <div className="todo-list">
            <label htmlFor="todo-1" className="labels">
              <input id="todo-1" type="radio"></input>
              <p>start a web app for creating and managing Everyone.</p>
              <button onClick={excluirTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
              </button>
            </label>
            <label htmlFor="todo-2" className="labels">
              <input id="todo-2" type="radio"></input>
              <p>Study Java</p>
              <button onClick={excluirTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
              </button>
            </label>
            <label htmlFor="todo-3" className="labels">
              <input id="todo-3" type="radio"></input>
              <p>Study Reactjs</p>
              <button onClick={excluirTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
              </button>
            </label>
            <label htmlFor="todo-4" className="labels">
              <input id="todo-4" type="radio"></input>
              <p>Study Reactjs</p>
              <button onClick={excluirTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
              </button>
            </label>
            <label htmlFor="todo-5" className="labels">
              <input id="todo-5" type="radio"></input>
              <p>Study Reactjs</p>
              <button onClick={excluirTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
              </button>
            </label>
            <label htmlFor="todo-6" className="labels">
              <input id="todo-6" type="radio"></input>
              <p>Study Reactjs</p>
              <button onClick={excluirTodo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg>
              </button>
            </label>
          </div>
          <div className="footer-todo-list">
            <p>"numero" items left</p>
            <div className="seletores">
              <button onClick={MostrarTodos}>All</button>
              <button onClick={MostrarAtivos}>Active</button>
              <button onClick={MostrarCompletos}>Completed</button>
            </div>
            <input value={"Clear Completed"} onClick={excluirConcluidos}>
            </input>
          </div>
        </div>
        <div className="footer-area">
          <p>Drag and drop to reorder list</p>
        </div>
      </section>
    </AppEstilizado>
  );
}


const AppEstilizado = styled.div`

    display: flex;
    flex-direction: column;
    
    body{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    section{
      display: flex;
      flex-direction: column;
      width: 500px;
      gap: 20px;
    }

    .header-area{

      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    
    .criador-todo-area{

      display: flex;
      flex-direction: row;
      gap: 5px;

    }

    .todos-area{
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .todos-area .todo-list{
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .footer-todo-list{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .footer-area{
      display: flex;
      flex-direction: row;
      justify-content: center;

    }
`



export default App;
