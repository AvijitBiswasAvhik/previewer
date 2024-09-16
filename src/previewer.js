import React, { useState, useEffect } from "react";
import { marked } from "marked";
export default function Previewer({ data }) {
  let [markdown, setMarkdown] = useState();

  function previewFullArea(e) {
    e.stopPropagation();
    let txtArea = document.getElementById('editor');
    let preview = document.getElementById('preview');
    if (preview.classList.contains('editor')) {
      txtArea.classList.remove('off');
      preview.classList.remove('editor');
    }else if(!preview.classList.contains('editor')){
      txtArea.classList.add('off');
      preview.classList.add('editor')
    }
  }

  useEffect(() => {
    setMarkdown(data);
  }, [data]);
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown || '');
    return { __html: rawMarkup };
  };
  return (
    <div className="previewer mt-3 rounded overflow-hidden" id="preview">
      <div className="text-editor-header d-flex align-item-center border border-black rounded-top justify-content-between">
        <i className="fa-brands fa-free-code-camp"> Previewer</i>
        <i className="fa fa-arrows-alt" onClick={(e)=>{previewFullArea(e)}}></i>
      </div>
      <div className="show-box p-2" dangerouslySetInnerHTML={getMarkdownText()}>
        
      </div>
    </div>
  );
}
