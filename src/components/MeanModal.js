/* Emplacement non conventionnel pour des images qui devrait être stocker dans Public, pour pallier à un beug d'affichage*/
import Css from "./logos/css.png"
import Bash from "./logos/bash.png"
import Dnd from "./logos/dnd.png"
import Docker from "./logos/docker.png"
import Express from "./logos/express.png"
import Github from "./logos/github.png"
import Html from "./logos/html.png"
import Mongo from "./logos/mongo.png"
import Mysql from "./logos/mysql.png"
import Node from "./logos/node.png"
import Photoshop from "./logos/photoshop.png"
import ReactLogo from "./logos/react.png"
import Php from "./logos/php.png"
import Symfo from "./logos/symfo.png"
import Next from "./logos/next.png"
import Js from "./logos/js.png"
import Sass from "./logos/sass.png"

export default function MeanModal() {

    function hideModal() {
        const modal = document.querySelector('#mean-details-modal')
        modal.style.display = 'none'
    }




    return (
        <div id="mean-details-modal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-title"><strong>Interprétation</strong></p>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={hideModal}
                        ><strong>X</strong></button>
                    </div>
                    <div className="modal-body">
                        <p>Vous êtes à la recherche d'un développeur <strong>React</strong> & Full JS passionné et impliqué, susceptible de renforcer votre équipe.
                            Vous venez de trouver le profil que vous recherchez.
                        </p>
                        <div className="competence">
                            <img src={ReactLogo} alt="logo react" />
                            <img src={Dnd} alt="logo dnd" />
                            <img src={Node} alt="logo node" />
                            <img src={Html} alt="logo html" />
                            <img src={Css} alt="logo css" />
                            <img src={Js} alt="logo js" />
                            <img src={Mongo} alt="logo mongo" />
                            <img src={Next} alt="logo next" />
                            <img src={Express} alt="logo express" />
                            <img src={Bash} alt="logo bash" />
                            <img src={Docker} alt="logo docker" />
                            <img src={Github} alt="logo github" />
                            <img src={Mysql} alt="logo mysql" />
                            <img src={Photoshop} alt="logo photoshop" />
                            <img src={Php} alt="logo php" />
                            <img src={Symfo} alt="logo symfo" />
                            <img src={Sass} alt="logo sass" />
                        </div>
                        <div className="contact">
                            <p>
                                <strong>Sébastien DANIEL</strong>
                            </p>
                            <p>
                                Développeur FullStack JS Junior
                            </p>
                            <p>
                                Tél: <strong>06.89.19.34.59</strong>
                            </p>
                            <p>
                                Mail: sebastien_daniel@yahoo.fr<br />
                            </p>
                            <p className="digit">
                                <span>Site: <a href="https://alt-k.fr/" target="_blank" rel="noreferrer">https://alt-k.fr/</a></span>
                                <span>Github:<a href="https://github.com/oeildigital" target="_blank" rel="noreferrer">https://github.com/oeildigital</a></span>
                            </p>
                            {/* <p>
                                <span>Github:<a href="https://github.com/oeildigital" target="_blank" rel="noreferrer">https://github.com/oeildigital</a></span>
                            </p> */}


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}