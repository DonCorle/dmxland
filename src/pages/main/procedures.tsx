import React from 'react';

import Layout from '../../Components/Layout';

function Procedures() {
  return (
    <Layout>
      <div className="app">
        <div className="app-nav">
          <h1>Procedure Library</h1>
        </div>
        <div className="app-boards-container">
          <div className="app-boards">
            {/* {boards.map((item) => (
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
          ))} */}
            <div className="app-boards-last">
              {/* <CustomInput
              displayClass="app-boards-add-board"
              editClass="app-boards-add-board-edit"
              placeholder="Enter Board Name"
              text="Add Board"
              buttonText="Add Board"
              onSubmit={addboardHandler}
            /> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Procedures;
