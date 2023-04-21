import React from 'react'

const About = () => {
  return (
    <div>
        <section id="about" class="about">
          <h2>About</h2>
          <div class="profile">
            <img
              src="https://pbs.twimg.com/profile_images/1633107636395581440/S2D-Uz8q_400x400.jpg"
              alt="icon"
            />
            <div class="about-info">
              <h2>ocen (neco)</h2>
              <p>Birthday: 09/30/2003</p>
              <p>Affiliation: University Of Aizu 30th class</p>
              <p>まったり頑張ってます</p>
              <p class="secret">
                実はこのサイトの枠組みはchat-GPTにやってもらいました
              </p>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About