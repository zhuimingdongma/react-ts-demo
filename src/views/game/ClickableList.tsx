import React from 'react'
// export type ClickableListProps<T> = {
//   items: T[]
//   onSelect: (item: T) => void
// }

// const ClickableList = <T,>(props: ClickableListProps<T>) => {
//   return (
//     <ul>
//       {props.items.map(item => {
//         return (
//           <li>
//             <button onClick={() => props.onSelect(item)}>choose</button>
//             {item}
//           </li>
//         )
//       })}
//     </ul>
//   )
// }

// const items = [1, 2, 3, 4];

// <ClickableList items={items} onSelect={(item) => console.log(item)}></ClickableList>
// Redecalare forwardRef
declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}

// Just write your components like you're used to!

type ClickableListProps<T> = {
  items: T[]
  onSelect: (item: T) => void
}
function ClickableListInner<T>(props: ClickableListProps<T>, ref: React.ForwardedRef<HTMLUListElement>) {
  return (
    <ul ref={ref}>
      {props.items.map((item, i) => (
        <li key={i}>
          <button onClick={el => props.onSelect(item)}>Select</button>
        </li>
      ))}
    </ul>
  )
}

export const ClickableList = React.forwardRef(ClickableListInner)
