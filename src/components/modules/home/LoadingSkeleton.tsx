import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton: React.FC = () => (
  <div className="flex flex-col items-center space-y-4 mt-20">
    <Skeleton className="w-64 h-8" />
    <Skeleton className="w-80 h-6" />
    <Skeleton className="w-72 h-6" />
    <Skeleton className="w-52 h-6" />
  </div>
);

export default LoadingSkeleton;
