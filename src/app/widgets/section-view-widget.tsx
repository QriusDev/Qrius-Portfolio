export default function SectionViewWidget({children, reactOnHover, noTopPadding, extraStyle}: {children: React.ReactNode, reactOnHover?: boolean, noTopPadding?: boolean, extraStyle?: string}) {
    let className = "flex flex-col pb-2 items-center w-full px-50 text-white transform transition-transform"
    if (reactOnHover) {
        className += " hover:scale-105"
    }

    if (noTopPadding) {
        className += " pt-0"
    }
    else {
        className += " pt-20 pb-20"
    }

    if (extraStyle) {
        className += ` ${extraStyle}`;
    }

    return (
    <div className={className}>
        {children}
    </div>
  );
}