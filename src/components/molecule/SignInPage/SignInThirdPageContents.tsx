import { Button } from '@src/components/atom'
import { useRootDispatch } from '@src/hooks'
import { openModal } from '@src/store/modules/modal'
import cx from 'classnames'
import React, { memo } from 'react'

const SignInThirdPageButtons = () => {
  const dispatch = useRootDispatch()

  const handleSignUpClick = () => {
    dispatch(
      openModal({
        type: 'SIGNUP',
        title: 'Sign Up',
      })
    )
  }

  return (
    <div>
      <Button
        className="text-white font-bold"
        size="large"
        styles="primary"
        fullWidth
        onClick={handleSignUpClick}
      >
        Create an account
      </Button>
    </div>
  )
}

const SignInPageFirstPhrase = () => {
  return (
    <div>
      <h1 className="text-6xl md:text-7xl font-normal">{'Join us'}</h1>
      <h1 className="text-6xl md:text-7xl">{'Easily'}</h1>
    </div>
  )
}

const SignInPageSecondPhrase = () => {
  return (
    <div className="text-primary-200 drop-shadow-xl">
      <h1 className="text-6xl md:text-7xl font-normal">{'Make friend'}</h1>
      <h1 className="text-5xl md:text-6xl">{'Arounds you'}</h1>
    </div>
  )
}

const SignInThirdPageContents = () => {
  return (
    <div className={cx('z-10 relative w-full h-full py-4', 'flex flex-col justify-between')}>
      <div className="space-y-4">
        <SignInPageFirstPhrase />
        <SignInPageSecondPhrase />
      </div>
      <SignInThirdPageButtons />
    </div>
  )
}

export default memo(SignInThirdPageContents)