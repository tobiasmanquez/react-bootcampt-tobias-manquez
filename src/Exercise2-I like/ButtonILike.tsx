import { useState } from 'react'

function ButtonIlike() {
  const [like, setLike] = useState(false)

  return (
    <div>
      <button
        type="button"
        className={like ? 'counter' : 'click'}
        onClick={() => setLike((like) => !like)}
      >
        {like ? 'me gusta' : 'no me gusta'}
        </button>
    </div>
  )
}
export default ButtonIlike
