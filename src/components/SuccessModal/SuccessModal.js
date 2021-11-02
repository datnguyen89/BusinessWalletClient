import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { SuccessModalDescription, SuccessModalTitle, SuccessModalWrapper } from './SuccessModalStyled'
import { Button, Col, Modal, Row } from 'antd'

const SuccessModal = props => {
  const { modalStore, icon, description, title, submitText, callbackSuccess } = props

  const handleSubmit = () => {
    callbackSuccess && callbackSuccess()
    modalStore.setVisibleSuccess(false)
  }

  return (
    <SuccessModalWrapper
      width={430}
      visible={modalStore.visibleSuccess}
      closable={false}
      footer={null}
      title={null}>
      <Row justify={'center'} align={'middle'}>
        {
          icon &&
          <Col span={24} style={{ textAlign: 'center' }}>
            <img src={icon} alt={''} height={124} />
          </Col>
        }
        <Col span={24}>
          <SuccessModalTitle>
            {title || 'Thông báo'}
          </SuccessModalTitle>
        </Col>
        <Col span={24}>
          <SuccessModalDescription>
            {description || 'Thành công'}
          </SuccessModalDescription>
        </Col>
        <Col span={8}>
          <Button block type={'primary'} onClick={handleSubmit}>{submitText || 'Đóng'}</Button>
        </Col>
      </Row>
    </SuccessModalWrapper>
  )
}

SuccessModal.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.node,
  submitText: PropTypes.string,
  callbackSuccess: PropTypes.func,
}

export default inject('modalStore')(observer(SuccessModal))