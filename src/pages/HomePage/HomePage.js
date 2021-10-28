import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'
import DefaultLayout from '../../layouts/DefaultLayout'
import { useMagicColor } from '../../hooks/magicColor'

const HomePage = props => {
  const { commonStore } = props
  const color = useMagicColor()

  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(0)

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId)
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft])

  return (
    <DefaultLayout>
      {/*<div className="big-circle" style={{ backgroundColor: color }}>*/}
      {/*    123*/}
      {/*</div>*/}
      <div>
        {timeLeft === 0 ? <a onClick={() => setTimeLeft(3)}>reset</a> : timeLeft}
      </div>
      <p>{commonStore.pageName}</p><br />

    </DefaultLayout>
  )
}

HomePage.propTypes = {}

export default inject('commonStore')(observer(HomePage))