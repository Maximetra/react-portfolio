import PortfolioDescription from "./PortfolioDescription";
import todoList from '../../assets/images/todo_list_image.png'
import pokedex from '../../assets/images/pokedex.png'
import dashboard from '../../assets/images/dashboard.png'
import blog from '../../assets/images/blog.jpg'

export function Portfolio() {
    return (
        <section id="portfolio">
            <div className="container mt-3">
                <h1 className="text-center">Portfolio</h1>
                <hr />
                <div className="row">
                    <PortfolioDescription imageUrl={todoList} title='Todo list avec ReactJs' description={`
                L’interface est épurée et réactive, avec une gestion d’état via useState. Les tâches sélectionnées peuvent être supprimées en lot, 
                et l'expérience utilisateur est optimisée grâce à une gestion fluide des événements et une séparation claire des composants.
                Fonctionnalités principales : Ajout de tâches via un champ de saisie, Suppression individuelle ou multiple des tâches, 
                Marquage des tâches effectuées avec des cases à cocher
              `}
                        link='https://github.com/Maximetra/react-todo_list'
                    />
                    <PortfolioDescription imageUrl={pokedex} title='Pokedex Pokemon avec ReactJs' description={`
                Ce projet est une application Pokédex développée en React JS, permettant d’explorer les Pokémon via une interface interactive. 
                Les données sont récupérées dynamiquement grâce à des requêtes à l’API REST officielle PokéAPI.
                Fonctionnalités principales : Affichage d’une liste de Pokémon avec pagination, 
                Consultation des détails de chaque Pokémon (image, taille, poids, expérience, etc.), 
                Appels API via fetch ou axios, Gestion d’état avec useState et useEffect
              `}
                        link='https://github.com/Maximetra/react-pokemon'
                    />
                    <PortfolioDescription imageUrl={dashboard} title='Dashboard avec NextJS' description={`
                Ce dashboard a été conçu avec Next.js, un framework React moderne optimisé pour la performance et le rendu côté serveur (SSR). 
                Il permet d’afficher et de gérer des données dynamiques via une interface fluide et responsive.
                Fonctionnalités principales : Affichage de statistiques en temps réel ou simulées (graphiques, tableaux),
                Architecture modulaire avec composants réutilisables, Récupération des données via API REST ou getServerSideProps / getStaticProps, 
                Authentification sécurisée (via JWT, NextAuth ou autre solution), Optimisation du temps de chargement grâce au prerendering de Next.js
              `}
                        link='https://github.com/Maximetra/nextjs-dashboard'
                    />

                    <PortfolioDescription imageUrl={blog} title='Blog avec Symfony' description={`
                Ce blog a été développé avec Symfony, un framework PHP robuste et structuré. Il permet la création, l’affichage, 
                la modification et la suppression d’articles (CRUD complet) via une interface simple et sécurisée.
                Fonctionnalités principales : Authentification des utilisateurs (connexion/inscription)
               , Gestion des articles (création, édition, suppression), Utilisation du moteur de templates Twig
               , Système de routing, formulaires Symfony et Doctrine ORM pour la gestion des données, Validation des données côté serveur
              `}
                        link='https://github.com/Maximetra/Blog'
                    />

                </div>
            </div>
        </section>
    )
}

export default Portfolio;