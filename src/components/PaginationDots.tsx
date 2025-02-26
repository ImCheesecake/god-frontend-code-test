import { useSnapIndicators } from "@volvo-cars/react-headless";
import type { RefObject } from "react";

interface PaginationDotsProps {
  containerRef: RefObject<HTMLDivElement>;
  count: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({
  containerRef,
  count,
}) => {
  const { indicators } = useSnapIndicators({ ref: containerRef });

  return (
    <ul className="pagination-dots md:hidden" role="tablist">
      {[...Array(count)].map((_, index) => {
        const indicator = indicators[index];
        return (
          <li key={index} role="presentation">
            <button
              {...indicator}
              className="w-8 h-8 rounded-full bg-gray-light aria-selected:bg-accent-blue"
            >
              <span className="sr-only">Go to car {index + 1}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default PaginationDots;
