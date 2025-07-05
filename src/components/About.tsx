type AboutProps = {
    photo: string
    pdf: string
}

export function About({ photo, pdf }: AboutProps) {
    return (
        <section id="about">
        <div className="container mt-4 pt-4">
          <h1 className="text-center">À propos de moi</h1>
          <hr />
          <div className="row mt-4">
            <div
              className="col-lg-4"
              style={{
                maxHeight: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <img src={photo} className="imageAboutPage" alt="" />
            </div>

            <div className="col-lg-8">
              <p> Professionnel doté de nombreuses années d'expérience dans Développement web,
                combinées à une solide formation dans le domaine front et back end et une forte aptitude à
                acquérir de nouvelles connaissances. Capable à la fois de travailler en équipe et de
                fonctionner de manière autonome.
              </p>
              <div className="row mt-3">
                <div className="col-md-6">
                  <ul>
                    <li>Nom: Mbiya Kiaku Maxime</li>
                    <li>Age: 25</li>
                    <li>Statut: À l’écoute de nouvelles opportunités pour le poste de développeur web</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>J'approfondis mes connaissances sur React et NextJS</li>
                    <li>
                      <a target='_blank' href={pdf}>Mon CV</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-3">
                <p>Je suis passionné par le développement web et la création de solutions numériques innovantes.
                  Je m’épanouis dans la transformation des idées en réalité grâce au codage et au design.
                  Avec un sens aigu du détail et un amour pour la résolution de problèmes,
                  je me consacre à la création d’expériences conviviales qui laissent une impression durable.
                  Construisons quelque chose d’incroyable ensemble !
                </p>
                <p>TechStack:
                  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                    alt="HTML5" />
                  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css&logoColor=white"
                    alt="CSS3" />
                  <img src="https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"
                    alt="JavaScript" />
                  <img src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
                    alt="Jquery" />
                  <img src="https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&&logo=react&&logoColor=black"
                    alt="React" />
                  <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white"
                    alt="NextJs" />
                  <img src="https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white"
                    alt="NodeJs" />
                  <img src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white"
                    alt="PHP" />
                  <img src="https://img.shields.io/badge/symfony-%23000000.svg?style=for-the-badge&logo=symfony&logoColor=white"
                    alt="Symfony" />
                  <img src="https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"
                    alt="Laravel" />
                  <img src="https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white"
                    alt="MySQL" />
                  <img src="https://img.shields.io/badge/postgreSQL-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
                    alt="PostgreSQL" />

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default About;