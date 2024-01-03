import React from 'react'
import '../App.css'
// import { useSprings, animated, interpolate } from 'react-spring'
import { Draggable } from '@hello-pangea/dnd'

function Card(card, index) {

    const addActive = (e) => {
        const thisCard = e.target
        const parentColumn = thisCard.parentNode.parentNode
        const parentColumnAttribute = parentColumn.getAttribute('data-rfd-droppable-id');
        thisCard.classList.toggle('active')
        if (parentColumnAttribute === 'initialDeck') {
            thisCard.style.background = './components/dos.png'
        } else {

            if (thisCard.classList.contains('active')) {
                thisCard.style.background = `url(${card.card.design})`
                thisCard.style.backgroundSize = '93% 96%'
                // thisCard.style.backgroundSize = `95% 97%`
                // if (window.matchMedia("(max-width: 700px)").matches) {
                //     thisCard.style.backgroundSize = "90% 90%"
                //     thisCard.parentNode.style.backgroundSize = "90% 90%"
                // } else {
                //     thisCard.style.backgroundSize = "95% 97%"
                // }
                thisCard.style.backgroundPosition = "center center"
                thisCard.style.backgroundRepeat = "no-repeat"
            } else {
                thisCard.style.background = './components/dos.png'

            }
        }
    }


    return (
        <Draggable draggableId={card.card.id}
            index={card.index}
            key={card.card.id}
        >
            {provided => (
                <div className="card_item"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}

                // onDragStart={dragAction()}
                >
                    <div className="card-wrapper" title="Déplace moi ou découvre moi!" onClick={addActive}>
                        <div className="card">
                            <div className="card-front side front"></div>
                            <div className="card-back side back"></div>
                        </div>
                    </div>

                </div>
            )}
        </Draggable>
    )
}

export default Card