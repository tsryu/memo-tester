interface OwnProps {
  fretPosition: number[]
}

const FretBoard = ({ fretPosition }: OwnProps) => {
  const [stringNumber, fretNumber] = fretPosition;
  return (
    <div className={`fretboard string-${stringNumber} fret-${fretNumber}`}>
      <div className="frets">
        {Array(12).fill(null).map((_,index) => <div className={`fret fret${index + 1}`} key={`fret${index + 1}`}>{index + 1}</div>)}
      </div>
      <div className="markers">
      {Array(4).fill(null).map((_,index) => <div className={`marker marker${index + 1}`} key={`marker${index + 1}`}></div>)}
      </div>
      <div className="strings">
        {Array(6).fill(null).map((_,index) => <div className={`string string${index + 1}`} key={`string${index + 1}`}></div>)}
      </div>
      
    </div>
  )
}

export default FretBoard