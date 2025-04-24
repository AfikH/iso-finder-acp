// Breadcrumbs.tsx
import { useMatches, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export type BreadcrumbHandle = {
  crumb?: string;
};

const isBreadcrumbHandle = (handle: unknown): handle is BreadcrumbHandle => {
  return typeof handle === "object" && handle !== null && "crumb" in handle;
};

const AppBreadcrumb = () => {
  const matches = useMatches();

  const crumbs = matches
    .map((match) => {
      if (isBreadcrumbHandle(match.handle)) {
        return {
          path: match.pathname,
          label: match.handle.crumb,
        };
      }
      return null;
    })
    .filter(Boolean) as { path: string; label: string }[];

  return (
    <Breadcrumb>
      {crumbs.map((crumb, index) => (
        <span key={crumb.path}>
          {index > 0 && <BreadcrumbSeparator />}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={crumb.path}>{crumb.label}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </span>
      ))}
    </Breadcrumb>
  );
};

export default AppBreadcrumb;
