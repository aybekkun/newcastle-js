import React from "react";

import { HeaderOutput, ParagraphOutput } from "editorjs-react-renderer";

const ShowEditer = ({ blocks }) => {
  if (blocks) {
    return blocks.map((output) => <Output key={output.id} block={output} />);
  }
  return <h2>Нет данных</h2>;
};

const Output = ({ block }) => {
  switch (block.type) {
    case "header":
      return <HeaderOutput data={block.data} />;

    case "youtubeEmbed":
      return (
        <div className="wrapper__video-box">
          <iframe
            width="100%"
            height="100%"
            src={block.data.url.replace("watch?v=", "embed/")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );

    case "paragraph":
      return <ParagraphOutput data={block.data} />;

    case "delimiter":
      return <hr />;

    case "image":
      return <img src={`${block.data.file.url}`} alt=""/>;

    case "list":
      return (
        <ul>
          {block.data.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    case "checklist":
      return (
        <div className="test">
          {block.data.items.map((item, i) => (
            <label key={i}>
              <input type="radio" name={block.id} />
              <span className="checkmark"></span>
              <span className="checkmark__text">{item.text}</span>
            </label>
          ))}
        </div>
      );
    case "table":
      return (
        <table border={1}>
          {block.data.content.map((tr, i) => (
            <tr key={i}>
              {tr.map((td, i) => (
                <td style={{ minWidth: "100px", padding: "8px 15px", borderRadius: "2px", textAlign: "left" }} key={i}>
                  {td}
                </td>
              ))}
            </tr>
          ))}
        </table>
      );

    default:
      console.log("Unknown block type", block.type);
      break;
  }
};

export default ShowEditer;
