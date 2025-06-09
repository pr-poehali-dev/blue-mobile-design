import MobileLayout from "@/components/MobileLayout";
import QuickActionCard from "@/components/QuickActionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HomePage = () => {
  return (
    <MobileLayout>
      <div className="pt-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            Добро пожаловать!
          </h1>
          <p className="text-muted-foreground">
            Управляйте своими финансами легко
          </p>
        </div>

        {/* Balance Overview */}
        <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Общий баланс</p>
                <p className="text-3xl font-bold">125 890 ₽</p>
              </div>
              <Icon name="TrendingUp" size={32} className="opacity-80" />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            Быстрые действия
          </h2>
          <div className="space-y-3">
            <QuickActionCard
              icon="ArrowUpRight"
              title="Перевод"
              description="Отправить деньги"
            />
            <QuickActionCard
              icon="ArrowDownLeft"
              title="Пополнение"
              description="Добавить средства"
            />
            <QuickActionCard
              icon="CreditCard"
              title="Карты"
              description="Управление картами"
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            Последние операции
          </h2>
          <Card>
            <CardContent className="p-4 space-y-3">
              {[
                { name: "Кофе", amount: "-150 ₽", time: "10:30" },
                { name: "Зарплата", amount: "+85 000 ₽", time: "Вчера" },
                { name: "Такси", amount: "-320 ₽", time: "Вчера" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-muted p-2 rounded-lg">
                      <Icon name="Receipt" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{transaction.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {transaction.time}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`font-medium ${
                      transaction.amount.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {transaction.amount}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </MobileLayout>
  );
};

export default HomePage;
