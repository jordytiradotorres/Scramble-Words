import * as z from "zod"

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[],
  length: number,
  completed: number,
  pending: number
}

export type TaskAction =
  | { type: "ADD_TODO", payload: string }
  | { type: "TOGGLE_TODO", payload: number }
  | { type: "DELETE_TODO", payload: number }

const TodoScheme = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean()
})

const TaskStateScheme = z.object({
  todos: z.array(TodoScheme),
  length: z.number(),
  completed: z.number(),
  pending: z.number()
})

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasks-state")

  if (!localStorageState) {
    return {
      todos: [],
      length: 0,
      pending: 0,
      completed: 0
    }
  }

  // validar con zod
  const result = TaskStateScheme.safeParse(JSON.parse(localStorageState))
  if (result.error) {
    console.log(result.error)
    return {
      todos: [],
      length: 0,
      pending: 0,
      completed: 0
    }
  }

  return result.data
}

export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload.trim(),
        completed: false
      }

      return {
        ...state,
        todos: [...state.todos, newTodo],
        length: state.todos.length + 1,
        pending: state.pending + 1
      }
    }
    case "DELETE_TODO": {
      const currentTodos = state.todos.filter(todo => todo.id !== action.payload)

      return {
        ...state,
        todos: currentTodos,
        length: currentTodos.length,
        completed: currentTodos.filter(todo => todo.completed).length,
        pending: currentTodos.filter(todo => !todo.completed).length
      }
    }
    case "TOGGLE_TODO": {
      const updatedTodo = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, completed: !todo.completed}
        }
        return todo
      })
      return {
        ...state,
        todos: updatedTodo,
        completed: updatedTodo.filter(todo => todo.completed).length,
        pending: updatedTodo.filter(todo => !todo.completed).length
      }
    }
    default:
      return state
  }
}