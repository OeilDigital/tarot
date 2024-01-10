import React, { useState, useEffect } from 'react'
import Column from './Column'
import { DragDropContext } from '@hello-pangea/dnd'

function Deck({ data, updateMean }) {

    const inheritedData = data
    const [datas, setDatas] = useState(inheritedData)
    const [fullDraw, setFullDraw] = useState(false)

    function handleClick() {
        window.location.reload();
    }

    useEffect(() => {
        function control(obj) {
            let full = []
            for (const el in obj.columns) {
                full = [...full, Array.from(obj.columns[el].taskIds)]
            }
            let fullcontrol = full.filter(i => i.length > 0)
            return fullcontrol
        }
        control(datas)
        if (control(datas).length === 5) {
            setFullDraw(true)
        }
    }, [datas])


    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return
        }

        const start = datas.columns[source.droppableId]
        const finish = datas.columns[destination.droppableId]

        if (start === finish) {
            const column = datas.columns[source.droppableId]
            const newCardIds = Array.from(column.taskIds)

            newCardIds.splice(source.index, 1)
            newCardIds.splice(destination.index, 0, draggableId)


            //on crée une copie de la colonne de cartes modifiées
            const newColumn = {
                ...column,
                taskIds: newCardIds
            }

            //on met à jour le state
            const newState = {
                ...datas,
                columns: {
                    ...datas.columns,
                    [newColumn.id]: newColumn,
                }
            }
            setDatas(newState)
            return
        } else {
            const startCardIds = Array.from(start.taskIds)
            startCardIds.splice(source.index, 1)
            const newStart = {
                ...start,
                taskIds: startCardIds
            }

            const finishCardIds = Array.from(finish.taskIds)
            finishCardIds.splice(destination.index, 0, draggableId)
            const newFinish = {
                ...finish,
                taskIds: finishCardIds
            }

            const newState = {
                ...datas,
                columns: {
                    ...datas.columns,
                    [newStart.id]: newStart,
                    [newFinish.id]: newFinish,
                }
            }


            if (newFinish.taskIds.length > 1) {
                return;
            } else {
                // setFullDraw(...fullDraw,)
                setDatas(newState)
            }
        }

    }

    return (
        <div className="deck">
            <DragDropContext onDragEnd={onDragEnd}>
                {datas.columnOrder.map(columnId => {
                    const column = datas.columns[columnId]
                    const cards = column.taskIds.map(taskId => datas.cards[taskId])
                    return <Column key={column.id} column={column} cards={cards} />
                })}
            </DragDropContext>

            <div className="divMean">
                {fullDraw ?
                    (<button className="btnMean" onClick={updateMean}><strong>Interprétation</strong></button>) :
                    (<button className="btnMeanFalse" disabled ><strong>Interprétation</strong></button>)
                }

                <div className="intro">
                    <p className="textintro">
                        Choisissez 4 cartes parmis les Arcanes et placez les dans chacune des sections ci-dessous
                    </p>
                </div>

                <button className="btnReboot" onClick={handleClick}><strong>Nouveau Tirage</strong></button>
            </div>
        </div>
    )
}

export default Deck