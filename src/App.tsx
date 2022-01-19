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
          <div className="slick-track">
            <div className="slick-slide">
              <img src={img.banner_1} />
            </div>
            <div className="slick-slide">
              <img src={img.banner_2} />
            </div>
            <div className="slick-slide">
              <img src={img.banner_3} />
            </div>
            <div className="slick-slide">
              <img src={img.banner_4} />
            </div>
            <div className="slick-slide">
              <img src={img.banner_5} />
            </div>
            <div className="slick-slide">
              <img src={img.banner_6} />
            </div>
            <div className="slick-slide">
              <img src={img.banner_7} />
            </div>
            <div className="slick-slide">
              <img src={img.banner_8} />
            </div>
            <div className="slick-slide">
              <img src={img.banner_9} />
            </div>
          </div>
          <button className="prev">
            <svg viewBox="0 0 18 18">
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </button>
          <button className="next">
            <svg viewBox="0 0 18 18">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}

render(<App />, document.getElementById("App"))
