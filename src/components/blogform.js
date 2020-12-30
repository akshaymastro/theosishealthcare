import React from "react";
import Admin from "./Admin";
import { Button, Form } from "react-bootstrap";
import Select from "react-select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { colourOptions } from "./data";
const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];
export default () => {
  return (
    <Admin>
      <div className="blog-div">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>New Blog</Form.Label>
            <Form.Control type="" placeholder="" />
          </Form.Group>

          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
          <h5 className="mt-3">Keyword</h5>
          <Select
            defaultValue={[colourOptions[2], colourOptions[3]]}
            isMulti
            name="colors"
            options={colourOptions}
            className="basic-multi-select mt-0"
            classNamePrefix="select"
          />
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="mt-3">Meta Description</Form.Label>
            <Form.Control type="" placeholder="" />
          </Form.Group>
        </Form>
      </div>
    </Admin>
  );
};
