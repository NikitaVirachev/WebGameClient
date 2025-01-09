import './Name.scss';

const Name = ({ name }) => {
  return (
    <h1 className="name">
      <div className="text-curve" style={{ '--length': name.length }}>
        <span aria-hidden="true">
          {name.split('').map((char, i) => (
            <span style={{ '--index': i }} key={i}>
              {char}
            </span>
          ))}
        </span>
        <span className="sr-only">{name}</span>
      </div>
    </h1>
  );
};

export default Name;
