import React, { useEffect, useState } from 'react'
import { inject, observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import {
  BankAvatarWrapper,
  BankInfoArea,
  MainSideBarWrapper, MenuSidebarArea,
  MenuSidebarItem,
  MenuSidebarWrapper, SocialIconWrapper,
} from './MainSideBarStyled'
import { DEVICE, SIDEBAR_WIDTH_COLLAPSE, SIDEBAR_WIDTH_EXPAND } from '../../utils/constant'
import IMAGES from '../../images'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'
import ICONS from '../../icons'

const MainSideBar = props => {
  const { commonStore } = props
  const { isCollapse, device, pageName } = commonStore

  const history = useHistory()

  const handleToggleSideBar = (collapse) => {
    commonStore.setIsCollapse(collapse)
  }

  const handleClickMenu = (path) => {
    history.push(`/${path}`)
  }
  const handeClick = (e) => {
    setPage(e)
  }
  useEffect(() => {
    console.log(pageName)
  }, [pageName])


  return (
    <MainSideBarWrapper
      display={device === DEVICE.mobile ? 'none' : 'block'}
      width={isCollapse ? SIDEBAR_WIDTH_COLLAPSE : SIDEBAR_WIDTH_EXPAND}>
      <BankInfoArea display={isCollapse ? 'none' : 'flex'}>
        <BankAvatarWrapper>
          <img src={IMAGES.SACOMBANK} alt={''} height={60} />
        </BankAvatarWrapper>
        <span className={'bank-name-sidebar'}>Ngân hàng cổ phần thương mại Sài Gòn</span>
        <CaretLeftOutlined
          onClick={() => handleToggleSideBar(true)}
          className={'collapse-sidebar-icon'}
          style={{ display: (device === DEVICE.mobile || device === DEVICE.tablet) ? 'none' : 'block' }} />
      </BankInfoArea>
      <FontAwesomeIcon
        onClick={() => handleToggleSideBar(false)}
        className={'expand-sidebar-icon'}
        style={{ display: !isCollapse ? 'none' : 'inline-block' }}
        icon={faBars} />
      <MenuSidebarArea>
        <MenuSidebarItem
          onClick={() => handleClickMenu('identity-info')}
          className={pageName === 'identity-info' ? 'active' : ''}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <g clipPath='url(#clip0_130:16041)'>
              <path
                d='M21.4543 3.39229C17.6388 3.39229 13.8232 3.39229 10.0016 3.39229C7.49817 3.39229 5.00082 3.39229 2.49741 3.39229C1.53596 3.39229 0.768011 3.97883 0.495902 4.89191C0.477762 4.95238 0.495902 5.03099 0.42334 5.06727C0.42334 9.84429 0.42334 14.6213 0.42334 19.3983C0.435434 19.4165 0.459621 19.4286 0.465668 19.4467C0.810339 20.5714 1.49363 21.0794 2.66068 21.0794C8.92523 21.0794 15.1898 21.0794 21.4604 21.0794C22.7846 21.0794 23.6493 20.2207 23.6493 18.9025C23.6493 14.458 23.6493 10.0136 23.6493 5.56916C23.6433 4.2449 22.7786 3.39229 21.4543 3.39229ZM22.2828 18.9267C22.2828 19.4528 22.0167 19.7188 21.4906 19.7188C18.3402 19.7188 15.1898 19.7188 12.0394 19.7188C8.895 19.7188 5.75063 19.7188 2.60626 19.7188C2.0439 19.7188 1.78993 19.4648 1.78993 18.9085C1.78993 14.458 1.78993 10.0076 1.78993 5.55707C1.78993 5.01285 2.04995 4.75888 2.59416 4.75888C8.88895 4.75888 15.1837 4.75888 21.4785 4.75888C22.0227 4.75888 22.2888 5.01889 22.2888 5.55707C22.2828 10.0076 22.2828 14.4701 22.2828 18.9267ZM20.9222 8.15722C20.9162 8.55026 20.6138 8.82842 20.1724 8.83447C19.737 8.83447 19.2956 8.83447 18.8602 8.83447C18.4128 8.83447 17.9713 8.83447 17.5239 8.83447C17.1066 8.83447 16.7982 8.55026 16.7982 8.16326C16.7922 7.77022 17.1006 7.47997 17.536 7.47997C18.4188 7.47997 19.3016 7.47997 20.1845 7.47997C20.6138 7.47392 20.9222 7.75812 20.9222 8.15722ZM20.9222 10.8723C20.9222 11.2593 20.6199 11.5495 20.2026 11.5495C19.3016 11.5495 18.4067 11.5556 17.5057 11.5495C17.0945 11.5495 16.7922 11.2472 16.7982 10.8602C16.8043 10.4853 17.1066 10.195 17.5057 10.195C17.9592 10.189 18.4128 10.195 18.8663 10.195C19.3137 10.195 19.7552 10.195 20.2026 10.195C20.6138 10.195 20.9222 10.4853 20.9222 10.8723ZM20.9222 13.5873C20.9222 13.9743 20.6199 14.2706 20.2026 14.2706C19.3016 14.2766 18.4067 14.2766 17.5057 14.2706C17.0885 14.2706 16.7862 13.9743 16.7922 13.5873C16.7982 13.2003 17.1006 12.9161 17.5178 12.9161C17.9713 12.9161 18.4249 12.9161 18.8784 12.9161C19.3137 12.9161 19.7552 12.9161 20.1905 12.9161C20.6138 12.9161 20.9162 13.2003 20.9222 13.5873ZM20.9222 16.3084C20.9222 16.6954 20.6199 16.9917 20.2026 16.9917C19.3016 16.9917 18.4067 16.9977 17.5057 16.9917C17.0945 16.9917 16.7862 16.6893 16.7922 16.3023C16.7982 15.9274 17.1006 15.6372 17.4997 15.6311C17.9532 15.6251 18.4067 15.6311 18.8602 15.6311C19.3077 15.6311 19.7491 15.6311 20.1966 15.6311C20.6138 15.6372 20.9162 15.9214 20.9222 16.3084ZM9.31828 6.11338C5.93203 6.10733 3.15048 8.85865 3.14443 12.2207C3.13838 15.5888 5.91389 18.3583 9.30618 18.3583C12.6803 18.3583 15.4317 15.613 15.4317 12.2388C15.4377 8.8647 12.6864 6.11338 9.31828 6.11338ZM12.0998 16.0967C11.2896 16.6772 10.31 16.9977 9.10059 16.9977C8.29031 16.9856 7.36514 16.6954 6.52463 16.1149C6.39764 16.0302 6.36136 15.9698 6.45811 15.8186C7.77028 13.7748 10.836 13.7627 12.1603 15.8004C12.2389 15.9335 12.2329 16 12.0998 16.0967ZM7.95168 11.5737C7.94564 10.8178 8.55032 10.195 9.30618 10.195C10.062 10.189 10.6788 10.8057 10.6728 11.5556C10.6728 12.2993 10.062 12.91 9.31828 12.9161C8.57451 12.9161 7.95773 12.3114 7.95168 11.5737ZM13.2125 14.9357C12.9645 14.6032 12.6985 14.3008 12.384 14.0408C12.0696 13.7748 11.731 13.5631 11.344 13.3696C11.6463 13.0008 11.858 12.6017 11.9608 12.1481C12.2994 10.6909 11.3319 9.19728 9.84435 8.88889C8.35682 8.5805 6.86325 9.60242 6.62138 11.0899C6.49439 11.8881 6.6758 12.6017 7.16559 13.2366C7.22001 13.3031 7.31072 13.3515 7.1535 13.4301C6.43392 13.7868 5.85342 14.3008 5.38177 14.972C4.08774 13.2305 4.14216 10.5457 5.96831 8.81632C7.8247 7.05669 10.6728 7.0325 12.5171 8.73771C14.4037 10.4611 14.4883 13.1761 13.2125 14.9357Z'
                fill='#A8A8A8' />
            </g>
            <defs>
              <clipPath id='clip0_130:16041'>
                <rect width='24' height='24' fill='white' />
              </clipPath>
            </defs>
          </svg>
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Thông tin định danh</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu('transfer-multiple')}
          className={pageName === 'transfer-multiple' ? 'active' : ''}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M8.65082 10.1373C6.84187 10.1373 5.03291 10.1373 3.21798 10.1373C3.1344 10.1373 3.05082 10.1433 2.96724 10.1612C2.57321 10.2448 2.36425 10.5194 2.23291 10.8717C2.23291 14.0836 2.23291 17.2956 2.23291 20.5075C2.42993 21.0627 2.82992 21.2538 3.40306 21.2478C5.14634 21.2299 6.8956 21.2418 8.63888 21.2418C9.23589 21.2418 9.62992 20.8538 9.62992 20.2568C9.62992 17.212 9.62992 14.1732 9.62992 11.1284C9.6359 10.5194 9.24783 10.1373 8.65082 10.1373ZM9.02097 20.203C9.02097 20.5194 8.91948 20.6209 8.60903 20.6209C6.82395 20.6209 5.03888 20.6209 3.25381 20.6209C2.9553 20.6209 2.85381 20.5194 2.85381 20.215C2.85381 18.6985 2.85381 17.1821 2.85381 15.6717C2.85381 14.1732 2.85381 12.6806 2.85381 11.1821C2.85381 10.8538 2.94933 10.7582 3.27769 10.7582C5.05679 10.7582 6.8359 10.7582 8.615 10.7582C8.92545 10.7582 9.02694 10.8597 9.02694 11.1762C9.02097 14.1791 9.02097 17.1941 9.02097 20.203ZM20.8001 10.1314C19.0568 10.1493 17.3075 10.1373 15.5643 10.1373C14.9613 10.1373 14.5732 10.5254 14.5732 11.1224C14.5732 14.1672 14.5732 17.206 14.5732 20.2508C14.5732 20.8478 14.9613 21.2359 15.5643 21.2359C17.3732 21.2359 19.1822 21.2359 20.9971 21.2359C21.0807 21.2359 21.1643 21.2299 21.2478 21.212C21.6419 21.1344 21.8449 20.8538 21.9822 20.5015C21.9822 17.2896 21.9822 14.0776 21.9822 10.8657C21.7732 10.3105 21.3732 10.1194 20.8001 10.1314ZM20.9195 20.6209C19.1523 20.6209 17.3911 20.6209 15.624 20.6209C15.2837 20.6209 15.1881 20.5314 15.1881 20.1911C15.1881 18.6866 15.1881 17.1881 15.1881 15.6836C15.1881 14.1791 15.1881 12.6806 15.1881 11.1762C15.1881 10.8538 15.2837 10.7582 15.612 10.7582C17.3851 10.7582 19.1583 10.7582 20.9254 10.7582C21.2538 10.7582 21.3493 10.8538 21.3493 11.1821C21.3493 14.1851 21.3493 17.1941 21.3493 20.1971C21.3553 20.5254 21.2598 20.6209 20.9195 20.6209ZM16.1135 7.90451C16.1135 7.46272 16.1195 7.02093 16.1135 6.57317C16.1135 6.46571 16.1374 6.42989 16.2508 6.43586C16.5732 6.44183 16.8956 6.44183 17.212 6.43586C17.3195 6.43586 17.3553 6.45974 17.3493 6.57317C17.3434 6.83586 17.3493 7.09854 17.3493 7.36123C17.3493 7.65974 17.3493 7.65974 17.0628 7.67168C16.9195 7.67765 16.818 7.73735 16.7583 7.86869C16.7046 7.99407 16.7344 8.11347 16.8299 8.20302C17.2359 8.61496 17.6419 9.02093 18.0538 9.4269C18.1792 9.55227 18.3404 9.57018 18.4717 9.44481C18.9016 9.0269 19.3195 8.60302 19.7374 8.17914C19.8269 8.08959 19.8449 7.97616 19.7851 7.85675C19.7314 7.74332 19.6419 7.67765 19.5165 7.67168C19.4628 7.66571 19.415 7.66571 19.3613 7.67168C19.224 7.69556 19.1941 7.64183 19.1941 7.50451C19.2001 6.91944 19.1702 6.33436 19.206 5.74929C19.2538 4.97914 18.7822 4.53138 18.0419 4.57317C17.4449 4.60899 16.8478 4.57914 16.2508 4.58511C16.1434 4.58511 16.1135 4.55526 16.1135 4.4478C16.1195 4.00601 16.1195 3.56421 16.1135 3.11645C16.1135 2.84183 16.006 2.72839 15.7314 2.72839C13.3195 2.72839 10.9016 2.72839 8.48963 2.72839C8.20903 2.72839 8.10157 2.83586 8.10157 3.11048C8.10157 3.53436 8.0956 3.95824 8.10754 4.38213C8.11351 4.53735 8.08366 4.58511 7.91649 4.58511C7.25978 4.57317 6.60903 4.57914 5.95231 4.57914C5.415 4.59108 5.015 4.99108 5.015 5.51645C5.00903 6.72839 5.015 7.9463 5.015 9.15824C5.015 9.40899 5.12843 9.51645 5.38515 9.51645C5.73739 9.51645 6.08963 9.51645 6.44187 9.51645C6.76425 9.51645 6.85978 9.42093 6.85978 9.09257C6.85978 8.26272 6.86575 7.43287 6.85381 6.60899C6.85381 6.45974 6.8956 6.42989 7.03291 6.43586C7.34336 6.4478 7.64784 6.44183 7.95828 6.43586C8.07172 6.43586 8.0956 6.47168 8.0956 6.57317C8.08963 7.00899 8.0956 7.44481 8.0956 7.88063C8.0956 8.17914 8.19709 8.28063 8.50157 8.28063C9.70157 8.28063 10.9016 8.28063 12.1016 8.28063C13.3075 8.28063 14.5135 8.28063 15.7254 8.28063C16.0001 8.2866 16.1135 8.17914 16.1135 7.90451ZM16.5613 5.20601C17.1046 5.20601 17.6538 5.20601 18.1971 5.20601C18.4717 5.20601 18.5792 5.31347 18.5792 5.59407C18.5792 6.35824 18.5851 7.12242 18.5792 7.8866C18.5792 8.05377 18.615 8.18511 18.7941 8.2866C18.6389 8.43586 18.4896 8.5672 18.3463 8.71048C18.2866 8.77615 18.2449 8.76421 18.1911 8.70451C18.1254 8.63287 18.0538 8.5672 17.9881 8.50153C17.8807 8.39407 17.6956 8.29854 17.9225 8.12541C17.9762 8.08362 17.9643 7.99407 17.9643 7.92242C17.9643 7.34929 17.9643 6.78212 17.9643 6.20899C17.9643 5.93436 17.8568 5.83287 17.5762 5.83287C17.1463 5.83287 16.7165 5.8269 16.2866 5.83287C16.1613 5.83287 16.1135 5.81496 16.1135 5.67168C16.1135 5.20601 16.1075 5.20601 16.5613 5.20601ZM7.62993 5.82093C7.28963 5.82093 6.94933 5.82093 6.60903 5.82093C6.35828 5.82093 6.25082 5.93436 6.24485 6.19108C6.24485 7.03884 6.23888 7.8866 6.24485 8.72839C6.24485 8.86571 6.22097 8.91347 6.07172 8.9075C5.62395 8.89556 5.62395 8.9075 5.62395 8.46571C5.62395 8.02989 5.62395 7.59407 5.62395 7.15824C5.62395 6.63287 5.62395 6.1075 5.62395 5.58212C5.62395 5.31944 5.73739 5.21198 6.00007 5.20601C6.64485 5.20601 7.2956 5.20601 7.94037 5.20004C8.05381 5.20004 8.08963 5.21795 8.08963 5.34332C8.10157 5.82093 8.10754 5.82093 7.62993 5.82093ZM15.4986 7.49257C15.4986 7.62989 15.4747 7.67168 15.3254 7.67168C14.2449 7.66571 13.1702 7.66571 12.0896 7.66571C11.021 7.66571 9.95828 7.66571 8.88963 7.67168C8.75231 7.67168 8.71052 7.6478 8.71052 7.49854C8.71649 6.17317 8.71649 4.85377 8.71052 3.52839C8.71052 3.39108 8.7344 3.34929 8.88366 3.34929C11.0269 3.35526 13.1762 3.35526 15.3195 3.34929C15.4568 3.34929 15.4986 3.37317 15.4986 3.52242C15.4926 4.8478 15.4926 6.17317 15.4986 7.49257ZM13.0269 6.01795C13.0747 6.37018 12.8837 6.7463 12.5672 6.92541C12.4837 6.97317 12.418 7.00899 12.4001 7.12839C12.3822 7.27168 12.2628 7.36123 12.1135 7.36123C11.9523 7.36123 11.8389 7.27168 11.809 7.11645C11.7911 7.02093 11.7553 6.97914 11.6777 6.93735C11.4031 6.79407 11.2478 6.56123 11.1941 6.26272C11.1523 6.03586 11.2538 5.86272 11.4389 5.8269C11.624 5.79108 11.7613 5.91048 11.8031 6.14929C11.8329 6.33436 11.9643 6.4478 12.1314 6.43586C12.2926 6.42392 12.418 6.2866 12.418 6.13138C12.418 5.95824 12.2926 5.83884 12.0956 5.82093C11.6657 5.78511 11.3434 5.5463 11.2299 5.17615C11.1165 4.81198 11.2299 4.42989 11.5284 4.19108C11.6598 4.08362 11.8269 4.02989 11.8568 3.81496C11.8747 3.70153 12.018 3.65377 12.1434 3.67168C12.2747 3.68959 12.3822 3.7672 12.4001 3.89257C12.418 4.01795 12.4837 4.05974 12.5732 4.1075C12.8478 4.25675 13.0269 4.57317 13.0329 4.86571C13.0329 5.05675 12.9135 5.20004 12.7404 5.20601C12.5732 5.21795 12.4478 5.09854 12.418 4.91944C12.412 4.89556 12.418 4.86571 12.412 4.84183C12.3762 4.68063 12.2269 4.57317 12.0717 4.59108C11.9225 4.60899 11.7971 4.7463 11.8031 4.89556C11.809 5.06869 11.9046 5.17018 12.0657 5.20004C12.1553 5.21795 12.2449 5.21795 12.3284 5.23586C12.7046 5.33138 12.9732 5.63586 13.0269 6.01795ZM10.2508 3.95824C10.2568 4.12541 10.1314 4.25675 9.95231 4.27466C9.85082 4.28063 9.71948 4.25078 9.65978 4.29854C9.58813 4.35227 9.64186 4.48959 9.63589 4.59108C9.61798 4.77018 9.49261 4.89556 9.32545 4.89556C9.15828 4.89556 9.03291 4.77018 9.02097 4.58511C9.015 4.47765 9.02097 4.37018 9.02097 4.25675C9.02097 3.68959 9.05082 3.65974 9.61201 3.65974C9.72545 3.65974 9.84485 3.65377 9.95828 3.65974C10.1254 3.67765 10.2508 3.80302 10.2508 3.95824ZM15.1881 3.96421C15.1941 4.07168 15.1881 4.17914 15.1881 4.29257C15.1881 4.39407 15.1941 4.49556 15.1881 4.59705C15.1762 4.77615 15.0389 4.90153 14.8717 4.89556C14.7165 4.88959 14.5911 4.77018 14.5732 4.60302C14.5613 4.49556 14.621 4.35824 14.5434 4.29257C14.4777 4.24481 14.3463 4.2866 14.2449 4.27466C14.0777 4.25675 13.9583 4.12541 13.9583 3.97018C13.9583 3.80899 14.0777 3.67168 14.2449 3.66571C14.4598 3.65377 14.6807 3.65377 14.8956 3.66571C15.0687 3.67765 15.1702 3.78511 15.1881 3.96421ZM10.2508 7.05675C10.2448 7.22392 10.1195 7.34929 9.94037 7.36123C9.83888 7.3672 9.73739 7.36123 9.63589 7.36123C9.04485 7.36123 9.02097 7.33735 9.02097 6.7463C9.02097 6.64481 9.015 6.54332 9.02097 6.44183C9.03291 6.26272 9.15231 6.13138 9.31948 6.13138C9.48664 6.12541 9.61798 6.25078 9.63589 6.42989C9.64186 6.53138 9.61201 6.66272 9.65978 6.72242C9.71351 6.79406 9.85082 6.73436 9.95231 6.7463C10.1314 6.76421 10.2568 6.88959 10.2508 7.05675ZM15.1881 6.43586C15.1941 6.53735 15.1881 6.63884 15.1881 6.74033C15.1881 7.33138 15.1643 7.36123 14.5792 7.36123C14.4717 7.36123 14.3583 7.3672 14.2508 7.36123C14.0717 7.34929 13.9523 7.21198 13.9583 7.04481C13.9643 6.88362 14.0837 6.76421 14.2508 6.7463C14.3523 6.74033 14.4837 6.77615 14.5493 6.72242C14.621 6.66869 14.5672 6.53138 14.5732 6.42989C14.5911 6.25078 14.7165 6.12541 14.8837 6.12541C15.0448 6.13138 15.1762 6.25675 15.1881 6.43586ZM8.32246 11.6776C6.7344 11.6776 5.15231 11.6776 3.56425 11.6776C3.26575 11.6776 3.16425 11.7791 3.16425 12.0836C3.16425 13.2836 3.16425 14.4836 3.16425 15.6836C3.16425 16.8896 3.16425 18.0956 3.16425 19.3015C3.16425 19.5762 3.27172 19.6896 3.54634 19.6896C5.14037 19.6896 6.72843 19.6896 8.32246 19.6896C8.60903 19.6896 8.71649 19.5821 8.71649 19.2896C8.71649 16.8836 8.71649 14.4776 8.71649 12.0657C8.71052 11.7851 8.60903 11.6776 8.32246 11.6776ZM7.92843 19.0806C6.59709 19.0747 5.27172 19.0747 3.94037 19.0806C3.82097 19.0806 3.77918 19.0568 3.77918 18.9254C3.78515 16.7702 3.78515 14.609 3.77918 12.4538C3.77918 12.3344 3.80306 12.2926 3.9344 12.2926C5.27172 12.2985 6.60903 12.2985 7.94037 12.2926C8.08366 12.2926 8.10157 12.3463 8.10157 12.4657C8.0956 13.5463 8.10157 14.6209 8.10157 15.7015C8.10157 16.7702 8.10157 17.8329 8.10754 18.9015C8.10157 19.0388 8.07769 19.0806 7.92843 19.0806ZM20.6329 11.6776C19.0628 11.6776 17.4866 11.6776 15.9165 11.6776C15.6001 11.6776 15.4986 11.7732 15.4986 12.0896C15.4986 13.2896 15.4986 14.4896 15.4986 15.6896C15.4986 16.8836 15.4986 18.0776 15.4986 19.2717C15.4986 19.6 15.5941 19.6956 15.9225 19.6956C17.4866 19.6956 19.0568 19.6956 20.621 19.6956C20.9493 19.6956 21.0449 19.6 21.0449 19.2776C21.0449 16.8836 21.0449 14.4896 21.0449 12.0956C21.0449 11.7732 20.9434 11.6776 20.6329 11.6776ZM20.2568 19.0806C18.9314 19.0747 17.612 19.0747 16.2866 19.0806C16.1434 19.0806 16.1075 19.0448 16.1075 18.9015C16.1135 17.8209 16.1135 16.7463 16.1135 15.6657C16.1135 14.5971 16.1195 13.5344 16.1075 12.4657C16.1075 12.3224 16.1434 12.2866 16.2866 12.2866C17.612 12.2926 18.9314 12.2926 20.2568 12.2866C20.4001 12.2866 20.4359 12.3224 20.4359 12.4657C20.4299 14.609 20.4299 16.7582 20.4359 18.9015C20.4299 19.0448 20.4001 19.0806 20.2568 19.0806ZM6.92545 15.7433C6.81798 15.6538 6.82395 15.612 6.90157 15.5105C7.33142 14.9612 7.22395 14.1911 6.66873 13.7672C6.11948 13.3553 5.33739 13.4747 4.93142 14.0418C4.60903 14.4896 4.62694 15.0747 4.97321 15.5284C5.00306 15.5702 5.11649 15.612 5.00903 15.6896C4.51948 16.0657 4.35828 16.5732 4.3941 17.1642C4.40604 17.415 4.51351 17.5284 4.75828 17.5284C5.15231 17.5284 5.54037 17.5284 5.9344 17.5284C6.3344 17.5284 6.72843 17.5284 7.12843 17.5284C7.32545 17.5284 7.45679 17.4329 7.4747 17.2657C7.52843 16.6806 7.40903 16.1433 6.92545 15.7433ZM5.94037 14.1433C6.28067 14.1433 6.56127 14.4299 6.5553 14.7702C6.54933 15.1045 6.26873 15.3791 5.94037 15.3791C5.60007 15.3791 5.31948 15.0926 5.32545 14.7523C5.32545 14.4179 5.60604 14.1433 5.94037 14.1433ZM6.74634 16.9194C6.47769 16.9135 6.20903 16.9194 5.94037 16.9194C5.67172 16.9194 5.40306 16.9135 5.1344 16.9194C5.02694 16.9254 5.00903 16.8836 5.02097 16.7881C5.08067 16.3403 5.48664 15.9941 5.94037 15.9941C6.3941 15.9941 6.7941 16.3403 6.85978 16.7881C6.87172 16.8836 6.85978 16.9254 6.74634 16.9194ZM19.2657 15.7493C19.1463 15.6478 19.1643 15.606 19.2478 15.5045C19.5881 15.0747 19.5881 14.4776 19.2657 14.0359C18.9374 13.5881 18.3643 13.415 17.8449 13.606C17.0568 13.8985 16.7881 14.8538 17.3016 15.5224C17.3374 15.5702 17.4508 15.612 17.3314 15.7015C16.8478 16.0717 16.6926 16.5791 16.7225 17.1642C16.7344 17.4269 16.8359 17.5344 17.0986 17.5344C17.4807 17.5344 17.8687 17.5344 18.2508 17.5344C18.6508 17.5344 19.0449 17.5344 19.4449 17.5344C19.6419 17.5344 19.7792 17.4448 19.7971 17.2776C19.8628 16.6866 19.7434 16.1433 19.2657 15.7493ZM18.2747 14.1433C18.615 14.1433 18.8956 14.4299 18.8896 14.7702C18.8837 15.0985 18.6031 15.3732 18.2687 15.3732C17.9284 15.3732 17.6478 15.0866 17.6538 14.7463C17.6598 14.412 17.9404 14.1433 18.2747 14.1433ZM19.0687 16.9194C18.8001 16.9075 18.5314 16.9194 18.2628 16.9194C18.0001 16.9194 17.7374 16.9135 17.4747 16.9194C17.3672 16.9254 17.3314 16.8956 17.3493 16.7821C17.421 16.3403 17.809 16 18.2568 15.9941C18.7165 15.9881 19.1105 16.3224 19.1881 16.7762C19.206 16.8776 19.1941 16.9254 19.0687 16.9194Z'
              fill='#979797' />
          </svg>
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Chuyển tiền theo Lô</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu('transfer-mobile-money')}
          className={pageName === 'transfer-mobile-money' ? 'active' : ''}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M9.216 15.7726V14.9648C9.46519 14.9648 9.68579 14.9219 9.87983 14.8351C10.0729 14.7483 10.2403 14.6277 10.3813 14.4735C10.6519 14.1763 10.7877 13.7607 10.7877 13.2276C10.7877 12.7946 10.6734 12.432 10.4446 12.1399C10.2158 11.8478 9.79609 11.5445 9.18434 11.231V9.56936C9.33855 9.56936 9.46009 9.63779 9.54996 9.77464C9.63881 9.91149 9.68375 10.0923 9.68375 10.3169V10.4017H10.6458V10.2843C10.6458 9.7971 10.5243 9.4274 10.2802 9.17617C10.0289 8.91676 9.67353 8.78604 9.21702 8.78604V8.22128H8.75847V8.77787C8.53685 8.77787 8.33668 8.81668 8.16 8.89532C7.9823 8.97396 7.82809 9.08528 7.69532 9.22825C7.44102 9.50706 7.31336 9.88085 7.31336 10.3486C7.31336 10.752 7.42775 11.1033 7.65651 11.4026C7.88528 11.7018 8.26519 11.9969 8.79524 12.29V14.1334C8.59813 14.0987 8.45311 14.0027 8.36324 13.8475C8.27234 13.6923 8.22741 13.4717 8.22741 13.1877L8.23149 13.0948L8.23558 12.9978H7.24902V13.1561C7.24902 13.73 7.37464 14.1671 7.6269 14.4674C7.76273 14.6267 7.92409 14.7503 8.112 14.8371C8.29992 14.9239 8.51643 14.9668 8.75949 14.9668V15.7746H9.216V15.7726ZM9.18332 12.4882C9.39166 12.626 9.53668 12.7619 9.61736 12.8946C9.69907 13.0274 9.7389 13.1939 9.7389 13.394C9.7389 13.6024 9.69089 13.7699 9.59489 13.8955C9.49889 14.0211 9.36102 14.1008 9.1823 14.1334V12.4882H9.18332ZM8.42247 10.6468C8.34281 10.5181 8.30298 10.3782 8.30298 10.2271C8.30298 10.03 8.34485 9.87268 8.4286 9.75625C8.47455 9.69396 8.52766 9.64596 8.58894 9.61225C8.65021 9.57855 8.7166 9.56119 8.79013 9.56119L8.79421 11.0063C8.6257 10.895 8.50213 10.7755 8.42247 10.6468Z'
              fill='#A8A8A8' />
            <path
              d='M16.4264 19.9475H13.3657C12.9909 19.9475 12.6865 20.2519 12.6865 20.6267C12.6865 21.0015 12.9909 21.3058 13.3657 21.3058H16.4264C16.8013 21.3058 17.1056 21.0015 17.1056 20.6267C17.1056 20.2519 16.8013 19.9475 16.4264 19.9475Z'
              fill='#A8A8A8' />
            <path
              d='M19.0562 0.909927H10.6419C9.38877 0.909927 8.36953 1.92916 8.36953 3.18227V5.53223C5.16783 5.90193 2.67285 8.62771 2.67285 11.9264C2.67285 15.2252 5.16783 17.952 8.36953 18.3207V20.7635C8.36953 22.0167 9.38877 23.0359 10.6419 23.0359H19.0562C20.3093 23.0359 21.3285 22.0167 21.3285 20.7635V3.18227C21.3285 1.92916 20.3093 0.909927 19.0562 0.909927ZM10.6409 2.2672H19.0552C19.5597 2.2672 19.9702 2.67776 19.9702 3.18227V3.81035H9.72681V3.18227C9.72681 2.67776 10.1363 2.2672 10.6409 2.2672ZM14.1469 15.936L14.295 15.7501V8.10278L14.1469 7.91691C14.0049 7.7392 13.8528 7.57069 13.6934 7.40933C13.8221 7.32354 13.9845 7.27146 14.1612 7.27146C14.5769 7.27146 14.9149 7.55435 14.9149 7.90261V16.0442C14.9149 16.3925 14.5769 16.6754 14.1612 16.6754C13.96 16.6754 13.7772 16.609 13.6414 16.4997C13.8191 16.323 13.9876 16.1351 14.1469 15.936ZM12.5466 17.3729C12.9581 17.7232 13.529 17.9418 14.1602 17.9418C15.4092 17.9418 16.4254 17.09 16.4254 16.0432V7.90261C16.4254 6.8558 15.4092 6.00406 14.1602 6.00406C13.5586 6.00406 13.0123 6.20218 12.6058 6.52389C12.3484 6.3564 12.0809 6.20525 11.8031 6.07759C11.1423 5.77223 10.4458 5.58635 9.72579 5.51895V5.16763H19.9702V18.2042H10.5428C11.2557 18.0439 11.9328 17.762 12.5466 17.3729ZM4.03013 11.9264C4.03013 9.12508 6.30962 6.84559 9.11098 6.84559C9.85243 6.84559 10.5673 7.00184 11.2352 7.31027C11.8817 7.60848 12.4659 8.04763 12.9367 8.58584V15.267C11.9695 16.3761 10.5877 17.0073 9.11098 17.0073C6.30962 17.0073 4.03013 14.7278 4.03013 11.9264ZM19.0562 21.6786H10.6419C10.1374 21.6786 9.72681 21.2681 9.72681 20.7635V19.5625H19.9712V20.7635C19.9702 21.2681 19.5597 21.6786 19.0562 21.6786Z'
              fill='#A8A8A8' />
          </svg>
          <span className={'menu-sidebar-label'} style={{ display: isCollapse ? 'none' : 'block' }}>Nạp/Rút Mobifone Money</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu('transaction-manage')}
          className={pageName === 'transaction-manage' ? 'active' : ''}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11.3169 3.97366C11.2943 2.81091 10.7186 1.97554 9.68 1.4619C9.42036 1.33208 9.13814 1.29821 8.86721 1.21355C7.08922 1.21355 5.31123 1.21355 3.53325 1.21355C2.77125 1.3095 2.1673 1.68203 1.69317 2.28034C1.39402 2.66416 1.2134 3.09878 1.1626 3.5842C1.1626 5.3904 1.1626 7.19661 1.1626 9.00282C1.23597 9.03669 1.20775 9.11571 1.22469 9.17215C1.55206 10.5042 2.64143 11.3735 4.00738 11.3735C5.52572 11.3735 7.03842 11.3791 8.55676 11.3735C10.0751 11.3678 11.3112 10.1261 11.3225 8.61336C11.3282 7.06115 11.3451 5.52023 11.3169 3.97366ZM8.46645 10.0188C6.98762 10.0188 5.50314 10.0188 4.02431 10.0188C3.13814 10.0188 2.5229 9.40357 2.5229 8.5174C2.5229 7.77234 2.5229 7.02164 2.5229 6.27658C2.5229 5.5428 2.5229 4.80903 2.5229 4.07526C2.5229 3.18909 3.13814 2.57385 4.02431 2.57385C5.50314 2.57385 6.98762 2.57385 8.46645 2.57385C9.35262 2.57385 9.96786 3.18909 9.96786 4.07526C9.96786 5.55409 9.96786 7.03857 9.96786 8.5174C9.96786 9.39793 9.35262 10.0188 8.46645 10.0188Z'
              fill='#A8A8A8' />
            <path
              d='M11.3225 15.5108C11.3169 13.9699 10.0751 12.7337 8.53419 12.7281C7.00455 12.7224 5.47492 12.7224 3.94529 12.7281C2.69223 12.7337 1.58593 13.5804 1.25855 14.7883C1.23033 14.8955 1.23033 15.0084 1.1626 15.0987C1.1626 16.9049 1.1626 18.7112 1.1626 20.5174C1.23597 20.5512 1.20775 20.6303 1.22469 20.6867C1.55206 22.0188 2.64143 22.888 4.00738 22.888C5.51443 22.888 7.02713 22.8937 8.53419 22.888C10.0751 22.8824 11.3169 21.6406 11.3225 20.1053C11.3282 18.57 11.3282 17.0404 11.3225 15.5108ZM8.46645 21.5334C6.98762 21.5334 5.50314 21.5334 4.02431 21.5334C3.13814 21.5334 2.5229 20.9181 2.5229 20.0319C2.5229 19.2869 2.5229 18.5362 2.5229 17.7911C2.5229 17.0573 2.5229 16.3236 2.5229 15.5898C2.5229 14.7036 3.13814 14.0884 4.02431 14.0884C5.50314 14.0884 6.98762 14.0884 8.46645 14.0884C9.35263 14.0884 9.96787 14.7036 9.96787 15.5898C9.96787 17.0686 9.96787 18.5531 9.96787 20.0319C9.96787 20.9125 9.35263 21.5334 8.46645 21.5334Z'
              fill='#A8A8A8' />
            <path
              d='M22.8318 3.97364C22.8149 2.82218 22.2448 1.98681 21.2175 1.46752C20.9522 1.33205 20.6644 1.29254 20.3878 1.20788C18.6098 1.20788 16.8318 1.20788 15.0538 1.20788C15.02 1.28126 14.9409 1.25303 14.8845 1.26997C13.5468 1.5917 12.6832 2.68671 12.6832 4.05266C12.6832 5.55971 12.6775 7.07241 12.6832 8.57947C12.6888 10.1091 13.9193 11.3565 15.4433 11.3678C16.9899 11.3734 18.5308 11.3734 20.0773 11.3678C21.5957 11.3622 22.8318 10.1204 22.8375 8.60205C22.8431 7.06112 22.86 5.51456 22.8318 3.97364ZM21.4828 8.51173C21.4828 9.39791 20.8676 10.0131 19.9814 10.0131C18.5026 10.0131 17.0181 10.0131 15.5392 10.0131C14.6531 10.0131 14.0378 9.39226 14.0378 8.51173C14.0378 7.77232 14.0378 7.0329 14.0378 6.28784C14.0378 5.54842 14.0378 4.80901 14.0378 4.06395C14.0378 3.17777 14.6531 2.56253 15.5392 2.56253C17.0181 2.56253 18.5026 2.56253 19.9814 2.56253C20.8676 2.56253 21.4828 3.17777 21.4828 4.06395C21.4884 5.55407 21.4884 7.0329 21.4828 8.51173Z'
              fill='#A8A8A8' />
            <path
              d='M17.7687 12.7282C14.9691 12.7226 12.6831 15.0029 12.6831 17.8025C12.6831 20.5965 14.9521 22.8768 17.7461 22.8881C20.5457 22.8994 22.8374 20.6191 22.843 17.8194C22.843 15.0198 20.5683 12.7338 17.7687 12.7282ZM17.7574 21.5335C15.7085 21.5335 14.0321 19.8571 14.0321 17.8082C14.0321 15.7536 15.7085 14.0829 17.7574 14.0829C19.812 14.0829 21.4827 15.7536 21.4827 17.8082C21.4827 19.8627 19.812 21.5335 17.7574 21.5335Z'
              fill='#A8A8A8' />
          </svg>
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Quản lý giao dịch</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu('transaction-history')}
          className={pageName === 'transaction-history' ? 'active' : ''}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M22.7256 10.5669C22.5605 9.31805 22.1837 8.13266 21.5994 7.01923C20.9263 5.73223 20.0203 4.62304 18.9027 3.69166C17.4294 2.45546 15.7444 1.67649 13.8478 1.33357C13.4541 1.2616 13.0519 1.2743 12.6582 1.2235C12.6285 1.2235 12.6031 1.2235 12.5735 1.2235C12.4169 1.2235 12.2645 1.2235 12.1078 1.2235C11.9935 1.2235 11.8834 1.2235 11.7691 1.2235C11.6125 1.2235 11.4601 1.2235 11.3034 1.2235C11.2484 1.2235 11.1891 1.2235 11.1341 1.2235C10.9055 1.2616 10.6726 1.24467 10.444 1.2743C9.2036 1.43941 8.02244 1.81196 6.91325 2.38773C5.62625 3.06086 4.51283 3.96261 3.58145 5.07603C2.33678 6.56201 1.54934 8.25966 1.20642 10.169C1.14292 10.5288 1.15562 10.8972 1.10059 11.257C1.10059 11.3121 1.10059 11.3713 1.10059 11.4264C1.10059 11.583 1.10059 11.7354 1.10059 11.892C1.10059 12.0064 1.10059 12.1164 1.10059 12.2307C1.10059 12.3874 1.10059 12.5398 1.10059 12.6964C1.10059 12.7515 1.10059 12.8107 1.10059 12.8658C1.13869 13.0944 1.12175 13.3272 1.15139 13.5558C1.3165 14.7963 1.68905 15.9774 2.26481 17.0866C2.93795 18.3736 3.83969 19.487 4.95312 20.4184C6.43909 21.6631 8.13675 22.4505 10.0461 22.7934C10.4059 22.8569 10.7742 22.8442 11.1341 22.8993C11.1891 22.8993 11.2484 22.8993 11.3034 22.8993C11.4601 22.8993 11.6125 22.8993 11.7691 22.8993C11.8834 22.8993 11.9935 22.8993 12.1078 22.8993C12.2475 22.8993 12.3915 22.8993 12.5312 22.8993C12.5735 22.8993 12.6158 22.8993 12.6582 22.8993C12.9164 22.8612 13.1747 22.8823 13.4329 22.8485C14.6733 22.6834 15.8545 22.3151 16.9637 21.7351C18.2592 21.0577 19.3726 20.1517 20.3124 19.0298C21.5444 17.5523 22.3276 15.8674 22.6705 13.975C22.7383 13.6066 22.7256 13.2341 22.7806 12.87C22.7806 12.815 22.7806 12.7557 22.7806 12.7007C22.7806 12.544 22.7806 12.3916 22.7806 12.235C22.7806 12.1207 22.7806 12.0106 22.7806 11.8963C22.7806 11.7396 22.7806 11.5872 22.7806 11.4306C22.7806 11.3883 22.7806 11.3459 22.7806 11.3036C22.7383 11.0538 22.7594 10.8083 22.7256 10.5669ZM20.2278 12.6922C20.5961 12.6964 20.9602 12.6964 21.3285 12.6922C21.4428 12.6922 21.4809 12.7091 21.4724 12.8404C21.3454 14.3009 20.9178 15.6684 20.1685 16.9257C19.1651 18.6065 17.7765 19.8681 16.0112 20.7105C14.9739 21.2059 13.8732 21.4937 12.7259 21.5911C12.5735 21.6038 12.5693 21.5488 12.5735 21.4302C12.5777 21.0831 12.5777 20.7402 12.5735 20.393C12.5693 19.9612 12.3195 19.6775 11.9427 19.6733C11.5575 19.6733 11.3077 19.9485 11.3077 20.3803C11.3077 20.7275 11.3034 21.0704 11.3119 21.4175C11.3161 21.5488 11.2907 21.5996 11.1426 21.5826C9.70316 21.4556 8.35689 21.0323 7.11223 20.2999C5.70669 19.4701 4.58056 18.3567 3.74232 16.9554C3.04802 15.7911 2.60773 14.538 2.45956 13.1917C2.44262 13.0309 2.35795 12.8065 2.43415 12.7261C2.52729 12.6202 2.75167 12.7007 2.92101 12.6922C3.01415 12.688 3.10306 12.6922 3.19619 12.6922C3.39517 12.6922 3.58991 12.6964 3.78889 12.6922C4.16568 12.6837 4.44509 12.4128 4.44932 12.0614C4.45356 11.71 4.16991 11.4306 3.79736 11.4264C3.38247 11.4221 2.96335 11.4221 2.54846 11.4264C2.43839 11.4264 2.40875 11.401 2.42145 11.2867C2.54423 9.82608 2.97605 8.45864 3.72115 7.19704C4.5594 5.7788 5.69399 4.64844 7.11223 3.81443C8.25105 3.1413 9.48302 2.71794 10.8039 2.574C10.969 2.55707 11.1849 2.45546 11.2865 2.55284C11.3881 2.65021 11.3119 2.87459 11.3161 3.03969C11.3204 3.30641 11.3119 3.57735 11.3204 3.84407C11.3331 4.22085 11.6083 4.48757 11.9639 4.48333C12.3237 4.4791 12.582 4.20815 12.5862 3.8229C12.5904 3.44188 12.5947 3.06086 12.582 2.67984C12.5777 2.5486 12.6116 2.51473 12.7471 2.52743C13.8944 2.62904 14.9909 2.91692 16.0323 3.41225C17.4887 4.11078 18.7037 5.1099 19.6605 6.4096C20.5199 7.57806 21.0787 8.87776 21.3497 10.3045C21.4089 10.622 21.4343 10.948 21.4809 11.2697C21.4978 11.3883 21.4724 11.4264 21.3454 11.4221C20.9771 11.4137 20.613 11.4179 20.2447 11.4179C19.834 11.4221 19.5546 11.6846 19.5589 12.0614C19.5504 12.4339 19.8256 12.6922 20.2278 12.6922ZM13.7123 13.0647C13.6192 12.9716 13.598 12.9123 13.6531 12.7811C13.8224 12.4043 13.852 12.0064 13.742 11.6042C13.7081 11.4814 13.7335 11.4137 13.8182 11.329C14.3939 10.7575 14.9655 10.1817 15.5412 9.61016C15.6936 9.45352 15.8587 9.30535 15.9985 9.14024C16.1763 8.9328 16.1932 8.68725 16.0704 8.45017C15.9476 8.20886 15.736 8.09879 15.4608 8.11572C15.2618 8.12419 15.1221 8.23426 14.9866 8.3655C14.3304 9.02593 13.6658 9.68213 13.0138 10.3426C12.9249 10.4315 12.8614 10.4442 12.7471 10.3849C12.51 10.2579 12.2475 10.1986 11.9766 10.1944C11.2188 10.1859 10.5329 10.6008 10.2324 11.3121C9.92331 12.0402 10.0291 12.7303 10.5668 13.3145C11.0833 13.8776 11.7353 14.0512 12.4719 13.8352C12.6116 13.7929 12.6836 13.831 12.7767 13.9242C14.1738 15.3297 15.5793 16.731 16.9806 18.1323C17.0399 18.1916 17.0992 18.2551 17.1669 18.3059C17.5479 18.5938 18.0729 18.3948 18.1703 17.9249C18.2253 17.6497 18.0983 17.4507 17.9163 17.2687C16.5149 15.8674 15.1179 14.466 13.7123 13.0647ZM11.9342 12.6541C11.6083 12.6541 11.3458 12.3916 11.3415 12.0656C11.3373 11.7312 11.604 11.4602 11.9385 11.4645C12.2645 11.4645 12.5269 11.7269 12.5312 12.0529C12.5354 12.3874 12.2687 12.6541 11.9342 12.6541Z'
              fill='#A8A8A8' />
          </svg>
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Lịch sử giao dịch</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu('policy')}
          className={pageName === 'policy' ? 'active' : ''}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd'
                  d='M20.4802 7.41661L20.4796 7.40108C20.4709 7.20932 20.4651 7.00644 20.4616 6.78072C20.4453 5.67998 19.5703 4.76948 18.4694 4.70794C16.1741 4.57985 14.3985 3.8314 12.8813 2.35263L12.8684 2.3403C12.3735 1.88657 11.6271 1.88657 11.1321 2.3403L11.1191 2.35263C9.60196 3.8314 7.82634 4.57985 5.53104 4.7081C4.4303 4.76948 3.55513 5.67998 3.53883 6.78087C3.53548 7.00507 3.52954 7.20795 3.52086 7.40108L3.51995 7.43717C3.47532 9.77771 3.41988 12.6906 4.39435 15.3346C4.93018 16.7885 5.74168 18.0524 6.80617 19.0913C8.01855 20.2744 9.60653 21.2137 11.5259 21.8829C11.5884 21.9047 11.6533 21.9224 11.7194 21.9356C11.8126 21.9542 11.9064 21.9635 12.0002 21.9635C12.094 21.9635 12.188 21.9542 12.2811 21.9356C12.3472 21.9224 12.4125 21.9046 12.4753 21.8826C14.3924 21.2122 15.9787 20.2724 17.19 19.0894C18.254 18.0502 19.0655 16.7861 19.6018 15.3318C20.58 12.68 20.5247 9.76157 20.4802 7.41661ZM18.5028 14.9265C17.475 17.7132 15.3769 19.6269 12.0887 20.7769C12.077 20.7808 12.0645 20.7843 12.0515 20.7869C12.0176 20.7936 11.983 20.7936 11.9486 20.7868C11.9358 20.7842 11.9233 20.7808 11.9117 20.7769C8.62002 19.6291 6.52059 17.7164 5.49357 14.9296C4.5954 12.4925 4.64627 9.81853 4.6912 7.45956L4.69151 7.44647C4.70065 7.24374 4.70674 7.03142 4.71009 6.79808C4.7174 6.30932 5.1067 5.90494 5.59638 5.87768C6.89527 5.80518 8.03637 5.55417 9.08487 5.11035C10.132 4.66713 11.062 4.04235 11.9277 3.20039C11.9717 3.16322 12.0289 3.16307 12.0727 3.20039C12.9386 4.04235 13.8686 4.66713 14.9156 5.11035C15.9641 5.55417 17.1052 5.80518 18.4042 5.87768C18.8939 5.90494 19.2832 6.30932 19.2903 6.79824C19.2939 7.03279 19.2999 7.24511 19.3091 7.44647C19.3539 9.80817 19.4035 12.4842 18.5028 14.9265ZM16.1618 9.19414C15.8859 8.91826 15.4387 8.91826 15.1628 9.19414L11.0861 13.2708L9.29759 11.4822C9.0217 11.2063 8.57441 11.2063 8.29852 11.4822C8.02264 11.7581 8.02264 12.2054 8.29852 12.4813L10.5866 14.7694C10.8625 15.0453 11.3098 15.0453 11.5857 14.7694L16.1618 10.1932C16.4377 9.91732 16.4377 9.47003 16.1618 9.19414Z'
                  fill='#A8A8A8' />
          </svg>
          <span className={'menu-sidebar-label'}
                style={{ display: isCollapse ? 'none' : 'block' }}>Điều khoản sử dụng</span>
        </MenuSidebarItem>
        <MenuSidebarItem
          onClick={() => handleClickMenu('support')}
          className={pageName === 'support' ? 'active' : ''}>
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path fillRule='evenodd' clipRule='evenodd'
                  d='M13.0638 3.64764V3.2766H10.9362V3.64766C10.9363 3.65607 10.9363 3.66446 10.9362 3.67283V7.22234C11.2787 7.14642 11.6347 7.10638 12 7.10638C12.3653 7.10638 12.7213 7.14642 13.0638 7.22234V3.67284C13.0637 3.66447 13.0637 3.65607 13.0638 3.64764ZM14.3404 7.70128C15.1664 8.15191 15.8481 8.83364 16.2987 9.65957H19.5187C18.7517 7.19426 16.8051 5.24748 14.3404 4.48117V7.70128ZM16.7777 10.9362C16.8536 11.2787 16.8936 11.6347 16.8936 12C16.8936 12.3653 16.8536 12.7213 16.7777 13.0638H20.3272C20.3355 13.0637 20.3439 13.0637 20.3524 13.0638H20.7234V10.9362H20.3524C20.3439 10.9363 20.3355 10.9363 20.3272 10.9362H16.7777ZM16.2987 14.3404C15.8481 15.1664 15.1664 15.8481 14.3404 16.2987V19.5187C16.8057 18.7517 18.7525 16.8051 19.5188 14.3404H16.2987ZM13.0638 16.7777C12.7213 16.8536 12.3653 16.8936 12 16.8936C11.6347 16.8936 11.2787 16.8536 10.9362 16.7777V20.3272C10.9363 20.3355 10.9363 20.3439 10.9362 20.3523V20.7234H13.0638V20.3524C13.0637 20.3439 13.0637 20.3355 13.0638 20.3272V16.7777ZM9.65957 16.2987C8.83364 15.8481 8.15191 15.1664 7.70128 14.3404H4.48134C5.24828 16.8057 7.19489 18.7525 9.65957 19.5188V16.2987ZM7.22234 13.0638C7.14642 12.7213 7.10638 12.3653 7.10638 12C7.10638 11.6347 7.14642 11.2787 7.22234 10.9362H3.67283C3.66446 10.9363 3.65607 10.9363 3.64766 10.9362H3.2766V13.0638H3.64765C3.65607 13.0637 3.66447 13.0637 3.67284 13.0638H7.22234ZM7.70128 9.65957C8.15191 8.83364 8.83364 8.15191 9.65957 7.70128V4.48116C7.19452 5.24754 5.24754 7.19452 4.48116 9.65957H7.70128ZM9.65957 3.15325C6.48735 3.99018 3.99018 6.48735 3.15325 9.65957H2.6383C2.28578 9.65957 2 9.94535 2 10.2979V13.7021C2 14.0547 2.28578 14.3404 2.6383 14.3404H3.15336C3.99098 17.5129 6.48768 20.0099 9.65957 20.8467V21.3617C9.65957 21.7142 9.94535 22 10.2979 22H13.7021C14.0547 22 14.3404 21.7142 14.3404 21.3617V20.8466C17.5129 20.009 20.0099 17.5123 20.8467 14.3404H21.3617C21.7142 14.3404 22 14.0547 22 13.7021V10.2979C22 9.94535 21.7142 9.65957 21.3617 9.65957H20.8466C20.009 6.48708 17.5123 3.99012 14.3404 3.15325V2.6383C14.3404 2.28578 14.0547 2 13.7021 2H10.2979C9.94535 2 9.65957 2.28578 9.65957 2.6383V3.15325ZM12 15.617C10.0024 15.617 8.38298 13.9976 8.38298 12C8.38298 10.0024 10.0024 8.38298 12 8.38298C13.9976 8.38298 15.617 10.0024 15.617 12C15.617 13.9976 13.9976 15.617 12 15.617Z'
                  fill='#A8A8A8' />
          </svg>
          <span className={'menu-sidebar-label'} style={{ display: isCollapse ? 'none' : 'block' }}>Trợ giúp</span>
        </MenuSidebarItem>
      </MenuSidebarArea>
      <SocialIconWrapper flexDirection={isCollapse ? 'column' : 'row'}>
        <Link to={'#'}>
          <img src={ICONS.FACEBOOK} alt={''} />
        </Link>
        <Link to={'#'}>
          <img src={ICONS.INSTAGRAM} alt={''} />
        </Link>
        <Link to={'#'}>
          <img src={ICONS.YOUTUBE} alt={''} />
        </Link>
      </SocialIconWrapper>

    </MainSideBarWrapper>
  )
}

MainSideBar.propTypes = {}

export default inject('commonStore')(observer(MainSideBar))