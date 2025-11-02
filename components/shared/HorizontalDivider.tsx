interface HorizontalDividerProps {
  children?: React.ReactNode;
}

export default function HorizontalDivider({ children }: HorizontalDividerProps) {
  return (
    <div style={{ borderTop: "2px solid #808080", marginLeft: 20, marginRight: 20 }}>
      <br />
      {children && (
        <>
            {children}
            <br />
      
        </>)}
    </div>
  );
}