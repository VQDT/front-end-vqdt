import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ButtonEditorTipTap from "./ButtonEditorTipTap/index";
import Dropcursor from "@tiptap/extension-dropcursor";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import React, { useCallback } from "react";
import {
  Title,
  FormatQuote,
  FormatListBulleted,
  FormatListNumbered,
  FormatBold,
  FormatItalic,
  FormatStrikethrough,
  FormatUnderlined,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  InsertPhoto,
} from "@mui/icons-material";

const extensions = [
  StarterKit,
  Underline,
  Image.configure({
    inline: true,
  }),
  Dropcursor,
  TextAlign.configure({
    types: ["heading", "paragraph"],
    alignments: ["left", "center", "right"],
  }),
];

const content = "<p>Hello World!</p>";

interface Props {
  setContent: React.Dispatch<React.SetStateAction<JSONContent>>;
}

export default function Tiptap(props: Props) {
  const editor = useEditor({
    extensions,
    content,
    editorProps: {
      attributes: {
        class:
          "w-full min-h-48 p-3 border border-zinc-300 focus:border-zinc-700 focus:ring-2 focus:ring-zinc-700 focus:ring-opacity-50 rounded-md prose prose-sm sm:prose-base",
      },
    },
    onUpdate: ({ editor }) => {
      const json = editor.getJSON();
      props.setContent(json);
      // send the content to an API here
    },
  });

  const addImage = useCallback(() => {
  
    const handleFile = (file: File) => {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        const fileURL = event.target?.result as string;
        
        // Insere a imagem no editor Tiptap
        editor?.commands.setImage({ src: fileURL });
      };
      reader.readAsDataURL(file);
    };
  
    const fileInput = document.createElement("input") as HTMLInputElement;
    fileInput.type = "file";
    fileInput.accept = "image/*"; // Aceita apenas imagens
    fileInput.style.display = "none"; // Oculta o input
  
    // Adiciona um listener para lidar com o arquivo selecionado
    fileInput.addEventListener("change", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const files = target.files;
      if (files && files.length > 0) {
        const file = files[0];
        // Manipular o arquivo como necessário
        handleFile(file);
      }
    });
  
    document.body.appendChild(fileInput);
  
    fileInput.click();
  
    // Remove o input do DOM após o uso
    document.body.removeChild(fileInput);
  
  }, [editor?.commands]);

  if (!editor) return null;

  return (
    <>
      <div className="p-3 mt-2 bg-white border border-zinc-300 rounded-xl shadow-lg w-full">
        <div className="pb-2 mb-3 border-b border-zinc-300 flex gap-1">
          <ButtonEditorTipTap
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 2 }).run()
            }
            active={editor?.isActive("heading", { level: 2 })}
          >
            <Title fontSize="large" />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 3 }).run()
            }
            active={editor?.isActive("heading", { level: 3 })}
          >
            <Title fontSize="small" />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor?.chain().focus().toggleBlockquote().run()}
            active={editor?.isActive("blockquote")}
          >
            <FormatQuote />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            active={editor?.isActive("bulletList")}
          >
            <FormatListBulleted />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            active={editor?.isActive("orderedList")}
          >
            <FormatListNumbered />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor?.chain().focus().toggleBold().run()}
            active={editor?.isActive("bold")}
          >
            <FormatBold />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            active={editor?.isActive("italic")}
          >
            <FormatItalic />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            active={editor?.isActive("strike")}
          >
            <FormatStrikethrough />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor?.chain().focus().toggleUnderline().run()}
            active={editor?.isActive("underline")}
          >
            <FormatUnderlined/>
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            active={editor?.isActive({ textAlign: "left" })}
          >
            <FormatAlignLeft />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            active={editor?.isActive({ textAlign: "center" })}
          >
            <FormatAlignCenter />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            active={editor?.isActive({ textAlign: "right" })}
          >
            <FormatAlignRight />
          </ButtonEditorTipTap>

          <ButtonEditorTipTap
            onClick={addImage}
            active={editor?.isActive("image")}
          >
            <InsertPhoto/>
          </ButtonEditorTipTap>
        </div>

        <div>
          <EditorContent
            className="prose prose-lg sm:prose-base"
            style={{ minHeight: "200px" }}
            editor={editor}
          />
        </div>
      </div>
    </>
  );
}