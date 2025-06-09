import MobileLayout from "@/components/MobileLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Анна Иванова",
      role: "Руководитель проекта",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332c58c?w=100&h=100&fit=crop&crop=face",
      status: "online",
      tasks: 8,
    },
    {
      name: "Дмитрий Петров",
      role: "Разработчик",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      status: "busy",
      tasks: 12,
    },
    {
      name: "София Козлова",
      role: "Дизайнер",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      status: "away",
      tasks: 6,
    },
    {
      name: "Александр Сидоров",
      role: "Аналитик",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      status: "online",
      tasks: 4,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "busy":
        return "bg-red-500";
      case "away":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "В сети";
      case "busy":
        return "Занят";
      case "away":
        return "Отошел";
      default:
        return "Офлайн";
    }
  };

  return (
    <MobileLayout>
      <div className="pt-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Моя команда</h1>
          <p className="text-muted-foreground">4 участника</p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardContent className="p-3 text-center">
              <Icon
                name="Users"
                size={20}
                className="text-primary mx-auto mb-1"
              />
              <p className="text-lg font-bold">4</p>
              <p className="text-xs text-muted-foreground">Участники</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <Icon
                name="CheckCircle"
                size={20}
                className="text-green-600 mx-auto mb-1"
              />
              <p className="text-lg font-bold">24</p>
              <p className="text-xs text-muted-foreground">Задачи</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3 text-center">
              <Icon
                name="Calendar"
                size={20}
                className="text-orange-600 mx-auto mb-1"
              />
              <p className="text-lg font-bold">6</p>
              <p className="text-xs text-muted-foreground">Проекты</p>
            </CardContent>
          </Card>
        </div>

        {/* Team Members */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Участники команды</h2>
          <div className="space-y-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(member.status)}`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-sm">{member.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {member.tasks} задач
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                      <p className="text-xs text-primary">
                        {getStatusText(member.status)}
                      </p>
                    </div>
                    <button className="p-2 hover:bg-muted rounded-lg">
                      <Icon
                        name="MessageCircle"
                        size={18}
                        className="text-muted-foreground"
                      />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Последняя активность</h2>
          <Card>
            <CardContent className="p-4 space-y-3">
              {[
                {
                  user: "Анна",
                  action: "создала новую задачу",
                  time: "2 мин назад",
                },
                {
                  user: "Дмитрий",
                  action: "завершил разработку",
                  time: "1 час назад",
                },
                {
                  user: "София",
                  action: "загрузила макеты",
                  time: "3 часа назад",
                },
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon name="Activity" size={14} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
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

export default TeamPage;
