import "./styles.css";
function Avatar({avatarUrl, name, children}){
  return(
    <div>
      <img 
      className="avatar"
      src={avatarUrl}
      alt={name}
      width={100}
      height={100}
      />
      {children}
    </div>

  );
}

export default function App() {
  return (
    <Avatar 
    avatarUrl="https://i.imgur.com/1bx5QW6.jpg"
    name="Lin"> 
      <h3> Aprendiendo React </h3>
      <div>
        Lilian Benavides
      </div>
    </Avatar>
  );
}
