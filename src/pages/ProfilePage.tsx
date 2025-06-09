import MobileLayout from "@/components/MobileLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";

const ProfilePage = () => {
  const menuItems = [
    {
      icon: "User",
      title: "Личные данные",
      description: "Имя, email, телефон",
      hasArrow: true,
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Пароль, двухфакторная аутентификация",
      hasArrow: true,
    },
    {
      icon: "CreditCard",
      title: "Способы оплаты",
      description: "Карты и счета",
      hasArrow: true,
    },
    {
      icon: "Bell",
      title: "Уведомления",
      description: "Push, email, SMS",
      hasArrow: true,
      hasSwitch: true,
      switchValue: true,
    },
    {
      icon: "Globe",
      title: "Язык",
      description: "Русский",
      hasArrow: true,
    },
    {
      icon: "Moon",
      title: "Темная тема",
      description: "Переключить внешний вид",
      hasSwitch: true,
      switchValue: false,
    },
  ];

  return (
    <MobileLayout>
      <div className="pt-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Профиль</h1>
        </div>

        {/* User Info */}
        <Card>
          <CardContent className="p-6 text-center">
            <Avatar className="w-20 h-20 mx-auto mb-4">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" />
              <AvatarFallback>АП</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-bold mb-1">Алексей Петров</h2>
            <p className="text-muted-foreground mb-4">
              alex.petrov@example.com
            </p>
            <Button variant="outline" size="sm">
              <Icon name="Edit" size={16} className="mr-2" />
              Редактировать
            </Button>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-4 text-center">
              <Icon
                name="Calendar"
                size={24}
                className="text-primary mx-auto mb-2"
              />
              <p className="text-lg font-bold">2 года</p>
              <p className="text-sm text-muted-foreground">С нами</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Icon
                name="Star"
                size={24}
                className="text-yellow-500 mx-auto mb-2"
              />
              <p className="text-lg font-bold">Premium</p>
              <p className="text-sm text-muted-foreground">Статус</p>
            </CardContent>
          </Card>
        </div>

        {/* Settings Menu */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Настройки</h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 flex items-center space-x-4 hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="bg-muted p-2 rounded-lg">
                      <Icon
                        name={item.icon as any}
                        size={18}
                        className="text-muted-foreground"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    {item.hasSwitch && (
                      <Switch defaultChecked={item.switchValue} />
                    )}
                    {item.hasArrow && !item.hasSwitch && (
                      <Icon
                        name="ChevronRight"
                        size={16}
                        className="text-muted-foreground"
                      />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <Icon name="HelpCircle" size={18} className="mr-3" />
            Помощь и поддержка
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Icon name="FileText" size={18} className="mr-3" />
            Условия использования
          </Button>
          <Button variant="destructive" className="w-full justify-start">
            <Icon name="LogOut" size={18} className="mr-3" />
            Выйти из аккаунта
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ProfilePage;
