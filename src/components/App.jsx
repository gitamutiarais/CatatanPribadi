import React from "react";
import Header from "./Header";
import Body from "./Body";
import { getInitialData } from "../utils/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const notes = this.state.notes;
    const arsip = notes.findIndex((note) => note.id === id);
    notes[arsip].arsipkan = true;
    this.setState({ notes });
  }

  onUnarchiveHandler(id) {
    const notes = this.state.notes;
    const arsip = notes.findIndex((note) => note.id === id);
    notes[arsip].arsipkan = false;
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            arsipkan: false,
            created: +new Date(),
          },
        ],
      };
    });
  }

  onSearchHandler(e) {
    this.setState((prevState) => {
      return {
        ...prevState,
        search: e.target.value,
      };
    });
  }

  render() {
    return (
      <>
        <Header keyword={this.state.search} cari={this.onSearchHandler} />
        <Body hapus={this.onDeleteHandler} unArsip={this.onUnarchiveHandler} arsip={this.onArchiveHandler} addNote={this.onAddNoteHandler} notes={this.state.notes} keyword={this.state.search} />
      </>
    );
  }
}

export default App;
