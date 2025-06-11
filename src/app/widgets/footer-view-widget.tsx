export default function FooterViewWidget() {
  return (
    <footer className="row-start-3 w-full flex justify-center items-center px-8 sm:px-20 py-4 bg-[#383846] shadow-md rounded-lg">
        <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} Qrius Alex. All rights reserved.
        </p>&nbsp;
        <p
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
        Created by Daquaris Chadwick
        </p>
    </footer>
  );
}