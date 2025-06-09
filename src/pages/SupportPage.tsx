import MobileLayout from "@/components/MobileLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const SupportPage = () => {
  const faqItems = [
    {
      question: "Как пополнить баланс?",
      answer:
        'Вы можете пополнить баланс через банковскую карту, электронные кошельки или банковский перевод. Перейдите в раздел "Баланс" и выберите удобный способ пополнения.',
    },
    {
      question: "Как изменить пароль?",
      answer:
        'Для изменения пароля перейдите в "Профиль" → "Безопасность" → "Изменить пароль". Введите текущий пароль и новый пароль дважды.',
    },
    {
      question: "Что делать при блокировке карты?",
      answer:
        "При блокировке карты немедленно свяжитесь с технической поддержкой через чат или по телефону. Мы поможем разблокировать карту или выпустить новую.",
    },
    {
      question: "Как добавить участника в команду?",
      answer:
        'В разделе "Моя команда" нажмите кнопку "Пригласить" и отправьте приглашение по email или создайте ссылку-приглашение.',
    },
  ];

  const contactMethods = [
    {
      icon: "MessageCircle",
      title: "Онлайн чат",
      description: "Быстрый ответ в течение 5 минут",
      action: "Начать чат",
      color: "text-green-600",
    },
    {
      icon: "Phone",
      title: "Телефон",
      description: "8 800 555-0123",
      action: "Позвонить",
      color: "text-blue-600",
    },
    {
      icon: "Mail",
      title: "Email",
      description: "support@example.com",
      action: "Написать",
      color: "text-orange-600",
    },
  ];

  return (
    <MobileLayout>
      <div className="pt-6 space-y-6 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">
            Техническая поддержка
          </h1>
          <p className="text-muted-foreground">Мы готовы помочь 24/7</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-3">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-muted p-3 rounded-lg">
                    <Icon
                      name={method.icon as any}
                      size={24}
                      className={method.color}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    {method.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Status */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Icon name="CheckCircle" size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-medium text-green-800">
                  Все системы работают нормально
                </p>
                <p className="text-sm text-green-600">
                  Последнее обновление: только что
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Частые вопросы</h2>
          <Card>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="px-4"
                  >
                    <AccordionTrigger className="text-sm font-medium text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Help Resources */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Полезные ресурсы</h2>
          <div className="space-y-2">
            {[
              {
                icon: "Book",
                title: "База знаний",
                description: "Подробные инструкции",
              },
              {
                icon: "Video",
                title: "Видео-уроки",
                description: "Обучающие материалы",
              },
              {
                icon: "Users",
                title: "Сообщество",
                description: "Форум пользователей",
              },
            ].map((resource, index) => (
              <Card
                key={index}
                className="hover:shadow-sm transition-shadow cursor-pointer"
              >
                <CardContent className="p-3">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name={resource.icon as any}
                      size={20}
                      className="text-primary"
                    />
                    <div>
                      <p className="font-medium text-sm">{resource.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default SupportPage;
