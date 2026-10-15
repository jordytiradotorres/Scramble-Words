# Scramble Words + TaskList + useReducer

Proyecto de práctica en React con TypeScript para fortalecer el uso de `useReducer` en la gestión de estado de
interfaces más complejas. Este repositorio incluye dos ejemplos de aplicación: un juego de palabras `ScrambleWords` y
una `TaskApp` para gestionar tareas.

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Zod
- Shadcn/ui style components
- localStorage para persistencia

## Objetivo del proyecto

Explorar cómo manejar estados complejos y acciones tipadas mediante el patrón reducer, evitando estados dispersos y
facilitando la escalabilidad del código.

## Funcionalidades

### ScrambleWords

- Juego de palabras revueltas
- Validación de respuestas
- Sistema de puntos
- Límite de errores y skips
- Reinicio de partida
- Animación con `canvas-confetti`
- Estado gestionado por `useReducer`

### TaskApp

- Agregar tareas
- Marcar como completadas
- Eliminar tareas
- Mostrar progreso visual
- Persistencia en `localStorage`
- Estado centralizado con reducer

## Estructura del proyecto

```text
src/
├── 05-useReducer/
│   ├── ScrambleWords.tsx
│   ├── TaskApp.tsx
│   ├── components/
│   ├── interfaces/
│   ├── mocks/
│   ├── reducer/
│   └── utils/
├── components/
├── hooks/
├── lib/
└── main.tsx
```

## Instalación

```bash
npm install
# o
pnpm install
```

## Ejecutar en desarrollo

```bash
npm run dev
# o
pnpm dev
```

## Compilar para producción

```bash
npm run build
# o
pnpm build
```

## Aprendizajes clave

- Uso de `useReducer` como alternativa a `useState` para estados complejos
- Reducers con acciones tipadas y estado inmutable
- Separación de lógica y UI
- Manejo de estados derivados y validaciones
- Persistencia del estado del usuario con `localStorage`

## Requisitos

- Node.js 18+
- npm o pnpm


