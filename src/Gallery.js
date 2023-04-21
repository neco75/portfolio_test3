import React from 'react'

const Gallery = () => {
  return (
    <div>
         <section id="gallery" class="gallery">
          <h2>Gallery</h2>
          <div class="contents">
            <div class="gallery-item">
              <a
                href="https://neco75-streamlit-web-app-main-app-qmj775.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div class="img">
                  <img src="/img/First.png" alt="Site 1" />
                </div>
                <h3>参考にしたURLを貼るだけのページ</h3>
                <p>
                  Pythonの勉強として初めて開発しました。(恐らく閲覧できません)
                </p>
              </a>
            </div>
            <div class="gallery-item">
              <a
                href="https://docs.google.com/presentation/d/19HBqPL3sp5FWZG012NCbTbkuYcMG_LEm-8vJgfFEShc/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <div class="img">
                  <img src="/img/maitanni.png" alt="Site 2" />
                </div>
                <h3>MAI_TANNI !!!</h3>
                <p>
                  学内ハッカソン「Aizu　Hack2022」でグループ開発したLINE Botです
                </p>
              </a>
            </div>
            <div class="gallery-item">
              <a
                href="https://github.com/neco75"
                target="_blank"
                rel="noreferrer"
              >
                <div class="img">
                  <img src="/img/app.png" alt="Site 3" />
                </div>
                <h3>その他</h3>
                <p>たまに自分で使うwebアプリ作ったりしてます</p>
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Gallery