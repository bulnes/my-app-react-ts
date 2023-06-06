import { TextArea } from "@dds/components";
import { useEffect } from "react";

export function MyTextArea() {
  useEffect(() => {
    const element = document.getElementById("my-text-area");
    new TextArea(element);
  }, []);

  return (
    <div>
      <div
        id="my-text-area"
        className="dds__text-area__container"
        data-dds="text-area"
      >
        <div className="dds__text-area__header">
          <label
            id="text-area-label-359524269"
            htmlFor="text-area-control-359524269"
          >
            Message
          </label>
        </div>
        <div className="dds__text-area__wrapper">
          <textarea
            className="dds__text-area"
            name="text-area-control-name-359524269"
            id="text-area-control-359524269"
            data-maxlength="10"
            aria-required="true"
            aria-labelledby="text-area-label-359524269 text-area-helper-359524269"
            required
          ></textarea>
          <small
            id="text-area-helper-359524269"
            className="dds__input-text__helper"
          >
            Helper Text
          </small>
          <small
            id="text-area-error-359524269"
            className="dds__invalid-feedback"
          >
            Error Message
          </small>
        </div>
      </div>
    </div>
  );
}
