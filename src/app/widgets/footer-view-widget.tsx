export default function FooterViewWidget() {
  return (
    <footer className="row-start-3 sm:col-span-1 w-full flex justify-center items-center sm:px-20 py-4 bg-black">
        <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Qrius LLC
        </p>
    </footer>
  );
}