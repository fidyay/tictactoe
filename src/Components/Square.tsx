import { createElement, Component } from "dcbl";

export type SquareValue = "X" | "O" | null;

interface SquareProps {
  value: SquareValue;
  onclick: (e: Event) => void;
}

class Square extends Component<SquareProps> {
  constructor(props: SquareProps) {
    super(props);
  }
  render() {
    return (
      <button className="square" onclick={this.props.onclick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
