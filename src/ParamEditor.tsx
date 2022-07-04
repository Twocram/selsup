import React from "react";
import "./App.css";

interface Param {
  id: number;
  name: string;
  type?: `string` | `number`;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  value: string;
}

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  public getModel(): Model {
    return this.props.model;
  }

  render() {
    return (
      <>
        <div className={"container"}>
          <div>
            {this.props.params.map((p) => (
              <div key={p.id}>{p.name}</div>
            ))}
          </div>
          <div className={"editor-list__items"}>
            {this.getModel().paramValues.map((v) => (
              <div key={v.paramId}>
                <input
                  type={"text"}
                  defaultValue={v.value}
                  onChange={(e) => {
                    v.value = e.target.value;
                    // Output of model with new value
                    console.log(this.getModel());
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ParamEditor;
