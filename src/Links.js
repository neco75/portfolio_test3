import React from 'react'

const Links = () => {
  return (
    <div>
        <section id="links" class="links">
          <h2>Links</h2>
          <div class="icon">
            <a
              href="https://twitter.com/ocen_UoA30C2"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/color/384/null/twitter--v1.png"
                alt="Twitter"
              />
            </a>
            <a href="https://misskey.io/@ocen" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/misskey-dev/assets/main/icon.png"
                alt="Misskey"
              />
            </a>
            <a
              href="https://github.com/neco75"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/material-outlined/384/null/github.png"
                alt="Github"
              />
            </a>
          </div>
        </section>
    </div>
  )
}

export default Links