import { useState, useEffect ,useRef } from "react";
import Editor from "@monaco-editor/react";
import { Play, Send, RotateCcw, ChevronDown } from "lucide-react";

import { LANGUAGE_CONFIG } from "../data/problems.js";


export default function CodeEditor({
  problem,
  language,
  setLanguage,
  code,
  setCode,
  onRun,
  socket,
  roomId
}) {


  
const isUpdate = useRef(false);
const editorRef = useRef(null);
const decor = useRef([]);
const handleLanguageChange = (lang) => {
  setLanguage(lang);
  setCode(problem.starterCode[lang]);

  socket?.emit("language-change", {
    roomId,
    language: lang,
  });
};
  useEffect(() => {
  if (!socket) return;

  const handleLanguage = ({ language }) => {
    setLanguage(language);
    setCode(problem.starterCode[language]);
  };

  socket.on("receive-language", handleLanguage);

  return () => {
    socket.off("receive-language", handleLanguage);
  };
}, [socket, problem]);


useEffect(() => {
    if (!socket) return;

    const handleCursor = ({ position }) => {
    };

    socket.on("receive-cursor", handleCursor);

    return () => {
        socket.off("receive-cursor", handleCursor);
    };
}, [socket]);



  useEffect(()=>{
    if(!socket){
      return
    }
    const receiveCode = ({newCode})=>{
      isUpdate.current=true;
      setCode(newCode);
    }

    socket.on("new-code",receiveCode);
      return () => {
        socket.off("new-code",receiveCode);
    };
  },[setCode,socket])

  return (
<div className="flex flex-col h-full min-h-0 bg-base-100">
      {/* Header */}

      <div className="h-16 px-6 border-b border-base-300 flex items-center justify-between">

        <div className="dropdown">

          <label tabIndex={0} className="btn btn-outline gap-2">

            <img
              src={LANGUAGE_CONFIG[language].icon}
              alt={language}
              className="w-5 h-5"
            />

            {LANGUAGE_CONFIG[language].name}

            <ChevronDown size={18} />

          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border border-base-300"
          >

            {Object.entries(LANGUAGE_CONFIG).map(
              ([key, value]) => (

                <li key={key}>
                  <button
                    onClick={() =>
                      handleLanguageChange(key)
                    }
                    className="flex items-center gap-2"
                  >

                    <img
                      src={value.icon}
                      alt={value.name}
                      className="w-5 h-5"
                    />

                    {value.name}

                  </button>
                </li>

              )
            )}

          </ul>

        </div>

        <div className="flex gap-3">

          <button
            className="btn btn-outline"
            onClick={() =>
              setCode(problem.starterCode[language])
            }
          >
            <RotateCcw size={18} />

            Reset
          </button>

          <button className="btn btn-primary" onClick={onRun}>

            <Play size={18} />

            Run

          </button>

          <button className="btn btn-success">

            <Send size={18} />

            Submit

          </button>

        </div>

      </div>

      {/* Monaco */}

      <div className="flex-1 min-h-0 bg-[#e7f0fc]">

        <Editor
  height="100%"
  language={LANGUAGE_CONFIG[language].monacoLang}
  value={code}
  onChange={(value="") => {
    if(isUpdate.current){
      isUpdate.current=false;
      return
    }
    setCode(value);
    socket?.emit("code-change",{
      roomId : roomId,
      code : value
    });
    
  }}
  theme="vs-dark"
  options={{
    minimap: {
      enabled: true,
    },
    fontSize: 15,
    fontLigatures: true,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    padding: {
      top: 20,
    },

  }}
  onMount={(editor)=>{
    editorRef.current=editor;
    editor.onDidChangeCursorPosition((event)=>{
    socket?.emit("onCode-change",{
      roomId,
      position : event.position
    })
 
    })
  }}
/>
      </div>

    </div>
  );
}