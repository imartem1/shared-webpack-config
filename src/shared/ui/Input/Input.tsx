import classNames from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    autofocus?: boolean;

}

const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        type = 'text',
        autoFocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autoFocus) {
            inputRef.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={classNames(cls.placeholder)}>
                    {`${placeholder}`}
                </div>
            )}

            <input
                ref={inputRef}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={classNames(cls.Input)}
                // eslint-disable-next-line jsx-a11y/no-autofocus
            />

        </div>
    );
});

export default Input;
