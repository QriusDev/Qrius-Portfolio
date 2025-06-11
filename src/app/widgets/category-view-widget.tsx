export default function CategoryViewWidget({
  children,
  isClosing, 
  handleClose, 
  title
}: {
  children: React.ReactNode,
  isClosing: boolean, 
  handleClose: () => void, 
  title: string
}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            className={`bg-white rounded-lg p-8 w-[85%] max-h-[85%] overflow-y-auto transform transition-transform duration-300 ${
              isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold" style={{ color:"black" }}>{title}</h2>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>
            {children ? (
              <div className="mb-4">{children}</div>
            ) : (
              <p className="text-lg mb-4" style={{ color:"black" }}>
                Woops! I haven&apos;t added functionality for the {title} category yet. Come back later!
              </p>
            )}
          </div>
        </div>
    );
}