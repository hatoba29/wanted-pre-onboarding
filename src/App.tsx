import React from "react"
import { render } from "react-dom"
import * as img from "./img"
import "./App.scss"

const App = () => {
  return (
    <div id="App">
      <div className="main-bar">
        <nav className="nav-bar">
          <div className="nav-top">
            <button className="hamburger">
              <img src={img.icon_menu} />
            </button>
            <a className="logo">
              <img src={img.logo_new} />
            </a>
          </div>

          <ul className="menu">
            <li>채용</li>
            <li>이벤트</li>
            <li>직군별 연봉</li>
            <li>이력서</li>
            <li>
              커뮤니티
              <em>
                <img src={img.new_} />
              </em>
            </li>
            <li>프리랜서</li>
            <li>
              AI 합격예측
              <em>
                <img src={img.beta} />
              </em>
            </li>
          </ul>

          <aside className="aside">
            <ul>
              <li>
                <button>
                  <img src={img.search} />
                </button>
              </li>
              <li>
                <button>
                  <img src={img.bell} />
                </button>
              </li>
              <li>
                <button className="profile-button">
                  <div className="avatar-border">
                    <div className="avatar-image" />
                  </div>
                </button>
              </li>
              <li className="left-division">
                <a className="dashboard-button">기업 서비스</a>
              </li>
            </ul>
          </aside>
        </nav>
      </div>

      <main>
        <div className="top-banner">
          <div></div>
          <button className="prev"></button>
          <button className="next"></button>
        </div>
      </main>
    </div>
  )
}

render(<App />, document.getElementById("App"))
