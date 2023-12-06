

interface CounterType{
  number:number;
  diff:number;
  onIncrease: ()=> void;
  onDecrease: () => void;
  onSetDiff: (diff: number) => void;
}


const Counter = ({ number, diff, onIncrease, onDecrease, onSetDiff }: CounterType)=>{
  const onChange = ({target} : React.ChangeEvent<HTMLInputElement>) => {
    onSetDiff(parseInt(target.value, 10));
  }
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )
}

export default Counter;