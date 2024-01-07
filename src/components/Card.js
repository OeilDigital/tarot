import React from 'react'
import '../App.css'
// import { useSprings, animated, interpolate } from 'react-spring'
import { Draggable } from '@hello-pangea/dnd'

function Card(card, index) {

    const addActive = (e) => {
        const thisCard = e.target
        const thisCardWrapper = thisCard.parentNode.parentNode
        const thisCardWrapperAttribute = thisCardWrapper.getAttribute('data-rfd-droppable-id');
        const backFace = thisCardWrapper.firstChild.lastChild
        thisCardWrapper.classList.toggle('active')
        console.log(backFace)
        if (thisCardWrapperAttribute === 'initialDeck') {
            thisCard.style.background = './components/dos.png'
        } else {
            if (thisCardWrapper.classList.contains('active')) {
                backFace.style.background = `url(${card.card.design})`
                backFace.style.backgroundSize = '93% 96%'
                backFace.style.backgroundPosition = "center center"
                backFace.style.backgroundRepeat = "no-repeat"
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
                >
                    <div className="card-wrapper" title="Déplace moi ou découvre moi!" onClick={addActive}>
                        <div className="card">
                            <div className="card-front"></div>
                            <div className="card-back"></div>

                        </div>
                    </div>

                </div>
            )}
        </Draggable>
    )
}

export default Card