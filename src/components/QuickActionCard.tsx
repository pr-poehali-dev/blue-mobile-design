import Icon from "@/components/ui/icon";

interface QuickActionCardProps {
  icon: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const QuickActionCard = ({
  icon,
  title,
  description,
  onClick,
}: QuickActionCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex items-center space-x-3">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon name={icon as any} size={24} className="text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActionCard;
