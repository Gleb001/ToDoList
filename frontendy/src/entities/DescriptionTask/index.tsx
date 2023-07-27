import React from 'react';
import DescriptionTaskType from "./types";
import "./ui/index.css";
import { TextArea } from '@shared/components/textarea';

export const DescriptionTask: DescriptionTaskType = ({
    value, change
}) => {

    function handleBlur(event: React.FocusEvent<HTMLTextAreaElement>) {
        let new_value = event.target.value;
        if (value !== new_value) change(new_value);
    }

    return (
        <>
            <span className="description_title">Описание:</span>
            <TextArea
                className="description_task"
                onBlur={handleBlur}
                initialValue={value}
                max_rows={6}
                placeholder='Описание задачи'
            />
        </>
    );

};
