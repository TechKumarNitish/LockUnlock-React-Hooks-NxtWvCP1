// Write your code her
import {UnlockContainer, Card, Message, Image, Button} from './styledComponents'
import {useState} from 'react'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)
  const lockHandler = () => {
    setIsLocked(prevState => !prevState)
  }
  return (
    <UnlockContainer>
      <Image
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
        }
        alt={isLocked ? 'lock' : 'unlock'}
      />
      <Message>Your Device is {isLocked ? 'Locked' : 'Unlocked'}</Message>
      <Button onClick={lockHandler}>{isLocked ? 'Unlock' : 'Lock'}</Button>
    </UnlockContainer>
  )
}

export default Unlock
