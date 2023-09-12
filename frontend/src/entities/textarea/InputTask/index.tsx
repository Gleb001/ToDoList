// import =================================================== //
// react ---------------------------------------------------- //
import { useContext } from "react";
import type { FC } from "react";
// component ------------------------------------------------ //
import { TextArea } from "@shared/components/textarea";
import { ActiveTaskInEditorContext } from "@widgets/task/Editor/context/ActiveTaskInEditorContext";
// redux --------------------------------------------------- //
import { useAppDispatch } from "@shared/hooks/useAppDispatch";
import { patchActiveTask } from "@app/redux/reducer/task";
// internal ------------------------------------------------- //
import "./ui/index.css";

// main ===================================================== //
export const TitleTask: FC = () => {

  const dispatch = useAppDispatch();
  const { id, title, isComplete } = useContext(ActiveTaskInEditorContext);

  function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
    let TextAreaRef = event.target;
    // PS: remove extra spaces in the string
    let new_title = TextAreaRef.value.replace(/ +/g, " ");
    dispatch(
      patchActiveTask({
        id: id,
        title: new_title
      })
    );
  }

  return (
    <TextArea
      className='task-title'
      placeholder='Наименование задачи'

      disabled={isComplete}
      initialValue={title}
      onBlur={handleBlur}
    />
  );

};