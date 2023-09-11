// import =================================================== //
// react ---------------------------------------------------- //
import type { FC, HTMLAttributes } from 'react';
import type { Option } from '@shared/types/option';

// main ===================================================== //
type Select = FC<
    HTMLAttributes<HTMLSelectElement> &
    {
        disabled?: boolean,
        data: Option[]
    }
>

// export =================================================== //
export type { Select };