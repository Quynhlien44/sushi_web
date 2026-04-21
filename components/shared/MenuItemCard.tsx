import CTAButton from './CTAButton';

type MenuItem = {
  id: string | number;
  name: string;
  description?: string;
  price?: string | number;
  tags?: string[];
  imageUrl?: string;
};

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <article className="group surface-card overflow-hidden">
      {item.imageUrl && (
        <div className="aspect-[4/3] overflow-hidden bg-[color:var(--color-surface-2)]">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow mb-2">{item.tags?.[0] ?? 'signature'}</p>
            <h3 className="text-xl font-medium tracking-tight text-[color:var(--foreground)]">
              {item.name}
            </h3>
          </div>

          {item.price !== undefined && (
            <p className="text-sm text-[#5f5a54] whitespace-nowrap">
              {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
            </p>
          )}
        </div>

        {item.description && (
          <p className="text-sm leading-6 text-[#5f5a54]">
            {item.description}
          </p>
        )}

        {item.tags && item.tags.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tags.slice(1).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[#6b665f]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6">
          <CTAButton variant="secondary" size="sm" className="w-full">
            Add to order
          </CTAButton>
        </div>
      </div>
    </article>
  );
}