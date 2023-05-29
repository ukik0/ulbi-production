import {
    ChangeEvent, memo, useEffect, useRef, useState,
} from 'react';

import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import { Typography } from '@/shared/ui/Typography';

import cl from './Input.module.scss';

type HTMLInput = Omit<ReactTagProps<'input'>, 'value' | 'onChange'>

interface InputProps extends HTMLInput {
    className?: string
    value?: string
    onChange?: (value: string) => void
    placeholder?: string
    autoFocus?: boolean
}

export const Input = memo(({
    className, value, onChange, placeholder, autoFocus, type = 'text', ...rest
}: InputProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [position, setPosition] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }

        setPosition(e.target.value.length);
    };

    const onBlur = () => {
        setIsFocus(false);
    };

    const onfocus = () => {
        setIsFocus(true);
    };

    const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
        setPosition(e.target.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            setIsFocus(true);
            inputRef.current.focus();
        }
    }, [autoFocus]);

    return (
        <div className={clsx({ cls: cl.InputWrapper, additional: [className] })}>
            {placeholder && (
                <Typography variant="text" className={cl.placeholder}>
                    {`${placeholder} >`}
                </Typography>
            )}
            <div className={cl.carriageWrapper}>
                <input
                    ref={inputRef}
                    onFocus={onfocus}
                    onBlur={onBlur}
                    value={value}
                    type={type}
                    onChange={changeHandler}
                    onSelect={onSelect}
                    className={cl.input}
                    {...rest}
                />
                {isFocus && <span className={cl.carriage} style={{ left: `${position * 9}px` }} />}
            </div>
        </div>
    );
});
