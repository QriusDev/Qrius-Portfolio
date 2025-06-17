export default function SectionViewWidget({children, reactOnHover, noTopPadding, extraStyle}: {children: React.ReactNode, reactOnHover?: boolean, noTopPadding?: boolean, extraStyle?: string}) {
    let className = "flex flex-col sm:col-span-1 w-full items-center px-10 sm:px-5 text-white"
    if (reactOnHover) {
        className += "transform transition-transform hover:scale-105"
    }

    if (noTopPadding) {
        className += " pt-0 pb-20"
    }
    else {
        className += " pt-20 pb-20"
    }

    if (extraStyle) {
        className += ` ${extraStyle}`;
    }

    return (
    <section className={className}>
        {children}
    </section>
  );
}