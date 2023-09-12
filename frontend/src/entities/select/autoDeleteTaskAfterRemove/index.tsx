// import =================================================== //
// react ---------------------------------------------------- //
import type { ChangeEvent } from "react";
import type { FC } from "react";
// redux ---------------------------------------------------- //
import { useAppDispatch } from '@shared/hooks/useAppDispatch';
import { patchUser } from '@app/redux/reducer/user/actionCreators';
import { userIsAutoDeleteAfterCompleteSelector } from '@app/redux/reducer/user/selectors';
// components ----------------------------------------------- //
import { Select } from '@shared/components/select';
// internal ------------------------------------------------- //
import { OPTIONS_DATA } from './constants/optionsData';
import { useAppSelector } from '@shared/hooks/useAppSelector';

// main ===================================================== //
export const SelectAutoDeleteTaskAfterComplete: FC = () => {

    const dispatch = useAppDispatch();
    const isAutoDelete = useAppSelector(userIsAutoDeleteAfterCompleteSelector);

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
        dispatch(
            patchUser({
                isAutoDeleteAfterComplete: Boolean(
                    Number(event.target.value)
                )
            })
        );
    }

    return (
        <Select
            onChange={handleChange}
            data={OPTIONS_DATA}
            defaultValue={String(Number(isAutoDelete)!)}
        />
    );

}