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
import { useDispatch } from "react-redux";

const Editer = ({onSendData, handleSaveData}) => {

    const editorCore = React.useRef(null);
    const ReactEditorJS = createReactEditorJS();

    const handleInitialize = React.useCallback((instance) => {
        editorCore.current = instance;
    }, []);

    const handleSave = React.useCallback(async () => {
        const savedData = await editorCore.current.dangerouslyLowLevelInstance?.save();
        await handleSaveData(savedData);

    }, []);
    const handleClear = React.useCallback(async () => {
        const savedData = await editorCore.current.dangerouslyLowLevelInstance?.clear();
        await handleSaveData(savedData);

    }, []);

    return (
        <div className="editer">
            <Button style={{marginTop: "10px"}} onClick={handleClear}>Clear</Button>
            <ReactEditorJS
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
                                byFile: "http://Yusupog4.beget.tech/api/v1/upload", // Your backend file uploader endpoint
                                byUrl: "http://yusupog4.beget.tech/public/images", // Your endpoint that provides uploading by Url
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
            />
        </div>
    );
};

export default Editer;
