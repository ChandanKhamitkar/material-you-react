import React, { useState } from "react";

type BottomAppBarProps = {
  backgroundColor?: string;
  items: string[];
  floatingActionButton?: React.ReactNode;
};

export default function BottomAppBar(props: BottomAppBarProps) {
<<<<<<< HEAD
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(true);
    const [isActive, setIsActive] = useState<boolean>(true);

    return (
        <div
=======
  return (
    <div
      style={{
        backgroundColor: `${
          props.backgroundColor ?? "rgb(var(--md-sys-color-surface-container))"
        }`,
        width: "100vw",
        height: "80px",
        padding: "12px 16px 12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        {props.items.map((element, index) => (
          <span
            key={index}
            className="material-symbols-rounded"
>>>>>>> 07ef7631be9803d6a5fac61a7afdabf63ba0afca
            style={{
              width: "24px",
              height: "24px",
              color: "rgb(var(--md-sys-color-on-secondary-container))",
            }}
          >
            {element || "add"}
          </span>
        ))}
      </div>

<<<<<<< HEAD

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '16px',
                }}
            >
                {
                    props.items.map((element, index) => <span
                        key={index}
                        className="material-symbols-outlined"
                        style={
                            {
                                width: '24px',
                                height: '24px',
                                color: 'rbg(var(--md-sys-color-on-secondary-container))'
                            }}>{element || 'add'}</span>)
                }
            </div>

            {
                props.floatingActionButton && (
                    <div
                        className="md-elevation-2"
                        style={{
                            backgroundColor: `${props.floatingActionButtonBackgroundColor ?? 'rbg(var(--md-sys-color-primary-container))'}`,
                            width: '56px',
                            height: '56px',
                            borderRadius: '16px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <span
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onMouseDown={() => setIsActive(true)}
                            onMouseUp={() => setIsActive(false)}
                            className="material-symbols-outlined"
                            style={{
                                width: '24px',
                                height: '24px',
                                color: 'rbg(var(--md-sys-color-on-primary-container))'
                            }}
                        >
                            {props.floatingActionButtonIcon || 'add'}
                        </span>
                    </div>
                )

            }
        </div>
    );
};
=======
      {props.floatingActionButton}
    </div>
  );
}
>>>>>>> 07ef7631be9803d6a5fac61a7afdabf63ba0afca
