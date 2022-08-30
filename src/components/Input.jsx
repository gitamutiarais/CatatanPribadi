import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxChar: 50,
    };

    this.onTitle = this.onTitle.bind(this);
    this.onBody = this.onBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitle(e) {
    this.setState(() => {
      return {
        title: e.target.value.slice(0, this.state.maxChar),
      };
    });
  }

  onBody(e) {
    this.setState(() => {
      return {
        body: e.target.value,
      };
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="item_input">
        <h2>Buat Catatan Baru Disini</h2>
        <form onSubmit={this.onSubmit}>
          <p className="item_input_title_limit">
            Sisa Karakter :&nbsp;
            <span id="limit">{this.state.maxChar - this.state.title.length}</span>
          </p>
          <input type="text" placeholder="Judul catatanmu..." value={this.state.title} onChange={this.onTitle} onKeyUp={this.onMaxChar} id="title" required />
          <textarea className="item_input_body" placeholder="Tuliskan catatanmu disini..." value={this.state.body} onChange={this.onBody} id="body" required />
          <button onClick={this.test}>Input</button>
        </form>
      </div>
    );
  }
}

export default Input;
