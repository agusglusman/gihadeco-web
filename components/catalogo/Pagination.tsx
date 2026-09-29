import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function Pagination() {
  return (
    <nav className="flex items-center justify-center gap-6 py-14">
      <button className="transition-opacity hover:opacity-50">
        <FaChevronLeft />
      </button>

      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`h-9 w-9 font-body text-sm ${
            page === 1
              ? "bg-[#EEE7DF] text-foreground"
              : "text-muted"
          }`}
        >
          {page}
        </button>
      ))}

      <span>...</span>

      <button className="font-body text-sm text-muted">
        8
      </button>

      <button className="transition-opacity hover:opacity-50">
        <FaChevronRight />
      </button>
    </nav>
  );
}