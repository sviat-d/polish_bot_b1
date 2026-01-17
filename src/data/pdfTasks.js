/**
 * Polish B1 Exam Prep — 20 High-Quality Tasks
 * All explanations in proper Russian (Cyrillic) and Polish
 */

module.exports = [
  // TASK 1
  {
    id: "pdf_B1_REKCJA_001",
    source: "pdf",
    question: "Moja decyzja _______ wyników egzaminu.",
    options: [
      { label: "A", text: "zależy na" },
      { label: "B", text: "zależy z" },
      { label: "C", text: "zależy od" }
    ],
    correctAnswer: "C",
    explanationRu: `Глагол zależeć (зависеть) всегда требует предлога od + родительный падеж (dopełniacz).

Это одна из самых важных рекций для экзамена B1!

🔑 Запомни формулу: zależeć od kogo? / od czego?

Примеры:
• To zależy od pogody. (Это зависит от погоды.)
• Sukces zależy od ciężkiej pracy. (Успех зависит от тяжёлой работы.)

❌ Почему не A:
• "zależy na" — не существует такой конструкции

❌ Почему не B:
• "zależy z" — тоже неправильно; предлог "z" не сочетается с этим глаголом

💡 Сравни с русским: "зависеть ОТ чего-то" — здесь логика похожа!`,
    explanationPl: `Czasownik zależeć łączy się z przyimkiem od i wymaga dopełniacza.

🔑 Konstrukcja: zależeć od kogo? / od czego?

Przykłady:
• To zależy od ciebie.
• Wynik zależy od przygotowania.

❌ Dlaczego nie A i B:
• "zależy na" i "zależy z" — błędne konstrukcje, nie istnieją

💡 Inne czasowniki z "od": zaczynać od, pochodzić od, uciekać od.`,
    topic: "Rekcja czasowników",
    difficulty: "medium"
  },

  // TASK 2
  {
    id: "pdf_B1_REKCJA_002",
    source: "pdf",
    question: "Mój brat bardzo _______ historią Polski.",
    options: [
      { label: "A", text: "interesuje o" },
      { label: "B", text: "interesuje się" },
      { label: "C", text: "interesuje" }
    ],
    correctAnswer: "B",
    explanationRu: `Глагол interesować się (интересоваться) — это возвратный глагол, который требует творительного падежа (narzędnik) БЕЗ предлога.

🔑 Формула: interesować się kim? / czym?

Примеры:
• Interesuję się muzyką. (Я интересуюсь музыкой.)
• Ona interesuje się sportem. (Она интересуется спортом.)

❌ Почему не A:
• "interesuje o" — грубая ошибка, предлог "o" здесь не используется.

❌ Почему не C:
• "interesuje" без "się" означает "интересует кого-то" (переходный глагол):
  "Ta książka interesuje mnie" = Эта книга интересует меня.

⚠️ Типичная ошибка русскоязычных: путать "interesować" и "interesować się"!`,
    explanationPl: `Czasownik zwrotny interesować się wymaga narzędnika (kim? czym?) bez przyimka.

🔑 Konstrukcja: interesować się + narzędnik

Przykłady:
• Interesuję się sztuką.
• Dzieci interesują się dinozaurami.

❌ Dlaczego nie A:
• Przyimek "o" nie łączy się z tym czasownikiem.

❌ Dlaczego nie C:
• "interesować" (bez "się") to czasownik przechodni: "Ta sprawa interesuje policję."

💡 Inne czasowniki z narzędnikiem: zajmować się, opiekować się, martwić się.`,
    topic: "Rekcja czasowników",
    difficulty: "medium-high"
  },

  // TASK 3
  {
    id: "pdf_B1_NEGACJA_001",
    source: "pdf",
    question: "Wczoraj kupiłem nowy telefon, ale dzisiaj nie mam już _______.",
    options: [
      { label: "A", text: "nowy telefon" },
      { label: "B", text: "nowego telefonu" },
      { label: "C", text: "nowym telefonem" }
    ],
    correctAnswer: "B",
    explanationRu: `При отрицании в польском языке винительный падеж (biernik) меняется на родительный (dopełniacz)!

🔑 Правило: NIE + глагол → dopełniacz вместо biernika

Сравни:
✅ Mam nowy telefon. (Biernik — без отрицания)
✅ Nie mam nowego telefonu. (Dopełniacz — с отрицанием)

❌ Почему не A:
• "nowy telefon" — это biernik, но после "nie mam" нужен dopełniacz.

❌ Почему не C:
• "nowym telefonem" — это narzędnik (творительный), здесь он неуместен.

⚠️ Это КЛАССИЧЕСКАЯ ловушка на экзамене B1! Русскоязычные часто забывают менять падеж при отрицании.

💡 Работает с глаголами: nie mam, nie widzę, nie znam, nie lubię, nie chcę...`,
    explanationPl: `W zdaniach przeczących biernik zmienia się na dopełniacz.

🔑 Reguła: NIE + czasownik → dopełniacz zamiast biernika

Porównaj:
✅ Widzę samochód. (biernik)
✅ Nie widzę samochodu. (dopełniacz)

❌ Dlaczego nie A:
• "nowy telefon" to biernik — po "nie mam" wymagany jest dopełniacz.

❌ Dlaczego nie C:
• "nowym telefonem" to narzędnik — zły przypadek.

💡 Ta reguła dotyczy czasowników: nie mieć, nie widzieć, nie znać, nie lubić, nie chcieć...`,
    topic: "Negacja + dopełniacz",
    difficulty: "medium"
  },

  // TASK 4
  {
    id: "pdf_B1_ZAIMKI_001",
    source: "pdf",
    question: "Widziałem Annę wczoraj. Dałem _______ książkę, którą chciała.",
    options: [
      { label: "A", text: "ją" },
      { label: "B", text: "ona" },
      { label: "C", text: "jej" }
    ],
    correctAnswer: "C",
    explanationRu: `Здесь нужен местоимение в дательном падеже (celownik), потому что глагол dać требует: dać KOMU? CO?

🔑 Формы местоимения "ona":
• Mianownik (кто?): ona
• Dopełniacz (кого?): jej / niej
• Celownik (кому?): jej / niej
• Biernik (кого?): ją / nią
• Narzędnik (с кем?): nią
• Miejscownik (о ком?): niej

❌ Почему не A:
• "ją" — это biernik (винительный): "Widzę ją" (Вижу её)
• Но "dać" требует celownik: "Daję JEJ" (Даю ЕЙ)

❌ Почему не B:
• "ona" — это именительный падеж, используется только как подлежащее.

⚠️ Ловушка: "jej" может быть и dopełniaczem, и celownikiem! Контекст решает.`,
    explanationPl: `Czasownik dać wymaga celownika (komu?) i biernika (co?): dać KOMU książkę.

🔑 Odmiana zaimka "ona":
• Mianownik: ona
• Dopełniacz: jej / niej
• Celownik: jej / niej
• Biernik: ją / nią

❌ Dlaczego nie A:
• "ją" to biernik — używamy go np. "Widzę ją", ale nie "Daję ją książkę".

❌ Dlaczego nie B:
• "ona" to mianownik — tylko dla podmiotu zdania.

💡 Pamiętaj: dać komu? — celownik!`,
    topic: "Zaimki osobowe",
    difficulty: "medium-high"
  },

  // TASK 5
  {
    id: "pdf_B1_ZEBY_001",
    source: "pdf",
    question: "Mama poprosiła mnie, _______ wcześniej wrócił do domu.",
    options: [
      { label: "A", text: "żeby" },
      { label: "B", text: "żebym" },
      { label: "C", text: "że" }
    ],
    correctAnswer: "B",
    explanationRu: `После глагола prosić (просить), когда субъект главного и придаточного предложения РАЗНЫЙ, используется конструкция żeby + личная форма глагола.

🔑 Правило:
• Один субъект → инфинитив: "Chcę wrócić" (Я хочу вернуться)
• Разные субъекты → żeby + личная форма: "Mama chce, żebym wrócił" (Мама хочет, чтобы Я вернулся)

Формы żeby по лицам:
• ja → żebym
• ty → żebyś
• on/ona → żeby
• my → żebyśmy
• wy → żebyście
• oni/one → żeby

❌ Почему не A:
• "żeby" без окончания используется для 3-го лица: "Mama chce, żeby ON wrócił"
• Но здесь "mnie" указывает на 1-е лицо → нужно "żebym"

❌ Почему не C:
• "że" — это союз "что", не "чтобы". Он вводит факт, а не просьбу/желание.`,
    explanationPl: `Po czasowniku prosić, gdy podmiot zdania głównego i podrzędnego jest różny, używamy konstrukcji żeby + forma osobowa.

🔑 Reguła:
• Ten sam podmiot → bezokolicznik: "Chcę wrócić"
• Różne podmioty → żeby + forma osobowa: "Mama chce, żebym wrócił"

Formy żeby:
• ja → żebym
• ty → żebyś
• on/ona → żeby
• my → żebyśmy
• wy → żebyście
• oni/one → żeby

❌ Dlaczego nie A:
• "żeby" bez końcówki to forma dla 3. osoby
• "mnie" wskazuje na 1. osobę → potrzebujemy "żebym"

❌ Dlaczego nie C:
• "że" wprowadza fakt, nie prośbę: "Wiem, że wrócił" vs "Proszę, żeby wrócił"`,
    topic: "Infinityw vs żeby",
    difficulty: "high"
  },

  // TASK 6
  {
    id: "pdf_B1_WARUNEK_001",
    source: "pdf",
    question: "_______ miał więcej czasu, pojechałbym na wakacje.",
    options: [
      { label: "A", text: "Jeśli" },
      { label: "B", text: "Kiedy" },
      { label: "C", text: "Gdybym" }
    ],
    correctAnswer: "C",
    explanationRu: `Здесь нужен союз для нереального условия (tryb warunkowy / условное наклонение).

🔑 Разница между союзами:

GDYBY — нереальное условие (сослагательное):
• Gdybym miał pieniądze, kupiłbym dom. (Если бы у меня были деньги...)
• Используется с формами на -bym, -byś, -by...

JEŚLI / JEŻELI — реальное условие (изъявительное):
• Jeśli będę miał czas, przyjdę. (Если у меня будет время...)
• Используется с обычными временами

KIEDY — временной союз (когда):
• Kiedy przyjdziesz, zadzwoń. (Когда придёшь, позвони.)

❌ Почему не A:
• "Jeśli" требует реального условия и изъявительного наклонения
• Но "pojechałbym" — это условное наклонение!

❌ Почему не B:
• "Kiedy" — это "когда", не "если бы"

⚠️ Обрати внимание: окончание -bym присоединяется к gdyby → gdybym!`,
    explanationPl: `Potrzebujemy spójnika dla warunku nierealnego (tryb warunkowy).

🔑 Różnica między spójnikami:

GDYBY — warunek nierealny:
• Gdybym wiedział, powiedziałbym ci.
• Łączy się z trybem warunkowym (-bym, -byś, -by...)

JEŚLI / JEŻELI — warunek realny:
• Jeśli będziesz chciał, pomogę ci.
• Łączy się z trybem oznajmującym

KIEDY — spójnik czasowy:
• Kiedy skończysz, zadzwoń.

❌ Dlaczego nie A:
• "Jeśli" wymaga trybu oznajmującego, a "pojechałbym" to tryb warunkowy.

💡 Końcówki osobowe łączą się z "gdyby": gdybym, gdybyś, gdyby, gdybyśmy, gdybyście, gdyby.`,
    topic: "Zdania warunkowe",
    difficulty: "medium-high"
  },

  // TASK 7
  {
    id: "pdf_B1_SZYK_001",
    source: "pdf",
    question: "Która forma jest poprawna?",
    options: [
      { label: "A", text: "Się bardzo cieszę, że przyjechałeś." },
      { label: "B", text: "Bardzo się cieszę, że przyjechałeś." },
      { label: "C", text: "Cieszę bardzo się, że przyjechałeś." }
    ],
    correctAnswer: "B",
    explanationRu: `Частица się в польском языке имеет строгие правила расположения!

🔑 Главное правило: się НИКОГДА не стоит в начале предложения!

Правильные позиции:
1. После первого ударного слова: "Bardzo się cieszę"
2. После глагола: "Cieszę się bardzo" (тоже верно)

❌ Почему не A:
• "Się" в начале предложения — грубая ошибка!
• Это НЕВОЗМОЖНО в польском языке.

❌ Почему не C:
• "Cieszę bardzo się" — неестественный порядок слов
• "się" не должно стоять в конце фразы после наречия

⚠️ Запомни: если предложение начинается с наречия или другого слова, "się" идёт сразу после него!`,
    explanationPl: `Partykuła się ma ścisłe reguły dotyczące miejsca w zdaniu.

🔑 Główna zasada: się NIGDY nie stoi na początku zdania!

Poprawne pozycje:
1. Po pierwszym wyrazie akcentowanym: "Bardzo się cieszę"
2. Po czasowniku: "Cieszę się bardzo"

❌ Dlaczego nie A:
• "Się" na początku zdania to błąd!

❌ Dlaczego nie C:
• "Cieszę bardzo się" — nienaturalny szyk

💡 Zasada: "się" zajmuje drugą pozycję w zdaniu (po pierwszym wyrazie akcentowanym).`,
    topic: "Szyk zdania",
    difficulty: "medium"
  },

  // TASK 8
  {
    id: "pdf_B1_BEZOSOBOWE_001",
    source: "pdf",
    question: "W tym muzeum _______ fotografować.",
    options: [
      { label: "A", text: "się nie wolno" },
      { label: "B", text: "nie można się" },
      { label: "C", text: "nie wolno" }
    ],
    correctAnswer: "C",
    explanationRu: `Безличные конструкции — важная тема B1!

🔑 Основные безличные выражения:
• wolno — можно, разрешено
• nie wolno — нельзя, запрещено
• można — можно (возможность)
• nie można — нельзя (невозможность)
• trzeba — нужно, надо
• warto — стоит

Структура: wolno/można/trzeba + bezokolicznik (инфинитив)

✅ "Nie wolno fotografować" = Фотографировать запрещено

❌ Почему не A:
• "się" не может стоять в начале предложения!
• И здесь "się" вообще не нужно

❌ Почему не B:
• "nie można się" — лишнее "się", потому что "fotografować" не возвратный глагол
• Было бы правильно: "Nie można się śmiać" (Нельзя смеяться) — но там глагол возвратный!

⚠️ Эти конструкции очень частые на экзамене и в повседневной речи!`,
    explanationPl: `Konstrukcje bezosobowe to ważny temat na poziomie B1.

🔑 Podstawowe wyrażenia bezosobowe:
• wolno — jest dozwolone
• nie wolno — jest zabronione
• można — jest możliwe
• trzeba — jest konieczne
• warto — jest wartościowe

Struktura: wolno/można/trzeba + bezokolicznik

✅ "Nie wolno fotografować" = Fotografowanie jest zabronione

❌ Dlaczego nie A:
• "się" nie może stać na początku zdania

❌ Dlaczego nie B:
• "się" jest zbędne — "fotografować" nie jest czasownikiem zwrotnym

💡 Te konstrukcje są bardzo częste w codziennym języku i na egzaminie!`,
    topic: "Formy bezosobowe",
    difficulty: "high"
  },

  // TASK 9
  {
    id: "pdf_B1_REKCJA_TEKST_001",
    source: "pdf",
    question: "Moja siostra od dziecka marzyła _______ zostaniu lekarką. Teraz studiuje medycynę i jest bardzo szczęśliwa.",
    options: [
      { label: "A", text: "o" },
      { label: "B", text: "na" },
      { label: "C", text: "z" }
    ],
    correctAnswer: "A",
    explanationRu: `Глагол marzyć (мечтать) требует предлога o + miejscownik (предложный падеж).

🔑 Формула: marzyć o kim? / o czym?

Примеры:
• Marzę o podróży dookoła świata. (Мечтаю о путешествии...)
• On marzy o nowym samochodzie. (Он мечтает о новой машине.)

Обрати внимание на форму: "o zostaniu" — это miejscownik от "zostanie" (существительное от глагола "zostać").

❌ Почему не B:
• "marzyć na" — не существует такой конструкции

❌ Почему не C:
• "marzyć z" — тоже неправильно

💡 Похожие глаголы с "o":
• myśleć o (думать о)
• pamiętać o (помнить о)
• zapomnieć o (забыть о)
• opowiadać o (рассказывать о)`,
    explanationPl: `Czasownik marzyć łączy się z przyimkiem o i wymaga miejscownika.

🔑 Konstrukcja: marzyć o kim? / o czym?

Przykłady:
• Marzę o wakacjach.
• Dzieci marzą o prezentach.

❌ Dlaczego nie B i C:
• "marzyć na" i "marzyć z" — błędne konstrukcje

💡 Inne czasowniki z "o + miejscownik":
• myśleć o, pamiętać o, zapomnieć o, rozmawiać o, opowiadać o`,
    topic: "Rekcja czasowników",
    difficulty: "medium-high"
  },

  // TASK 10
  {
    id: "pdf_B1_SPOJNIKI_001",
    source: "pdf",
    question: "_______ wyjdziesz z domu, sprawdź, czy zamknąłeś okna.",
    options: [
      { label: "A", text: "Chociaż" },
      { label: "B", text: "Dopóki" },
      { label: "C", text: "Zanim" }
    ],
    correctAnswer: "C",
    explanationRu: `Здесь нужен союз, который означает "прежде чем" / "до того как".

🔑 Разница между союзами:

ZANIM — прежде чем, до того как:
• Zanim zaśniesz, przeczytaj książkę. (Прежде чем заснёшь...)
• Действие в придаточном происходит РАНЬШЕ

DOPÓKI — пока (не):
• Dopóki nie skończysz, nie wyjdziesz. (Пока не закончишь...)
• Указывает на продолжительность

CHOCIAŻ — хотя (уступительный):
• Chociaż pada deszcz, pójdę na spacer. (Хотя идёт дождь...)

❌ Почему не A:
• "Chociaż" — это "хотя", не подходит по смыслу

❌ Почему не B:
• "Dopóki wyjdziesz" — не имеет смысла
• Dopóki требует продолжительного действия

💡 Запомни порядок: ZANIM + действие, которое должно произойти ПОСЛЕ главного!`,
    explanationPl: `Potrzebujemy spójnika oznaczającego "przed tym, jak".

🔑 Różnica między spójnikami:

ZANIM — przed tym, jak:
• Zanim wyjdziesz, zadzwoń do mamy.
• Czynność w zdaniu podrzędnym następuje PÓŹNIEJ

DOPÓKI — tak długo, jak:
• Dopóki żyję, będę walczyć.
• Wskazuje na trwanie

CHOCIAŻ — mimo że (przyzwolenie):
• Chociaż jestem zmęczony, pójdę na trening.

❌ Dlaczego nie A:
• "Chociaż" to spójnik przyzwolenia, nie czasowy

❌ Dlaczego nie B:
• "Dopóki" wymaga czynności trwającej

💡 Zapamiętaj: ZANIM + czynność, która nastąpi PO czynności głównej!`,
    topic: "Spójniki czasowe",
    difficulty: "medium"
  },

  // TASK 11
  {
    id: "pdf_B1_ASPEKT_001",
    source: "pdf",
    question: "Wczoraj cały wieczór _______ tę książkę, ale nie skończyłem.",
    options: [
      { label: "A", text: "przeczytałem" },
      { label: "B", text: "czytałem" },
      { label: "C", text: "przeczytam" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь нужен несовершенный вид (aspekt niedokonany), потому что:
1. Действие длилось какое-то время ("cały wieczór" — весь вечер)
2. Действие НЕ было завершено ("nie skończyłem" — не закончил)

🔑 Правило выбора аспекта:

NIEDOKONANY (несовершенный) — czytać, pisać, robić:
• Процесс, длительность: "Cały dzień czytałem"
• Повторяющееся действие: "Codziennie czytam gazetę"
• Незавершённое действие: "Czytałem, ale nie skończyłem"

DOKONANY (совершенный) — przeczytać, napisać, zrobić:
• Результат, завершённость: "Przeczytałem książkę" (= закончил читать)
• Однократное завершённое действие

❌ Почему не A:
• "przeczytałem" = я прочитал (до конца)
• Но в предложении сказано "nie skończyłem" — значит, НЕ дочитал!

❌ Почему не C:
• "przeczytam" — это будущее время, а здесь "wczoraj" (вчера)

⚠️ Ключевые маркеры для niedokonany: cały dzień/wieczór, długo, zawsze, często, jeszcze nie...`,
    explanationPl: `Potrzebujemy aspektu niedokonanego, ponieważ:
1. Czynność trwała przez jakiś czas ("cały wieczór")
2. Czynność NIE została zakończona ("nie skończyłem")

🔑 Zasada wyboru aspektu:

NIEDOKONANY — czytać, pisać, robić:
• Proces, trwanie: "Cały dzień czytałem"
• Czynność powtarzająca się: "Codziennie czytam"
• Czynność niezakończona

DOKONANY — przeczytać, napisać, zrobić:
• Rezultat, zakończenie: "Przeczytałem książkę"
• Czynność jednorazowa, zakończona

❌ Dlaczego nie A:
• "przeczytałem" = skończyłem czytać
• Ale "nie skończyłem" oznacza, że czynność nie została zakończona!

💡 Markery dla niedokonanego: cały dzień, długo, zawsze, często, jeszcze nie...`,
    topic: "Aspekt czasownika",
    difficulty: "medium"
  },

  // TASK 12
  {
    id: "pdf_B1_ASPEKT_002",
    source: "pdf",
    question: "Nareszcie _______ ten trudny egzamin! Jestem bardzo szczęśliwy.",
    options: [
      { label: "A", text: "zdawałem" },
      { label: "B", text: "zdaję" },
      { label: "C", text: "zdałem" }
    ],
    correctAnswer: "C",
    explanationRu: `Здесь нужен совершенный вид (aspekt dokonany), потому что:
1. Слово "nareszcie" (наконец-то) указывает на достижение результата
2. "Jestem szczęśliwy" — результат уже есть, экзамен сдан!

🔑 Пара: zdawać (niedok.) vs zdać (dok.)

zdawać — сдавать (процесс, попытка):
• "Jutro zdaję egzamin" — Завтра сдаю экзамен (буду пытаться)
• "Wczoraj zdawałem egzamin" — Вчера сдавал (процесс, без указания результата)

zdać — сдать (успешный результат):
• "Zdałem egzamin!" — Я сдал экзамен! (успешно)
• Внимание: "nie zdałem" = не сдал (провалил)

❌ Почему не A:
• "zdawałem" — это процесс сдачи, без указания результата
• Но "nareszcie" и "jestem szczęśliwy" говорят о РЕЗУЛЬТАТЕ

❌ Почему не B:
• "zdaję" — настоящее время, но контекст указывает на прошлое

⚠️ Ловушка: "zdawać egzamin" ≠ "сдать экзамен"! Это только "пытаться сдать".`,
    explanationPl: `Potrzebujemy aspektu dokonanego, ponieważ:
1. "Nareszcie" wskazuje na osiągnięcie rezultatu
2. "Jestem szczęśliwy" — rezultat już jest, egzamin zdany!

🔑 Para: zdawać (niedok.) vs zdać (dok.)

zdawać — przystępować do egzaminu (proces):
• "Jutro zdaję egzamin" — będę próbował
• "Wczoraj zdawałem" — proces, bez informacji o wyniku

zdać — zaliczyć egzamin (sukces):
• "Zdałem egzamin!" — sukces!
• "Nie zdałem" — porażka

❌ Dlaczego nie A:
• "zdawałem" to proces, bez informacji o rezultacie
• Ale "nareszcie" i "jestem szczęśliwy" mówią o REZULTACIE

💡 Pułapka: "zdawać egzamin" ≠ zdać! To tylko "próbować zdać".`,
    topic: "Aspekt czasownika",
    difficulty: "medium-high"
  },

  // TASK 13
  {
    id: "pdf_B1_PRZYIMKI_001",
    source: "pdf",
    question: "W tym roku jedziemy _______ wakacje do Włoch.",
    options: [
      { label: "A", text: "na wakacjach" },
      { label: "B", text: "na wakacje" },
      { label: "C", text: "o wakacjach" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь нужен biernik (винительный падеж), потому что глагол "jechać" указывает на ДВИЖЕНИЕ, направление.

🔑 Главное правило: ДВИЖЕНИЕ vs МЕСТО

NA + BIERNIK — куда? (движение, направление):
• Jadę na wakacje. (Еду НА каникулы — куда?)
• Idę na pocztę. (Иду НА почту — куда?)

NA + MIEJSCOWNIK — где? (место, положение):
• Jestem na wakacjach. (Я НА каникулах — где?)
• Jestem na poczcie. (Я НА почте — где?)

❌ Почему не A:
• "na wakacjach" — это miejscownik, отвечает на вопрос "где?"
• Но "jedziemy" — это движение, нужен вопрос "куда?" → biernik

❌ Почему не C:
• "o wakacjach" — это "о каникулах" (тема разговора)
• Не подходит по смыслу

⚠️ Это КЛАССИЧЕСКАЯ ошибка! Запомни пары:
• jechać NA wakacje → być NA wakacjach
• iść DO domu → być W domu
• iść NA pocztę → być NA poczcie`,
    explanationPl: `Potrzebujemy biernika, ponieważ czasownik "jechać" wskazuje na RUCH, kierunek.

🔑 Główna zasada: RUCH vs MIEJSCE

NA + BIERNIK — dokąd? (ruch):
• Jadę na wakacje.
• Idę na pocztę.

NA + MIEJSCOWNIK — gdzie? (miejsce):
• Jestem na wakacjach.
• Jestem na poczcie.

❌ Dlaczego nie A:
• "na wakacjach" to miejscownik — odpowiada na "gdzie?"
• Ale "jedziemy" to ruch — potrzebujemy "dokąd?" → biernik

💡 Zapamiętaj pary:
• jechać NA wakacje → być NA wakacjach
• iść DO domu → być W domu`,
    topic: "Przyimki",
    difficulty: "medium"
  },

  // TASK 14
  {
    id: "pdf_B1_PRZYIMKI_002",
    source: "pdf",
    question: "Po pracy zawsze wracam prosto _______.",
    options: [
      { label: "A", text: "w domu" },
      { label: "B", text: "do domu" },
      { label: "C", text: "na dom" }
    ],
    correctAnswer: "B",
    explanationRu: `Глагол "wracać" (возвращаться) указывает на ДВИЖЕНИЕ → нужен предлог направления.

🔑 Правило для "дом":

DO domu — домой (куда? — движение):
• Idę do domu. (Иду домой.)
• Wracam do domu. (Возвращаюсь домой.)

W domu — дома (где? — место):
• Jestem w domu. (Я дома.)
• Zostanę w domu. (Останусь дома.)

❌ Почему не A:
• "w domu" — это "дома" (где?), но "wracam" требует направления (куда?)

❌ Почему не C:
• "na dom" — не существует такой конструкции для "дом"
• "na" используется с другими местами: na pocztę, na dworzec

⚠️ Запомни устойчивые выражения:
• iść/jechać DO domu, DO pracy, DO szkoły
• być W domu, W pracy, W szkole
• iść NA pocztę, NA dworzec, NA uniwersytet
• być NA poczcie, NA dworcu, NA uniwersytecie`,
    explanationPl: `Czasownik "wracać" wskazuje na RUCH → potrzebujemy przyimka kierunku.

🔑 Zasada dla "dom":

DO domu — dokąd? (ruch):
• Idę do domu.
• Wracam do domu.

W domu — gdzie? (miejsce):
• Jestem w domu.
• Zostanę w domu.

❌ Dlaczego nie A:
• "w domu" to "gdzie?", ale "wracam" wymaga "dokąd?"

❌ Dlaczego nie C:
• "na dom" — błędna konstrukcja

💡 Zapamiętaj:
• DO + dopełniacz: do domu, do pracy, do szkoły
• W + miejscownik: w domu, w pracy, w szkole
• NA + biernik/miejscownik: na pocztę/poczcie, na dworzec/dworcu`,
    topic: "Przyimki",
    difficulty: "medium-high"
  },

  // TASK 15
  {
    id: "pdf_B1_BIERNA_001",
    source: "pdf",
    question: "Ten most _______ zbudowany w XIX wieku.",
    options: [
      { label: "A", text: "był" },
      { label: "B", text: "został" },
      { label: "C", text: "jest" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь нужна форма страдательного залога для завершённого действия в прошлом.

🔑 Два типа страдательного залога в польском:

ZOSTAĆ + imiesłów — однократное, завершённое действие:
• Most został zbudowany. (Мост был построен — один раз, результат)
• Okno zostało otwarte. (Окно было открыто — кто-то открыл)

BYĆ + imiesłów — состояние или повторяющееся действие:
• Most był zbudowany z drewna. (Мост был построен из дерева — описание)
• Okno było otwarte. (Окно было открытым — состояние)

В контексте "w XIX wieku" речь идёт о конкретном историческом событии → został.

❌ Почему не A:
• "był zbudowany" — описывает состояние, а не акт строительства
• Звучит как "был в построенном состоянии"

❌ Почему не C:
• "jest zbudowany" — настоящее время
• Но "w XIX wieku" — это прошлое!

⚠️ Подсказка: если можно добавить "кем?" (przez kogo?), то скорее всего нужен "zostać":
• Most został zbudowany przez inżynierów.`,
    explanationPl: `Potrzebujemy strony biernej dla czynności zakończonej w przeszłości.

🔑 Dwa typy strony biernej:

ZOSTAĆ + imiesłów — czynność jednorazowa, zakończona:
• Most został zbudowany. (akt budowy)
• List został wysłany. (akt wysłania)

BYĆ + imiesłów — stan lub czynność powtarzająca się:
• Most był zbudowany z drewna. (opis stanu)
• List był pisany przez godzinę. (proces)

W kontekście "w XIX wieku" chodzi o konkretne wydarzenie → został.

❌ Dlaczego nie A:
• "był zbudowany" opisuje stan, nie akt budowy

❌ Dlaczego nie C:
• "jest" to czas teraźniejszy, ale "w XIX wieku" to przeszłość

💡 Wskazówka: jeśli można dodać "przez kogo?", użyj "zostać".`,
    topic: "Strona bierna",
    difficulty: "high"
  },

  // TASK 16
  {
    id: "pdf_B1_BIERNA_002",
    source: "pdf",
    question: "Kiedy weszłam do pokoju, okno _______ otwarte.",
    options: [
      { label: "A", text: "zostało" },
      { label: "B", text: "było" },
      { label: "C", text: "będzie" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь описывается состояние (окно было открытым), а не действие открывания.

🔑 Разница в контексте:

BYŁO otwarte — состояние:
• "Okno było otwarte" = Окно было открытым (я увидел его таким)
• Не важно, кто открыл — важно состояние

ZOSTAŁO otwarte — действие:
• "Okno zostało otwarte przez Annę" = Окно было открыто Анной
• Акцент на действии открывания

В предложении "Kiedy weszłam..." описывается то, что я УВИДЕЛА — состояние окна.

❌ Почему не A:
• "zostało otwarte" — это акт открывания
• Но здесь нет указания на действие, только на состояние

❌ Почему не C:
• "będzie" — будущее время
• Но "weszłam" — прошедшее время!

⚠️ Тест: если можно заменить на прилагательное — используй "być":
• Okno było otwarte ≈ Okno było duże (состояние/свойство)`,
    explanationPl: `Opisujemy stan (okno było otwarte), nie czynność otwierania.

🔑 Różnica w kontekście:

BYŁO otwarte — stan:
• "Okno było otwarte" = zobaczyłam je w takim stanie
• Nie ważne, kto otworzył — ważny stan

ZOSTAŁO otwarte — czynność:
• "Okno zostało otwarte przez Annę" = Anna je otworzyła
• Akcent na czynności

W zdaniu "Kiedy weszłam..." opisuję to, co ZOBACZYŁAM — stan okna.

❌ Dlaczego nie A:
• "zostało otwarte" to akt otwierania, nie stan

💡 Test: jeśli można zastąpić przymiotnikiem — użyj "być":
• Okno było otwarte ≈ Okno było duże`,
    topic: "Strona bierna",
    difficulty: "medium-high"
  },

  // TASK 17
  {
    id: "pdf_B1_SWOJ_001",
    source: "pdf",
    question: "Marek kocha _______ żonę bardzo mocno.",
    options: [
      { label: "A", text: "jego" },
      { label: "B", text: "jej" },
      { label: "C", text: "swoją" }
    ],
    correctAnswer: "C",
    explanationRu: `Это КЛАССИЧЕСКАЯ ловушка на экзамене B1!

🔑 Правило для "swój":

SWÓJ используется, когда владелец = подлежащее:
• Marek kocha swoją żonę. (Марек любит СВОЮ жену — жену Марека)
• Ja kocham swoją pracę. (Я люблю СВОЮ работу)

JEGO/JEJ используется, когда владелец ≠ подлежащее:
• Marek kocha jego żonę. (Марек любит ЕГО жену — жену другого мужчины!)
• Anna zna jego siostrę. (Анна знает ЕГО сестру — сестру кого-то другого)

В предложении: Marek (подлежащее) + żona (принадлежит Мареку) → swoją

❌ Почему не A:
• "jego żonę" = жену ДРУГОГО мужчины, не Марека!
• Это полностью меняет смысл предложения

❌ Почему не B:
• "jej" — это "её", женский род
• Не подходит, потому что Marek — мужчина

⚠️ ВАЖНО для русскоязычных:
В русском "свой" и "его" часто взаимозаменяемы в разговорной речи.
В польском — это РАЗНЫЕ вещи! "Jego" = чужой, "swój" = собственный.`,
    explanationPl: `To KLASYCZNA pułapka na egzaminie B1!

🔑 Zasada dla "swój":

SWÓJ — gdy właściciel = podmiot:
• Marek kocha swoją żonę. (żonę Marka)
• Ja kocham swoją pracę.

JEGO/JEJ — gdy właściciel ≠ podmiot:
• Marek kocha jego żonę. (żonę INNEGO mężczyzny!)
• Anna zna jego siostrę. (siostrę kogoś innego)

W zdaniu: Marek (podmiot) + żona (należy do Marka) → swoją

❌ Dlaczego nie A:
• "jego żonę" = żonę INNEGO mężczyzny!
• To całkowicie zmienia sens zdania

❌ Dlaczego nie B:
• "jej" to rodzaj żeński, a Marek to mężczyzna

💡 Zapamiętaj: "jego/jej" = cudzy, "swój" = własny!`,
    topic: "Zaimki dzierżawcze",
    difficulty: "high"
  },

  // TASK 18
  {
    id: "pdf_B1_SWOJ_002",
    source: "pdf",
    question: "Anna rozmawiała z Piotrem. Potem wzięła _______ książkę i wyszła.",
    options: [
      { label: "A", text: "swoją" },
      { label: "B", text: "jego" },
      { label: "C", text: "jej" }
    ],
    correctAnswer: "A",
    explanationRu: `Здесь нужно понять, ЧЬЮ книгу взяла Анна.

🔑 Анализ контекста:

Если Анна взяла СВОЮ книгу (книгу Анны):
• "Wzięła swoją książkę" ✅

Если Анна взяла книгу ПЁТРА:
• "Wzięła jego książkę" (книгу Пётра)

Без дополнительного контекста, естественная интерпретация — Анна взяла СВОЮ книгу (она уходит со своими вещами).

❌ Почему B тоже может быть правильным:
• "jego książkę" = книгу Пётра
• Это грамматически правильно, но меняет смысл!
• В контексте "wyszła" (вышла) логичнее, что она взяла свои вещи

❌ Почему не C:
• "jej książkę" = её книгу (какой-то другой женщины)
• Но в предложении нет другой женщины!

⚠️ На экзамене: если нет явного указания на "чужое", выбирай "swój"!`,
    explanationPl: `Trzeba zrozumieć, CZYJĄ książkę wzięła Anna.

🔑 Analiza kontekstu:

Jeśli Anna wzięła SWOJĄ książkę (książkę Anny):
• "Wzięła swoją książkę" ✅

Jeśli Anna wzięła książkę PIOTRA:
• "Wzięła jego książkę"

Bez dodatkowego kontekstu, naturalna interpretacja — Anna wzięła SWOJĄ książkę (wychodzi ze swoimi rzeczami).

❌ Dlaczego B też może być poprawne:
• "jego książkę" = książkę Piotra
• Gramatycznie poprawne, ale zmienia sens!

❌ Dlaczego nie C:
• "jej książkę" = książkę innej kobiety
• Ale w zdaniu nie ma innej kobiety!

💡 Na egzaminie: jeśli nie ma wyraźnego wskazania na "cudze", wybierz "swój"!`,
    topic: "Zaimki dzierżawcze",
    difficulty: "high"
  },

  // TASK 19
  {
    id: "pdf_B1_ASPEKT_003",
    source: "pdf",
    question: "Jutro _______ list do babci.",
    options: [
      { label: "A", text: "będę pisać" },
      { label: "B", text: "napiszę" },
      { label: "C", text: "pisałem" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь нужно будущее время. Выбор между двумя формами зависит от аспекта.

🔑 Будущее время в польском:

Совершенный вид (dokonany) — простая форма:
• napiszę, przeczytam, zrobię
• Указывает на РЕЗУЛЬТАТ, завершённое действие
• "Jutro napiszę list" = Завтра напишу письмо (и закончу)

Несовершенный вид (niedokonany) — составная форма:
• będę pisać / będę pisał(a)
• Указывает на ПРОЦЕСС, длительность
• "Jutro będę pisać list" = Завтра буду писать письмо (процесс)

В контексте "list do babci" естественнее говорить о результате — письмо будет написано.

❌ Почему не A:
• "będę pisać" — акцент на процессе
• Звучит как "буду заниматься писанием", а не "напишу"

❌ Почему не C:
• "pisałem" — прошедшее время
• Но "jutro" = завтра!

⚠️ Оба варианта (A и B) грамматически правильны, но B более естественен для конкретной задачи.`,
    explanationPl: `Potrzebujemy czasu przyszłego. Wybór formy zależy od aspektu.

🔑 Czas przyszły w polskim:

Aspekt dokonany — forma prosta:
• napiszę, przeczytam, zrobię
• Wskazuje na REZULTAT
• "Jutro napiszę list" = skończę pisać

Aspekt niedokonany — forma złożona:
• będę pisać / będę pisał(a)
• Wskazuje na PROCES
• "Jutro będę pisać list" = będę zajmować się pisaniem

W kontekście "list do babci" naturalniej mówić o rezultacie.

❌ Dlaczego nie A:
• "będę pisać" — akcent na procesie, nie na rezultacie

❌ Dlaczego nie C:
• "pisałem" to czas przeszły, ale "jutro" = przyszłość!

💡 Oba warianty (A i B) są poprawne, ale B jest bardziej naturalny dla konkretnego zadania.`,
    topic: "Aspekt czasownika",
    difficulty: "medium"
  },

  // TASK 20
  {
    id: "pdf_B1_PRZYIMKI_003",
    source: "pdf",
    question: "Spotkamy się _______ pracy, około godziny 18.",
    options: [
      { label: "A", text: "przez pracę" },
      { label: "B", text: "za pracę" },
      { label: "C", text: "po pracy" }
    ],
    correctAnswer: "C",
    explanationRu: `Здесь нужен предлог, означающий "после".

🔑 Временные предлоги:

PO + miejscownik — после чего-то:
• po pracy (после работы)
• po obiedzie (после обеда)
• po lekcjach (после уроков)

PRZEZ + biernik — в течение, на протяжении:
• przez godzinę (в течение часа)
• przez cały dzień (весь день)

ZA + biernik — через (промежуток времени):
• za godzinę (через час)
• za tydzień (через неделю)

❌ Почему не A:
• "przez pracę" = в течение работы / из-за работы
• Не подходит по смыслу

❌ Почему не B:
• "za pracę" = за работу (как оплата) или через работу
• Не означает "после работы"

⚠️ Запомни: PO = после, PRZEZ = в течение, ZA = через (время)`,
    explanationPl: `Potrzebujemy przyimka oznaczającego "po zakończeniu czegoś".

🔑 Przyimki czasowe:

PO + miejscownik — po zakończeniu:
• po pracy, po obiedzie, po lekcjach

PRZEZ + biernik — w trakcie, przez jakiś czas:
• przez godzinę, przez cały dzień

ZA + biernik — po upływie czasu:
• za godzinę, za tydzień

❌ Dlaczego nie A:
• "przez pracę" = w trakcie pracy / z powodu pracy

❌ Dlaczego nie B:
• "za pracę" = w zamian za pracę

💡 Zapamiętaj: PO = po zakończeniu, PRZEZ = w trakcie, ZA = po upływie czasu`,
    topic: "Przyimki",
    difficulty: "medium"
  }
];
