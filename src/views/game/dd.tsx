import React from 'react'

declare module "react" {
    function forwardRef<T, P = {}>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}

  type ClickableListProps<T> = {
    items: T[];
    onSelect: (item: T) => void;
  };
function ClickableList<T> (props: ClickableListProps<T>, ref: React.ForwardedRef<HTMLUListElement>) {
    return (
        <ul ref={ref}>
            {props.items.map((item, i) => (
                <li key={i}>
                    <button onClick={(el) => props.onSelect(item)}>Select</button>
                </li>
            )
            )}
        </ul>
    )
}

export const ClickAble = React.forwardRef(ClickableList)