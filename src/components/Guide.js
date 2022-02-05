import React from 'react'
import './Guide.scss'
import { AppContext } from '../App'
import Menus from './Menus'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import { closeMenuMobile } from '../utils/util'
import { Button } from '@material-ui/core'

function Guide(props) {
  const store = React.useContext(AppContext)

  return (
    <>
      <div id="guideBack" onClick={closeMenuMobile}></div>
      <div id="guideWrapper" className="slideMenu" onClick={closeMenuMobile}>
        <div id="avatar">
          <img alt="avatar" src={process.env.PUBLIC_URL + '/images/avatar.png'} title="Hello 😄" />
          <div id="name">MemilMook</div>
          <div id="nickName">Memilmook Studio</div>
          <div id="github">
            <a href="https://github.com/memilmook">
              <img alt="github" src={process.env.PUBLIC_URL + '/images/GitHub-Mark-32px.png'} /> <span>https://github.com/memilmook</span>
            </a>
          </div>
          <div id="introduction">IT관련 지식들을 모아놓는 블로그.</div>
        </div>
        <div className="menus">
          <Menus menus={store.menus} />
        </div>
        <div className="menus">
          {/*
                      <a
            href="https://memilmook.github.io/interactive_coding"
            className="list"
            onClick={(e) => {
              e.preventDefault()
              window.open('https://memilmook.github.io/interactive_coding')
            }}
          >
            <Button className="menuLink">
              <div>
                <img alt="onandoff" src={process.env.PUBLIC_URL + '/images/imcat_64.png'} />
                Interactive Coding
              </div>
              <OpenInNewIcon />
            </Button>
          </a>
        
        
          */}
          <a href="https://github.com/Memilmook/flyingmemilmook"
          className ="list"
          onClick={function(e) {
            e.preventDefault();
            window.open('https://github.com/Memilmook/flyingmemilmook');
          }}
          >
            <Button className="menuLink">
              <div>
                  <img alt="flyMemilMook" src={process.env.PUBLIC_URL + '/images/flyMemil_64.png'} />
                   날아라 메밀묵
              </div>
              <OpenInNewIcon />
            </Button>
          </a>
          <a href="https://github.com/Memilmook/JavaHexConverter"
          className ="list"
          onClick={function(e) {
            e.preventDefault();
            window.open('https://github.com/Memilmook/JavaHexConverter');
          }}
          >
            <Button className="menuLink">
              <div>
                  <img alt="flyMemilMook" src={process.env.PUBLIC_URL + '/images/file2hex.png'} />
                   File2Hex
              </div>
              <OpenInNewIcon />
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}
export default React.memo(Guide)
