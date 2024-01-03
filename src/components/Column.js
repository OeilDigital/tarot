import React from 'react'
import Card from './Card'
import { Droppable } from '@hello-pangea/dnd'


function Column({ column, cards }) {

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