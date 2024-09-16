import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Previewer from "./previewer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  let [data, setData] = useState();
  function edtorFullArea(e) {
    e.stopPropagation();
    let txtArea = document.getElementById('editor');
    let preview = document.getElementById('preview');
    if (txtArea.classList.contains('editor')) {
      txtArea.classList.remove('editor');
      preview.classList.remove('off')
    }else if(!txtArea.classList.contains('editor')){
      txtArea.classList.add('editor');
      preview.classList.add('off')
    }
  }
  return (
    <div className="App ">
      <div className="text-editor-box shadow rounded overflow-hidden mt-2" id="editor">
        <div className="text-editor-header d-flex align-item-center justify-content-between border-0 ">
          <i className="fa-brands fa-free-code-camp"> Editor</i>
          <i className="fa fa-arrows-alt" onClick={(e)=>edtorFullArea(e)}></i>
        </div>
        <textarea
          className=" bg-info-subtle"
          onChange={(e)=>{
            e.stopPropagation();
            setData(e.target.value)
          }}
        ></textarea>
      </div>
      <Previewer data={data} />
    </div>
  );
}

export default App;
