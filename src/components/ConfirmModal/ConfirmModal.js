import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { ConfirmModalDescription, ConfirmModalTitle, ConfirmModalWrapper } from './ConfirmModalStyled'
import { Button, Col, Modal, Row } from 'antd'

const ConfirmModal = props => {
  const { modalStore, icon, description, title, submitText, cancelText, callbackConfirm } = props

  const handleSubmit = (isOk) => {
    callbackConfirm(isOk)
    modalStore.setVisibleConfirm(false)
  }


  return (
    <ConfirmModalWrapper
      width={430}
      visible={modalStore.visibleConfirm}
      closable={false}
      footer={null}
      title={null}>
      <Row justify={'space-around'} align={'middle'}>
        {
          icon &&
          <Col span={24} style={{ textAlign: 'center' }}>
            <img src={icon} alt={''} height={124} />
          </Col>
        }
        <Col span={24}>
          <ConfirmModalTitle>
            {title || 'Thông báo'}
          </ConfirmModalTitle>
        </Col>
        <Col span={24}>
          <ConfirmModalDescription>
            {description || 'Bạn có chắc chắn muốn thực hiện hành động này?'}
          </ConfirmModalDescription>
        </Col>
        <Col span={11}>
          <Button block type={'default'} onClick={() => handleSubmit(false)}>{cancelText || 'Hủy'}</Button>
        </Col>
        <Col span={11}>
          <Button block type={'primary'} onClick={() => handleSubmit(true)}>{submitText || 'Đồng ý'}</Button>
        </Col>
      </Row>
    </ConfirmModalWrapper>
  )
}

ConfirmModal.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  submitText: PropTypes.string,
  cancelText: PropTypes.string,
  callbackConfirm: PropTypes.func,
}

export default inject('modalStore')(observer(ConfirmModal))