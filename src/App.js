import React,{useState} from 'react';
import './App.css';
import { defaultMarkdown } from './DefaultMarkdown';
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

// ReactMarkdown.setOptions({
//   breaks: true
// });


function App (){
  
  const[text,setText] = useState(defaultMarkdown)
  
    function onChange (e) {
      setText(e.target.value)
  };

  return(
   <div className="App">
        <h1 id="title">React Markdown Previewer</h1>
        <textarea 
          id="editor" 
          value={text} 
          onChange={onChange} 
          placeholder="Enter Markdown..." />
        <div id="preview">
            <ReactMarkdown remarkPlugins={[gfm]} children={text} />
        </div> 
      </div>
  )
}


export default App;
