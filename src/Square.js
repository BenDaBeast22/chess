import './Square.css';
import React from 'react';
// Chess piece images: https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces

class Square extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.props.isCheckmate || this.props.draw) {
      return;
    }
    this.props.selectPiece();
  }
  render(){
    const classes = "square" + (this.props.isDark ? " dark" : " light") + (this.props.isSelected ? " selected": "" + (this.props.inCheck ? " inCheck": "") + (this.props.draw ? " draw" : ""));
    const {piece, isLegal} = this.props;
    return (
      <td onClick={this.handleClick} className={classes}>
        {
          piece !== '-'? 
            <img className="piece" src={`./images/${piece.imgName}.png`}/>
          : 
            <i className={`${isLegal? 'fa-solid fa-circle legal': ''}`}/>
        }
      </td>
    );
  }
}

export default Square;