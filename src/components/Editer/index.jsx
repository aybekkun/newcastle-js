import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import Raw from "@editorjs/raw";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Warning from "@editorjs/warning";
import { Button } from "antd";
import YoutubeEmbed from "editorjs-youtube-embed";
import React from "react";
import { createReactEditorJS } from "react-editor-js";
import { useDispatch } from "react-redux";
const Editer = () => {
  const dispatch = useDispatch();
  const editorCore = React.useRef(null);
  const ReactEditorJS = createReactEditorJS();

  const handleInitialize = React.useCallback((instance) => {
    editorCore.current = instance;
  }, []);

  const handleSave = React.useCallback(async () => {
    const savedData = await editorCore.current.dangerouslyLowLevelInstance?.save();

    console.log(savedData);
  }, []);

  return (
    <div className="editer">
      <Button onClick={handleSave}>Add</Button>
      <ReactEditorJS
        onInitialize={handleInitialize}
        tools={{
          embed: Embed,
          table: Table,
          marker: Marker,
          list: List,
          warning: Warning,
          code: Code,
          linkTool: LinkTool,
          image: Image,
          raw: Raw,
          header: Header,
          quote: Quote,
          checklist: CheckList,
          delimiter: Delimiter,
          inlineCode: InlineCode,
          simpleImage: SimpleImage,
          youtubeEmbed: YoutubeEmbed,
        }}
      />
    </div>
  );
};

export default Editer;
