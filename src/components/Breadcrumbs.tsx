import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { BreadcrumbItem, getBreadcrumbSchema } from "@/lib/site";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const fullItems: BreadcrumbItem[] = [{ name: "Início", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema(fullItems)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" className="text-zinc-600">
                    /
                  </span>
                )}
                {isLast ? (
                  <span aria-current="page" className="text-gold-400 font-medium">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
