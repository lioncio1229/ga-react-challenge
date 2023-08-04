
export default function TaskList({tasks}) {
    return (
    <ul style={{padding: '0'}}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            color: '#2a3a81',
            fontFamily: 'Arial, Helvetica, sans-serif',
            padding: '12px',
            marginBottom: '4px',
            backgroundColor: task.completed ? '#acffac' : 'transparent',
            listStyle: 'none',
          }}
        >
          <h3 style={{margin: '4px 0 4px 0', textDecoration: task.completed ? 'line-through' : 'none'}}>{task.title}</h3>
          <small style={{color: task.completed ? '#2a3a81' : '#6671a0'}}>{task.description}</small>
        </li>
      ))}
    </ul>
    )
}