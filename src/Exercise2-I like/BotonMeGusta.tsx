import { useState } from 'react'

function ButtonIlike() {
  const [ButtonIlike, setLike] = useState(false)

  return (
    <div>
      <button
        type="button"
        className={ButtonIlike ? 'counter' : 'click'}
        onClick={() => setLike((like) => !like)}
      >
        {ButtonIlike ? 'me gusta' : 'no me gusta'}
        </button>
    </div>
  )
}
export default ButtonIlike
