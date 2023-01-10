import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header";
import ImageTool from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import LinkTool from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Table from "@editorjs/table";
import { Button } from "antd";
import YoutubeEmbed from "editorjs-youtube-embed";
import React from "react";
import { createReactEditorJS } from "react-editor-js";
import EditorJS from "@editorjs/editorjs";
const Editer = ({ handleSaveData }) => {
  React.useEffect(() => {
    const editor = new EditorJS({
      holder: "editer",
      tools: {
        embed: Embed,
        table: Table,
        marker: Marker,
        list: List,
        linkTool: LinkTool,
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: "https://intuza.karsoft.uz/api/v1/upload", // Your backend file uploader endpoint
              byUrl: "https://intuza.karsoft.uz/api/v1/images", // Your endpoint that provides uploading by Url
            },
          },
        },

        header: Header,
        quote: Quote,
        checklist: CheckList,
        delimiter: Delimiter,
        inlineCode: InlineCode,
        simpleImage: SimpleImage,
        youtubeEmbed: YoutubeEmbed,
      },
      async onChange() {
        const { blocks } = await editor.save();
        handleSaveData(blocks);
      },
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error("ERROR editor cleanup", e));
    };
  }, []);

  //   const handleInitialize = React.useCallback((instance) => {
  //     editorCore.current = instance;
  //   }, []);

  //   const handleSave = React.useCallback(async () => {
  //     const savedData = await editorRef.current.dangerouslyLowLevelInstance?.save();
  //   }, []);
//    const handleClear = React.useCallback(async () => {
//       const savedData = await editorRef.current.dangerouslyLowLevelInstance?.clear();
//     }, []);

  return (
    <div className="editer">
      <Button style={{ marginTop: "10px" }} >
        Clear
      </Button>
      <div id="editer"></div>
      {/*       <ReactEditorJS
        onChange={handleSave}
        onInitialize={handleInitialize}
        tools={{
          embed: Embed,
          table: Table,
          marker: Marker,
          list: List,

          linkTool: LinkTool,
          image: {
            class: ImageTool,
            config: {
              endpoints: {
                byFile: "https://intuza.karsoft.uz/api/v1/upload", // Your backend file uploader endpoint
                byUrl: "https://intuza.karsoft.uz/api/v1/images", // Your endpoint that provides uploading by Url
              },
            },
          },

          header: Header,
          quote: Quote,
          checklist: CheckList,
          delimiter: Delimiter,
          inlineCode: InlineCode,
          simpleImage: SimpleImage,
          youtubeEmbed: YoutubeEmbed,
        }}
      /> */}
    </div>
  );
};

export default Editer;
