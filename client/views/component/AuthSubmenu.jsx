import React from "react";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

export const authorityList = ["보호자", "보호사", "병원", "지자체", "관리자"];

class Auth {
  checked = false;
  list = new Set();

  constructor() {
    makeAutoObservable(this);
  }

  add(value) {
    this.list.add(value);
  }

  delete(value) {
    this.list.delete(value);
  }

  setChecked(checked) {
    this.checked = checked;
  }
}

const AuthComponent = observer(({ auth, label }) => (
  <>
    <td>
      <div className="flex-center">
        <input
          type="checkbox"
          id={label}
          className="flex10"
          name="chk_smallemenu" //for 과 id 를 맞춰주어야 라벨을 눌렀을 때 체크박스 활성화
          onChange={(e) => auth.setChecked(e.target.checked)}
        />
        <label htmlFor={label} className="flex60">
          {label}
        </label>
      </div>
    </td>
    <td>
      {authorityList
        .filter((item) => auth.list.has(item))
        .map((item, managerIdx) => (
          <button
            class={"xbutton"}
            key={managerIdx}
            id={item}
            onClick={() => auth.delete(item)}
          >
            {item}
          </button>
        ))}
    </td>
  </>
));

export class AuthSubmenu extends React.Component {
  auth = new Auth();

  render() {
    this.props.authRef(this.auth);
    return <AuthComponent auth={this.auth} label={this.props.label} />;
  }
}

export default AuthSubmenu;
