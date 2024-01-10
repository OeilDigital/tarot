import React from 'react'
import Card from './Card'
import { Droppable } from '@hello-pangea/dnd'


function Column({ column, cards }) {
    const columns = document.querySelectorAll(".cards_column");
    for (let i = 1; i < columns.length; i++) {
        let cardList = columns[i].childNodes[1];
        if (cardList.children.length > 0) {
            const logoOn = document.querySelector("#logo-on");
            const titleOn = document.querySelector("#title-on");
            logoOn.style.display = 'none';
            titleOn.style.display = 'none';
            const arcanes = document.querySelectorAll(".deck:first-child div[data-rfd-droppable-id='initialDeck']>div");
            arcanes.forEach(element => {
                if (element.style.top === 0) {
                    element.style.animationPlayState = 'paused';
                } else {
                    element.style.top = 0;
                }
            });
        }
    }

    return (
        <div className="cards_column">

            <h2> {column.title} </h2>
            <Droppable droppableId={column.id}>
                {provided => (
                    <div {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="cards_list">
                        {provided.placeholder}

                        {cards.map((card, index) => (
                            <Card key={card.id} card={card} index={index} />
                        ))}
                    </div>

                )}
            </Droppable>
        </div>
    )
}

export default Column