/* eslint-disable */
import React, { useEffect, useState } from "react"; //리액트에서 useEffect와 useState 불러오기
import Board from "../../Components/Board/Board";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { ICard, IBoard } from "../../Interfaces/Kanban"; //Kanban 인터페이스에서 ICard랑 IBoard만 불러오기
import {
  fetchBoardList,
  updateLocalStorageBoards,
} from "../../Helper/APILayers";
import Layout from "../../Components/Layout";

function Procedures() {
  const [boards, setBoards] = useState<IBoard[]>([]);

  useEffect(() => {
    fetchData();
  }, []); //초기 데이터 세팅

  async function fetchData() {
    const boards: IBoard[] = await fetchBoardList();
    setBoards(boards);
  } //비동기적으로 fetchBoardList를 받아서 boards 변수에 넣고 useState에 세팅

  const [targetCard, setTargetCard] = useState({
    boardId: 0,
    cardId: 0,
  }); //Drag 이벤트를 위한 목표 Card의 boardId와 cardId 초기화

  const addboardHandler = (name: string) => {
    const tempBoardsList = [...boards];
    tempBoardsList.push({
      id: Date.now() + Math.random() * 2,
      title: name,
      cards: [],
    });
    setBoards(tempBoardsList);
  }; //board 추가 함수

  const removeBoard = (boardId: number) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    tempBoardsList.splice(boardIndex, 1); //검색된 Index의 board를 삭제
    setBoards(tempBoardsList);
  };

  const addCardHandler = (boardId: number, title: string) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;
    //card를 추가할 board가 있는지 검색
    //없으면 return
    const tempBoardsList = [...boards];
    tempBoardsList[boardIndex]!.cards.push({
      id: Date.now() + Math.random() * 2,
      title,
      labels: [],
      date: "",
      tasks: [],
      desc: "",
    });
    setBoards(tempBoardsList);
  };
  //Card 추가 함수

  const removeCard = (boardId: number, cardId: number) => {
    const boardIndex = boards.findIndex((item: IBoard) => item.id === boardId);
    if (boardIndex < 0) return;

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex]!.cards;

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;

    cards.splice(cardIndex, 1);
    setBoards(tempBoardsList);
  };

  const updateCard = (boardId: number, cardId: number, card: ICard) => {
    const boardIndex = boards.findIndex((item) => item.id === boardId);
    if (boardIndex < 0) return;
    //board있는지 찾고

    const tempBoardsList = [...boards];
    const cards = tempBoardsList[boardIndex]!.cards;
    //tempBoardsList에서 카드 정보 찾고

    const cardIndex = cards.findIndex((item) => item.id === cardId);
    if (cardIndex < 0) return;
    //card있는지 찾고

    tempBoardsList[boardIndex]!.cards[cardIndex] = card;

    setBoards(tempBoardsList);
  };

  const onDragEnd = (boardId: number, cardId: number) => {
    const sourceBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === boardId
    );
    if (sourceBoardIndex < 0) return;

    const sourceCardIndex = boards[sourceBoardIndex]?.cards?.findIndex(
      (item) => item.id === cardId
    );
    if (sourceCardIndex! < 0) return;

    const targetBoardIndex = boards.findIndex(
      (item: IBoard) => item.id === targetCard.boardId
    );
    if (targetBoardIndex < 0) return;

    const targetCardIndex = boards[targetBoardIndex]?.cards?.findIndex(
      (item) => item.id === targetCard.cardId
    );
    if (targetCardIndex! < 0) return;

    const tempBoardsList = [...boards];
    const sourceCard =
      tempBoardsList[sourceBoardIndex]!.cards[sourceCardIndex!];
    tempBoardsList[sourceBoardIndex]!.cards.splice(sourceCardIndex!, 1);
    tempBoardsList[targetBoardIndex]!.cards.splice(
      targetCardIndex!,
      0,
      sourceCard!
    );
    setBoards(tempBoardsList);

    setTargetCard({
      boardId: 0,
      cardId: 0,
    });
  };

  const onDragEnter = (boardId: number, cardId: number) => {
    if (targetCard.cardId === cardId) return;
    setTargetCard({
      boardId: boardId,
      cardId: cardId,
    });
  };

  useEffect(() => {
    updateLocalStorageBoards(boards);
  }, [boards]);
  //LocalStorage에 저장

  return (
    <Layout>
      <div className="app">
        <div className="app-nav">
          <h1>Procedure Library</h1>
        </div>
        <div className="app-boards-container">
          <div className="app-boards">
            {boards.map((item) => (
              <Board
                key={item.id}
                board={item}
                addCard={addCardHandler}
                removeBoard={() => removeBoard(item.id)}
                removeCard={removeCard}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                updateCard={updateCard}
              />
            ))}
            <div className="app-boards-last">
              <CustomInput
                displayClass="app-boards-add-board"
                editClass="app-boards-add-board-edit"
                placeholder="Enter Board Name"
                text="Add Board"
                buttonText="Add Board"
                onSubmit={addboardHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Procedures;
