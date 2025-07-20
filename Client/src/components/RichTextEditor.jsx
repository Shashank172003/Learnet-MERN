import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const RichTextEditor = ({ input, setInput }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: input.description || "<p>Write your course description here...</p>",
    onUpdate: ({ editor }) => {
      setInput((prev) => ({
        ...prev,
        description: editor.getHTML(),
      }));
    },
  });

  // To sync content if input.description changes externally
  useEffect(() => {
    if (editor && input.description !== editor.getHTML()) {
      editor.commands.setContent(input.description || "<p></p>");
    }
  }, [input.description, editor]);

  return (
    <div className="w-full rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm bg-white dark:bg-[#0a0a0a]">
      <div className="p-3 border-b border-gray-200 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300 font-semibold">
        Course Description
      </div>
      <div className="p-4 min-h-[300px] prose dark:prose-invert max-w-none">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default RichTextEditor;

