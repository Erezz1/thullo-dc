import { FC, useId, useState } from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';
import { DragDropContext, Droppable, Draggable, OnDragEndResponder } from 'react-beautiful-dnd';

import { Card, List } from '../interfaces';
import { BoardMainContainer, CardCover } from './styled-components';
import { useNavigate } from 'react-router-dom';

const BoardMainComponent = () => {

  const [lists, setLists] = useState<List[]>([
    {
      id: useId(),
      title: 'Blocklog 🧐 ',
      cards: [
        {
          id: useId(),
          title: 'First task',
          description: 'This is the first task',
          cover: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
          index: 0
        },
      ]
    },
    {
      id: useId(),
      title: 'In progress 📑',
      cards: [
        {
          id: useId(),
          title: 'Fourth task',
          description: '',
          cover: '',
          index: 0
        },
      ]
    },
    {
      id: useId(),
      title: 'In Review 🙅‍♀️',
      cards: []
    },
  ]);

  const handleDragEnd: OnDragEndResponder = ({ source, destination }) => {
    // Validar si se ha hecho cambio entre las listas
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index))
      return;

    // Validar si se mueve una tarjeta de una lista a otra
    if (source.droppableId !== destination.droppableId) {
      // Listas involucradas
      const sourceCards = lists.find(list => list.id === source.droppableId)?.cards || [];
      const destinationCards = lists.find(list => list.id === destination.droppableId)?.cards || [];

      const removed = sourceCards.splice(source.index, 1);
      destinationCards.splice(destination.index, 0, removed[0]);

      const listsModified: List[] = lists.map(list =>
        list.id === destination.droppableId ? ({ ...list, cards: destinationCards }) : list
      );
      setLists(listsModified);
    } else {
      const cards = lists.find(list => list.id === destination.droppableId)?.cards || [];

      const removed = cards.splice(source.index, 1);
      cards.splice(destination.index, 0, removed[0]);

      const listsModified: List[] = lists.map(list =>
        list.id === destination.droppableId ? ({ ...list, cards: cards }) : list
      );
      setLists(listsModified);
    }
  };

  return (
    <BoardMainContainer>
      <DragDropContext onDragEnd={handleDragEnd}>
        {lists.map(list => (
          <ListItem list={list} key={list.id} />
        ))}
      </DragDropContext>
    </BoardMainContainer>
  )
}

interface ListItemProps {
  list: List;
}
const ListItem: FC<ListItemProps> = ({ list }) => {

  return (
    <Box width="xs" minWidth="2xs">
      <Text marginBottom="1rem" fontSize="lg">{list.title}</Text>

      <Droppable droppableId={list.id} key={list.id}>
        {provided => (
          <Box
            minHeight="95%"
            paddingBottom="1rem"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {list.cards.map((card, index) => (
              <CardItem
                key={card.id}
                card={card}
                index={index}
                list={list}
              />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  )
}

interface CardItemProps {
  card: Card;
  index: number;
  list: List;
}
const CardItem: FC<CardItemProps> = ({ card, index, list }) => {
  const navigate = useNavigate();
  const handleClickCard = () => navigate(`?cardId=${card.id}`);

  return (
    <Draggable key={card.id} draggableId={card.id} index={index} >
      {(provided, snapshot) => (
        <Grid
          padding="1rem"
          marginBottom="1rem"
          backgroundColor={snapshot.isDragging ? "#E2E8F6" : "#FFFFFF"}
          rounded="md"
          shadow="md"
          onClick={handleClickCard}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {card.cover && <CardCover src={card.cover} />}
          <Text>{card.title}</Text>
        </Grid>
      )}
    </Draggable>
  )
}

export default BoardMainComponent;
