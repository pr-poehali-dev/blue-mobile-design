import MobileLayout from "@/components/MobileLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const BalancePage = () => {
  return (
    <MobileLayout>
      <div className="pt-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Баланс</h1>
          <p className="text-muted-foreground">Управление финансами</p>
        </div>

        {/* Main Balance */}
        <Card className="bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground">
          <CardContent className="p-6 text-center">
            <p className="text-sm opacity-90 mb-2">Доступно</p>
            <p className="text-4xl font-bold mb-4">125 890 ₽</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">
                Пополнить
              </button>
              <button className="bg-white/20 px-4 py-2 rounded-lg text-sm font-medium">
                Перевести
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Cards */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Мои карты</h2>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon
                      name="CreditCard"
                      size={20}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="font-medium">•••• 4532</p>
                    <p className="text-sm text-muted-foreground">
                      Основная карта
                    </p>
                  </div>
                </div>
                <p className="font-bold">98 450 ₽</p>
              </div>
              <Progress value={75} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Лимит: 130 000 ₽
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Статистика</h2>
          <div className="grid grid-cols-2 gap-3">
            <Card>
              <CardContent className="p-4 text-center">
                <Icon
                  name="TrendingUp"
                  size={24}
                  className="text-green-600 mx-auto mb-2"
                />
                <p className="text-sm text-muted-foreground">Доходы</p>
                <p className="text-xl font-bold text-green-600">+89 200 ₽</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Icon
                  name="TrendingDown"
                  size={24}
                  className="text-red-600 mx-auto mb-2"
                />
                <p className="text-sm text-muted-foreground">Расходы</p>
                <p className="text-xl font-bold text-red-600">-34 650 ₽</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Категории расходов</h2>
          <Card>
            <CardContent className="p-4 space-y-4">
              {[
                {
                  name: "Продукты",
                  amount: "12 450 ₽",
                  percent: 65,
                  color: "bg-blue-500",
                },
                {
                  name: "Транспорт",
                  amount: "8 200 ₽",
                  percent: 45,
                  color: "bg-green-500",
                },
                {
                  name: "Развлечения",
                  amount: "5 600 ₽",
                  percent: 30,
                  color: "bg-orange-500",
                },
              ].map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {category.amount}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`${category.color} h-2 rounded-full`}
                      style={{ width: `${category.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
};

export default BalancePage;
