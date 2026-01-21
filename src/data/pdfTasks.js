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
    question: "Spotkamy się _______, około godziny 18.",
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
  },

  // TASK 21
  {
    id: "B1_REKCJA_003",
    source: "pdf",
    question: "Już pół godziny _______ autobus, ale wciąż go nie ma.",
    options: [
      { label: "A", text: "czekam na" },
      { label: "B", text: "czekam o" },
      { label: "C", text: "czekam dla" },
      { label: "D", text: "czekam z" }
    ],
    correctAnswer: "A",
    explanationRu: `Глагол czekać (ждать) требует предлога na + винительный падеж (biernik).

🔑 Формула: czekać na kogo? / na co?

Примеры:
• Czekam na autobus. (Жду автобус.)
• Czekam na ciebie. (Жду тебя.)
• Czekam na odpowiedź. (Жду ответа.)

❌ Почему не B: "czekać o" — не существует такой конструкции.
❌ Почему не C: "czekać dla" — неправильно; "dla" означает "для кого-то".
❌ Почему не D: "czekać z" — неправильно; "z" означает "с кем-то".

💡 Сравни с русским: "ждать чего-то" (родительный) — в польском логика другая: "czekać NA coś" (винительный с предлогом).`,
    explanationPl: `Czasownik czekać łączy się z przyimkiem na i wymaga biernika.

🔑 Konstrukcja: czekać na kogo? / na co?

Przykłady:
• Czekam na tramwaj.
• Czekam na wyniki egzaminu.

❌ Dlaczego nie B, C, D:
• "czekać o/dla/z" — błędne konstrukcje, nie istnieją w języku polskim.

💡 Inne czasowniki z "na + biernik": patrzeć na, liczyć na, narzekać na.`,
    topic: "Rekcja czasowników — czekać na + biernik",
    difficulty: "medium"
  },

  // TASK 22
  {
    id: "B1_ASPEKT_004",
    source: "pdf",
    question: "Kiedy byłem dzieckiem, co roku _______ na wakacje nad morze.",
    options: [
      { label: "A", text: "pojechałem" },
      { label: "B", text: "jeździłem" },
      { label: "C", text: "pojadę" },
      { label: "D", text: "jechałem" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь нужен несовершенный вид (aspekt niedokonany) в форме, выражающей повторяющееся действие в прошлом.

🔑 Разница между формами:

jeździłem (niedok., wielokrotny) — ездил многократно:
• "Co roku jeździłem nad morze" = Каждый год ездил (повторялось)

jechałem (niedok., jednokrotny) — ехал (один раз, процесс):
• "Wczoraj jechałem do Krakowa" = Вчера ехал (был в пути)

pojechałem (dok.) — поехал (однократно, результат):
• "W zeszłym roku pojechałem do Włoch" = В прошлом году поехал

Маркер "co roku" (каждый год) указывает на повторяемость → jeździłem.

❌ Почему не A: "pojechałem" — однократное действие, не подходит к "co roku".
❌ Почему не C: "pojadę" — будущее время, но контекст прошлого ("byłem dzieckiem").
❌ Почему не D: "jechałem" — процесс одной поездки, не повторяемость.`,
    explanationPl: `Potrzebujemy aspektu niedokonanego w formie wyrażającej czynność powtarzającą się.

🔑 Różnica między formami:

jeździłem (niedok., wielokrotny) — powtarzające się podróże:
• "Co roku jeździłem" = regularnie, wielokrotnie

jechałem (niedok., jednokrotny) — jedna podróż w trakcie:
• "Właśnie jechałem do pracy" = byłem w drodze

pojechałem (dok.) — jedna zakończona podróż:
• "Pojechałem i wróciłem"

Marker "co roku" wskazuje na powtarzalność → jeździłem.

💡 Podobne pary: chodzić/iść, latać/lecieć, pływać/płynąć.`,
    topic: "Aspekt czasownika — powtarzalność vs jednorazowość",
    difficulty: "medium-high"
  },

  // TASK 23
  {
    id: "B1_PRZYIMKI_004",
    source: "pdf",
    question: "W weekend byłem _______ babci na obiedzie.",
    options: [
      { label: "A", text: "do babci" },
      { label: "B", text: "u babci" },
      { label: "C", text: "przy babci" },
      { label: "D", text: "z babcią" }
    ],
    correctAnswer: "B",
    explanationRu: `Предлог u + родительный падеж (dopełniacz) означает "у кого-то" (в доме/у человека).

🔑 Правило:

U + dopełniacz — у кого-то (место):
• Byłem u babci. (Был у бабушки — в её доме.)
• Mieszkam u rodziców. (Живу у родителей.)
• Byłem u lekarza. (Был у врача.)

❌ Почему не A: "do babci" — направление ("к бабушке"), но "byłem" требует места, не направления.
❌ Почему не C: "przy babci" — "рядом с бабушкой" (физически рядом), не "в гостях".
❌ Почему не D: "z babcią" — "с бабушкой" (совместность), не место.

💡 Запомни пару: iść DO babci (направление) → być U babci (место).`,
    explanationPl: `Przyimek u + dopełniacz oznacza "w domu kogoś" lub "w miejscu związanym z osobą".

🔑 Zasada:

U + dopełniacz — u kogoś (miejsce):
• Byłem u dentysty.
• Nocowałem u kolegi.

❌ Dlaczego nie A: "do babci" to kierunek, nie miejsce.
❌ Dlaczego nie C: "przy babci" = obok babci (fizycznie blisko).
❌ Dlaczego nie D: "z babcią" = razem z babcią (towarzyszenie).

💡 Para: iść DO kogoś → być U kogoś.`,
    topic: "Przyimki z przypadkami — u + dopełniacz (miejsce)",
    difficulty: "medium"
  },

  // TASK 24
  {
    id: "B1_BIERNA_003",
    source: "pdf",
    question: "Ten budynek _______ teraz remontowany, dlatego nie można wejść do środka.",
    options: [
      { label: "A", text: "został" },
      { label: "B", text: "będzie" },
      { label: "C", text: "jest" },
      { label: "D", text: "był" }
    ],
    correctAnswer: "C",
    explanationRu: `Здесь нужен страдательный залог в настоящем времени, потому что ремонт происходит СЕЙЧАС ("teraz").

🔑 Страдательный залог по временам:

JEST + imiesłów — настоящее время (процесс сейчас):
• Budynek jest remontowany. (Здание ремонтируется сейчас.)
• List jest pisany. (Письмо пишется.)

BYŁ + imiesłów — прошедшее (состояние/процесс в прошлом):
• Budynek był remontowany w zeszłym roku.

ZOSTAŁ + imiesłów — прошедшее (завершённое действие):
• Budynek został wyremontowany. (Здание было отремонтировано — закончено.)

BĘDZIE + imiesłów — будущее:
• Budynek będzie remontowany w przyszłym roku.

❌ Почему не A: "został" — завершённое действие в прошлом, но ремонт ещё идёт.
❌ Почему не B: "będzie" — будущее, но "teraz" = сейчас.
❌ Почему не D: "był" — прошлое, но "teraz" = сейчас.`,
    explanationPl: `Potrzebujemy strony biernej w czasie teraźniejszym, bo remont trwa TERAZ.

🔑 Strona bierna według czasów:

JEST + imiesłów — teraźniejszy (proces trwa):
• Dom jest budowany.
• Obiad jest przygotowywany.

BYŁ — przeszły (stan/proces)
ZOSTAŁ — przeszły (czynność zakończona)
BĘDZIE — przyszły

Marker "teraz" wskazuje na czas teraźniejszy → jest.`,
    topic: "Strona bierna — czas teraźniejszy (jest + imiesłów)",
    difficulty: "high"
  },

  // TASK 25
  {
    id: "B1_SWOJ_003",
    source: "pdf",
    question: "Powiedziałem Tomkowi, że lubię _______ nowe mieszkanie.",
    options: [
      { label: "A", text: "moje" },
      { label: "B", text: "swoje" },
      { label: "C", text: "jego" },
      { label: "D", text: "twoje" }
    ],
    correctAnswer: "B",
    explanationRu: `Это сложное предложение с придаточным. Нужно определить, ЧЬЁ mieszkanie.

🔑 Анализ:
- Главное предложение: "Powiedziałem Tomkowi"
- Придаточное: "że lubię _______ mieszkanie"
- Подлежащее придаточного: JA (lubię)
- Чьё mieszkanie? МОЕГО (говорящего)

Когда владелец = подлежащее того же предложения → swoje.

"Lubię swoje mieszkanie" = Я люблю СВОЁ (моё) жильё.

❌ Почему не A: "moje" грамматически возможно, но в польском при совпадении владельца и подлежащего предпочтителен "swój". "Moje" звучит избыточно акцентированно.
❌ Почему не C: "jego mieszkanie" = жильё Томка (другого человека).
❌ Почему не D: "twoje" = твоё (обращение к собеседнику), не подходит по контексту.

⚠️ Нюанс: "moje" не является ошибкой, но "swoje" — более естественный и правильный выбор.`,
    explanationPl: `To zdanie złożone. Trzeba określić, CZYJE mieszkanie.

🔑 Analiza:
- Zdanie główne: "Powiedziałem Tomkowi"
- Zdanie podrzędne: "że lubię _______ mieszkanie"
- Podmiot zdania podrzędnego: JA
- Czyje mieszkanie? MOJE (mówiącego)

Gdy właściciel = podmiot tego samego zdania → swoje.

❌ Dlaczego nie A: "moje" jest możliwe, ale "swoje" jest bardziej naturalne i poprawne.
❌ Dlaczego nie C: "jego mieszkanie" = mieszkanie Tomka.
❌ Dlaczego nie D: "twoje" = mieszkanie rozmówcy.

💡 Zasada: w zdaniach podrzędnych, gdy właściciel = podmiot zdania podrzędnego, używamy "swój".`,
    topic: "Zaimki dzierżawcze — swój vs mój w zdaniach złożonych",
    difficulty: "high"
  },

  // TASK 26
  {
    id: "B1_NEGACJA_002",
    source: "pdf",
    question: "Przepraszam, ale nie mam _______ — zostawiłem go w domu.",
    options: [
      { label: "A", text: "dowód osobisty" },
      { label: "B", text: "dowodu osobistego" },
      { label: "C", text: "dowodem osobistym" },
      { label: "D", text: "dowodzie osobistym" }
    ],
    correctAnswer: "B",
    explanationRu: `При отрицании глагол mieć требует родительного падежа (dopełniacz) вместо винительного (biernik).

🔑 Правило:

✅ Mam dowód osobisty. (Biernik — без отрицания)
✅ Nie mam dowodu osobistego. (Dopełniacz — с отрицанием)

Склонение "dowód osobisty" (м.р.):
• Mianownik: dowód osobisty
• Dopełniacz: dowodu osobistego
• Biernik: dowód osobisty
• Narzędnik: dowodem osobistym
• Miejscownik: dowodzie osobistym

❌ Почему не A: "dowód osobisty" — biernik, но после "nie mam" нужен dopełniacz.
❌ Почему не C: "dowodem osobistym" — narzędnik, неправильный падеж.
❌ Почему не D: "dowodzie osobistym" — miejscownik, неправильный падеж.`,
    explanationPl: `Po przeczeniu czasownik mieć wymaga dopełniacza zamiast biernika.

🔑 Reguła:

✅ Mam paszport. (biernik)
✅ Nie mam paszportu. (dopełniacz)

Odmiana "dowód osobisty":
• Mianownik: dowód osobisty
• Dopełniacz: dowodu osobistego
• Biernik: dowód osobisty

❌ Dlaczego nie A: po "nie mam" wymagany jest dopełniacz, nie biernik.
❌ Dlaczego nie C, D: narzędnik i miejscownik — złe przypadki.`,
    topic: "Negacja — dopełniacz po przeczeniu",
    difficulty: "medium"
  },

  // TASK 27
  {
    id: "B1_ZEBY_002",
    source: "pdf",
    question: "Chcę _______ lepiej po polsku.",
    options: [
      { label: "A", text: "żebym mówił" },
      { label: "B", text: "żeby mówić" },
      { label: "C", text: "mówić" },
      { label: "D", text: "że mówię" }
    ],
    correctAnswer: "C",
    explanationRu: `Когда подлежащее главного и зависимого действия ОДИНАКОВОЕ, используется инфинитив (bezokolicznik), а не конструкция с "żeby".

🔑 Правило:

Один субъект → инфинитив:
• Chcę mówić. (Я хочу говорить — я и хочу, и буду говорить)
• Muszę pracować. (Я должен работать)
• Lubię czytać. (Я люблю читать)

Разные субъекты → żeby + личная форма:
• Chcę, żebyś mówił. (Я хочу, чтобы ТЫ говорил)
• Proszę, żeby pan usiadł. (Прошу, чтобы ВЫ сели)

❌ Почему не A: "żebym mówił" — я хочу, чтобы я говорил — избыточно и неестественно.
❌ Почему не B: "żeby mówić" — конструкция существует, но не после "chcieć" с одним субъектом.
❌ Почему не D: "że mówię" — "что я говорю" (факт), не цель/желание.`,
    explanationPl: `Gdy podmiot zdania głównego i czynności zależnej jest TEN SAM, używamy bezokolicznika.

🔑 Reguła:

Ten sam podmiot → bezokolicznik:
• Chcę jeść. (ja chcę, ja jem)
• Muszę iść. (ja muszę, ja idę)

Różne podmioty → żeby + forma osobowa:
• Chcę, żebyś przyszedł. (ja chcę, ty przyjdziesz)

❌ Dlaczego nie A: "żebym mówił" po "chcę" jest nienaturalne.
❌ Dlaczego nie B: "żeby mówić" nie łączy się z "chcieć" przy tym samym podmiocie.
❌ Dlaczego nie D: "że mówię" wprowadza fakt, nie cel.`,
    topic: "Infinityw vs żeby — ten sam podmiot",
    difficulty: "high"
  },

  // TASK 28
  {
    id: "B1_WARUNEK_002",
    source: "pdf",
    question: "_______ jutro będzie ładna pogoda, pójdziemy na spacer.",
    options: [
      { label: "A", text: "Gdyby" },
      { label: "B", text: "Jeśli" },
      { label: "C", text: "Chociaż" },
      { label: "D", text: "Żeby" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь нужен союз для реального условия (возможного в будущем).

🔑 Разница:

JEŚLI / JEŻELI — реальное условие:
• Jeśli będzie padać, wezmę parasol. (Если будет дождь — возможно!)
• Используется с изъявительным наклонением (czas przyszły, teraźniejszy)

GDYBY — нереальное условие:
• Gdyby padało, wziąłbym parasol. (Если бы шёл дождь — но не идёт)
• Используется с условным наклонением (tryb warunkowy)

В предложении: "będzie ładna pogoda" — будущее время, реальная возможность → jeśli.

❌ Почему не A: "gdyby" требует условного наклонения ("gdyby była ładna pogoda, poszlibyśmy").
❌ Почему не C: "chociaż" = хотя (уступительный союз).
❌ Почему не D: "żeby" = чтобы (цель).`,
    explanationPl: `Potrzebujemy spójnika dla warunku realnego (możliwego w przyszłości).

🔑 Różnica:

JEŚLI — warunek realny:
• Jeśli zdasz egzamin, dostaniesz nagrodę.
• Łączy się z trybem oznajmującym

GDYBY — warunek nierealny:
• Gdybyś zdał egzamin, dostałbyś nagrodę.
• Łączy się z trybem warunkowym

"Będzie ładna pogoda" — czas przyszły, realna możliwość → jeśli.

❌ Dlaczego nie A: "gdyby" wymaga trybu warunkowego.
❌ Dlaczego nie C: "chociaż" to spójnik przyzwolenia.
❌ Dlaczego nie D: "żeby" wprowadza cel.`,
    topic: "Zdania warunkowe — jeśli vs gdyby (realny warunek)",
    difficulty: "medium-high"
  },

  // TASK 29
  {
    id: "B1_SZYK_002",
    source: "pdf",
    question: "Która forma jest poprawna?",
    options: [
      { label: "A", text: "Kiedy się obudziłem, było już późno." },
      { label: "B", text: "Kiedy obudziłem się, było już późno." },
      { label: "C", text: "Się kiedy obudziłem, było już późno." },
      { label: "D", text: "Kiedy obudziłem, się było już późno." }
    ],
    correctAnswer: "A",
    explanationRu: `После союза (kiedy, gdy, że, jeśli...) частица się обычно ставится сразу после союза, перед глаголом.

🔑 Правило:

В придаточных предложениях после союза:
• Spójnik + się + czasownik — предпочтительный порядок
• "Kiedy się obudziłem" ✅
• "Gdy się dowiedziałem" ✅

Альтернатива (тоже допустима, но менее типична):
• "Kiedy obudziłem się" — возможно, но звучит менее естественно

❌ Почему не B: "Kiedy obudziłem się" — допустимо, но A более естественно.
❌ Почему не C: "Się" в начале предложения — грубая ошибка!
❌ Почему не D: "się" оторвано от своего глагола — неправильно.`,
    explanationPl: `Po spójniku (kiedy, gdy, że, jeśli...) partykuła się zwykle stoi zaraz po spójniku.

🔑 Zasada:

W zdaniach podrzędnych:
• Spójnik + się + czasownik — preferowany szyk
• "Kiedy się obudziłem" ✅
• "Gdy się spotkaliśmy" ✅

❌ Dlaczego nie B: możliwe, ale mniej naturalne.
❌ Dlaczego nie C: "się" na początku zdania to błąd!
❌ Dlaczego nie D: "się" oderwane od czasownika — błąd.`,
    topic: "Szyk zdania — miejsce zaimka \"się\" po spójniku",
    difficulty: "medium"
  },

  // TASK 30
  {
    id: "B1_SPOJNIKI_002",
    source: "pdf",
    question: "_______ pada deszcz, pójdę na spacer — lubię chodzić w deszczu.",
    options: [
      { label: "A", text: "Dlatego że" },
      { label: "B", text: "Ponieważ" },
      { label: "C", text: "Chociaż" },
      { label: "D", text: "Żeby" }
    ],
    correctAnswer: "C",
    explanationRu: `Здесь нужен уступительный союз (хотя), потому что действие происходит ВОПРЕКИ обстоятельствам.

🔑 Разница между союзами:

CHOCIAŻ / MIMO ŻE — хотя, несмотря на то что (уступка):
• Chociaż pada, pójdę. (Хотя идёт дождь, пойду — вопреки!)
• Логика: препятствие есть, но действие всё равно произойдёт

DLATEGO ŻE / PONIEWAŻ — потому что (причина):
• Nie pójdę, ponieważ pada. (Не пойду, потому что дождь)
• Логика: причина → следствие

В предложении: дождь идёт, НО человек всё равно пойдёт → уступка → chociaż.

❌ Почему не A, B: "dlatego że" и "ponieważ" = причина, но здесь уступка.
❌ Почему не D: "żeby" = чтобы (цель), не подходит по смыслу.`,
    explanationPl: `Potrzebujemy spójnika przyzwolenia, bo czynność dzieje się WBREW okolicznościom.

🔑 Różnica:

CHOCIAŻ / MIMO ŻE — przyzwolenie:
• Chociaż jestem zmęczony, pójdę na trening.
• Logika: przeszkoda jest, ale czynność i tak nastąpi

DLATEGO ŻE / PONIEWAŻ — przyczyna:
• Nie pójdę, ponieważ jestem zmęczony.
• Logika: przyczyna → skutek

Pada deszcz, ALE pójdę → przyzwolenie → chociaż.

❌ Dlaczego nie A, B: to spójniki przyczyny, nie przyzwolenia.
❌ Dlaczego nie D: "żeby" wprowadza cel.`,
    topic: "Spójniki — chociaż vs dlatego że (przyzwolenie vs przyczyna)",
    difficulty: "medium"
  },

  // TASK 31
  {
    id: "B1_REKCJA_004",
    source: "pdf",
    question: "Babcia jest już stara i nie może sama chodzić, dlatego codziennie _______ nią moja mama.",
    options: [
      { label: "A", text: "dba o" },
      { label: "B", text: "troszczy się o" },
      { label: "C", text: "opiekuje się" },
      { label: "D", text: "martwi się o" }
    ],
    correctAnswer: "C",
    explanationRu: `Три похожих глагола с разными значениями и рекциями — 🔑 Разница:

opiekować się + narzędnik (KIM?) — ухаживать, заботиться физически:
• Opiekuję się babcią. (Ухаживаю за бабушкой — помогаю, кормлю, вожу)
• Opiekuję się dziećmi. (Присматриваю за детьми)

dbać o + biernik (O KOGO/CO?) — заботиться, следить (более абстрактно):
• Dbam o zdrowie. (Забочусь о здоровье — слежу за ним)
• Dbam o rodzinę. (Забочусь о семье — обеспечиваю)

troszczyć się o + biernik — беспокоиться, проявлять заботу:
• Troszczę się o przyszłość. (Беспокоюсь о будущем)

martwić się o + biernik — волноваться, переживать:
• Martwię się o ciebie. (Волнуюсь за тебя)

Контекст: бабушка не может ходить → нужен ФИЗИЧЕСКИЙ уход → opiekować się.

❌ Почему не A, B: "dbać o" и "troszczyć się o" — более абстрактная забота, не физический уход.
❌ Почему не D: "martwić się" — волноваться, а не ухаживать.

⚠️ ВАЖНО: "opiekować się" + NARZĘDNIK (без предлога!), остальные + O + BIERNIK.`,
    explanationPl: `Trzy podobne czasowniki z różnymi znaczeniami i rekcjami — 🔑 Różnica:

opiekować się + narzędnik — fizyczna opieka:
• Opiekuję się chorym ojcem.
• Opiekuję się zwierzętami.

dbać o + biernik — troska bardziej abstrakcyjna:
• Dbam o środowisko.
• Dbam o wygląd.

troszczyć się o + biernik — okazywanie troski:
• Troszczę się o rodzinę.

martwić się o + biernik — niepokój:
• Martwię się o wyniki.

Kontekst: babcia nie może chodzić → potrzebna FIZYCZNA opieka → opiekować się.

⚠️ UWAGA: "opiekować się" + NARZĘDNIK (bez przyimka!), pozostałe + O + BIERNIK.`,
    topic: "Rekcja czasowników — dbać o vs troszczyć się o vs opiekować się",
    difficulty: "high"
  },

  // TASK 32
  {
    id: "B1_ASPEKT_005",
    source: "pdf",
    question: "Jeśli będzie padać, _______ parasol.",
    options: [
      { label: "A", text: "będę brać" },
      { label: "B", text: "wezmę" },
      { label: "C", text: "brałem" },
      { label: "D", text: "biorę" }
    ],
    correctAnswer: "B",
    explanationRu: `выбор аспекта в условном предложении о будущем.

🔑 Анализ:

Условие: "Jeśli będzie padać" — если будет дождь (будущее, реальное)
Следствие: возьму зонт — однократное, конкретное действие

wezmę (dok., przyszły) — возьму (один раз, результат):
• Wezmę parasol i wyjdę. (Возьму зонт и выйду)
• Конкретное действие в будущем

będę brać (niedok., przyszły) — буду брать (процесс/повторение):
• Zawsze będę brać parasol, gdy pada. (Всегда буду брать — привычка)
• Звучит странно для одного конкретного случая

В контексте одного дождя и одного зонта → wezmę.

❌ Почему не A: "będę brać" — процесс/привычка, не одно действие.
❌ Почему не C: "brałem" — прошедшее время, но условие о будущем.
❌ Почему не D: "biorę" — настоящее время, не будущее.

⚠️ Ловушка: после "jeśli" в главном предложении нужно БУДУЩЕЕ время!`,
    explanationPl: `wybór aspektu w zdaniu warunkowym o przyszłości.

🔑 Analiza:

Warunek: "Jeśli będzie padać" — przyszłość, realny warunek
Skutek: wezmę parasol — jednorazowa, konkretna czynność

wezmę (dok.) — jedna czynność zakończona:
• Wezmę i pójdę.

będę brać (niedok.) — proces lub powtarzanie:
• Zawsze będę brać witaminy. (nawyk)

W kontekście jednego deszczu i jednego parasola → wezmę.

❌ Dlaczego nie A: "będę brać" sugeruje powtarzalność.
❌ Dlaczego nie C: "brałem" to przeszłość.
❌ Dlaczego nie D: "biorę" to teraźniejszość.`,
    topic: "Aspekt czasownika — brać vs wziąć w kontekście przyszłym",
    difficulty: "high"
  },

  // TASK 33
  {
    id: "B1_SWOJ_004",
    source: "pdf",
    question: "Piotr spotkał Marka i oddał mu _______ książkę.",
    options: [
      { label: "A", text: "swoją" },
      { label: "B", text: "jego" },
      { label: "C", text: "jej" },
      { label: "D", text: "moją" }
    ],
    correctAnswer: "A",
    explanationRu: `с двумя людьми в предложении!

🔑 Анализ:
- Подлежащее: Piotr (он совершает действие)
- Piotr oddał książkę — ЧЬЮ книгу?
- Если книга ПЁТРА (подлежащего) → swoją
- Если книга МАРЕКА (другого человека) → jego

Без дополнительного контекста, естественная интерпретация:
Пётр вернул книгу, которую брал у Марека = книга Пётра (которую он должен был вернуть) → swoją

НО! Это задание с ловушкой:
- "oddał mu swoją książkę" = отдал ему СВОЮ книгу (книгу Пётра)
- "oddał mu jego książkę" = вернул ему ЕГО книгу (книгу Марека)

Оба варианта грамматически правильны, но меняют смысл!

В контексте "oddać" (вернуть/отдать) + "mu" (ему) естественнее: Пётр отдал Мареку что-то своё → swoją.

❌ Почему B тоже может быть верным: "jego książkę" = книгу Марека — возможно, если Пётр возвращает чужую книгу. Но без контекста "своя" — базовый выбор.
❌ Почему не C: "jej" = её (женский род) — нет женщины в предложении.
❌ Почему не D: "moją" = мою — говорящий не участвует в действии.`,
    explanationPl: `z dwiema osobami w zdaniu!

🔑 Analiza:
- Podmiot: Piotr
- Piotr oddał książkę — CZYJĄ?
- Jeśli książka PIOTRA (podmiotu) → swoją
- Jeśli książka MARKA (innej osoby) → jego

Oba warianty są poprawne gramatycznie, ale zmieniają sens!

- "oddał mu swoją książkę" = oddał swoją własną książkę
- "oddał mu jego książkę" = zwrócił książkę należącą do Marka

Bez dodatkowego kontekstu, "swoją" jest bardziej naturalnym wyborem.

❌ Dlaczego nie C: "jej" = rodzaj żeński, brak kobiety w zdaniu.
❌ Dlaczego nie D: "moją" = mówiący nie uczestniczy w czynności.`,
    topic: "Zaimki dzierżawcze — swój vs jego w zdaniu z dwoma osobami",
    difficulty: "high"
  },

  // TASK 34
  {
    id: "B1_BIERNA_004",
    source: "pdf",
    question: "W tym hotelu _______ kiedyś gościem sam prezydent.",
    options: [
      { label: "A", text: "został" },
      { label: "B", text: "był" },
      { label: "C", text: "bywał" },
      { label: "D", text: "zostanie" }
    ],
    correctAnswer: "B",
    explanationRu: `Это НЕ страдательный залог, а ловушка на понимание разницы между "być" и "zostać"!

🔑 Анализ:

Здесь "gościem" — это ORZECZNIK (именная часть сказуемого), не imiesłów bierny!

być + narzędnik — быть кем-то (состояние, факт):
• Był gościem. (Был гостем — факт)
• Jestem studentem. (Я студент)

zostać + narzędnik — стать кем-то (изменение состояния):
• Został lekarzem. (Стал врачом — изменение)
• Zostanę nauczycielem. (Стану учителем)

bywać — бывать (многократно):
• Bywał tu często. (Бывал здесь часто)

Контекст: президент был гостем (однократный факт в прошлом) → był.

❌ Почему не A: "został gościem" = стал гостем — звучит странно, гостем не "становятся".
❌ Почему не C: "bywał gościem" — бывал гостем многократно, но "kiedyś" указывает на один случай.
❌ Почему не D: "zostanie" — будущее время, но "kiedyś" = когда-то (прошлое).

⚠️ Ловушка: это НЕ strona bierna! "Gościem" — это narzędnik в функции orzecznika.`,
    explanationPl: `To NIE strona bierna, ale pułapka na rozumienie różnicy między "być" a "zostać"!

🔑 Analiza:

"Gościem" to ORZECZNIK (część imienna orzeczenia), nie imiesłów bierny!

być + narzędnik — bycie kimś (stan, fakt):
• Był gościem. (fakt)
• Jest studentem.

zostać + narzędnik — stanie się kimś (zmiana stanu):
• Został lekarzem. (zmiana)

bywać — wielokrotne bycie:
• Bywał tu często.

Kontekst: prezydent był gościem (jednorazowy fakt) → był.

❌ Dlaczego nie A: "został gościem" brzmi nienaturalnie.
❌ Dlaczego nie C: "bywał" sugeruje wielokrotność, ale "kiedyś" wskazuje na jeden raz.
❌ Dlaczego nie D: "zostanie" to przyszłość, ale "kiedyś" = przeszłość.`,
    topic: "Strona bierna — został vs był vs bywał",
    difficulty: "high"
  },

  // TASK 35
  {
    id: "B1_ZEBY_003",
    source: "pdf",
    question: "Proszę, _______ pan usiadł i poczekał chwilę.",
    options: [
      { label: "A", text: "żebyś" },
      { label: "B", text: "żeby" },
      { label: "C", text: "abyś" },
      { label: "D", text: "że" }
    ],
    correctAnswer: "B",
    explanationRu: `форма вежливости (pan/pani) + żeby.

🔑 Правило:

При обращении на "pan/pani" (вежливая форма) используется żeby БЕЗ личного окончания, потому что "pan" грамматически = 3-е лицо!

• Proszę, żeby pan usiadł. (Прошу, чтобы Вы сели) ✅
• Proszę, żebyś usiadł. (Прошу, чтобы ты сел) — на "ты"!

Формы żeby по лицам:
• ja → żebym
• ty → żebyś
• pan/pani → żeby (3-е лицо!)
• on/ona → żeby
• my → żebyśmy
• wy → żebyście
• państwo → żeby

❌ Почему не A: "żebyś" — форма на "ты", но здесь "pan" (Вы).
❌ Почему не C: "abyś" — тоже форма на "ты" (aby = żeby, более книжный вариант).
❌ Почему не D: "że" — союз "что", не "чтобы".

⚠️ Ловушка для русскоязычных: "Вы" в русском = 2-е лицо мн.ч., но "pan" в польском = 3-е лицо ед.ч.!`,
    explanationPl: `forma grzecznościowa (pan/pani) + żeby.

🔑 Zasada:

Przy zwrocie grzecznościowym "pan/pani" używamy żeby BEZ końcówki osobowej, bo "pan" gramatycznie = 3. osoba!

• Proszę, żeby pan poczekał. ✅
• Proszę, żebyś poczekał. — forma na "ty"!

Formy żeby:
• ja → żebym
• ty → żebyś
• pan/pani → żeby (3. osoba!)
• on/ona → żeby

❌ Dlaczego nie A, C: "żebyś/abyś" to formy dla "ty", nie dla "pan".
❌ Dlaczego nie D: "że" wprowadza fakt, nie prośbę.

💡 Pamiętaj: "pan/pani" = 3. osoba gramatycznie!`,
    topic: "Żeby vs aby vs by — różnice stylistyczne i gramatyczne",
    difficulty: "high"
  },

  // TASK 36
  {
    id: "B1_PRZYIMKI_005",
    source: "pdf",
    question: "Bardzo ci dziękuję _______ — bez ciebie bym sobie nie poradził.",
    options: [
      { label: "A", text: "za pomocą" },
      { label: "B", text: "za pomoc" },
      { label: "C", text: "dla pomocy" },
      { label: "D", text: "o pomoc" }
    ],
    correctAnswer: "B",
    explanationRu: `Глагол dziękować требует конструкции za + biernik.

🔑 Формула: dziękować za co?

• Dziękuję za pomoc. (Благодарю за помощь.)
• Dziękuję za prezent. (Благодарю за подарок.)
• Dziękuję za wszystko. (Благодарю за всё.)

Также: dziękować komu? (celownik) — кому благодарить:
• Dziękuję ci za pomoc. (Благодарю тебя за помощь.)

❌ Почему не A: "za pomocą" — это narzędnik, означает "с помощью чего-то" (инструмент), не благодарность.
❌ Почему не C: "dla pomocy" — "для помощи", не сочетается с "dziękować".
❌ Почему не D: "o pomoc" — "о помощи" или "просить о помощи" (prosić o pomoc), не благодарить.

⚠️ Ловушка: "za pomocą" vs "za pomoc" — разные падежи, разные значения!
• za pomocą komputera = с помощью компьютера (narzędnik)
• dziękuję za pomoc = благодарю за помощь (biernik)`,
    explanationPl: `Czasownik dziękować wymaga konstrukcji za + biernik.

🔑 Konstrukcja: dziękować za co?

• Dziękuję za zaproszenie.
• Dziękuję za miłe słowa.

Również: dziękować komu? (celownik):
• Dziękuję panu za pomoc.

❌ Dlaczego nie A: "za pomocą" to narzędnik = "przy użyciu czegoś".
❌ Dlaczego nie C: "dla pomocy" — błędna konstrukcja z "dziękować".
❌ Dlaczego nie D: "o pomoc" — "prosić o pomoc", nie "dziękować".

⚠️ Pułapka: "za pomocą" vs "za pomoc" — różne przypadki, różne znaczenia!`,
    topic: "Przyimki — za + biernik vs za + dopełniacz vs za + narzędnik",
    difficulty: "high"
  },

  // TASK 37
  {
    id: "B1_NEGACJA_003",
    source: "pdf",
    question: "Nigdy nie widziałem _______ tak pięknego.",
    options: [
      { label: "A", text: "nic" },
      { label: "B", text: "niczego" },
      { label: "C", text: "coś" },
      { label: "D", text: "cokolwiek" }
    ],
    correctAnswer: "B",
    explanationRu: `Двойное отрицание + родительный падеж — сложная комбинация!

🔑 Правило:

1. Двойное отрицание обязательно: nigdy + nie, nikt + nie, nic + nie
2. После отрицания — dopełniacz: nie widziałem CZEGO?

Склонение "nic":
• Mianownik: nic
• Dopełniacz: niczego
• Biernik: nic

"Nie widziałem" требует dopełniacza → niczego (не "nic"!)

Полная конструкция:
• Nigdy nie widziałem niczego tak pięknego.
• (Никогда не видел ничего такого красивого.)

❌ Почему не A: "nic" — mianownik/biernik, но после "nie widziałem" нужен dopełniacz.
❌ Почему не C: "coś" — что-то (утвердительное), но здесь отрицание.
❌ Почему не D: "cokolwiek" — что угодно, не подходит к отрицательному контексту.

⚠️ Типичная ошибка: "nie widziałem nic" вместо "nie widziałem niczego"!`,
    explanationPl: `Podwójne przeczenie + dopełniacz — trudna kombinacja!

🔑 Zasada:

1. Podwójne przeczenie obowiązkowe: nigdy + nie, nikt + nie, nic + nie
2. Po przeczeniu — dopełniacz: nie widziałem CZEGO?

Odmiana "nic":
• Mianownik: nic
• Dopełniacz: niczego
• Biernik: nic

"Nie widziałem" wymaga dopełniacza → niczego.

❌ Dlaczego nie A: "nic" to mianownik/biernik, potrzebujemy dopełniacza.
❌ Dlaczego nie C, D: "coś/cokolwiek" to formy twierdzące, nie przeczące.

⚠️ Częsty błąd: "nie widziałem nic" zamiast "nie widziałem niczego"!`,
    topic: "Negacja — podwójne przeczenie i dopełniacz",
    difficulty: "high"
  },

  // TASK 38
  {
    id: "B1_WARUNEK_003",
    source: "pdf",
    question: "_______ wcześniej, zdążyłbyś na pociąg.",
    options: [
      { label: "A", text: "Gdybyś wyszedł" },
      { label: "B", text: "Jeśli wyjdziesz" },
      { label: "C", text: "Kiedy wyszedłeś" },
      { label: "D", text: "Że wyszedłeś" }
    ],
    correctAnswer: "A",
    explanationRu: `Это III тип условного предложения — нереальное условие в прошлом (то, что уже не произошло).

🔑 Структура III типа:

Gdyby + прошедшее время, ... + tryb warunkowy
• Gdybyś wyszedł wcześniej, zdążyłbyś. (Если бы ты вышел раньше, успел бы.)
• Gdybym wiedział, powiedziałbym ci. (Если бы я знал, сказал бы тебе.)

Это условие НЕРЕАЛЬНОЕ — человек НЕ вышел раньше и НЕ успел на поезд.

❌ Почему не B: "Jeśli wyjdziesz" — реальное условие в будущем, но "zdążyłbyś" — условное наклонение (нереальное).
❌ Почему не C: "Kiedy wyszedłeś" — временной союз "когда", не условный.
❌ Почему не D: "Że wyszedłeś" — союз "что", не условный.

⚠️ Согласование: gdyby + прошедшее → главное предложение в trybie warunkowym!`,
    explanationPl: `To III typ zdania warunkowego — warunek nierealny w przeszłości.

🔑 Struktura III typu:

Gdyby + czas przeszły, ... + tryb warunkowy
• Gdybyś przyszedł, zobaczyłbyś.
• Gdybym miał czas, pojechałbym.

Warunek NIEREALNY — osoba NIE wyszła wcześniej i NIE zdążyła.

❌ Dlaczego nie B: "Jeśli wyjdziesz" to warunek realny w przyszłości.
❌ Dlaczego nie C: "Kiedy" to spójnik czasowy, nie warunkowy.
❌ Dlaczego nie D: "Że" wprowadza fakt, nie warunek.

💡 Zgodność: gdyby + przeszły → zdanie główne w trybie warunkowym!`,
    topic: "Zdania warunkowe — gdyby w czasie przeszłym (III tryb warunkowy)",
    difficulty: "high"
  },

  // TASK 39
  {
    id: "B1_ZAIMKI_002",
    source: "pdf",
    question: "Kogo zapraszasz na imprezę? — Zapraszam _______, nie jego.",
    options: [
      { label: "A", text: "ją" },
      { label: "B", text: "nią" },
      { label: "C", text: "jej" },
      { label: "D", text: "ona" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь нужна акцентированная (długa) форма местоимения, потому что есть противопоставление!

🔑 Правило:

Формы короткие (nieakcentowane): go, ją, mu, jej...
• Используются в нейтральном контексте
• Widzę ją. (Вижу её — нейтрально)

Формы длинные (akcentowane): jego, nią, jemu, niej...
• Используются при АКЦЕНТЕ, противопоставлении, после предлогов
• Widzę NIĄ, nie jego! (Вижу ЕЁ, не его! — акцент)
• Idę z nią. (Иду с ней — после предлога)

В предложении: "_______, nie jego" — противопоставление → нужна акцентированная форма → nią.

❌ Почему не A: "ją" — короткая форма, не подходит для акцента.
❌ Почему не C: "jej" — dopełniacz/celownik, но "zapraszać" требует biernika.
❌ Почему не D: "ona" — mianownik, только для подлежащего.`,
    explanationPl: `Potrzebujemy formy akcentowanej (długiej), bo jest przeciwstawienie!

🔑 Zasada:

Formy krótkie (nieakcentowane): go, ją, mu...
• Neutralny kontekst
• Widzę ją.

Formy długie (akcentowane): jego, nią, jemu...
• AKCENT, przeciwstawienie, po przyimkach
• Widzę NIĄ, nie jego!
• Idę z nią.

"_______, nie jego" — przeciwstawienie → forma akcentowana → nią.

❌ Dlaczego nie A: "ją" to forma krótka, nieakcentowana.
❌ Dlaczego nie C: "jej" to dopełniacz/celownik, nie biernik.
❌ Dlaczego nie D: "ona" to mianownik.`,
    topic: "Zaimki osobowe — formy akcentowane vs nieakcentowane",
    difficulty: "high"
  },

  // TASK 40
  {
    id: "B1_SPOJNIKI_003",
    source: "pdf",
    question: "Ja ciężko pracuję, _______ ty tylko siedzisz i nic nie robisz.",
    options: [
      { label: "A", text: "kiedy" },
      { label: "B", text: "gdy" },
      { label: "C", text: "podczas gdy" },
      { label: "D", text: "dopóki" }
    ],
    correctAnswer: "C",
    explanationRu: `Здесь нужен союз, выражающий контраст (противопоставление), а не просто время.

🔑 Разница:

PODCZAS GDY — в то время как, тогда как (КОНТРАСТ):
• Ja pracuję, podczas gdy ty odpoczywasz. (Я работаю, тогда как ты отдыхаешь)
• Подчёркивает противопоставление двух действий/ситуаций

GDY / KIEDY — когда (ВРЕМЯ):
• Gdy przyszedłem, ona już spała. (Когда я пришёл, она уже спала)
• Просто указывает на время

DOPÓKI — пока (не):
• Dopóki nie skończysz, nie wyjdziesz.

В предложении: "Я работаю" vs "ты ничего не делаешь" — явный контраст → podczas gdy.

❌ Почему не A, B: "kiedy/gdy" — временные союзы, не выражают контраст так явно.
❌ Почему не D: "dopóki" — "пока", не подходит по смыслу.

⚠️ "Podczas gdy" — единственный союз, который ЯВНО выражает контраст!`,
    explanationPl: `Potrzebujemy spójnika wyrażającego kontrast, nie tylko czas.

🔑 Różnica:

PODCZAS GDY — tymczasem, w przeciwieństwie (KONTRAST):
• On się bawi, podczas gdy inni pracują.
• Podkreśla przeciwstawienie

GDY / KIEDY — wskazuje na czas:
• Gdy wróciłem, było ciemno.

DOPÓKI — do momentu, gdy:
• Dopóki żyję, będę walczyć.

"Ja pracuję" vs "ty nic nie robisz" — wyraźny kontrast → podczas gdy.

❌ Dlaczego nie A, B: "kiedy/gdy" to spójniki czasowe, nie kontrastowe.
❌ Dlaczego nie D: "dopóki" nie pasuje znaczeniowo.

💡 "Podczas gdy" to jedyny spójnik WYRAŹNIE wyrażający kontrast!`,
    topic: "Spójniki — podczas gdy vs gdy vs kiedy (kontrast vs czas)",
    difficulty: "high"
  },

  // TASK 41
  {
    id: "B1_REKCJA_005",
    source: "pdf",
    question: "Mama bardzo _______ mojego zdrowia, dlatego ciągle mi przypomina o lekarstwach.",
    options: [
      { label: "A", text: "boi się" },
      { label: "B", text: "boi się o" },
      { label: "C", text: "martwi" },
      { label: "D", text: "obawia" }
    ],
    correctAnswer: "B",
    explanationRu: `Глагол bać się имеет ДВЕ разные конструкции с разными значениями!

🔑 Разница:

bać się + dopełniacz (KOGO? CZEGO?) — бояться чего-то/кого-то:
• Boję się pająków. (Боюсь пауков.)
• Boję się ciemności. (Боюсь темноты.)
• Объект страха — то, что пугает

bać się O + biernik (O KOGO? O CO?) — бояться ЗА кого-то/что-то:
• Boję się o zdrowie. (Боюсь за здоровье — переживаю о нём.)
• Boję się o ciebie. (Боюсь за тебя — волнуюсь.)
• Объект заботы — то, о чём переживаешь

Контекст: мама переживает о здоровье сына → boi się o.

❌ Почему не A: "boi się mojego zdrowia" = боится здоровья (как будто здоровье пугает) — абсурд!
❌ Почему не C: "martwi" без "się" — неполная форма, нужно "martwi się o".
❌ Почему не D: "obawia" без "się" — неполная форма, нужно "obawia się".

⚠️ "Bać się czegoś" ≠ "bać się o coś"!`,
    explanationPl: `Czasownik bać się ma DWA różne znaczenia z różnymi konstrukcjami!

🔑 Różnica:

bać się + dopełniacz — odczuwać strach przed czymś:
• Boję się burzy. (burza mnie przeraża)
• Boję się egzaminu.

bać się O + biernik — martwić się o kogoś/coś:
• Boję się o zdrowie. (martwię się o nie)
• Boję się o przyszłość.

Kontekst: mama martwi się o zdrowie syna → boi się o.

❌ Dlaczego nie A: "boi się zdrowia" = zdrowie ją przeraża — absurd!
❌ Dlaczego nie C, D: "martwi/obawia" bez "się" to błąd.

💡 Pułapka: "bać się czegoś" ≠ "bać się o coś"!`,
    topic: "Rekcja czasowników — bać się + dopełniacz vs bać się o + biernik",
    difficulty: "high"
  },

  // TASK 42
  {
    id: "B1_ASPEKT_006",
    source: "pdf",
    question: "Zawsze _______ o jej urodzinach! W tym roku znowu nie kupiłem prezentu.",
    options: [
      { label: "A", text: "zapomniałem" },
      { label: "B", text: "zapominam" },
      { label: "C", text: "zapomnę" },
      { label: "D", text: "zapomniałbym" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь нужен несовершенный вид в настоящем времени, потому что действие ПОВТОРЯЕТСЯ регулярно.

🔑 Анализ:

Маркер "zawsze" (всегда) указывает на повторяющееся действие → aspekt niedokonany + czas teraźniejszy.

zapominam (niedok., teraźniejszy) — забываю (регулярно):
• Zawsze zapominam o urodzinach. (Всегда забываю — это моя привычка)

zapomniałem (dok., przeszły) — забыл (один раз):
• Wczoraj zapomniałem o spotkaniu. (Вчера забыл — один случай)

zapomnę (dok., przyszły) — забуду:
• Nie zapomnę o tym. (Не забуду)

Контекст: "zawsze" + "znowu" (опять) → регулярная проблема → zapominam.

❌ Почему не A: "zapomniałem" — однократное действие в прошлом, но "zawsze" указывает на привычку.
❌ Почему не C: "zapomnę" — будущее время, не подходит.
❌ Почему не D: "zapomniałbym" — условное наклонение, не подходит.`,
    explanationPl: `Potrzebujemy aspektu niedokonanego w czasie teraźniejszym, bo czynność POWTARZA SIĘ regularnie.

🔑 Analiza:

Marker "zawsze" wskazuje na powtarzalność → aspekt niedokonany + czas teraźniejszy.

zapominam (niedok., teraźniejszy) — regularnie:
• Zawsze zapominam klucze.

zapomniałem (dok., przeszły) — jednorazowo:
• Wczoraj zapomniałem portfela.

Kontekst: "zawsze" + "znowu" → regularna sytuacja → zapominam.

❌ Dlaczego nie A: "zapomniałem" to jednorazowa czynność, nie nawyk.`,
    topic: "Aspekt czasownika — zapominać vs zapomnieć + kontekst",
    difficulty: "high"
  },

  // TASK 43
  {
    id: "B1_PRZYIMKI_006",
    source: "pdf",
    question: "Spotkajmy się _______ o godzinie 19.",
    options: [
      { label: "A", text: "przed teatr" },
      { label: "B", text: "przed teatrem" },
      { label: "C", text: "do teatru" },
      { label: "D", text: "przy teatrze" }
    ],
    correctAnswer: "B",
    explanationRu: `Предлог przed + narzędnik означает "перед" (место) или "до" (время).

🔑 Правило:

PRZED + narzędnik — перед чем-то (место/время):
• Stoimy przed teatrem. (Стоим перед театром — место)
• Przed obiadem. (Перед обедом — время)

Здесь "przed teatrem" = перед зданием театра (место встречи).

❌ Почему не A: "przed teatr" — biernik после "przed" не используется! Это грубая ошибка.
❌ Почему не C: "do teatru" — "в театр" (направление), не "перед театром".
❌ Почему не D: "przy teatrze" — "у театра, рядом с театром" — возможно по смыслу, но менее точно.

⚠️ Ловушка для русскоязычных: в русском "перед" + винительный, в польском "przed" + narzędnik!`,
    explanationPl: `Przyimek przed + narzędnik oznacza "przed czymś" (miejsce lub czas).

🔑 Zasada:

PRZED + narzędnik:
• Stoimy przed teatrem. (miejsce)
• Przed wyjściem. (czas)

"Przed teatrem" = przed budynkiem teatru (miejsce spotkania).

❌ Dlaczego nie A: "przed teatr" — biernik po "przed" to błąd!
❌ Dlaczego nie C: "do teatru" = kierunek, nie miejsce.
❌ Dlaczego nie D: "przy teatrze" — możliwe, ale mniej precyzyjne.

💡 Pamiętaj: PRZED + narzędnik (przed domem, przed szkołą, przed teatrem).`,
    topic: "Przyimki — przed + narzędnik vs przed + biernik (czas vs miejsce)",
    difficulty: "high"
  },

  // TASK 44
  {
    id: "B1_BIERNA_005",
    source: "pdf",
    question: "Wszystkie okna w domu _______ przez burzę.",
    options: [
      { label: "A", text: "zostały wybite" },
      { label: "B", text: "został wybity" },
      { label: "C", text: "została wybita" },
      { label: "D", text: "zostało wybite" }
    ],
    correctAnswer: "A",
    explanationRu: `В страдательном залоге imiesłów bierny должен согласовываться с подлежащим в РОДЕ и ЧИСЛЕ!

🔑 Анализ:

Подлежащее: wszystkie okna (все окна)
• "okno" — rodzaj nijaki (средний род)
• "okna" — liczba mnoga (множественное число)
• Форма: zostały + wybite (мн.ч., ср.р. → -e)

Согласование imiesłowu biernego:
• rodzaj męski, l.poj.: został wybity
• rodzaj żeński, l.poj.: została wybita
• rodzaj nijaki, l.poj.: zostało wybite
• liczba mnoga (niemęskoosobowa): zostały wybite ✅

❌ Почему не B: "został wybity" — м.р., ед.ч., но "okna" — мн.ч.
❌ Почему не C: "została wybita" — ж.р., ед.ч.
❌ Почему не D: "zostało wybite" — ср.р., ед.ч., но "okna" — мн.ч.

⚠️ Ключ: "okna" (мн.ч.) → "zostały" (мн.ч.) + "wybite" (мн.ч., niemęskoosobowa)!`,
    explanationPl: `W stronie biernej imiesłów bierny musi zgadzać się z podmiotem w RODZAJU i LICZBIE!

🔑 Analiza:

Podmiot: wszystkie okna
• "okno" — rodzaj nijaki
• "okna" — liczba mnoga
• Forma: zostały + wybite (l.mn., niemęskoosobowa)

Zgodność imiesłowu:
• r. męski, l.poj.: został wybity
• r. żeński, l.poj.: została wybita
• r. nijaki, l.poj.: zostało wybite
• l.mn. (niemęskoosobowa): zostały wybite ✅

❌ Dlaczego nie B, C, D: złe formy rodzaju lub liczby.

💡 Klucz: "okna" (l.mn.) → "zostały" (l.mn.) + "wybite" (l.mn.)!`,
    topic: "Strona bierna — imiesłów bierny: rodzaj i liczba",
    difficulty: "high"
  },

  // TASK 45
  {
    id: "B1_SWOJ_005",
    source: "pdf",
    question: "Trzeba dbać o _______ zdrowie.",
    options: [
      { label: "A", text: "swoje" },
      { label: "B", text: "moje" },
      { label: "C", text: "twoje" },
      { label: "D", text: "jego" }
    ],
    correctAnswer: "A",
    explanationRu: `swój используется даже при БЕЗЛИЧНЫХ конструкциях!

🔑 Правило:

В безличных конструкциях (trzeba, można, warto, należy...) swój относится к подразумеваемому субъекту — "каждый", "человек вообще".

• Trzeba dbać o swoje zdrowie. (Нужно заботиться о СВОЁМ здоровье — о здоровье каждого)
• Warto kochać swoją pracę. (Стоит любить СВОЮ работу)
• Należy szanować swoich rodziców. (Следует уважать СВОИХ родителей)

Это универсальное высказывание, не о конкретном "моём" или "твоём".

❌ Почему не B: "moje" — конкретно моё, но здесь общее правило для всех.
❌ Почему не C: "twoje" — конкретно твоё.
❌ Почему не D: "jego" — конкретно его (чьё-то чужое).

⚠️ "Swój" в безличных конструкциях = универсальный притяжательный!`,
    explanationPl: `swój używamy nawet w konstrukcjach BEZOSOBOWYCH!

🔑 Zasada:

W konstrukcjach bezosobowych (trzeba, można, warto, należy...) swój odnosi się do domyślnego podmiotu — "każdy", "człowiek w ogóle".

• Trzeba dbać o swoje zdrowie. (o zdrowie każdego)
• Warto kochać swoją pracę.
• Należy szanować swoich rodziców.

To uniwersalne stwierdzenie, nie o konkretnym "moim" czy "twoim".

❌ Dlaczego nie B, C, D: to formy konkretne, a tu chodzi o ogólną zasadę.

💡 "Swój" w konstrukcjach bezosobowych = uniwersalny zaimek dzierżawczy!`,
    topic: "Zaimki dzierżawcze — swój w bezokoliczniku",
    difficulty: "high"
  },

  // TASK 46
  {
    id: "B1_NEGACJA_004",
    source: "pdf",
    question: "Nie mam _______ pomysłu, co jej kupić na urodziny.",
    options: [
      { label: "A", text: "żaden" },
      { label: "B", text: "żadnego" },
      { label: "C", text: "jakiś" },
      { label: "D", text: "jakiegoś" }
    ],
    correctAnswer: "B",
    explanationRu: `отрицание требует dopełniacza + "żaden" должен согласовываться!

🔑 Анализ:

1. "Nie mam" → требует dopełniacza (не biernika!)
2. "pomysł" (м.р.) в dopełniaczu → "pomysłu"
3. "żaden" в dopełniaczu м.р. → "żadnego"

Полная форма: "Nie mam żadnego pomysłu."

Склонение "żaden" (м.р.):
• Mianownik: żaden
• Dopełniacz: żadnego
• Biernik: żaden / żadnego (одуш.)
• Narzędnik: żadnym

❌ Почему не A: "żaden" — mianownik, но после "nie mam" нужен dopełniacz.
❌ Почему не C: "jakiś" — "какой-то" (утвердительное), но здесь отрицание.
❌ Почему не D: "jakiegoś" — тоже утвердительное, не подходит к отрицанию.

⚠️ Правило: NIE + żaden/żadna/żadne (не jakiś/jakaś/jakieś!)`,
    explanationPl: `przeczenie wymaga dopełniacza + "żaden" musi się zgadzać!

🔑 Analiza:

1. "Nie mam" → wymaga dopełniacza
2. "pomysł" (r.m.) w dopełniaczu → "pomysłu"
3. "żaden" w dopełniaczu r.m. → "żadnego"

Pełna forma: "Nie mam żadnego pomysłu."

Odmiana "żaden" (r.m.):
• Mianownik: żaden
• Dopełniacz: żadnego

❌ Dlaczego nie A: "żaden" to mianownik, potrzebujemy dopełniacza.
❌ Dlaczego nie C, D: "jakiś/jakiegoś" to formy twierdzące, nie przeczące.

💡 Zasada: NIE + żaden (nie jakiś!)`,
    topic: "Negacja — żaden vs żadnego (przypadek po przeczeniu)",
    difficulty: "high"
  },

  // TASK 47
  {
    id: "B1_ZEBY_004",
    source: "pdf",
    question: "Powiedział mi, _______ jutro nie przyjdzie do pracy.",
    options: [
      { label: "A", text: "żeby" },
      { label: "B", text: "żebym" },
      { label: "C", text: "że" },
      { label: "D", text: "aby" }
    ],
    correctAnswer: "C",
    explanationRu: `После глаголов СООБЩЕНИЯ (powiedzieć, mówić, napisać...) используется że (что), а не żeby (чтобы)!

🔑 Разница:

ŻE — вводит ФАКТ, информацию:
• Powiedział, że jest chory. (Сказал, ЧТО болен — информация)
• Wiem, że masz rację. (Знаю, ЧТО ты прав)

ŻEBY — вводит ПРОСЬБУ, желание, цель:
• Powiedział, żebym przyszedł. (Сказал, ЧТОБЫ я пришёл — просьба)
• Chcę, żebyś został. (Хочу, ЧТОБЫ ты остался)

Контекст: "nie przyjdzie" — это ФАКТ (он сообщает информацию), не просьба → że.

❌ Почему не A: "żeby" вводит просьбу/цель, но здесь информация.
❌ Почему не B: "żebym" — просьба ко мне, но он говорит о СЕБЕ.
❌ Почему не D: "aby" = żeby (более книжный), тоже для просьбы/цели.

⚠️ Ловушка: "Powiedział, że..." (факт) vs "Powiedział, żebym..." (просьба)!`,
    explanationPl: `Po czasownikach MÓWIENIA (powiedzieć, mówić, napisać...) używamy że (fakt), nie żeby (prośba)!

🔑 Różnica:

ŻE — wprowadza FAKT, informację:
• Powiedział, że jest zmęczony. (informacja)
• Wiem, że to prawda.

ŻEBY — wprowadza PROŚBĘ, życzenie, cel:
• Powiedział, żebym poczekał. (prośba)
• Chcę, żebyś przyszedł.

Kontekst: "nie przyjdzie" — to FAKT (informuje o sobie) → że.

❌ Dlaczego nie A, D: "żeby/aby" wprowadzają prośbę, nie fakt.
❌ Dlaczego nie B: "żebym" to prośba do mnie, ale on mówi o SOBIE.

💡 Pułapka: "Powiedział, że..." (fakt) vs "Powiedział, żebym..." (prośba)!`,
    topic: "Żeby vs że — po czasownikach mówienia",
    difficulty: "high"
  },

  // TASK 48
  {
    id: "B1_WARUNEK_004",
    source: "pdf",
    question: "Pójdę na spacer, _______ będzie padać.",
    options: [
      { label: "A", text: "jeśli" },
      { label: "B", text: "chyba że" },
      { label: "C", text: "gdyby" },
      { label: "D", text: "dlatego że" }
    ],
    correctAnswer: "B",
    explanationRu: `Здесь нужен союз, выражающий ИСКЛЮЧЕНИЕ из условия — "если только не", "разве что".

🔑 Разница:

CHYBA ŻE — если только не, разве что (исключение):
• Pójdę, chyba że będzie padać. (Пойду, если только не будет дождя)
• Przyjdę, chyba że coś mi wypadnie. (Приду, разве что что-то случится)
• Логика: действие произойдёт, КРОМЕ случая X

JEŚLI — если (обычное условие):
• Pójdę, jeśli będzie ładna pogoda. (Пойду, если будет хорошая погода)
• Логика: действие произойдёт ПРИ условии X

GDYBY — если бы (нереальное):
• Poszedłbym, gdyby nie padało.

Контекст: "Pójdę" (пойду — намерение) + дождь как исключение → chyba że.

❌ Почему не A: "jeśli będzie padać" = если будет дождь, пойду — противоположный смысл!
❌ Почему не C: "gdyby" требует условного наклонения.
❌ Почему не D: "dlatego że" = потому что — не подходит по смыслу.`,
    explanationPl: `Potrzebujemy spójnika wyrażającego WYJĄTEK od warunku — "o ile nie", "pod warunkiem, że nie".

🔑 Różnica:

CHYBA ŻE — o ile nie, pod warunkiem, że nie (wyjątek):
• Pójdę, chyba że będzie padać. (pójdę, O ILE NIE będzie padać)
• Przyjdę, chyba że będę zajęty.
• Logika: czynność nastąpi, Z WYJĄTKIEM sytuacji X

JEŚLI — zwykły warunek:
• Pójdę, jeśli będzie słońce.
• Logika: czynność nastąpi POD WARUNKIEM X

Kontekst: "Pójdę" (zamiar) + deszcz jako wyjątek → chyba że.

❌ Dlaczego nie A: "jeśli będzie padać" = pójdę, gdy będzie padać — odwrotny sens!`,
    topic: "Zdania warunkowe — chyba że (wyjątek od warunku)",
    difficulty: "high"
  },

  // TASK 49
  {
    id: "B1_ZAIMKI_003",
    source: "pdf",
    question: "Kup coś dla _______ — zasługujesz na prezent!",
    options: [
      { label: "A", text: "się" },
      { label: "B", text: "siebie" },
      { label: "C", text: "sobie" },
      { label: "D", text: "sobą" }
    ],
    correctAnswer: "B",
    explanationRu: `После предлога нужна ПОЛНАЯ (акцентированная) форма местоимения, не "się"!

🔑 Правило:

SIĘ — краткая форма, используется с глаголами:
• Myję się. (Моюсь.)
• Cieszę się. (Радуюсь.)
• НИКОГДА после предлогов!

SIEBIE / SOBIE / SOBĄ — полные формы, используются после предлогов:
• dla siebie (для себя) — dopełniacz
• o sobie (о себе) — miejscownik
• z sobą (с собой) — narzędnik
• przed sobą (перед собой) — narzędnik

"Dla" требует dopełniacza → dla siebie.

❌ Почему не A: "się" не используется после предлогов!
❌ Почему не C: "sobie" — celownik/miejscownik, но "dla" требует dopełniacza.
❌ Почему не D: "sobą" — narzędnik, но "dla" требует dopełniacza.

⚠️ Запомни: после предлога ВСЕГДА полная форма (siebie/sobie/sobą), НИКОГДА "się"!`,
    explanationPl: `Po przyimku potrzebujemy PEŁNEJ formy zaimka, nie "się"!

🔑 Zasada:

SIĘ — forma krótka, tylko z czasownikami:
• Myję się.
• Cieszę się.
• NIGDY po przyimkach!

SIEBIE / SOBIE / SOBĄ — formy pełne, po przyimkach:
• dla siebie — dopełniacz
• o sobie — miejscownik
• z sobą — narzędnik

"Dla" wymaga dopełniacza → dla siebie.

❌ Dlaczego nie A: "się" nie występuje po przyimkach!
❌ Dlaczego nie C: "sobie" to celownik/miejscownik, nie dopełniacz.
❌ Dlaczego nie D: "sobą" to narzędnik, nie dopełniacz.

💡 Zapamiętaj: po przyimku ZAWSZE pełna forma!`,
    topic: "Zaimki osobowe — siebie vs się (forma akcentowana)",
    difficulty: "high"
  },

  // TASK 50
  {
    id: "B1_SPOJNIKI_004",
    source: "pdf",
    question: "Nie lubię _______ kawy, _______ herbaty — piję tylko wodę.",
    options: [
      { label: "A", text: "albo... albo" },
      { label: "B", text: "ani... ani" },
      { label: "C", text: "i... i" },
      { label: "D", text: "lub... lub" }
    ],
    correctAnswer: "B",
    explanationRu: `В ОТРИЦАТЕЛЬНЫХ предложениях используется ani...ani (ни...ни), а не "albo...albo" (или...или)!

🔑 Правило:

ANI...ANI — ни...ни (отрицание):
• Nie lubię ani kawy, ani herbaty. (Не люблю НИ кофе, НИ чай.)
• Nie mam ani czasu, ani pieniędzy.
• Используется ТОЛЬКО в отрицательных предложениях!

ALBO...ALBO — или...или (выбор):
• Wybieram albo kawę, albo herbatę. (Выбираю ИЛИ кофе, ИЛИ чай.)
• Используется в утвердительных предложениях

I...I — и...и (добавление):
• Lubię i kawę, i herbatę. (Люблю И кофе, И чай.)

Контекст: "Nie lubię" → отрицание → ani...ani.

❌ Почему не A: "albo...albo" — для выбора, не для отрицания.
❌ Почему не C: "i...i" — для утверждения ("люблю и то, и то").
❌ Почему не D: "lub...lub" — то же, что "albo...albo".`,
    explanationPl: `W zdaniach PRZECZĄCYCH używamy ani...ani, nie "albo...albo"!

🔑 Zasada:

ANI...ANI — przeczenie:
• Nie lubię ani mięsa, ani ryb.
• Nie mam ani czasu, ani ochoty.
• TYLKO w zdaniach przeczących!

ALBO...ALBO — wybór:
• Wybieram albo to, albo tamto.
• W zdaniach twierdzących

I...I — dodawanie:
• Lubię i to, i tamto.

Kontekst: "Nie lubię" → przeczenie → ani...ani.

❌ Dlaczego nie A, D: "albo/lub" to wybór, nie przeczenie.
❌ Dlaczego nie C: "i...i" to twierdzenie.`,
    topic: "Spójniki — ani...ani vs albo...albo (przeczenie vs wybór)",
    difficulty: "high"
  },

  // TASK 51
  {
    id: "B1_LICZEBNIKI_001",
    source: "pdf",
    question: "Na imprezie było _______ chłopców z naszej klasy.",
    options: [
      { label: "A", text: "pięć" },
      { label: "B", text: "pięciu" },
      { label: "C", text: "pięcioro" },
      { label: "D", text: "piąty" }
    ],
    correctAnswer: "B",
    explanationRu: `Числительные от 5 и выше с существительными мужского личного рода (męskoosobowe) требуют формы на -u + dopełniacz множественного числа.

🔑 Правило для męskoosobowe (ТОЛЬКО мужчины):
• 2, 3, 4 → dwóch/dwaj, trzech/trzej, czterech/czterej
• 5+ → pięciu, sześciu, siedmiu... + dopełniacz l.mn.

Здесь "chłopców" — это явно мужчины, поэтому используем pięciu.

Примеры:
• Pięciu mężczyzn pracuje w tej firmie.
• Widzę sześciu chłopców na boisku.

❌ Почему не A: "pięć" используется с niemęskoosobowymi: pięć książek, pięć kobiet, pięć domów.
❌ Почему не C: "pięcioro" — собирательное для смешанных групп или детей: pięcioro dzieci.
❌ Почему не D: "piąty" — порядковое числительное (пятый), не количественное.`,
    explanationPl: `Liczebniki od 5 wzwyż z rzeczownikami męskoosobowymi wymagają formy na -u + dopełniacz liczby mnogiej.

🔑 Reguła dla męskoosobowych (TYLKO mężczyźni):
• 5+ → pięciu, sześciu, siedmiu... + dopełniacz l.mn.

"Chłopców" to wyraźnie mężczyźni, więc używamy pięciu.

❌ Dlaczego nie A: "pięć" to forma dla niemęskoosobowych: pięć domów, pięć kobiet.
❌ Dlaczego nie C: "pięcioro" to liczebnik zbiorowy: pięcioro dzieci.
❌ Dlaczego nie D: "piąty" to liczebnik porządkowy, nie główny.`,
    topic: "Liczebniki główne — odmiana z rzeczownikami męskoosobowymi",
    difficulty: "high"
  },

  // TASK 52
  {
    id: "B1_LICZEBNIKI_002",
    source: "pdf",
    question: "W pokoju siedziało _______ — mężczyzna i kobieta.",
    options: [
      { label: "A", text: "dwa" },
      { label: "B", text: "dwóch" },
      { label: "C", text: "dwoje" },
      { label: "D", text: "dwie" }
    ],
    correctAnswer: "C",
    explanationRu: `Когда речь идёт о смешанной группе (мужчина + женщина), используется собирательное числительное dwoje.

🔑 Формы числительного "два":
• dwa — для мужского неличного и среднего рода: dwa domy, dwa okna
• dwie — для женского рода: dwie kobiety, dwie książki
• dwóch/dwaj — для мужского личного (ТОЛЬКО мужчины): dwóch mężczyzn
• dwoje — для смешанных групп или детей: dwoje ludzi, dwoje dzieci

❌ Почему не A: "dwa" — для неодушевлённых м.р. и среднего рода.
❌ Почему не B: "dwóch" — только для группы исключительно мужчин.
❌ Почему не D: "dwie" — только для женского рода.`,
    explanationPl: `Gdy mówimy o grupie mieszanej (mężczyzna + kobieta), używamy liczebnika zbiorowego dwoje.

🔑 Formy liczebnika "dwa":
• dwa — rodzaj męski nieżywotny i nijaki: dwa stoły, dwa krzesła
• dwie — rodzaj żeński: dwie dziewczyny
• dwóch/dwaj — rodzaj męskoosobowy (TYLKO mężczyźni): dwóch chłopców
• dwoje — grupy mieszane lub dzieci: dwoje przyjaciół

❌ Dlaczego nie A: "dwa" nie pasuje do osób.
❌ Dlaczego nie B: "dwóch" tylko dla samych mężczyzn.
❌ Dlaczego nie D: "dwie" tylko dla samych kobiet.`,
    topic: "Liczebniki główne — \"dwa\" vs \"dwóch\" vs \"dwoje\"",
    difficulty: "high"
  },

  // TASK 53
  {
    id: "B1_LICZEBNIKI_003",
    source: "pdf",
    question: "Nie widziałem _______ moich braci od tygodnia.",
    options: [
      { label: "A", text: "trzech" },
      { label: "B", text: "trzy" },
      { label: "C", text: "trzej" },
      { label: "D", text: "troje" }
    ],
    correctAnswer: "A",
    explanationRu: `После отрицания "nie widziałem" нужен dopełniacz. "Bracia" (братья) — это męskoosobowe, форма числительного "три" в dopełniaczu — trzech.

🔑 Odmiana "trzy" dla męskoosobowych:
• Mianownik: trzej / trzech (braci)
• Dopełniacz: trzech (braci)
• Celownik: trzem (braciom)
• Biernik: trzech (braci)
• Narzędnik: trzema (braćmi)
• Miejscownik: trzech (braciach)

❌ Почему не B: "trzy" — для niemęskoosobowych: trzy domy, trzy kobiety.
❌ Почему не C: "trzej" — mianownik, не dopełniacz.
❌ Почему не D: "troje" — собирательное: troje dzieci.`,
    explanationPl: `Po przeczeniu "nie widziałem" wymagany jest dopełniacz. "Bracia" to męskoosobowe, forma "trzy" w dopełniaczu to trzech.

🔑 Odmiana "trzy" (męskoosobowe):
• M: trzej / trzech
• D: trzech
• C: trzem
• B: trzech
• N: trzema
• Ms: trzech

❌ Dlaczego nie B: "trzy" to forma niemęskoosobowa.
❌ Dlaczego nie C: "trzej" to mianownik.
❌ Dlaczego nie D: "troje" to liczebnik zbiorowy.`,
    topic: "Liczebniki główne — odmiana w dopełniaczu",
    difficulty: "high"
  },

  // TASK 54
  {
    id: "B1_LICZEBNIKI_004",
    source: "pdf",
    question: "W Warszawie mieszka około _______ ludzi.",
    options: [
      { label: "A", text: "dwa miliony" },
      { label: "B", text: "dwóch milionów" },
      { label: "C", text: "dwa milionów" },
      { label: "D", text: "dwoma milionami" }
    ],
    correctAnswer: "B",
    explanationRu: `После "około" (около) требуется dopełniacz. Числительное "dwa" в dopełniaczu для "milion" (м.р.) — dwóch, а "milion" в dopełniaczu мн.ч. — milionów.

🔑 Правило для "milion" (rodzaj męski):
• Mianownik: dwa miliony (ludzi)
• Dopełniacz: dwóch milionów (ludzi)
• Narzędnik: dwoma milionami (ludzi)

После "około", "do", "od", "bez" → dopełniacz!

❌ Почему не A: "dwa miliony" — mianownik, но после "około" нужен dopełniacz.
❌ Почему не C: "dwa milionów" — неправильная комбинация падежей.
❌ Почему не D: "dwoma milionami" — narzędnik, здесь неуместен.`,
    explanationPl: `Po "około" wymagany jest dopełniacz. Liczebnik "dwa" w dopełniaczu dla "milion" (r. męski) to dwóch, a "milion" w dopełniaczu l.mn. to milionów.

🔑 Reguła dla "milion" (r. męski):
• M: dwa miliony
• D: dwóch milionów
• N: dwoma milionami

Po "około", "do", "od", "bez" → dopełniacz!

❌ Dlaczego nie A: "dwa miliony" to mianownik — po "około" potrzebny dopełniacz.
❌ Dlaczego nie C: "dwa milionów" — błędna kombinacja przypadków.
❌ Dlaczego nie D: "dwoma milionami" to narzędnik.`,
    topic: "Liczebniki główne — tysiąc, milion + przypadek",
    difficulty: "high"
  },

  // TASK 55
  {
    id: "B1_LICZEBNIKI_005",
    source: "pdf",
    question: "Mieszkam na _______ piętrze w nowym bloku.",
    options: [
      { label: "A", text: "trzecim" },
      { label: "B", text: "trzeci" },
      { label: "C", text: "trzecia" },
      { label: "D", text: "trzeciego" }
    ],
    correctAnswer: "A",
    explanationRu: `Предлог "na" + miejscownik для обозначения этажа. Порядковое числительное "trzeci" (третий) согласуется с "piętro" (средний род) в miejscowniku.

🔑 Odmiana "trzeci" (rodzaj nijaki):
• M: trzecie (piętro)
• D: trzeciego (piętra)
• C: trzeciemu (piętru)
• B: trzecie (piętro)
• N: trzecim (piętrem)
• Ms: trzecim (piętrze)

❌ Почему не B: "trzeci" — м.р., mianownik.
❌ Почему не C: "trzecia" — ж.р., mianownik.
❌ Почему не D: "trzeciego" — dopełniacz, не miejscownik.`,
    explanationPl: `Przyimek "na" + miejscownik dla określenia piętra. Liczebnik porządkowy "trzeci" zgadza się z "piętro" (rodzaj nijaki) w miejscowniku.

🔑 Odmiana "trzeci" (r. nijaki):
• M: trzecie
• D: trzeciego
• C: trzeciemu
• B: trzecie
• N: trzecim
• Ms: trzecim

❌ Dlaczego nie B: "trzeci" to r. męski, mianownik.
❌ Dlaczego nie C: "trzecia" to r. żeński.
❌ Dlaczego nie D: "trzeciego" to dopełniacz.`,
    topic: "Liczebniki porządkowe — odmiana w miejscowniku",
    difficulty: "high"
  },

  // TASK 56
  {
    id: "B1_LICZEBNIKI_006",
    source: "pdf",
    question: "Moja siostra ma _______ małych dzieci.",
    options: [
      { label: "A", text: "trzy" },
      { label: "B", text: "trzech" },
      { label: "C", text: "troje" },
      { label: "D", text: "trzej" }
    ],
    correctAnswer: "C",
    explanationRu: `Со словом "dzieci" (дети) используются собирательные числительные: dwoje, troje, czworo, pięcioro...

🔑 Правило для "dzieci":
• Dzieci — это plurale tantum (только мн.ч.), требует собирательных числительных
• dwoje dzieci, troje dzieci, czworo dzieci, pięcioro dzieci...

❌ Почему не A: "trzy" — для niemęskoosobowych: trzy książki, trzy koty.
❌ Почему не B: "trzech" — для męskoosobowych: trzech mężczyzn.
❌ Почему не D: "trzej" — mianownik męskoosobowy: trzej panowie.

💡 Также собирательные используются с: ludzie, osoby (в некоторых контекстах), rodzeństwo.`,
    explanationPl: `Z rzeczownikiem "dzieci" używamy liczebników zbiorowych: dwoje, troje, czworo, pięcioro...

🔑 Reguła dla "dzieci":
• "Dzieci" to plurale tantum — wymaga liczebników zbiorowych
• dwoje dzieci, troje dzieci, czworo dzieci...

❌ Dlaczego nie A: "trzy" dla niemęskoosobowych: trzy jabłka.
❌ Dlaczego nie B: "trzech" dla męskoosobowych: trzech studentów.
❌ Dlaczego nie D: "trzej" to mianownik męskoosobowy.

💡 Liczebniki zbiorowe także z: ludzie, osoby, rodzeństwo.`,
    topic: "Liczebniki zbiorowe — dwoje, troje, czworo + dzieci",
    difficulty: "high"
  },

  // TASK 57
  {
    id: "B1_LICZEBNIKI_007",
    source: "pdf",
    question: "W tej szkole uczy się około _______ uczniów.",
    options: [
      { label: "A", text: "trzysta" },
      { label: "B", text: "trzystu" },
      { label: "C", text: "trzechset" },
      { label: "D", text: "trzema setkami" }
    ],
    correctAnswer: "B",
    explanationRu: `После "około" (около) требуется dopełniacz. Форма "trzysta" в dopełniaczu — trzystu.

🔑 Odmiana "trzysta" (300):
• M: trzysta
• D: trzystu
• C: trzystu
• B: trzysta
• N: trzema setkami / trzystu
• Ms: trzystu

❌ Почему не A: "trzysta" — mianownik, но после "około" нужен dopełniacz.
❌ Почему не C: "trzechset" — неправильная форма, не существует.
❌ Почему не D: "trzema setkami" — narzędnik, здесь неуместен.`,
    explanationPl: `Po "około" wymagany jest dopełniacz. Forma "trzysta" w dopełniaczu to trzystu.

🔑 Odmiana "trzysta" (300):
• M: trzysta
• D: trzystu
• C: trzystu
• B: trzysta
• N: trzema setkami / trzystu
• Ms: trzystu

❌ Dlaczego nie A: "trzysta" to mianownik — po "około" potrzebny dopełniacz.
❌ Dlaczego nie C: "trzechset" — forma niepoprawna.
❌ Dlaczego nie D: "trzema setkami" to narzędnik.`,
    topic: "Liczebniki główne — sto, dwieście, trzysta + odmiana",
    difficulty: "high"
  },

  // TASK 58
  {
    id: "B1_LICZEBNIKI_008",
    source: "pdf",
    question: "Zostałam sama — nie mam ani _______ przyjaciółki w tym mieście.",
    options: [
      { label: "A", text: "jednej" },
      { label: "B", text: "jedna" },
      { label: "C", text: "jednego" },
      { label: "D", text: "jednym" }
    ],
    correctAnswer: "A",
    explanationRu: `После отрицания "nie mam" + "ani" нужен dopełniacz. "Przyjaciółka" — женский род, поэтому "jeden" в dopełniaczu ж.р. — jednej.

🔑 Odmiana "jeden" (rodzaj żeński):
• M: jedna (przyjaciółka)
• D: jednej (przyjaciółki)
• C: jednej (przyjaciółce)
• B: jedną (przyjaciółkę)
• N: jedną (przyjaciółką)
• Ms: jednej (przyjaciółce)

❌ Почему не B: "jedna" — mianownik, но после "nie mam" нужен dopełniacz.
❌ Почему не C: "jednego" — dopełniacz мужского/среднего рода.
❌ Почему не D: "jednym" — narzędnik/miejscownik мужского рода.`,
    explanationPl: `Po przeczeniu "nie mam" + "ani" wymagany jest dopełniacz. "Przyjaciółka" to rodzaj żeński, więc "jeden" w dopełniaczu r.ż. to jednej.

🔑 Odmiana "jeden" (r. żeński):
• M: jedna
• D: jednej
• C: jednej
• B: jedną
• N: jedną
• Ms: jednej

❌ Dlaczego nie B: "jedna" to mianownik.
❌ Dlaczego nie C: "jednego" to dopełniacz r. męskiego/nijakiego.
❌ Dlaczego nie D: "jednym" to narzędnik/miejscownik r. męskiego.`,
    topic: "Liczebniki główne — \"jeden\" odmiana z rzeczownikiem żeńskim",
    difficulty: "high"
  },

  // TASK 59
  {
    id: "B1_LICZEBNIKI_009",
    source: "pdf",
    question: "Rozmawiałem z _______ kolegami z pracy.",
    options: [
      { label: "A", text: "cztery" },
      { label: "B", text: "czterema" },
      { label: "C", text: "czterech" },
      { label: "D", text: "czterej" }
    ],
    correctAnswer: "B",
    explanationRu: `Предлог "z" требует narzędnika. Форма "cztery" в narzędniku — czterema (для всех родов).

🔑 Odmiana "cztery":
• M: cztery / czterej (męskoosobowe)
• D: czterech
• C: czterem
• B: cztery / czterech (męskoosobowe)
• N: czterema
• Ms: czterech

❌ Почему не A: "cztery" — mianownik/biernik, но после "z" нужен narzędnik.
❌ Почему не C: "czterech" — dopełniacz/biernik/miejscownik.
❌ Почему не D: "czterej" — mianownik męskoosobowy.`,
    explanationPl: `Przyimek "z" wymaga narzędnika. Forma "cztery" w narzędniku to czterema (dla wszystkich rodzajów).

🔑 Odmiana "cztery":
• M: cztery / czterej (męskoosobowe)
• D: czterech
• C: czterem
• B: cztery / czterech (męskoosobowe)
• N: czterema
• Ms: czterech

❌ Dlaczego nie A: "cztery" to mianownik/biernik — po "z" potrzebny narzędnik.
❌ Dlaczego nie C: "czterech" to dopełniacz/biernik/miejscownik.
❌ Dlaczego nie D: "czterej" to mianownik męskoosobowy.`,
    topic: "Liczebniki główne — \"cztery\" odmiana z męskoosobowymi",
    difficulty: "high"
  },

  // TASK 60
  {
    id: "B1_LICZEBNIKI_010",
    source: "pdf",
    question: "Spotkanie odbędzie się _______ marca.",
    options: [
      { label: "A", text: "piątego" },
      { label: "B", text: "piąty" },
      { label: "C", text: "pięć" },
      { label: "D", text: "piątym" }
    ],
    correctAnswer: "A",
    explanationRu: `Даты в польском языке выражаются порядковым числительным в dopełniaczu + название месяца в dopełniaczu.

🔑 Формула даты:
• [liczebnik porządkowy w D] + [miesiąc w D]
• piątego marca, dziesiątego kwietnia, dwudziestego pierwszego maja

❌ Почему не B: "piąty" — mianownik, но для даты нужен dopełniacz.
❌ Почему не C: "pięć" — количественное числительное, не порядковое.
❌ Почему не D: "piątym" — narzędnik/miejscownik.

💡 Запомни: "Którego jest dzisiaj?" — "Piątego." (dopełniacz!)`,
    explanationPl: `Daty w języku polskim wyrażamy liczebnikiem porządkowym w dopełniaczu + nazwa miesiąca w dopełniaczu.

🔑 Formuła daty:
• [liczebnik porządkowy w D] + [miesiąc w D]
• trzeciego stycznia, piętnastego lutego, trzydziestego grudnia

❌ Dlaczego nie B: "piąty" to mianownik — dla daty potrzebny dopełniacz.
❌ Dlaczego nie C: "pięć" to liczebnik główny, nie porządkowy.
❌ Dlaczego nie D: "piątym" to narzędnik/miejscownik.

💡 Pamiętaj: "Którego?" — "Piątego." (dopełniacz!)`,
    topic: "Liczebniki porządkowe — data w dopełniaczu",
    difficulty: "high"
  },

  // TASK 61
  {
    id: "B1_LICZEBNIKI_011",
    source: "pdf",
    question: "_______ bracia przyjechali na święta.",
    options: [
      { label: "A", text: "Oba" },
      { label: "B", text: "Obaj" },
      { label: "C", text: "Obie" },
      { label: "D", text: "Oboje" }
    ],
    correctAnswer: "B",
    explanationRu: `"Bracia" (братья) — это męskoosobowe (мужской личный род). Для męskoosobowych используется форма obaj.

🔑 Формы "oba/obaj/obie/oboje":
• obaj — męskoosobowe: obaj panowie, obaj bracia, obaj chłopcy
• oba — męski nieżywotny + nijaki: oba domy, oba okna
• obie — żeński: obie kobiety, obie siostry
• oboje — grupy mieszane lub dzieci: oboje rodzice, oboje dzieci

❌ Почему не A: "oba" — для неодушевлённого м.р. и среднего: oba samochody.
❌ Почему не C: "obie" — для женского рода: obie dziewczyny.
❌ Почему не D: "oboje" — для смешанных групп (мужчина + женщина): oboje rodzice.`,
    explanationPl: `"Bracia" to męskoosobowe. Dla męskoosobowych używamy formy obaj.

🔑 Formy "oba/obaj/obie/oboje":
• obaj — męskoosobowe: obaj koledzy, obaj synowie
• oba — męski nieżywotny + nijaki: oba krzesła
• obie — żeński: obie książki
• oboje — grupy mieszane lub dzieci: oboje rodzice, oboje dzieci

❌ Dlaczego nie A: "oba" dla nieżywotnych: oba telefony.
❌ Dlaczego nie C: "obie" dla żeńskich: obie córki.
❌ Dlaczego nie D: "oboje" dla mieszanych grup (mężczyzna + kobieta).`,
    topic: "Liczebniki główne — \"oba\" vs \"obaj\" vs \"obie\" vs \"oboje\"",
    difficulty: "high"
  },

  // TASK 62
  {
    id: "B1_LICZEBNIKI_012",
    source: "pdf",
    question: "Czekałem na nią _______ godziny.",
    options: [
      { label: "A", text: "półtora" },
      { label: "B", text: "półtorej" },
      { label: "C", text: "półtory" },
      { label: "D", text: "pół tora" }
    ],
    correctAnswer: "B",
    explanationRu: `"Godzina" — женский род. Числительное "полтора" для женского рода — półtorej + dopełniacz единственного числа.

🔑 Формы "półtora":
• półtora + D l.poj. — для м.р. и ср.р.: półtora roku, półtora litra
• półtorej + D l.poj. — для ж.р.: półtorej godziny, półtorej tony

❌ Почему не A: "półtora" — для мужского и среднего рода: półtora dnia.
❌ Почему не C: "półtory" — неправильная форма, не существует.
❌ Почему не D: "pół tora" — раздельное написание неверно.`,
    explanationPl: `"Godzina" to rodzaj żeński. Liczebnik "półtora" dla żeńskiego to półtorej + dopełniacz l.poj.

🔑 Formy "półtora":
• półtora + D l.poj. — dla r. męskiego i nijakiego: półtora metra
• półtorej + D l.poj. — dla r. żeńskiego: półtorej minuty

❌ Dlaczego nie A: "półtora" dla męskiego/nijakiego: półtora kilometra.
❌ Dlaczego nie C: "półtory" — forma niepoprawna.
❌ Dlaczego nie D: "pół tora" — błędna pisownia.`,
    topic: "Liczebniki główne — \"półtora\" vs \"półtorej\" + przypadek",
    difficulty: "high"
  },

  // TASK 63
  {
    id: "B1_LICZEBNIKI_013",
    source: "pdf",
    question: "Urodziłam się _______ stycznia tysiąc dziewięćset dziewięćdziesiątego roku.",
    options: [
      { label: "A", text: "pierwszego" },
      { label: "B", text: "jeden" },
      { label: "C", text: "jednego" },
      { label: "D", text: "pierwszym" }
    ],
    correctAnswer: "A",
    explanationRu: `В датах используются ПОРЯДКОВЫЕ числительные в dopełniaczu, не количественные!

🔑 Правило для дат:
• День = liczebnik porządkowy w dopełniaczu
• "1 января" = pierwszego stycznia (не "jednego"!)

❌ Почему не B: "jeden" — количественное в mianowniku, в датах не используется.
❌ Почему не C: "jednego" — количественное в dopełniaczu, но в датах нужно ПОРЯДКОВОЕ.
❌ Почему не D: "pierwszym" — narzędnik/miejscownik, но нужен dopełniacz.

⚠️ Ловушка: "jednego" выглядит логично (dopełniacz от "jeden"), но в датах ВСЕГДА порядковые!`,
    explanationPl: `W datach używamy liczebników PORZĄDKOWYCH w dopełniaczu, nie głównych!

🔑 Reguła dla dat:
• Dzień = liczebnik porządkowy w dopełniaczu
• "1 stycznia" = pierwszego stycznia (nie "jednego"!)

❌ Dlaczego nie B: "jeden" to liczebnik główny w mianowniku.
❌ Dlaczego nie C: "jednego" to liczebnik główny — w datach potrzebny PORZĄDKOWY.
❌ Dlaczego nie D: "pierwszym" to narzędnik/miejscownik.

💡 Pułapka: "jednego" wygląda logicznie, ale w datach ZAWSZE porządkowe!`,
    topic: "Liczebniki porządkowe — \"pierwszy\" vs \"jedna\" w datach",
    difficulty: "high"
  },

  // TASK 64
  {
    id: "B1_LICZEBNIKI_014",
    source: "pdf",
    question: "Kupiłem prezenty dla _______ rodziców.",
    options: [
      { label: "A", text: "obojga" },
      { label: "B", text: "oboje" },
      { label: "C", text: "obydwu" },
      { label: "D", text: "obu" }
    ],
    correctAnswer: "A",
    explanationRu: `"Rodzice" — это смешанная группа (отец + мать), требует собирательного числительного. После "dla" нужен dopełniacz. Форма "oboje" в dopełniaczu — obojga.

🔑 Odmiana "oboje":
• M: oboje
• D: obojga
• C: obojgu
• B: oboje / obojga
• N: obojgiem
• Ms: obojgu

❌ Почему не B: "oboje" — mianownik, но после "dla" нужен dopełniacz.
❌ Почему не C: "obydwu" — форма от "obydwa", не от "oboje".
❌ Почему не D: "obu" — dopełniacz от "oba/obaj", не от "oboje".`,
    explanationPl: `"Rodzice" to grupa mieszana (ojciec + matka), wymaga liczebnika zbiorowego. Po "dla" potrzebny dopełniacz. Forma "oboje" w dopełniaczu to obojga.

🔑 Odmiana "oboje":
• M: oboje
• D: obojga
• C: obojgu
• B: oboje / obojga
• N: obojgiem
• Ms: obojgu

❌ Dlaczego nie B: "oboje" to mianownik — po "dla" potrzebny dopełniacz.
❌ Dlaczego nie C: "obydwu" to forma od "obydwa", nie od "oboje".
❌ Dlaczego nie D: "obu" to dopełniacz od "oba/obaj".`,
    topic: "Liczebniki zbiorowe — \"oboje\" vs \"obydwoje\" + odmiana",
    difficulty: "high"
  },

  // TASK 65
  {
    id: "B1_LICZEBNIKI_015",
    source: "pdf",
    question: "W klasie jest dwadzieścia _______ uczeń.",
    options: [
      { label: "A", text: "jeden" },
      { label: "B", text: "jednego" },
      { label: "C", text: "pierwszego" },
      { label: "D", text: "jedna" }
    ],
    correctAnswer: "A",
    explanationRu: `Составные числительные с "jeden" на конце (21, 31, 41...) требуют существительного в mianowniku единственного числа.

🔑 Правило для 21, 31, 41...:
• dwadzieścia jeden + rzeczownik w M l.poj.
• dwadzieścia jeden uczeń, trzydzieści jeden rok, czterdzieści jeden grosz

❌ Почему не B: "jednego" — dopełniacz, но здесь нужен mianownik.
❌ Почему не C: "pierwszego" — порядковое числительное, здесь нужно количественное.
❌ Почему не D: "jedna" — женский род, но "uczeń" — мужской.`,
    explanationPl: `Liczebniki złożone z "jeden" na końcu (21, 31, 41...) wymagają rzeczownika w mianowniku liczby pojedynczej.

🔑 Reguła dla 21, 31, 41...:
• dwadzieścia jeden + rzeczownik w M l.poj.
• dwadzieścia jeden student, trzydzieści jeden dzień

❌ Dlaczego nie B: "jednego" to dopełniacz — tu potrzebny mianownik.
❌ Dlaczego nie C: "pierwszego" to liczebnik porządkowy — tu potrzebny główny.
❌ Dlaczego nie D: "jedna" to r. żeński — "uczeń" to r. męski.`,
    topic: "Liczebniki główne — \"dwadzieścia jeden\" + rzeczownik",
    difficulty: "high"
  },

  // TASK 66
  {
    id: "B1_LICZEBNIKI_016",
    source: "pdf",
    question: "Rozmawiałem z _______ kolegami z pracy.",
    options: [
      { label: "A", text: "kilka" },
      { label: "B", text: "kilku" },
      { label: "C", text: "kilkoma" },
      { label: "D", text: "kilkoro" }
    ],
    correctAnswer: "C",
    explanationRu: `Предлог "z" требует narzędnika. Форма "kilka" в narzędniku — kilkoma.

🔑 Odmiana "kilka":
• M: kilka
• D: kilku
• C: kilku
• B: kilka
• N: kilkoma
• Ms: kilku

Po "z" używamy narzędnika: z kilkoma kolegami.

❌ Почему не A: "kilka" — mianownik/biernik, но после "z" нужен narzędnik.
❌ Почему не B: "kilku" — dopełniacz/celownik/miejscownik, не narzędnik.
❌ Почему не D: "kilkoro" — собирательное для детей: kilkoro dzieci.`,
    explanationPl: `Przyimek "z" wymaga narzędnika. Forma "kilka" w narzędniku to kilkoma.

🔑 Odmiana "kilka":
• M: kilka
• D: kilku
• C: kilku
• B: kilka
• N: kilkoma
• Ms: kilku

Po "z" używamy narzędnika: z kilkoma kolegami.

❌ Dlaczego nie A: "kilka" to mianownik/biernik.
❌ Dlaczego nie B: "kilku" to dopełniacz/celownik/miejscownik.
❌ Dlaczego nie D: "kilkoro" to liczebnik zbiorowy: kilkoro dzieci.`,
    topic: "Liczebniki główne — \"kilka\" odmiana w narzędniku",
    difficulty: "high"
  },

  // TASK 67
  {
    id: "B1_LICZEBNIKI_017",
    source: "pdf",
    question: "Dałem klucze _______ sąsiadom — mężowi i żonie.",
    options: [
      { label: "A", text: "dwoje" },
      { label: "B", text: "dwóm" },
      { label: "C", text: "dwojgu" },
      { label: "D", text: "dwom" }
    ],
    correctAnswer: "C",
    explanationRu: `"Mąż i żona" — смешанная группа, требует собирательного числительного "dwoje". После "dałem" (кому?) нужен celownik. Форма "dwoje" в celowniku — dwojgu.

🔑 Odmiana "dwoje":
• M: dwoje
• D: dwojga
• C: dwojgu
• B: dwoje / dwojga
• N: dwojgiem
• Ms: dwojgu

❌ Почему не A: "dwoje" — mianownik, но нужен celownik.
❌ Почему не B: "dwóm" — celownik от "dwa/dwie", не от "dwoje".
❌ Почему не D: "dwom" — неправильная форма.`,
    explanationPl: `"Mąż i żona" to grupa mieszana, wymaga liczebnika zbiorowego "dwoje". Po "dałem" (komu?) potrzebny celownik. Forma "dwoje" w celowniku to dwojgu.

🔑 Odmiana "dwoje":
• M: dwoje
• D: dwojga
• C: dwojgu
• B: dwoje / dwojga
• N: dwojgiem
• Ms: dwojgu

❌ Dlaczego nie A: "dwoje" to mianownik.
❌ Dlaczego nie B: "dwóm" to celownik od "dwa/dwie", nie od "dwoje".
❌ Dlaczego nie D: "dwom" — forma niepoprawna.`,
    topic: "Liczebniki główne — \"dwoje\" odmiana w celowniku",
    difficulty: "high"
  },

  // TASK 68
  {
    id: "B1_LICZEBNIKI_018",
    source: "pdf",
    question: "Mieszkam w Polsce od _______ roku.",
    options: [
      { label: "A", text: "dwa tysiące dziesiątego" },
      { label: "B", text: "dwutysięcznego dziesiątego" },
      { label: "C", text: "dwa tysiące dziesiąty" },
      { label: "D", text: "dwutysięcznym dziesiątym" }
    ],
    correctAnswer: "A",
    explanationRu: `После "od" нужен dopełniacz. Год выражается порядковым числительным. "2010 rok" в dopełniaczu — dwa tysiące dziesiątego roku.

🔑 Правило для годов:
• Mianownik: rok dwa tysiące dziesiąty
• Dopełniacz: (od) dwa tysiące dziesiątego (roku)
• Miejscownik: (w) dwa tysiące dziesiątym (roku)

Обратите внимание: "dwa tysiące" не склоняется в составе года!

❌ Почему не B: "dwutysięcznego" — неправильная форма года.
❌ Почему не C: "dwa tysiące dziesiąty" — mianownik, но после "od" нужен dopełniacz.
❌ Почему не D: "dwutysięcznym dziesiątym" — miejscownik, но после "od" нужен dopełniacz.`,
    explanationPl: `Po "od" wymagany jest dopełniacz. Rok wyrażamy liczebnikiem porządkowym. "2010 rok" w dopełniaczu to dwa tysiące dziesiątego roku.

🔑 Reguła dla lat:
• M: rok dwa tysiące dziesiąty
• D: (od) dwa tysiące dziesiątego (roku)
• Ms: (w) dwa tysiące dziesiątym (roku)

Uwaga: "dwa tysiące" nie odmienia się w składzie roku!

❌ Dlaczego nie B: "dwutysięcznego" — błędna forma roku.
❌ Dlaczego nie C: "dwa tysiące dziesiąty" to mianownik.
❌ Dlaczego nie D: "dwutysięcznym dziesiątym" to miejscownik — po "od" potrzebny dopełniacz.`,
    topic: "Liczebniki porządkowe — rok w dopełniaczu",
    difficulty: "high"
  },

  // TASK 69
  {
    id: "B1_LICZEBNIKI_019",
    source: "pdf",
    question: "Do egzaminu przystąpiło około _______ osób.",
    options: [
      { label: "A", text: "pięćset" },
      { label: "B", text: "pięciuset" },
      { label: "C", text: "pięcioma setkami" },
      { label: "D", text: "pięćsetów" }
    ],
    correctAnswer: "B",
    explanationRu: `После "około" нужен dopełniacz. Форма "pięćset" (500) в dopełniaczu — pięciuset.

🔑 Odmiana "pięćset":
• M: pięćset
• D: pięciuset
• C: pięciuset
• B: pięćset
• N: pięciuset / pięcioma setkami
• Ms: pięciuset

❌ Почему не A: "pięćset" — mianownik, но после "około" нужен dopełniacz.
❌ Почему не C: "pięcioma setkami" — narzędnik, здесь неуместен.
❌ Почему не D: "pięćsetów" — неправильная форма, не существует.`,
    explanationPl: `Po "około" wymagany jest dopełniacz. Forma "pięćset" (500) w dopełniaczu to pięciuset.

🔑 Odmiana "pięćset":
• M: pięćset
• D: pięciuset
• C: pięciuset
• B: pięćset
• N: pięciuset / pięcioma setkami
• Ms: pięciuset

❌ Dlaczego nie A: "pięćset" to mianownik — po "około" potrzebny dopełniacz.
❌ Dlaczego nie C: "pięcioma setkami" to narzędnik.
❌ Dlaczego nie D: "pięćsetów" — forma niepoprawna.`,
    topic: "Liczebniki główne — \"pięćset\" vs \"pięciuset\" + odmiana",
    difficulty: "high"
  },

  // TASK 70
  {
    id: "B1_LICZEBNIKI_020",
    source: "pdf",
    question: "Przeczytałem już _______ tej książki.",
    options: [
      { label: "A", text: "połowa" },
      { label: "B", text: "połowę" },
      { label: "C", text: "połowy" },
      { label: "D", text: "półtora" }
    ],
    correctAnswer: "B",
    explanationRu: `"Przeczytać" требует biernika (co?). "Połowa" (половина) в bierniku — połowę.

🔑 Odmiana "połowa":
• M: połowa
• D: połowy
• C: połowie
• B: połowę
• N: połową
• Ms: połowie

❌ Почему не A: "połowa" — mianownik, но после "przeczytałem" нужен biernik.
❌ Почему не C: "połowy" — dopełniacz, не biernik.
❌ Почему не D: "półtora" — полтора, не половина.`,
    explanationPl: `"Przeczytać" wymaga biernika (co?). "Połowa" w bierniku to połowę.

🔑 Odmiana "połowa":
• M: połowa
• D: połowy
• C: połowie
• B: połowę
• N: połową
• Ms: połowie

❌ Dlaczego nie A: "połowa" to mianownik — po "przeczytałem" potrzebny biernik.
❌ Dlaczego nie C: "połowy" to dopełniacz.
❌ Dlaczego nie D: "półtora" to półtora, nie połowa.`,
    topic: "Liczebniki ułamkowe — \"połowa\" odmiana",
    difficulty: "high"
  },

  // TASK 71
  {
    id: "B1_LICZEBNIKI_021",
    source: "pdf",
    question: "_______ uczniów w naszej klasie to dziewczyny.",
    options: [
      { label: "A", text: "Jedna trzecia" },
      { label: "B", text: "Jednej trzeciej" },
      { label: "C", text: "Jedną trzecią" },
      { label: "D", text: "Jeden trzeci" }
    ],
    correctAnswer: "A",
    explanationRu: `Дробные числительные в роли подлежащего стоят в mianowniku. "Jedna trzecia" (одна третья) — это mianownik.

🔑 Odmiana "jedna trzecia":
• M: jedna trzecia
• D: jednej trzeciej
• C: jednej trzeciej
• B: jedną trzecią
• N: jedną trzecią
• Ms: jednej trzeciej

Здесь дробь — подлежащее ("Jedna trzecia uczniów TO dziewczyny"), поэтому mianownik.

❌ Почему не B: "jednej trzeciej" — dopełniacz, но подлежащее требует mianownika.
❌ Почему не C: "jedną trzecią" — biernik/narzędnik.
❌ Почему не D: "jeden trzeci" — неправильная форма дроби (смешение родов: "jeden" м.р. + "trzeci" м.р., но дробь — ж.р.).`,
    explanationPl: `Ułamki w roli podmiotu stoją w mianowniku. "Jedna trzecia" to mianownik.

🔑 Odmiana "jedna trzecia":
• M: jedna trzecia
• D: jednej trzeciej
• C: jednej trzeciej
• B: jedną trzecią
• N: jedną trzecią
• Ms: jednej trzeciej

Tu ułamek to podmiot ("Jedna trzecia uczniów TO dziewczyny"), więc mianownik.

❌ Dlaczego nie B: "jednej trzeciej" to dopełniacz.
❌ Dlaczego nie C: "jedną trzecią" to biernik/narzędnik.
❌ Dlaczego nie D: "jeden trzeci" — błędna forma ułamka (mieszanie rodzajów).`,
    topic: "Liczebniki ułamkowe — jedna trzecia, dwie piąte",
    difficulty: "high"
  },

  // TASK 72
  {
    id: "B1_LICZEBNIKI_022",
    source: "pdf",
    question: "Na konferencji było _______ profesorów z całego świata.",
    options: [
      { label: "A", text: "wiele" },
      { label: "B", text: "wielu" },
      { label: "C", text: "wieloma" },
      { label: "D", text: "wielkich" }
    ],
    correctAnswer: "B",
    explanationRu: `"Profesorowie" — это męskoosobowe (мужской личный род). Для męskoosobowych используется форма wielu (не "wiele"!).

🔑 Wiele vs wielu:
• wiele — dla niemęskoosobowych: wiele książek, wiele problemów, wiele kobiet
• wielu — dla męskoosobowych: wielu mężczyzn, wielu profesorów, wielu lekarzy

❌ Почему не A: "wiele" — для niemęskoosobowych, но "profesorowie" — męskoosobowe.
❌ Почему не C: "wieloma" — narzędnik, здесь неуместен (нет предлога "z").
❌ Почему не D: "wielkich" — прилагательное "wielki" в dopełniaczu, не числительное.`,
    explanationPl: `"Profesorowie" to męskoosobowe. Dla męskoosobowych używamy formy wielu (nie "wiele"!).

🔑 Wiele vs wielu:
• wiele — dla niemęskoosobowych: wiele spraw, wiele pytań
• wielu — dla męskoosobowych: wielu ludzi, wielu specjalistów

❌ Dlaczego nie A: "wiele" dla niemęskoosobowych — "profesorowie" to męskoosobowe.
❌ Dlaczego nie C: "wieloma" to narzędnik — tu niepotrzebny.
❌ Dlaczego nie D: "wielkich" to przymiotnik, nie liczebnik.`,
    topic: "Liczebniki nieokreślone — wielu vs wiele + męskoosobowe",
    difficulty: "high"
  },

  // TASK 73
  {
    id: "B1_LICZEBNIKI_023",
    source: "pdf",
    question: "_______ studentów zdało ten trudny egzamin.",
    options: [
      { label: "A", text: "Niewiele" },
      { label: "B", text: "Niewielu" },
      { label: "C", text: "Niewielka" },
      { label: "D", text: "Nieliczni" }
    ],
    correctAnswer: "B",
    explanationRu: `"Studenci" — это męskoosobowe (мужской личный род). Для męskoosobowych используется форма niewielu (не "niewiele"!).

🔑 Niewiele vs niewielu:
• niewiele — dla niemęskoosobowych: niewiele książek, niewiele czasu
• niewielu — dla męskoosobowych: niewielu studentów, niewielu chłopców

❌ Почему не A: "niewiele" — для niemęskoosobowych, но "studenci" — męskoosobowe.
❌ Почему не C: "niewielka" — прилагательное ж.р. ("niewielka grupa"), не числительное, не сочетается с "studentów zdało".
❌ Почему не D: "nieliczni" — прилагательное, требует согласования: "nieliczni studenci zdali" (не "studentów zdało").`,
    explanationPl: `"Studenci" to męskoosobowe. Dla męskoosobowych używamy formy niewielu (nie "niewiele"!).

🔑 Niewiele vs niewielu:
• niewiele — dla niemęskoosobowych: niewiele rzeczy
• niewielu — dla męskoosobowych: niewielu kolegów

❌ Dlaczego nie A: "niewiele" dla niemęskoosobowych — "studenci" to męskoosobowe.
❌ Dlaczego nie C: "niewielka" to przymiotnik r. żeńskiego — nie pasuje do "studentów zdało".
❌ Dlaczego nie D: "nieliczni" to przymiotnik — wymaga: "nieliczni studenci zdali" (nie "studentów zdało").`,
    topic: "Liczebniki nieokreślone — niewielu vs niewiele + męskoosobowe",
    difficulty: "high"
  },

  // TASK 74
  {
    id: "B1_LICZEBNIKI_024",
    source: "pdf",
    question: "W bibliotece jest _______ książek.",
    options: [
      { label: "A", text: "tysiąc dwieście trzydzieści pięć" },
      { label: "B", text: "tysiąca dwustu trzydziestu pięciu" },
      { label: "C", text: "tysiącem dwustu trzydziestu pięciu" },
      { label: "D", text: "tysiące dwieście trzydzieści pięć" }
    ],
    correctAnswer: "A",
    explanationRu: `В этой конструкции числительное стоит в базовой форме (mianownik), а существительное после числительного 5+ — в dopełniaczu мн.ч. ("książek").

🔑 Правило для составных числительных:
• В mianowniku все части в mianowniku: tysiąc + dwieście + trzydzieści + pięć
• Существительное после 5+ всегда в dopełniaczu мн.ч.: książek, osób, złotych
• В dopełniaczu все части в dopełniaczu: tysiąca + dwustu + trzydziestu + pięciu

❌ Почему не B: "tysiąca dwustu..." — dopełniacz, но здесь нужен mianownik.
❌ Почему не C: "tysiącem dwustu..." — смешение падежей (narzędnik + dopełniacz).
❌ Почему не D: "tysiące" — множественное число (2-4 tysiące), но здесь 1 tysiąc.`,
    explanationPl: `W tej konstrukcji liczebnik stoi w formie bazowej (mianownik), a rzeczownik po liczebniku 5+ — w dopełniaczu l.mn. ("książek").

🔑 Reguła dla liczebników złożonych:
• W mianowniku wszystkie części w mianowniku: tysiąc + dwieście + trzydzieści + pięć
• Rzeczownik po 5+ zawsze w dopełniaczu l.mn.: książek, osób, złotych
• W dopełniaczu wszystkie części w dopełniaczu: tysiąca + dwustu + trzydziestu + pięciu

❌ Dlaczego nie B: "tysiąca dwustu..." to dopełniacz.
❌ Dlaczego nie C: "tysiącem dwustu..." — mieszanie przypadków.
❌ Dlaczego nie D: "tysiące" to l.mn. (2-4 tysiące), tu 1 tysiąc.`,
    topic: "Liczebniki główne — tysiąc + setki + dziesiątki",
    difficulty: "high"
  },

  // TASK 75
  {
    id: "B1_LICZEBNIKI_025",
    source: "pdf",
    question: "Sprawdziłem ten dokument _______ i nie znalazłem żadnych błędów.",
    options: [
      { label: "A", text: "trzykrotnie" },
      { label: "B", text: "potrójnie" },
      { label: "C", text: "trzecio" },
      { label: "D", text: "trojakie" }
    ],
    correctAnswer: "A",
    explanationRu: `Для выражения "три раза" (количество повторений действия) используется trzykrotnie.

🔑 Różnica:
• trzykrotnie — три раза (повторение действия): sprawdziłem trzykrotnie
• potrójnie — тройным образом, в тройном размере: potrójnie zabezpieczony (защищённый тремя способами)

❌ Почему не B: "potrójnie" — означает "тройным образом/в тройном размере", не "три раза".
❌ Почему не C: "trzecio" — неправильная форма, не существует.
❌ Почему не D: "trojakie" — прилагательное "троякий", не наречие.`,
    explanationPl: `Dla wyrażenia "trzy razy" (powtórzenie czynności) używamy trzykrotnie.

🔑 Różnica:
• trzykrotnie — trzy razy (powtórzenie): przeczytałem trzykrotnie
• potrójnie — w potrójny sposób: potrójnie wzmocniony

❌ Dlaczego nie B: "potrójnie" oznacza "w potrójny sposób", nie "trzy razy".
❌ Dlaczego nie C: "trzecio" — forma niepoprawna.
❌ Dlaczego nie D: "trojakie" to przymiotnik, nie przysłówek.`,
    topic: "Liczebniki wielokrotne — trzykrotnie vs potrójnie vs trzy razy",
    difficulty: "high"
  },

  // TASK 76
  {
    id: "B1_LICZEBNIKI_026",
    source: "pdf",
    question: "To już _______ raz, kiedy ci to mówię!",
    options: [
      { label: "A", text: "setny" },
      { label: "B", text: "sto" },
      { label: "C", text: "setnego" },
      { label: "D", text: "stówy" }
    ],
    correctAnswer: "A",
    explanationRu: `Здесь нужно порядковое числительное "сотый" (который по счёту), не количественное "сто".

🔑 Główne vs porządkowe:
• sto (количественное) — sto złotych, sto osób
• setny (порядковое) — setny raz, setna rocznica

"Który raz?" → setny (порядковое)
"Ile razy?" → sto (количественное)

❌ Почему не B: "sto" — количественное, но вопрос "который раз?" требует порядкового.
❌ Почему не C: "setnego" — dopełniacz порядкового, но здесь нужен mianownik.
❌ Почему не D: "stówy" — разговорное существительное, означающее "сотня злотых" (100 zł), не подходит в контексте "raz".`,
    explanationPl: `Tu potrzebny liczebnik porządkowy "setny" (który z kolei), nie główny "sto".

🔑 Główne vs porządkowe:
• sto (główny) — sto książek
• setny (porządkowy) — setny raz, setna strona

"Który raz?" → setny (porządkowy)
"Ile razy?" → sto (główny)

❌ Dlaczego nie B: "sto" to główny — pytanie "który raz?" wymaga porządkowego.
❌ Dlaczego nie C: "setnego" to dopełniacz — tu potrzebny mianownik.
❌ Dlaczego nie D: "stówy" to potoczny rzeczownik oznaczający "stuzłotówkę" — nie pasuje do kontekstu "raz".`,
    topic: "Liczebniki porządkowe — \"setny\" vs \"sto\" w kontekście",
    difficulty: "high"
  },

  // TASK 77
  {
    id: "B1_LICZEBNIKI_027",
    source: "pdf",
    question: "W rodzinie Kowalskich jest _______ rodzeństwa.",
    options: [
      { label: "A", text: "cztery" },
      { label: "B", text: "czterech" },
      { label: "C", text: "czworo" },
      { label: "D", text: "czwarty" }
    ],
    correctAnswer: "C",
    explanationRu: `"Rodzeństwo" (братья и сёстры) требует собирательного числительного: dwoje, troje, czworo, pięcioro...

🔑 Правило для "rodzeństwo":
• Rodzeństwo — это собирательное существительное (как dzieci)
• Требует собирательных числительных: czworo rodzeństwa

❌ Почему не A: "cztery" — для niemęskoosobowych: cztery książki.
❌ Почему не B: "czterech" — для męskoosobowych: czterech braci.
❌ Почему не D: "czwarty" — порядковое числительное (четвёртый).`,
    explanationPl: `"Rodzeństwo" wymaga liczebnika zbiorowego: dwoje, troje, czworo, pięcioro...

🔑 Reguła dla "rodzeństwo":
• Rodzeństwo to rzeczownik zbiorowy (jak dzieci)
• Wymaga liczebników zbiorowych: czworo rodzeństwa

❌ Dlaczego nie A: "cztery" dla niemęskoosobowych: cztery domy.
❌ Dlaczego nie B: "czterech" dla męskoosobowych: czterech kolegów.
❌ Dlaczego nie D: "czwarty" to liczebnik porządkowy.`,
    topic: "Liczebniki główne — \"czworo\" vs \"cztery\" vs \"czterech\"",
    difficulty: "high"
  },

  // TASK 78
  {
    id: "B1_LICZEBNIKI_028",
    source: "pdf",
    question: "Nie widziałem _______ filmów, o których mówisz.",
    options: [
      { label: "A", text: "obu" },
      { label: "B", text: "oba" },
      { label: "C", text: "obydwa" },
      { label: "D", text: "obydwóch" }
    ],
    correctAnswer: "A",
    explanationRu: `После отрицания "nie widziałem" нужен dopełniacz. "Filmy" — niemęskoosobowe. Форма "oba" в dopełniaczu — obu.

🔑 Odmiana "oba" (niemęskoosobowe):
• M: oba (filmy)
• D: obu (filmów)
• C: obu (filmom)
• B: oba (filmy)
• N: oboma / obu (filmami)
• Ms: obu (filmach)

❌ Почему не B: "oba" — mianownik/biernik, но после "nie widziałem" нужен dopełniacz.
❌ Почему не C: "obydwa" — mianownik/biernik, синоним "oba".
❌ Почему не D: "obydwóch" — форма, употребляемая с męskoosobowymi (obydwóch mężczyzn), но "filmy" — niemęskoosobowe, поэтому нужна форма "obu/obydwu".`,
    explanationPl: `Po przeczeniu "nie widziałem" wymagany jest dopełniacz. "Filmy" to niemęskoosobowe. Forma "oba" w dopełniaczu to obu.

🔑 Odmiana "oba" (niemęskoosobowe):
• M: oba
• D: obu
• C: obu
• B: oba
• N: oboma / obu
• Ms: obu

❌ Dlaczego nie B: "oba" to mianownik/biernik.
❌ Dlaczego nie C: "obydwa" to mianownik/biernik.
❌ Dlaczego nie D: "obydwóch" — forma używana z męskoosobowymi (obydwóch kolegów), ale "filmy" to niemęskoosobowe — potrzebna forma "obu/obydwu".`,
    topic: "Liczebniki główne — \"oba\" odmiana w dopełniaczu",
    difficulty: "high"
  },

  // TASK 79
  {
    id: "B1_LICZEBNIKI_029",
    source: "pdf",
    question: "Pojechałem na wakacje z _______ dzieci.",
    options: [
      { label: "A", text: "pięcioro" },
      { label: "B", text: "pięciorgiem" },
      { label: "C", text: "pięcioma" },
      { label: "D", text: "pięciu" }
    ],
    correctAnswer: "B",
    explanationRu: `"Dzieci" требует собирательного числительного. Предлог "z" требует narzędnika. Форма "pięcioro" в narzędniku — pięciorgiem.

🔑 Odmiana "pięcioro":
• M: pięcioro (dzieci)
• D: pięciorga (dzieci)
• C: pięciorgu (dzieciom)
• B: pięcioro (dzieci)
• N: pięciorgiem (dziećmi)
• Ms: pięciorgu (dzieciach)

❌ Почему не A: "pięcioro" — mianownik, но после "z" нужен narzędnik.
❌ Почему не C: "pięcioma" — narzędnik от "pięć", но с "dzieci" нужно собирательное.
❌ Почему не D: "pięciu" — форма для męskoosobowych, не для dzieci.`,
    explanationPl: `"Dzieci" wymaga liczebnika zbiorowego. Przyimek "z" wymaga narzędnika. Forma "pięcioro" w narzędniku to pięciorgiem.

🔑 Odmiana "pięcioro":
• M: pięcioro
• D: pięciorga
• C: pięciorgu
• B: pięcioro
• N: pięciorgiem
• Ms: pięciorgu

❌ Dlaczego nie A: "pięcioro" to mianownik.
❌ Dlaczego nie C: "pięcioma" to narzędnik od "pięć" — z "dzieci" potrzebny zbiorowy.
❌ Dlaczego nie D: "pięciu" to forma męskoosobowa.`,
    topic: "Liczebniki główne — \"pięcioro\" odmiana w narzędniku",
    difficulty: "high"
  },

  // TASK 80
  {
    id: "B1_LICZEBNIKI_030",
    source: "pdf",
    question: "Moja córka ma _______ lat.",
    options: [
      { label: "A", text: "osiemnaście" },
      { label: "B", text: "osiemnastu" },
      { label: "C", text: "osiemnasty" },
      { label: "D", text: "osiemnastego" }
    ],
    correctAnswer: "A",
    explanationRu: `"Mieć ... lat" — устойчивая конструкция. Числительное стоит в mianowniku/bierniku, а "lat" — в dopełniaczu мн.ч.

🔑 Конструкция "mieć X lat":
• Mam osiemnaście lat. (18)
• Mam dwadzieścia jeden lat. (21)
• Mam trzydzieści dwa lata. (32 — lata, не lat!)

❌ Почему не B: "osiemnastu" — dopełniacz/miejscownik, но в "mieć ... lat" нужен mianownik.
❌ Почему не C: "osiemnasty" — порядковое (восемнадцатый), не количественное.
❌ Почему не D: "osiemnastego" — dopełniacz порядкового.

⚠️ Ловушка: "osiemnastu" выглядит логично (как "pięciu studentów"), но с "lat" используется mianownik!`,
    explanationPl: `"Mieć ... lat" to stała konstrukcja. Liczebnik stoi w mianowniku/bierniku, a "lat" w dopełniaczu l.mn.

🔑 Konstrukcja "mieć X lat":
• Mam osiemnaście lat. (18)
• Mam dwadzieścia jeden lat. (21)
• Mam trzydzieści dwa lata. (32 — lata, nie lat!)

❌ Dlaczego nie B: "osiemnastu" to dopełniacz/miejscownik — w "mieć ... lat" potrzebny mianownik.
❌ Dlaczego nie C: "osiemnasty" to porządkowy (osiemnasty), nie główny.
❌ Dlaczego nie D: "osiemnastego" to dopełniacz porządkowego.

💡 Pułapka: "osiemnastu" wygląda logicznie (jak "pięciu studentów"), ale z "lat" używamy mianownika!`,
    topic: "Liczebniki główne — \"osiemnaście\" vs \"osiemnastu\" + wiek",
    difficulty: "high"
  }
  ,
  // ========================================================================
  // TASKS 81-90: TRANSFORMACJE (Sentence Transformations)
  // Batch 7 — High difficulty
  // ========================================================================
  {
    id: "B1_TRANSFORMACJE_001",
    source: "pdf",
    question: "Zdanie \"Policja zatrzymała złodzieja\" można przekształcić na:",
    options: [
      { label: "A", text: "Złodziej został zatrzymany przez policję." },
      { label: "B", text: "Złodziej był zatrzymany przez policję." },
      { label: "C", text: "Złodziej zatrzymał się przez policję." },
      { label: "D", text: "Złodzieja zatrzymała policja." }
    ],
    correctAnswer: "A",
    explanationRu: `Трансформация из активного залога в пассивный: подлежащее становится дополнением с "przez", а дополнение — подлежащим. Для выражения завершённого действия в прошлом используется zostać + imiesłów bierny.

🔑 Strona bierna:
• Действие завершённое → zostać + imiesłów: został zatrzymany
• Состояние/результат → być + imiesłów: był zatrzymany (но это означает "находился в состоянии задержания")

❌ Почему не B: "był zatrzymany" — описывает состояние, а не действие. Здесь нужно действие (zatrzymała → został zatrzymany).
❌ Почему не C: "zatrzymał się" — возвратный глагол, означает "остановился сам", не пассив.
❌ Почему не D: Это просто инверсия (OVS), а не пассивный залог.`,
    explanationPl: `Transformacja ze strony czynnej na bierną: podmiot staje się dopełnieniem z "przez", a dopełnienie — podmiotem. Dla wyrażenia czynności dokonanej w przeszłości używamy zostać + imiesłów bierny.

🔑 Strona bierna:
• Czynność dokonana → zostać + imiesłów: został zatrzymany
• Stan/rezultat → być + imiesłów: był zatrzymany (ale to oznacza "znajdował się w stanie zatrzymania")

❌ Dlaczego nie B: "był zatrzymany" opisuje stan, nie czynność.
❌ Dlaczego nie C: "zatrzymał się" to czasownik zwrotny — "sam się zatrzymał".
❌ Dlaczego nie D: To tylko inwersja (OVS), nie strona bierna.`,
    topic: "Transformacje — strona czynna → strona bierna",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_002",
    source: "pdf",
    question: "Marek powiedział wczoraj: \"Jutro pójdę do lekarza.\" → Marek powiedział, że _______.",
    options: [
      { label: "A", text: "jutro pójdzie do lekarza" },
      { label: "B", text: "następnego dnia pójdzie do lekarza" },
      { label: "C", text: "jutro poszedł do lekarza" },
      { label: "D", text: "następnego dnia poszedłby do lekarza" }
    ],
    correctAnswer: "B",
    explanationRu: `В косвенной речи (mowa zależna) меняются указатели времени: "jutro" → następnego dnia. Время глагола остаётся будущим (pójdzie), так как в польском языке нет строгого правила согласования времён как в английском.

🔑 Изменения в mowa zależna:
• jutro → następnego dnia
• wczoraj → poprzedniego dnia / dzień wcześniej
• dziś/dzisiaj → tego dnia / tamtego dnia
• tu/tutaj → tam

❌ Почему не A: Поскольку Марек говорил вчера, "jutro" уже прошло — нужно "następnego dnia".
❌ Почему не C: "poszedł" — прошедшее время, но действие планировалось на будущее.
❌ Почему не D: "poszedłby" — условное наклонение, здесь неуместно.`,
    explanationPl: `W mowie zależnej zmieniają się wskaźniki czasu: "jutro" → następnego dnia. Czas czasownika pozostaje przyszły (pójdzie).

🔑 Zmiany w mowie zależnej:
• jutro → następnego dnia
• wczoraj → poprzedniego dnia
• dziś → tego/tamtego dnia
• tu → tam

❌ Dlaczego nie A: Skoro Marek mówił wczoraj, "jutro" już minęło — potrzebne "następnego dnia".
❌ Dlaczego nie C: "poszedł" to czas przeszły — czynność była planowana na przyszłość.
❌ Dlaczego nie D: "poszedłby" to tryb warunkowy — tu niepotrzebny.`,
    topic: "Transformacje — mowa zależna (czas przeszły)",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_003",
    source: "pdf",
    question: "Zdanie \"Musisz to zrobić\" można przekształcić na:",
    options: [
      { label: "A", text: "Trzeba to zrobić." },
      { label: "B", text: "Trzeba ci to zrobić." },
      { label: "C", text: "Trzeba, żebyś to zrobił." },
      { label: "D", text: "Trzeba tobie to zrobić." }
    ],
    correctAnswer: "C",
    explanationRu: `"Musieć" (личный глагол) → "trzeba" (безличная конструкция). При трансформации нужно сохранить указание на лицо. "Trzeba" + żeby + forma osobowa сохраняет информацию о том, КТО должен это сделать.

🔑 Trzeba + лицо:
• Trzeba, żebym to zrobił. (ja)
• Trzeba, żebyś to zrobił. (ty)
• Trzeba, żeby on to zrobił. (on)

❌ Почему не A: "Trzeba to zrobić" — теряется информация о лице (кто должен?).
❌ Почему не B: "Trzeba ci to zrobić" — неправильная конструкция (celownik здесь не работает).
❌ Почему не D: "Trzeba tobie to zrobić" — то же самое, неправильная конструкция.`,
    explanationPl: `"Musieć" (czasownik osobowy) → "trzeba" (konstrukcja bezosobowa). Przy transformacji trzeba zachować wskazanie na osobę. "Trzeba" + żeby + forma osobowa zachowuje informację o tym, KTO ma to zrobić.

🔑 Trzeba + osoba:
• Trzeba, żebym to zrobił. (ja)
• Trzeba, żebyś to zrobił. (ty)
• Trzeba, żeby on to zrobił. (on)

❌ Dlaczego nie A: "Trzeba to zrobić" — gubi się informacja o osobie.
❌ Dlaczego nie B: "Trzeba ci to zrobić" — błędna konstrukcja.
❌ Dlaczego nie D: "Trzeba tobie to zrobić" — błędna konstrukcja.`,
    topic: "Transformacje — zdanie z \"musieć\" → zdanie z \"trzeba\"",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_004",
    source: "pdf",
    question: "Zdanie \"Wszyscy przyszli na spotkanie\" w formie przeczącej to:",
    options: [
      { label: "A", text: "Wszyscy nie przyszli na spotkanie." },
      { label: "B", text: "Nikt nie przyszedł na spotkanie." },
      { label: "C", text: "Nie wszyscy przyszli na spotkanie." },
      { label: "D", text: "Żaden nie przyszedł na spotkanie." }
    ],
    correctAnswer: "B",
    explanationRu: `Полное отрицание "wszyscy" (все) → nikt (никто). Обратите внимание на двойное отрицание в польском: "nikt NIE przyszedł".

🔑 Антонимы при отрицании:
• wszyscy → nikt (nie)
• wszystko → nic (nie)
• zawsze → nigdy (nie)
• wszędzie → nigdzie (nie)

❌ Почему не A: "Wszyscy nie przyszli" — грамматически неестественно, не используется.
❌ Почему не C: "Nie wszyscy przyszli" — означает "не все пришли" (частичное отрицание), а не полное.
❌ Почему не D: "Żaden nie przyszedł" — требует существительного: "Żaden student nie przyszedł".`,
    explanationPl: `Pełne zaprzeczenie "wszyscy" (wszyscy) → nikt (nikt). Uwaga na podwójne przeczenie: "nikt NIE przyszedł".

🔑 Antonimy przy przeczeniu:
• wszyscy → nikt (nie)
• wszystko → nic (nie)
• zawsze → nigdy (nie)
• wszędzie → nigdzie (nie)

❌ Dlaczego nie A: "Wszyscy nie przyszli" — nienaturalne, nie używa się.
❌ Dlaczego nie C: "Nie wszyscy przyszli" — oznacza częściowe zaprzeczenie ("nie wszyscy").
❌ Dlaczego nie D: "Żaden nie przyszedł" — wymaga rzeczownika: "Żaden student nie przyszedł".`,
    topic: "Transformacje — przeczenie z \"nikt\" / \"nic\"",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_005",
    source: "pdf",
    question: "Zdanie \"Jan jest wyższy od Piotra\" można przekształcić na zdanie ze stopniem najwyższym:",
    options: [
      { label: "A", text: "Jan jest najwyższy z Piotra." },
      { label: "B", text: "Jan jest najwyższym z nich dwóch." },
      { label: "C", text: "Jan jest wyższy najwyżej." },
      { label: "D", text: "Jan jest najwyższy niż Piotr." }
    ],
    correctAnswer: "B",
    explanationRu: `При трансформации из сравнительной степени в превосходную нужно указать группу сравнения. "Z nich dwóch" (из них двоих) — корректная конструкция.

🔑 Stopień najwyższy + группа:
• najwyższy z + dopełniacz: najwyższy z nich, najwyższy z grupy
• najwyższy w + miejscownik: najwyższy w klasie

❌ Почему не A: "z Piotra" — неправильно, нужна группа, а не один человек.
❌ Почему не C: "wyższy najwyżej" — бессмысленная комбинация.
❌ Почему не D: "najwyższy niż" — после превосходной степени не используется "niż".`,
    explanationPl: `Przy transformacji ze stopnia wyższego na najwyższy trzeba wskazać grupę porównania. "Z nich dwóch" — poprawna konstrukcja.

🔑 Stopień najwyższy + grupa:
• najwyższy z + dopełniacz: najwyższy z kolegów
• najwyższy w + miejscownik: najwyższy w klasie

❌ Dlaczego nie A: "z Piotra" — błędnie, potrzebna grupa, nie jedna osoba.
❌ Dlaczego nie C: "wyższy najwyżej" — bezsensowna kombinacja.
❌ Dlaczego nie D: "najwyższy niż" — po stopniu najwyższym nie używa się "niż".`,
    topic: "Transformacje — stopień wyższy → stopień najwyższy",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_006",
    source: "pdf",
    question: "Zdanie \"Jeśli będzie ładna pogoda, pójdziemy na spacer\" w formie nierealnej to:",
    options: [
      { label: "A", text: "Gdyby była ładna pogoda, poszlibyśmy na spacer." },
      { label: "B", text: "Jeśliby była ładna pogoda, poszlibyśmy na spacer." },
      { label: "C", text: "Gdyby będzie ładna pogoda, pójdziemy na spacer." },
      { label: "D", text: "Jak była ładna pogoda, poszliśmy na spacer." }
    ],
    correctAnswer: "A",
    explanationRu: `Реальное условие (jeśli + будущее) → нереальное условие (gdyby + tryb warunkowy). Это нереальное условие настоящего/будущего (гипотетическая ситуация).

🔑 Типы условных:
• Реальное: Jeśli będzie..., pójdziemy... (возможно)
• Нереальное (наст./буд.): Gdyby była..., poszlibyśmy... (гипотетически)
• Нереальное (прошлое): Gdyby była..., bylibyśmy poszli... (несбывшееся)

❌ Почему не B: "Jeśliby" — устаревшая/редкая форма, стандартно используется "gdyby".
❌ Почему не C: "Gdyby będzie" — смешение: gdyby требует trybu warunkowego, не будущего времени.
❌ Почему не D: "Jak była..., poszliśmy" — это реальное прошлое (факт), не нереальное условие.`,
    explanationPl: `Warunek realny (jeśli + przyszły) → warunek nierealny (gdyby + tryb warunkowy). To warunek nierealny teraźniejszy/przyszły (sytuacja hipotetyczna).

🔑 Typy warunków:
• Realny: Jeśli będzie..., pójdziemy... (możliwe)
• Nierealny (teraźn./przyszł.): Gdyby była..., poszlibyśmy... (hipotetycznie)
• Nierealny (przeszły): Gdyby była..., bylibyśmy poszli... (niespełnione)

❌ Dlaczego nie B: "Jeśliby" — forma archaiczna/rzadka, standardowo "gdyby".
❌ Dlaczego nie C: "Gdyby będzie" — mieszanie: gdyby wymaga trybu warunkowego.
❌ Dlaczego nie D: "Jak była..., poszliśmy" — to realna przeszłość (fakt), nie warunek nierealny.`,
    topic: "Transformacje — zdanie warunkowe realne → nierealne",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_007",
    source: "pdf",
    question: "Zdanie \"Chcę, żebyś mi pomógł\" można przekształcić na zdanie z bezokolicznikiem, jeśli:",
    options: [
      { label: "A", text: "Podmiot jest ten sam: \"Chcę ci pomóc.\"" },
      { label: "B", text: "Podmiot jest inny: \"Chcę pomóc ci.\"" },
      { label: "C", text: "Nie można przekształcić na bezokolicznik." },
      { label: "D", text: "Podmiot jest ten sam: \"Chcę, żebym ci pomógł.\"" }
    ],
    correctAnswer: "C",
    explanationRu: `Конструкция "chcieć + żeby" используется, когда подлежащие разные (я хочу, чтобы ТЫ помог). Трансформация в инфинитив возможна только при одинаковом подлежащем: "Chcę pomóc" (я хочу помочь — я сам).

🔑 Правило:
• Один субъект → инфинитив: Chcę iść. (я хочу идти — я сам)
• Разные субъекты → żeby: Chcę, żebyś poszedł. (я хочу, чтобы ты пошёл)

В данном случае подлежащие разные (ja chcę, ty pomagasz), поэтому нельзя использовать инфинитив.

❌ Почему не A: "Chcę ci pomóc" — меняет смысл: "Я хочу тебе помочь" ≠ "Я хочу, чтобы ты мне помог".
❌ Почему не B: То же самое — смысл меняется.
❌ Почему не D: "Chcę, żebym ci pomógł" — грамматически неверно (chcę + żebym = один субъект, тогда нужен инфинитив).`,
    explanationPl: `Konstrukcja "chcieć + żeby" używana jest, gdy podmioty są różne (ja chcę, żebyś TY pomógł). Transformacja na bezokolicznik możliwa tylko przy tym samym podmiocie.

🔑 Reguła:
• Ten sam podmiot → bezokolicznik: Chcę iść.
• Różne podmioty → żeby: Chcę, żebyś poszedł.

Tu podmioty są różne (ja chcę, ty pomagasz), więc nie można użyć bezokolicznika.

❌ Dlaczego nie A: "Chcę ci pomóc" zmienia sens: "Chcę ci pomóc" ≠ "Chcę, żebyś mi pomógł".
❌ Dlaczego nie B: To samo — sens się zmienia.
❌ Dlaczego nie D: "Chcę, żebym ci pomógł" — błędne (chcę + żebym = ten sam podmiot → bezokolicznik).`,
    topic: "Transformacje — zdanie z \"chcieć\" → zdanie z \"żeby\"",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_008",
    source: "pdf",
    question: "Zdanie \"Kiedy skończę pracę, zadzwonię do ciebie\" można przekształcić na:",
    options: [
      { label: "A", text: "Po skończeniu pracy zadzwonię do ciebie." },
      { label: "B", text: "Po skończyć pracę zadzwonię do ciebie." },
      { label: "C", text: "Po tym skończę pracę, zadzwonię do ciebie." },
      { label: "D", text: "Po pracy skończonej zadzwonię do ciebie." }
    ],
    correctAnswer: "A",
    explanationRu: `Придаточное времени с "kiedy" можно заменить предложной конструкцией "po + rzeczownik odsłowny" (отглагольное существительное в miejscowniku).

🔑 Трансформация:
• Kiedy skończę... → Po skończeniu...
• Kiedy wrócę... → Po powrocie...
• Kiedy przyjadę... → Po przyjeździe...

❌ Почему не B: "Po skończyć" — после "po" нужен rzeczownik, не bezokolicznik.
❌ Почему не C: "Po tym skończę" — неправильная конструкция.
❌ Почему не D: "Po pracy skończonej" — неестественный порядок слов и форма.`,
    explanationPl: `Zdanie czasowe z "kiedy" można zastąpić konstrukcją przyimkową "po + rzeczownik odsłowny" (w miejscowniku).

🔑 Transformacja:
• Kiedy skończę... → Po skończeniu...
• Kiedy wrócę... → Po powrocie...
• Kiedy przyjadę... → Po przyjeździe...

❌ Dlaczego nie B: "Po skończyć" — po "po" potrzebny rzeczownik, nie bezokolicznik.
❌ Dlaczego nie C: "Po tym skończę" — błędna konstrukcja.
❌ Dlaczego nie D: "Po pracy skończonej" — nienaturalny szyk i forma.`,
    topic: "Transformacje — zdanie czasowe z \"kiedy\" → z \"po\"",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_009",
    source: "pdf",
    question: "Zdanie \"Ten film jest bardzo interesujący\" można przekształcić na zdanie z rzeczownikiem:",
    options: [
      { label: "A", text: "Ten film ma dużo interesowania." },
      { label: "B", text: "Ten film budzi duże zainteresowanie." },
      { label: "C", text: "Ten film jest z interesem." },
      { label: "D", text: "Ten film interesuje bardzo." }
    ],
    correctAnswer: "B",
    explanationRu: `Прилагательное "interesujący" можно заменить конструкцией с отглагольным существительным "zainteresowanie". Глагол "budzić" (вызывать) + существительное — типичная трансформация.

🔑 Типичные пары:
• interesujący → budzi zainteresowanie
• smutny → wywołuje smutek
• radosny → sprawia radość

❌ Почему не A: "interesowanie" — неправильная форма существительного (правильно: zainteresowanie).
❌ Почему не C: "z interesem" — "interes" означает "дело/бизнес", не связано с "интересный".
❌ Почему не D: "interesuje bardzo" — это глагол, а не существительное; также неполное предложение (кого интересует?).`,
    explanationPl: `Przymiotnik "interesujący" można zastąpić konstrukcją z rzeczownikiem odsłownym "zainteresowanie". Czasownik "budzić" + rzeczownik — typowa transformacja.

🔑 Typowe pary:
• interesujący → budzi zainteresowanie
• smutny → wywołuje smutek
• radosny → sprawia radość

❌ Dlaczego nie A: "interesowanie" — błędna forma (poprawnie: zainteresowanie).
❌ Dlaczego nie C: "z interesem" — "interes" to "biznes", nie związane z "interesujący".
❌ Dlaczego nie D: "interesuje bardzo" — to czasownik, nie rzeczownik; też niepełne zdanie.`,
    topic: "Transformacje — zdanie z przymiotnikiem → z rzeczownikiem",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_010",
    source: "pdf",
    question: "Zdanie \"On lubi kawę\" w formie pytania pośredniego (po \"Nie wiem...\") to:",
    options: [
      { label: "A", text: "Nie wiem, on lubi kawę?" },
      { label: "B", text: "Nie wiem, czy on lubi kawę." },
      { label: "C", text: "Nie wiem, że on lubi kawę." },
      { label: "D", text: "Nie wiem, lub on lubi kawę." }
    ],
    correctAnswer: "B",
    explanationRu: `Косвенный вопрос (pytanie zależne) вводится союзом czy. Порядок слов остаётся как в утвердительном предложении.

🔑 Pytanie zależne:
• Прямой вопрос: Czy on lubi kawę?
• Косвенный вопрос: Nie wiem, czy on lubi kawę.

❌ Почему не A: Нельзя просто поставить вопросительный знак — нужен союз "czy".
❌ Почему не C: "że" вводит утверждение, не вопрос: "Wiem, że on lubi kawę" (я знаю, что...).
❌ Почему не D: "lub" — союз "или" для альтернативы, не для вопросов.`,
    explanationPl: `Pytanie zależne wprowadza się spójnikiem czy. Szyk wyrazów pozostaje jak w zdaniu twierdzącym.

🔑 Pytanie zależne:
• Pytanie bezpośrednie: Czy on lubi kawę?
• Pytanie zależne: Nie wiem, czy on lubi kawę.

❌ Dlaczego nie A: Nie można po prostu postawić znaku zapytania — potrzebny spójnik "czy".
❌ Dlaczego nie C: "że" wprowadza twierdzenie, nie pytanie: "Wiem, że on lubi kawę".
❌ Dlaczego nie D: "lub" to spójnik alternatywy, nie do pytań.`,
    topic: "Transformacje — zdanie twierdzące → pytanie z \"czy\"",
    difficulty: "high"
  }
  ,
  // ========================================================================
  // TASKS 91-100: TRANSFORMACJE (Sentence Transformations) — Part 2
  // Batch 8 — High difficulty
  // ========================================================================
  {
    id: "B1_TRANSFORMACJE_011",
    source: "pdf",
    question: "Która forma jest BŁĘDNA jako transformacja zdania \"Można to naprawić\"?",
    options: [
      { label: "A", text: "Da się to naprawić." },
      { label: "B", text: "To da się naprawić." },
      { label: "C", text: "To daje się naprawić." },
      { label: "D", text: "To się da naprawić." }
    ],
    correctAnswer: "C",
    explanationRu: `Конструкция da się — это застывшая безличная форма. Нельзя её изменять на "daje się" в значении "можно".

🔑 Poprawne formy:
• Da się to naprawić. ✓
• To da się naprawić. ✓
• To się da naprawić. ✓

❌ Почему C неправильно: "daje się" — грамматическая ошибка. Форма "da się" не спрягается, это застывшая конструкция.`,
    explanationPl: `Konstrukcja da się to zleksykalizowana forma bezosobowa. Nie można jej odmieniać na "daje się" w znaczeniu "można".

🔑 Poprawne formy:
• Da się to naprawić. ✓
• To da się naprawić. ✓
• To się da naprawić. ✓

❌ Dlaczego C błędne: "daje się" — błąd gramatyczny. Forma "da się" nie podlega odmianie.`,
    topic: "Transformacje — zdanie z \"można\" → zdanie z \"da się\"",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_012",
    source: "pdf",
    question: "Zdanie \"Ponieważ padał deszcz, zostaliśmy w domu\" można przekształcić na:",
    options: [
      { label: "A", text: "Zostaliśmy w domu, dlatego padał deszcz." },
      { label: "B", text: "Padał deszcz, więc zostaliśmy w domu." },
      { label: "C", text: "Padał deszcz, bo zostaliśmy w domu." },
      { label: "D", text: "Padał deszcz, żeby zostać w domu." }
    ],
    correctAnswer: "B",
    explanationRu: `Причинное предложение (ponieważ = потому что) → следственное предложение (więc = поэтому). Порядок частей меняется: причина идёт первой, затем следствие с "więc".

🔑 Причина → Следствие:
• Ponieważ X, Y. → X, więc Y.
• Ponieważ X, Y. → X, dlatego Y.

❌ Почему не A: Логика перевёрнута — дождь не шёл потому, что мы остались дома.
❌ Почему не C: "bo" вводит причину, а не следствие — смысл меняется на противоположный.
❌ Почему не D: "żeby" — цель, а не причина/следствие.`,
    explanationPl: `Zdanie przyczynowe (ponieważ) → zdanie skutkowe (więc). Kolejność części się zmienia: przyczyna najpierw, potem skutek z "więc".

🔑 Przyczyna → Skutek:
• Ponieważ X, Y. → X, więc Y.
• Ponieważ X, Y. → X, dlatego Y.

❌ Dlaczego nie A: Logika odwrócona — deszcz nie padał dlatego, że zostaliśmy w domu.
❌ Dlaczego nie C: "bo" wprowadza przyczynę, nie skutek — sens się odwraca.
❌ Dlaczego nie D: "żeby" — cel, nie przyczyna/skutek.`,
    topic: "Transformacje — zdanie przyczynowe → zdanie skutkowe",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_013",
    source: "pdf",
    question: "Zdanie \"Chociaż był zmęczony, poszedł na trening\" można przekształcić NA ZDANIE ZE SPÓJNIKIEM:",
    options: [
      { label: "A", text: "Mimo był zmęczony, poszedł na trening." },
      { label: "B", text: "Mimo to zmęczony, poszedł na trening." },
      { label: "C", text: "Mimo tego był zmęczony, poszedł na trening." },
      { label: "D", text: "Mimo że był zmęczony, poszedł na trening." }
    ],
    correctAnswer: "D",
    explanationRu: `"Chociaż" (хотя) = "mimo że" (несмотря на то что). Оба союза требуют после себя полного предложения с глаголом.

🔑 Синонимы (spójniki):
• chociaż = mimo że = pomimo że (+ zdanie)

❌ Почему не A: "Mimo" без "że" требует существительного (mimo zmęczenia), не предложения.
❌ Почему не B: "Mimo to" — это "тем не менее", ставится между двумя предложениями.
❌ Почему не C: "Mimo tego" требует существительного, не предложения.`,
    explanationPl: `"Chociaż" = "mimo że". Oba spójniki wymagają pełnego zdania z czasownikiem.

🔑 Synonimy (spójniki):
• chociaż = mimo że = pomimo że (+ zdanie)

❌ Dlaczego nie A: "Mimo" bez "że" wymaga rzeczownika (mimo zmęczenia), nie zdania.
❌ Dlaczego nie B: "Mimo to" — "niemniej jednak", stoi między dwoma zdaniami.
❌ Dlaczego nie C: "Mimo tego" wymaga rzeczownika, nie zdania.`,
    topic: "Transformacje — zdanie z \"chociaż\" → zdanie z \"mimo że\" (z użyciem spójnika)",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_014",
    source: "pdf",
    question: "Zdanie \"List został wysłany przez sekretarkę\" w stronie czynnej to:",
    options: [
      { label: "A", text: "Sekretarka została wysłana listem." },
      { label: "B", text: "List wysłał sekretarkę." },
      { label: "C", text: "Sekretarka wysłała list." },
      { label: "D", text: "Sekretarka wysyłała list." }
    ],
    correctAnswer: "C",
    explanationRu: `Пассив → актив: дополнение с "przez" становится подлежащим, а подлежащее пассива — дополнением. "Został wysłany" (совершённое действие) → "wysłała" (czas przeszły dokonany).

🔑 Strona bierna → czynna:
• X został zrobiony przez Y. → Y zrobił X.
• Аспект сохраняется: został (dok.) → wysłała (док.)

❌ Почему не A: Смысл перевёрнут — секретарку не отправляли.
❌ Почему не B: Смысл перевёрнут — письмо не отправляло секретаршу.
❌ Почему не D: "wysyłała" — niedokonany, а "został wysłany" — dokonany.`,
    explanationPl: `Strona bierna → czynna: dopełnienie z "przez" staje się podmiotem, a podmiot strony biernej — dopełnieniem. "Został wysłany" (czynność dokonana) → "wysłała" (czas przeszły dokonany).

🔑 Strona bierna → czynna:
• X został zrobiony przez Y. → Y zrobił X.
• Aspekt się zachowuje: został (dok.) → wysłała (dok.)

❌ Dlaczego nie A: Sens odwrócony — sekretarka nie została wysłana.
❌ Dlaczego nie B: Sens odwrócony — list nie wysłał sekretarki.
❌ Dlaczego nie D: "wysyłała" — niedokonany, a "został wysłany" — dokonany.`,
    topic: "Transformacje — strona bierna → strona czynna",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_015",
    source: "pdf",
    question: "Zdanie \"Zanim wyszedłem, sprawdziłem pogodę\" można przekształcić na:",
    options: [
      { label: "A", text: "Przed wyszedłem sprawdziłem pogodę." },
      { label: "B", text: "Przed wyjściem sprawdziłem pogodę." },
      { label: "C", text: "Przed tym wyszedłem, sprawdziłem pogodę." },
      { label: "D", text: "Przed wychodzeniem sprawdziłem pogodę." }
    ],
    correctAnswer: "B",
    explanationRu: `"Zanim" + zdanie → "przed" + rzeczownik odsłowny. Глагол "wyszedłem" (dokonany) → существительное "wyjście" (от wyjść).

🔑 Zanim + zdanie → Przed + rzeczownik:
• zanim wyszedłem → przed wyjściem
• zanim zjadłem → przed jedzeniem / przed posiłkiem

❌ Почему не A: "Przed" требует существительного, не глагола.
❌ Почему не C: "Przed tym" — неправильная конструкция в этом контексте.
❌ Почему не D: "wychodzenie" — от niedokonany "wychodzić", а "wyszedłem" — dokonany. Нужно "wyjście".`,
    explanationPl: `"Zanim" + zdanie → "przed" + rzeczownik odsłowny. Czasownik "wyszedłem" (dokonany) → rzeczownik "wyjście" (od wyjść).

🔑 Zanim + zdanie → Przed + rzeczownik:
• zanim wyszedłem → przed wyjściem
• zanim zjadłem → przed jedzeniem / przed posiłkiem

❌ Dlaczego nie A: "Przed" wymaga rzeczownika, nie czasownika.
❌ Dlaczego nie C: "Przed tym" — błędna konstrukcja w tym kontekście.
❌ Dlaczego nie D: "wychodzenie" — od niedokonanego "wychodzić", a "wyszedłem" — dokonany. Potrzebne "wyjście".`,
    topic: "Transformacje — zdanie z \"zanim\" → zdanie z \"przed\"",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_016",
    source: "pdf",
    question: "Zdanie \"Jego odpowiedź była szybka\" można przekształcić na:",
    options: [
      { label: "A", text: "On odpowiedział szybko." },
      { label: "B", text: "On odpowiedział szybki." },
      { label: "C", text: "On szybko był odpowiedź." },
      { label: "D", text: "On odpowiadał szybką." }
    ],
    correctAnswer: "A",
    explanationRu: `Прилагательное (przymiotnik) → наречие (przysłówek). "Szybka" (прил., ж.р.) → "szybko" (наречие). Наречие описывает глагол, а не существительное.

🔑 Przymiotnik → Przysłówek:
• szybki/szybka/szybkie → szybko
• głośny → głośno
• cichy → cicho

❌ Почему не B: "szybki" — прилагательное, не может описывать глагол.
❌ Почему не C: Бессмысленная конструкция.
❌ Почему не D: "szybką" — прилагательное в biernik, не подходит.`,
    explanationPl: `Przymiotnik → przysłówek. "Szybka" (przym., r. żeński) → "szybko" (przysłówek). Przysłówek opisuje czasownik, nie rzeczownik.

🔑 Przymiotnik → Przysłówek:
• szybki/szybka/szybkie → szybko
• głośny → głośno
• cichy → cicho

❌ Dlaczego nie B: "szybki" — przymiotnik, nie może opisywać czasownika.
❌ Dlaczego nie C: Bezsensowna konstrukcja.
❌ Dlaczego nie D: "szybką" — przymiotnik w bierniku, nie pasuje.`,
    topic: "Transformacje — zdanie z przymiotnikiem → zdanie z przysłówkiem",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_017",
    source: "pdf",
    question: "Zdanie \"Mówi nie tylko po polsku, ale też po angielsku\" można przekształcić na:",
    options: [
      { label: "A", text: "Mówi zarówno po polsku, oraz po angielsku." },
      { label: "B", text: "Mówi zarówno po polsku, ale i po angielsku." },
      { label: "C", text: "Mówi zarówno po polsku, jak i po angielsku." },
      { label: "D", text: "Mówi zarówno po polsku, a także po angielsku." }
    ],
    correctAnswer: "C",
    explanationRu: `"Nie tylko X, ale też Y" = "zarówno X, jak i Y". Обе конструкции выражают соединение двух равноценных элементов.

🔑 Парные союзы:
• nie tylko... ale też/także = zarówno... jak i
• Важно: "zarówno" требует именно "jak i" — это устойчивая пара

❌ Почему не A: "zarówno... oraz" — неправильная пара, нужно "jak i".
❌ Почему не B: "zarówno... ale i" — неправильная пара.
❌ Почему не D: "zarówno... a także" — неправильная пара, нужно "jak i".`,
    explanationPl: `"Nie tylko X, ale też Y" = "zarówno X, jak i Y". Obie konstrukcje wyrażają połączenie dwóch równorzędnych elementów.

🔑 Spójniki skorelowane:
• nie tylko... ale też/także = zarówno... jak i
• Ważne: "zarówno" wymaga "jak i" — to stała para

❌ Dlaczego nie A: "zarówno... oraz" — błędna para, potrzebne "jak i".
❌ Dlaczego nie B: "zarówno... ale i" — błędna para.
❌ Dlaczego nie D: "zarówno... a także" — błędna para, potrzebne "jak i".`,
    topic: "Transformacje — zdanie z \"nie tylko... ale też\" → zdanie z \"zarówno... jak i\"",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_018",
    source: "pdf",
    question: "Zdanie \"Dni stają się coraz krótsze\" można przekształcić na:",
    options: [
      { label: "A", text: "Dni są najkrótsze." },
      { label: "B", text: "Dni stają się krótkie." },
      { label: "C", text: "Dni są bardziej krótsze." },
      { label: "D", text: "Dni są krótsze i krótsze." }
    ],
    correctAnswer: "D",
    explanationRu: `"Coraz + stopień wyższy" (всё более) = "stopień wyższy + i + stopień wyższy" (короче и короче). Обе конструкции выражают постепенное нарастание качества.

🔑 Coraz + wyższy = wyższy i wyższy:
• coraz lepszy = lepszy i lepszy
• coraz większy = większy i większy

❌ Почему не A: "najkrótsze" — превосходная степень, означает максимум, а не процесс.
❌ Почему не B: "krótkie" — положительная степень, теряется идея нарастания.
❌ Почему не C: "bardziej krótsze" — двойное сравнение, грамматическая ошибка.`,
    explanationPl: `"Coraz + stopień wyższy" = "stopień wyższy + i + stopień wyższy". Obie konstrukcje wyrażają stopniowe narastanie cechy.

🔑 Coraz + wyższy = wyższy i wyższy:
• coraz lepszy = lepszy i lepszy
• coraz większy = większy i większy

❌ Dlaczego nie A: "najkrótsze" — stopień najwyższy, oznacza maksimum, nie proces.
❌ Dlaczego nie B: "krótkie" — stopień równy, gubi się idea narastania.
❌ Dlaczego nie C: "bardziej krótsze" — podwójne stopniowanie, błąd gramatyczny.`,
    topic: "Transformacje — zdanie z \"coraz\" → zdanie ze stopniem wyższym",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_019",
    source: "pdf",
    question: "Która forma jest poprawną konstrukcją bezosobową na -no/-to dla zdania \"Ktoś ukradł mój rower\"?",
    options: [
      { label: "A", text: "Mój rower został ukradziony." },
      { label: "B", text: "Ukradziono mój rower." },
      { label: "C", text: "Mój rower ukradł się." },
      { label: "D", text: "Mój rower się ukradł." }
    ],
    correctAnswer: "B",
    explanationRu: `"Ktoś + czasownik" → безличная конструкция с "-no/-to". Форма "ukradziono" — безличная форма прошедшего времени от "ukraść".

🔑 Formy bezosobowe na -no/-to:
• ktoś zrobił → zrobiono
• ktoś ukradł → ukradziono
• ktoś powiedział → powiedziano

❌ Почему не A: "został ukradziony" — это strona bierna, не forma bezosobowa на -no/-to.
❌ Почему не C: "ukradł się" — грамматически неверно, "ukraść" не образует возвратной формы.
❌ Почему не D: "się ukradł" — грамматически неверно.`,
    explanationPl: `"Ktoś + czasownik" → konstrukcja bezosobowa z "-no/-to". Forma "ukradziono" — bezosobowa forma czasu przeszłego od "ukraść".

🔑 Formy bezosobowe na -no/-to:
• ktoś zrobił → zrobiono
• ktoś ukradł → ukradziono
• ktoś powiedział → powiedziano

❌ Dlaczego nie A: "został ukradziony" — to strona bierna, nie forma bezosobowa na -no/-to.
❌ Dlaczego nie C: "ukradł się" — błąd gramatyczny, "ukraść" nie tworzy formy zwrotnej.
❌ Dlaczego nie D: "się ukradł" — błąd gramatyczny.`,
    topic: "Transformacje — zdanie z \"ktoś\" → zdanie bezosobowe (-no/-to)",
    difficulty: "high"
  },
  {
    id: "B1_TRANSFORMACJE_020",
    source: "pdf",
    question: "Zdanie \"Jest tak zmęczony, że nie może pracować\" można przekształcić na:",
    options: [
      { label: "A", text: "Jest zbyt zmęczony, żeby pracować." },
      { label: "B", text: "Jest zbyt zmęczony, żeby nie pracować." },
      { label: "C", text: "Jest za zmęczony, że pracować." },
      { label: "D", text: "Jest zbyt zmęczony, aby nie pracować." }
    ],
    correctAnswer: "A",
    explanationRu: `"Tak + przymiotnik + że nie może" → "zbyt + przymiotnik + żeby/aby + bezokolicznik". Конструкция "zbyt... żeby" уже содержит отрицание в значении (слишком... чтобы = не может).

🔑 Tak... że nie → Zbyt... żeby:
• tak zmęczony, że nie może → zbyt zmęczony, żeby móc
• Важно: после "żeby" НЕ нужно отрицание!

❌ Почему не B: Двойное отрицание меняет смысл — "слишком устал, чтобы НЕ работать" = должен работать.
❌ Почему не C: "za" вместо "zbyt" — разговорно; "że" вместо "żeby" — неправильно.
❌ Почему не D: "aby nie pracować" — двойное отрицание, смысл меняется.`,
    explanationPl: `"Tak + przymiotnik + że nie może" → "zbyt + przymiotnik + żeby/aby + bezokolicznik". Konstrukcja "zbyt... żeby" już zawiera negację w znaczeniu.

🔑 Tak... że nie → Zbyt... żeby:
• tak zmęczony, że nie może → zbyt zmęczony, żeby móc
• Ważne: po "żeby" NIE potrzeba przeczenia!

❌ Dlaczego nie B: Podwójne przeczenie zmienia sens — "zbyt zmęczony, żeby NIE pracować" = musi pracować.
❌ Dlaczego nie C: "za" zamiast "zbyt" — potocznie; "że" zamiast "żeby" — błędnie.
❌ Dlaczego nie D: "aby nie pracować" — podwójne przeczenie, sens się zmienia.`,
    topic: "Transformacje — zdanie z \"tak... że\" → zdanie z \"zbyt... żeby\"",
    difficulty: "high"
  }
  ,
  // ========================================================================
  // TASKS 101-110: STOPNIOWANIE (Degrees of Comparison)
  // Batch 9 — High difficulty
  // ========================================================================
  {
    id: "B1_STOPNIOWANIE_001",
    source: "pdf",
    question: "Ten film jest _______ od poprzedniego.",
    options: [
      { label: "A", text: "dobrzejszy" },
      { label: "B", text: "lepszy" },
      { label: "C", text: "bardziej dobry" },
      { label: "D", text: "lepiej" }
    ],
    correctAnswer: "B",
    explanationRu: `Прилагательное dobry (хороший) имеет неправильную сравнительную степень: lepszy (лучший). Форма "dobrzejszy" не существует.

🔑 Nieregularne stopniowanie:
• dobry → lepszy → najlepszy
• zły → gorszy → najgorszy
• duży → większy → największy

❌ Почему не A: "dobrzejszy" — не существует, это выдуманная форма.
❌ Почему не C: "bardziej dobry" — грамматически неверно для неправильных прилагательных.
❌ Почему не D: "lepiej" — это наречие, а нужно прилагательное (opisuje "film").`,
    explanationPl: `Przymiotnik dobry ma nieregularny stopień wyższy: lepszy. Forma "dobrzejszy" nie istnieje.

🔑 Nieregularne stopniowanie:
• dobry → lepszy → najlepszy
• zły → gorszy → najgorszy
• duży → większy → największy

❌ Dlaczego nie A: "dobrzejszy" — nie istnieje, to forma wymyślona.
❌ Dlaczego nie C: "bardziej dobry" — błąd gramatyczny dla przymiotników nieregularnych.
❌ Dlaczego nie D: "lepiej" — to przysłówek, a potrzebny przymiotnik (opisuje "film").`,
    topic: "Stopniowanie — nieregularne przymiotniki (dobry → lepszy)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_002",
    source: "pdf",
    question: "Dzisiaj czuję się _______ niż wczoraj.",
    options: [
      { label: "A", text: "lepszy" },
      { label: "B", text: "dobrziej" },
      { label: "C", text: "bardziej dobrze" },
      { label: "D", text: "lepiej" }
    ],
    correctAnswer: "D",
    explanationRu: `Наречие dobrze (хорошо) имеет неправильную сравнительную степень: lepiej (лучше). "Czuć się" требует наречия, не прилагательного.

🔑 Nieregularne stopniowanie przysłówków:
• dobrze → lepiej → najlepiej
• źle → gorzej → najgorzej
• dużo → więcej → najwięcej

❌ Почему не A: "lepszy" — это прилагательное, а "czuć się" требует наречия.
❌ Почему не B: "dobrziej" — не существует.
❌ Почему не C: "bardziej dobrze" — грамматически неверно для неправильных наречий.`,
    explanationPl: `Przysłówek dobrze ma nieregularny stopień wyższy: lepiej. "Czuć się" wymaga przysłówka, nie przymiotnika.

🔑 Nieregularne stopniowanie przysłówków:
• dobrze → lepiej → najlepiej
• źle → gorzej → najgorzej
• dużo → więcej → najwięcej

❌ Dlaczego nie A: "lepszy" — to przymiotnik, a "czuć się" wymaga przysłówka.
❌ Dlaczego nie B: "dobrziej" — nie istnieje.
❌ Dlaczego nie C: "bardziej dobrze" — błąd gramatyczny dla przysłówków nieregularnych.`,
    topic: "Stopniowanie — nieregularne przysłówki (dobrze → lepiej)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_003",
    source: "pdf",
    question: "Ta książka jest _______ od tamtej.",
    options: [
      { label: "A", text: "interesująciejsza" },
      { label: "B", text: "interesującsza" },
      { label: "C", text: "bardziej interesująca" },
      { label: "D", text: "więcej interesująca" }
    ],
    correctAnswer: "C",
    explanationRu: `Длинные прилагательные (особенно причастия типа "interesujący") образуют сравнительную степень с помощью bardziej, а не суффикса -szy. В стандартном языке на уровне B1 причастия не образуют форм на -szy.

🔑 Stopniowanie opisowe (z "bardziej"):
• interesujący → bardziej interesujący → najbardziej interesujący
• skomplikowany → bardziej skomplikowany
• zmęczony → bardziej zmęczony

❌ Почему не A: "interesująciejsza" — не существует, причастия в стандартном языке B1 не образуют форм на -szy.
❌ Почему не B: "interesującsza" — не существует.
❌ Почему не D: "więcej" используется с существительными (więcej książek), не с прилагательными.`,
    explanationPl: `Długie przymiotniki (szczególnie imiesłowy jak "interesujący") tworzą stopień wyższy z bardziej, nie z sufiksem -szy. W języku standardowym na poziomie B1 imiesłowy nie tworzą form na -szy.

🔑 Stopniowanie opisowe (z "bardziej"):
• interesujący → bardziej interesujący → najbardziej interesujący
• skomplikowany → bardziej skomplikowany
• zmęczony → bardziej zmęczony

❌ Dlaczego nie A: "interesująciejsza" — nie istnieje, imiesłowy w języku standardowym B1 nie tworzą form na -szy.
❌ Dlaczego nie B: "interesującsza" — nie istnieje.
❌ Dlaczego nie D: "więcej" używa się z rzeczownikami (więcej książek), nie z przymiotnikami.`,
    topic: "Stopniowanie — przymiotniki z \"bardziej\" (interesujący)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_004",
    source: "pdf",
    question: "Ona jest _______ studentką ze wszystkich.",
    options: [
      { label: "A", text: "lepszą" },
      { label: "B", text: "najlepszy" },
      { label: "C", text: "najlepsza" },
      { label: "D", text: "najlepszą" }
    ],
    correctAnswer: "D",
    explanationRu: `После "jest" с существительным в narzędnik нужна форма прилагательного в narzędnik. "Studentką" — narzędnik ж.р., поэтому "najlepszą" (narzędnik ж.р.).

🔑 Być + narzędnik:
• Ona jest studentką. → Ona jest najlepszą studentką.
• On jest studentem. → On jest najlepszym studentem.

❌ Почему не A: "lepszą" — сравнительная степень, а "ze wszystkich" требует превосходной.
❌ Почему не B: "najlepszy" — м.р., а "studentką" — ж.р.
❌ Почему не C: "najlepsza" — mianownik, а нужен narzędnik.`,
    explanationPl: `Po "jest" z rzeczownikiem w narzędniku potrzebna forma przymiotnika w narzędniku. "Studentką" — narzędnik r. żeńskiego, więc "najlepszą" (narzędnik r. żeńskiego).

🔑 Być + narzędnik:
• Ona jest studentką. → Ona jest najlepszą studentką.
• On jest studentem. → On jest najlepszym studentem.

❌ Dlaczego nie A: "lepszą" — stopień wyższy, a "ze wszystkich" wymaga najwyższego.
❌ Dlaczego nie B: "najlepszy" — r. męski, a "studentką" — r. żeński.
❌ Dlaczego nie C: "najlepsza" — mianownik, a potrzebny narzędnik.`,
    topic: "Stopniowanie — stopień najwyższy z \"ze wszystkich\"",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_005",
    source: "pdf",
    question: "Moje mieszkanie jest _______ od twojego.",
    options: [
      { label: "A", text: "mniejsze" },
      { label: "B", text: "małsze" },
      { label: "C", text: "bardziej małe" },
      { label: "D", text: "mniej" }
    ],
    correctAnswer: "A",
    explanationRu: `Прилагательное mały (маленький) имеет неправильную сравнительную степень: mniejszy (меньший). "Mieszkanie" — nijaki род, поэтому "mniejsze".

🔑 Nieregularne stopniowanie:
• mały → mniejszy → najmniejszy
• wielki → większy → największy

❌ Почему не B: "małszy" — не существует.
❌ Почему не C: "bardziej małe" — грамматически неверно для неправильных прилагательных.
❌ Почему не D: "mniej" — это наречие/числительное, не прилагательное.`,
    explanationPl: `Przymiotnik mały ma nieregularny stopień wyższy: mniejszy. "Mieszkanie" — rodzaj nijaki, więc "mniejsze".

🔑 Nieregularne stopniowanie:
• mały → mniejszy → najmniejszy
• wielki → większy → największy

❌ Dlaczego nie B: "małszy" — nie istnieje.
❌ Dlaczego nie C: "bardziej małe" — błąd gramatyczny dla przymiotników nieregularnych.
❌ Dlaczego nie D: "mniej" — to przysłówek/liczebnik, nie przymiotnik.`,
    topic: "Stopniowanie — nieregularne (mały → mniejszy)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_006",
    source: "pdf",
    question: "Ona ubiera się _______ niż jej siostra.",
    options: [
      { label: "A", text: "eleganckiej" },
      { label: "B", text: "bardziej elegancko" },
      { label: "C", text: "elegancziej" },
      { label: "D", text: "więcej elegancko" }
    ],
    correctAnswer: "B",
    explanationRu: `Наречие elegancko образует сравнительную степень с помощью bardziej, а не суффикса. Форма "elegancziej" не существует.

🔑 Stopniowanie opisowe przysłówków:
• elegancko → bardziej elegancko → najbardziej elegancko
• interesująco → bardziej interesująco
• skomplikowanie → bardziej skomplikowanie

❌ Почему не A: "eleganckiej" — это форма прилагательного в dopełniaczu, не наречие.
❌ Почему не C: "elegancziej" — не существует.
❌ Почему не D: "więcej" не используется для степенирования качественных наречий.`,
    explanationPl: `Przysłówek elegancko tworzy stopień wyższy z bardziej, nie z sufiksem. Forma "elegancziej" nie istnieje.

🔑 Stopniowanie opisowe przysłówków:
• elegancko → bardziej elegancko → najbardziej elegancko
• interesująco → bardziej interesująco
• skomplikowanie → bardziej skomplikowanie

❌ Dlaczego nie A: "eleganckiej" — to forma przymiotnika w dopełniaczu, nie przysłówek.
❌ Dlaczego nie C: "elegancziej" — nie istnieje.
❌ Dlaczego nie D: "więcej" nie służy do stopniowania przysłówków jakościowych.`,
    topic: "Stopniowanie — przysłówki z \"bardziej\" (elegancko)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_007",
    source: "pdf",
    question: "Mój brat jest _______ ode mnie o trzy lata.",
    options: [
      { label: "A", text: "młodniejszy" },
      { label: "B", text: "bardziej młody" },
      { label: "C", text: "młodszy" },
      { label: "D", text: "młodziej" }
    ],
    correctAnswer: "C",
    explanationRu: `Прилагательное młody (молодой) образует сравнительную степень регулярно: młodszy. Обратите внимание на чередование d → dz.

🔑 Regularne stopniowanie z alternacją:
• młody → młodszy (d → dz)
• stary → starszy
• wysoki → wyższy (k → ż)

❌ Почему не A: "młodniejszy" — не существует, это выдуманная форма.
❌ Почему не B: "bardziej młody" — неправильно, "młody" имеет простую форму.
❌ Почему не D: "młodziej" — не существует как наречие в этом значении.`,
    explanationPl: `Przymiotnik młody tworzy stopień wyższy regularnie: młodszy. Zwróć uwagę na alternację d → dz.

🔑 Regularne stopniowanie z alternacją:
• młody → młodszy (d → dz)
• stary → starszy
• wysoki → wyższy (k → ż)

❌ Dlaczego nie A: "młodniejszy" — nie istnieje, to forma wymyślona.
❌ Dlaczego nie B: "bardziej młody" — błędnie, "młody" ma prostą formę.
❌ Dlaczego nie D: "młodziej" — nie istnieje jako przysłówek w tym znaczeniu.`,
    topic: "Stopniowanie — regularne przymiotniki (młody → młodszy)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_008",
    source: "pdf",
    question: "Z całej klasy on biega _______.",
    options: [
      { label: "A", text: "najszybszy" },
      { label: "B", text: "szybciej" },
      { label: "C", text: "najbardziej szybko" },
      { label: "D", text: "najszybciej" }
    ],
    correctAnswer: "D",
    explanationRu: `Наречие szybko (быстро) образует превосходную степень: najszybciej. "Biegać" требует наречия, не прилагательного.

🔑 Stopniowanie przysłówków:
• szybko → szybciej → najszybciej
• wolno → wolniej → najwolniej
• wysoko → wyżej → najwyżej

❌ Почему не A: "najszybszy" — это прилагательное, а "biegać" требует наречия.
❌ Почему не B: "szybciej" — сравнительная степень, а "z całej klasy" требует превосходной.
❌ Почему не C: "najbardziej szybko" — неправильно, "szybko" имеет простую форму.`,
    explanationPl: `Przysłówek szybko tworzy stopień najwyższy: najszybciej. "Biegać" wymaga przysłówka, nie przymiotnika.

🔑 Stopniowanie przysłówków:
• szybko → szybciej → najszybciej
• wolno → wolniej → najwolniej
• wysoko → wyżej → najwyżej

❌ Dlaczego nie A: "najszybszy" — to przymiotnik, a "biegać" wymaga przysłówka.
❌ Dlaczego nie B: "szybciej" — stopień wyższy, a "z całej klasy" wymaga najwyższego.
❌ Dlaczego nie C: "najbardziej szybko" — błędnie, "szybko" ma prostą formę.`,
    topic: "Stopniowanie — stopień najwyższy przysłówka (szybko)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_009",
    source: "pdf",
    question: "Pogoda dzisiaj jest _______ niż wczoraj.",
    options: [
      { label: "A", text: "zlejsza" },
      { label: "B", text: "gorsza" },
      { label: "C", text: "bardziej zła" },
      { label: "D", text: "źlej" }
    ],
    correctAnswer: "B",
    explanationRu: `Прилагательное zły (плохой) имеет неправильную сравнительную степень: gorszy. "Pogoda" — ж.р., поэтому "gorsza".

🔑 Nieregularne stopniowanie:
• zły → gorszy → najgorszy
• dobry → lepszy → najlepszy

❌ Почему не A: "zlejsza" — не существует.
❌ Почему не C: "bardziej zła" — грамматически неверно для неправильных прилагательных.
❌ Почему не D: "źlej" — не существует; наречие от "zły" — "źle → gorzej".`,
    explanationPl: `Przymiotnik zły ma nieregularny stopień wyższy: gorszy. "Pogoda" — r. żeński, więc "gorsza".

🔑 Nieregularne stopniowanie:
• zły → gorszy → najgorszy
• dobry → lepszy → najlepszy

❌ Dlaczego nie A: "zlejsza" — nie istnieje.
❌ Dlaczego nie C: "bardziej zła" — błąd gramatyczny dla przymiotników nieregularnych.
❌ Dlaczego nie D: "źlej" — nie istnieje; przysłówek od "zły" — "źle → gorzej".`,
    topic: "Stopniowanie — nieregularne (zły → gorszy)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_010",
    source: "pdf",
    question: "Ten budynek jest _______ od tamtego.",
    options: [
      { label: "A", text: "wyżej" },
      { label: "B", text: "wysoczejszy" },
      { label: "C", text: "wyższy" },
      { label: "D", text: "bardziej wysoki" }
    ],
    correctAnswer: "C",
    explanationRu: `"Budynek" — существительное, поэтому нужно прилагательное wyższy (выше), а не наречие "wyżej".

🔑 Przymiotnik vs Przysłówek:
• wysoki (przym.) → wyższy → najwyższy
• wysoko (przysł.) → wyżej → najwyżej

❌ Почему не A: "wyżej" — это наречие, а "budynek jest" требует прилагательного.
❌ Почему не B: "wysoczejszy" — не существует.
❌ Почему не D: "bardziej wysoki" — неправильно, "wysoki" имеет простую форму.`,
    explanationPl: `"Budynek" — rzeczownik, więc potrzebny przymiotnik wyższy, nie przysłówek "wyżej".

🔑 Przymiotnik vs Przysłówek:
• wysoki (przym.) → wyższy → najwyższy
• wysoko (przysł.) → wyżej → najwyżej

❌ Dlaczego nie A: "wyżej" — to przysłówek, a "budynek jest" wymaga przymiotnika.
❌ Dlaczego nie B: "wysoczejszy" — nie istnieje.
❌ Dlaczego nie D: "bardziej wysoki" — błędnie, "wysoki" ma prostą formę.`,
    topic: "Stopniowanie — przymiotnik vs przysłówek (wysoki/wysoko)",
    difficulty: "high"
  }
  ,
  // ========================================================================
  // TASKS 111-120: STOPNIOWANIE (Degrees of Comparison) — Part 2
  // Batch 10 — 8x High + 2x Very High difficulty
  // ========================================================================
  {
    id: "B1_STOPNIOWANIE_011",
    source: "pdf",
    question: "W tym roku mamy _______ śniegu niż w zeszłym.",
    options: [
      { label: "A", text: "bardziej więcej" },
      { label: "B", text: "więcej" },
      { label: "C", text: "najwięcej" },
      { label: "D", text: "bardziej dużo" }
    ],
    correctAnswer: "B",
    explanationRu: `Наречие dużo имеет неправильные степени сравнения: dużo → więcej → najwięcej.

🔑 Формула: więcej + dopełniacz (śniegu) + niż

• A) "bardziej więcej" — не существует, "więcej" уже является stopniem wyższym
• C) "najwięcej" — najwyższy stopień, но здесь сравнение двух периодов (niż)
• D) "bardziej dużo" — не существует, dużo степенируется нерегулярно`,
    explanationPl: `Przysłówek dużo stopniuje się nieregularnie: dużo → więcej → najwięcej.

🔑 Konstrukcja: więcej + dopełniacz + niż

• A) "bardziej więcej" — forma niepoprawna, "więcej" już jest stopniem wyższym
• C) "najwięcej" — stopień najwyższy, ale tu porównujemy dwa okresy
• D) "bardziej dużo" — forma niepoprawna`,
    topic: "Stopniowanie — nieregularne: dużo → więcej → najwięcej",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_012",
    source: "pdf",
    question: "Mieszkam _______ od centrum niż moja siostra.",
    options: [
      { label: "A", text: "daleko" },
      { label: "B", text: "najdalej" },
      { label: "C", text: "bardziej daleko" },
      { label: "D", text: "dalej" }
    ],
    correctAnswer: "D",
    explanationRu: `Наречие daleko имеет неправильные степени сравнения: daleko → dalej → najdalej.

🔑 Конструкция сравнения: dalej + od + dopełniacz + niż

• A) "daleko" — stopień równy, не подходит для сравнения с "niż"
• B) "najdalej" — stopień najwyższy, но здесь сравнение двух людей
• C) "bardziej daleko" — не существует`,
    explanationPl: `Przysłówek daleko stopniuje się nieregularnie: daleko → dalej → najdalej.

🔑 Konstrukcja: dalej od + dopełniacz + niż

• A) "daleko" — stopień równy, nie pasuje do porównania z "niż"
• B) "najdalej" — stopień najwyższy, ale porównujemy dwie osoby
• C) "bardziej daleko" — forma niepoprawna`,
    topic: "Stopniowanie — nieregularne przysłówki: daleko → dalej → najdalej",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_013",
    source: "pdf",
    question: "To budynek _______ jakości w całym mieście.",
    options: [
      { label: "A", text: "najwyższy" },
      { label: "B", text: "najwyższa" },
      { label: "C", text: "najwyższej" },
      { label: "D", text: "najwyższą" }
    ],
    correctAnswer: "C",
    explanationRu: `Существительное jakość (ж.р.) стоит в dopełniaczu: "jakości". Прилагательное должно согласоваться: najwyższej (dopełniacz, ż.r.).

🔑 Конструкция: rzeczownik + przymiotnik w dopełniaczu + rzeczownik w dopełniaczu

• A) "najwyższy" — mianownik м.р.
• B) "najwyższa" — mianownik ж.р.
• D) "najwyższą" — biernik/narzędnik ж.р.`,
    explanationPl: `Rzeczownik jakość (r. żeński) jest w dopełniaczu: "jakości". Przymiotnik musi się zgadzać: najwyższej (dopełniacz, r.ż.).

🔑 Konstrukcja: rzeczownik + przymiotnik w dopełniaczu + rzeczownik w dopełniaczu

• A) "najwyższy" — mianownik r.m.
• B) "najwyższa" — mianownik r.ż.
• D) "najwyższą" — biernik/narzędnik r.ż.`,
    topic: "Stopniowanie — przymiotnik w dopełniaczu: najwyższego vs najwyższy",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_014",
    source: "pdf",
    question: "Ceny mieszkań są _______.",
    options: [
      { label: "A", text: "coraz wyższe" },
      { label: "B", text: "coraz wysokie" },
      { label: "C", text: "coraz najwyższe" },
      { label: "D", text: "coraz najbardziej wysokie" }
    ],
    correctAnswer: "A",
    explanationRu: `Конструкция coraz + stopień wyższy означает постепенное увеличение.

🔑 Формула: coraz + stopień wyższy

• B) "coraz wysokie" — stopień równy после "coraz" невозможен
• C) "coraz najwyższe" — stopień najwyższy после "coraz" невозможен
• D) "coraz najbardziej wysokie" — двойной суперлатив, форма неправильная`,
    explanationPl: `Konstrukcja coraz + stopień wyższy wyraża stopniowy wzrost.

🔑 Formuła: coraz + stopień wyższy

• B) "coraz wysokie" — stopień równy po "coraz" jest niepoprawny
• C) "coraz najwyższe" — stopień najwyższy po "coraz" jest niepoprawny
• D) "coraz najbardziej wysokie" — podwójny superlatyw, forma niepoprawna`,
    topic: "Stopniowanie — coraz + wyższy stopień",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_015",
    source: "pdf",
    question: "_______ więcej pracuję, tym jestem bardziej zmęczony.",
    options: [
      { label: "A", text: "Im" },
      { label: "B", text: "Jak" },
      { label: "C", text: "Kiedy" },
      { label: "D", text: "Że" }
    ],
    correctAnswer: "A",
    explanationRu: `Конструкция im + stopień wyższy..., tym + stopień wyższy выражает пропорциональную зависимость.

🔑 Формула: Im więcej..., tym bardziej...

• B) "Jak" — не используется в этой конструкции
• C) "Kiedy" — временной союз, меняет смысл
• D) "Że" — подчинительный союз, не подходит`,
    explanationPl: `Konstrukcja im + stopień wyższy..., tym + stopień wyższy wyraża zależność proporcjonalną.

🔑 Formuła: Im więcej..., tym bardziej...

• B) "Jak" — nie używa się w tej konstrukcji
• C) "Kiedy" — spójnik czasowy, zmienia sens
• D) "Że" — spójnik podrzędny, nie pasuje`,
    topic: "Stopniowanie — im... tym + wyższy stopień",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_016",
    source: "pdf",
    question: "Proszę przyjść _______.",
    options: [
      { label: "A", text: "szybko" },
      { label: "B", text: "jak najszybciej" },
      { label: "C", text: "szybciej" },
      { label: "D", text: "bardzo szybko" }
    ],
    correctAnswer: "B",
    explanationRu: `Конструкция jak + stopień najwyższy означает "как можно + превосходная степень".

🔑 Формула: jak najszybciej = как можно быстрее

• A) "szybko" — нейтрально, без акцента на максимум
• C) "szybciej" — сравнительная степень, требует "niż"
• D) "bardzo szybko" — усиление, но не максимум`,
    explanationPl: `Konstrukcja jak + stopień najwyższy oznacza "możliwie najbardziej".

🔑 Formuła: jak najszybciej = możliwie najszybciej

• A) "szybko" — neutralnie, bez akcentu na maksimum
• C) "szybciej" — stopień wyższy, wymaga "niż"
• D) "bardzo szybko" — wzmocnienie, ale nie maksimum`,
    topic: "Stopniowanie — jak najszybciej (możliwie najwyższy stopień)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_017",
    source: "pdf",
    question: "Wróciłem do domu _______ niż zwykle.",
    options: [
      { label: "A", text: "późno" },
      { label: "B", text: "najpóźniej" },
      { label: "C", text: "bardziej późno" },
      { label: "D", text: "później" }
    ],
    correctAnswer: "D",
    explanationRu: `Наречие późno имеет неправильные степени сравнения: późno → później → najpóźniej.

🔑 Конструкция: później + niż (сравнение)

• A) "późno" — stopień równy, не подходит с "niż"
• B) "najpóźniej" — stopień najwyższy, но здесь сравнение
• C) "bardziej późno" — не существует`,
    explanationPl: `Przysłówek późno stopniuje się nieregularnie: późno → później → najpóźniej.

🔑 Konstrukcja: później + niż (porównanie)

• A) "późno" — stopień równy, nie pasuje z "niż"
• B) "najpóźniej" — stopień najwyższy, ale tu porównanie
• C) "bardziej późno" — forma niepoprawna`,
    topic: "Stopniowanie — nieregularne: późno → później → najpóźniej",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_018",
    source: "pdf",
    question: "Ten film podobał mi się _______ ze wszystkich.",
    options: [
      { label: "A", text: "najlepszy" },
      { label: "B", text: "lepiej" },
      { label: "C", text: "najlepiej" },
      { label: "D", text: "lepszy" }
    ],
    correctAnswer: "C",
    explanationRu: `Глагол podobać się требует наречия, а не прилагательного. "Ze wszystkich" указывает на stopień najwyższy.

🔑 Правило: после глагола — przysłówek (najlepiej), не przymiotnik (najlepszy)

• A) "najlepszy" — przymiotnik, не сочетается с глаголом
• B) "lepiej" — stopień wyższy, но "ze wszystkich" требует najwyższy
• D) "lepszy" — przymiotnik в stopień wyższy`,
    explanationPl: `Czasownik podobać się wymaga przysłówka, nie przymiotnika. "Ze wszystkich" wskazuje na stopień najwyższy.

🔑 Zasada: po czasowniku — przysłówek (najlepiej), nie przymiotnik (najlepszy)

• A) "najlepszy" — przymiotnik, nie łączy się z czasownikiem
• B) "lepiej" — stopień wyższy, ale "ze wszystkich" wymaga najwyższego
• D) "lepszy" — przymiotnik w stopniu wyższym`,
    topic: "Stopniowanie — przymiotnik vs przysłówek: najlepszy vs najlepiej",
    difficulty: "high"
  },
  {
    id: "B2_STOPNIOWANIE_001",
    source: "pdf",
    question: "Byłem _______ zadowolony z wyniku egzaminu.",
    options: [
      { label: "A", text: "najbardziej" },
      { label: "B", text: "jak najbardziej" },
      { label: "C", text: "najzupełniej" },
      { label: "D", text: "bardziej" }
    ],
    correctAnswer: "C",
    explanationRu: `Elativus (абсолютная превосходная степень) выражает высшую степень качества БЕЗ сравнения с другими.

🔑 Формула: najzupełniej / najpełniej / najdoskonalej + przymiotnik/przysłówek

• A) "najbardziej" — требует сравнения или контекста "ze wszystkich"
• B) "jak najbardziej" — означает "конечно, безусловно", не степень
• D) "bardziej" — stopień wyższy, требует "niż"

Elativus часто используется с: najzupełniej, najpełniej, najdoskonalej, najświętiej.`,
    explanationPl: `Elativus (absolutny stopień najwyższy) wyraża najwyższy stopień cechy BEZ porównania z innymi.

🔑 Formuła: najzupełniej / najpełniej / najdoskonalej + przymiotnik/przysłówek

• A) "najbardziej" — wymaga porównania lub kontekstu "ze wszystkich"
• B) "jak najbardziej" — oznacza "oczywiście, zdecydowanie", nie stopień
• D) "bardziej" — stopień wyższy, wymaga "niż"

Elativus często występuje z: najzupełniej, najpełniej, najdoskonalej, najświętszy.`,
    topic: "Stopniowanie — absolutny stopień najwyższy (elativus)",
    difficulty: "very high"
  },
  {
    id: "B2_STOPNIOWANIE_002",
    source: "pdf",
    question: "Ta wersja programu jest _______ lepsza od poprzedniej.",
    options: [
      { label: "A", text: "dużo" },
      { label: "B", text: "znacznie" },
      { label: "C", text: "o wiele" },
      { label: "D", text: "wszystkie odpowiedzi są poprawne" }
    ],
    correctAnswer: "D",
    explanationRu: `Все три варианта (A, B, C) грамматически верны для усиления stopnia wyższego:

🔑 Усилители stopnia wyższego:
• dużo + lepszy/lepiej — разговорный стиль
• znacznie + lepszy/lepiej — нейтральный/формальный стиль
• o wiele + lepszy/lepiej — нейтральный стиль

Также возможны: zdecydowanie, nieporównanie, nieporównywalnie, nieskończenie.`,
    explanationPl: `Wszystkie trzy warianty (A, B, C) są gramatycznie poprawne jako wzmocnienie stopnia wyższego:

🔑 Wzmacniacze stopnia wyższego:
• dużo + lepszy/lepiej — styl potoczny
• znacznie + lepszy/lepiej — styl neutralny/formalny
• o wiele + lepszy/lepiej — styl neutralny

Możliwe też: zdecydowanie, nieporównanie, nieporównywalnie, nieskończenie.`,
    topic: "Stopniowanie — stopień wyższy z przyimkiem \"o\" (o ile więcej/mniej)",
    difficulty: "very high"
  }
  ,
  // ========================================================================
  // TASKS 121-130: STOPNIOWANIE (Degrees of Comparison) — FINAL
  // Batch 11 — 8x High + 2x Very High difficulty
  // ========================================================================
  {
    id: "B1_STOPNIOWANIE_019",
    source: "pdf",
    question: "Nowy sklep jest _______ mojego domu niż stary.",
    options: [
      { label: "A", text: "blisko" },
      { label: "B", text: "najbliżej" },
      { label: "C", text: "bliżej" },
      { label: "D", text: "bardziej blisko" }
    ],
    correctAnswer: "C",
    explanationRu: `Наречие blisko имеет неправильные степени сравнения: blisko → bliżej → najbliżej.

🔑 Конструкция: bliżej + dopełniacz (mojego domu) + niż

• A) "blisko" — stopień równy, не подходит с "niż"
• B) "najbliżej" — stopień najwyższy, но здесь сравнение двух объектов
• D) "bardziej blisko" — не существует`,
    explanationPl: `Przysłówek blisko stopniuje się nieregularnie: blisko → bliżej → najbliżej.

🔑 Konstrukcja: bliżej + dopełniacz + niż

• A) "blisko" — stopień równy, nie pasuje z "niż"
• B) "najbliżej" — stopień najwyższy, ale tu porównanie dwóch obiektów
• D) "bardziej blisko" — forma niepoprawna`,
    topic: "Stopniowanie — nieregularne: blisko → bliżej → najbliżej",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_020",
    source: "pdf",
    question: "W tym roku zarobiłem _______ niż w zeszłym.",
    options: [
      { label: "A", text: "mało" },
      { label: "B", text: "mniej" },
      { label: "C", text: "najmniej" },
      { label: "D", text: "bardziej mało" }
    ],
    correctAnswer: "B",
    explanationRu: `Наречие mało имеет неправильные степени сравнения: mało → mniej → najmniej.

🔑 Конструкция: mniej + niż (сравнение двух периодов)

• A) "mało" — stopień równy, не подходит с "niż"
• C) "najmniej" — stopień najwyższy, но здесь сравнение
• D) "bardziej mało" — не существует`,
    explanationPl: `Przysłówek mało stopniuje się nieregularnie: mało → mniej → najmniej.

🔑 Konstrukcja: mniej + niż (porównanie dwóch okresów)

• A) "mało" — stopień równy, nie pasuje z "niż"
• C) "najmniej" — stopień najwyższy, ale tu porównanie
• D) "bardziej mało" — forma niepoprawna`,
    topic: "Stopniowanie — nieregularne: mało → mniej → najmniej",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_021",
    source: "pdf",
    question: "Ta walizka jest _______ od tamtej.",
    options: [
      { label: "A", text: "ciężka" },
      { label: "B", text: "cięższy" },
      { label: "C", text: "cięższa" },
      { label: "D", text: "najcięższa" }
    ],
    correctAnswer: "C",
    explanationRu: `Прилагательное ciężki (м.р.) → cięższy (м.р.) / cięższa (ж.р.). "Walizka" — ж.р., поэтому нужна форма cięższa.

🔑 Правило: согласование в роде: walizka (ж.р.) → cięższa

• A) "ciężka" — stopień równy, не подходит с "od"
• B) "cięższy" — м.р., не согласуется с "walizka"
• D) "najcięższa" — stopień najwyższy, но здесь сравнение двух`,
    explanationPl: `Przymiotnik ciężki (r.m.) → cięższy (r.m.) / cięższa (r.ż.). "Walizka" — r.ż., więc potrzebna forma cięższa.

🔑 Zasada: zgodność w rodzaju: walizka (r.ż.) → cięższa

• A) "ciężka" — stopień równy, nie pasuje z "od"
• B) "cięższy" — r.m., nie zgadza się z "walizka"
• D) "najcięższa" — stopień najwyższy, ale tu porównanie dwóch`,
    topic: "Stopniowanie — regularne z alternacją: ciężki → cięższy",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_022",
    source: "pdf",
    question: "Benzyna jest teraz _______ niż rok temu.",
    options: [
      { label: "A", text: "droga" },
      { label: "B", text: "droższa" },
      { label: "C", text: "najdroższa" },
      { label: "D", text: "bardziej droga" }
    ],
    correctAnswer: "B",
    explanationRu: `Прилагательное drogi степенируется регулярно с чередованием: drogi → droższy / droższa (ж.р.) → najdroższy.

🔑 "Benzyna" — ж.р., поэтому droższa + niż

• A) "droga" — stopień równy, не подходит с "niż"
• C) "najdroższa" — stopień najwyższy, но здесь сравнение
• D) "bardziej droga" — допустимо разговорно, но не стандартно для B1`,
    explanationPl: `Przymiotnik drogi stopniuje się regularnie z alternacją: drogi → droższy / droższa (r.ż.) → najdroższy.

🔑 "Benzyna" — r.ż., więc droższa + niż

• A) "droga" — stopień równy, nie pasuje z "niż"
• C) "najdroższa" — stopień najwyższy, ale tu porównanie
• D) "bardziej droga" — dopuszczalne potocznie, ale niestandardowe`,
    topic: "Stopniowanie — regularne z alternacją: drogi → droższy",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_023",
    source: "pdf",
    question: "Ta rzeka jest _______ od tamtej.",
    options: [
      { label: "A", text: "szeroka" },
      { label: "B", text: "szerokszy" },
      { label: "C", text: "szersza" },
      { label: "D", text: "najszersza" }
    ],
    correctAnswer: "C",
    explanationRu: `Прилагательное szeroki имеет неправильную форму stopnia wyższego: szeroki → szerszy / szersza (ж.р.), НЕ "szerokszy".

🔑 "Rzeka" — ж.р., поэтому szersza + od

• A) "szeroka" — stopień równy, не подходит с "od"
• B) "szerokszy" — НЕ СУЩЕСТВУЕТ, ошибка
• D) "najszersza" — stopień najwyższy, но здесь сравнение`,
    explanationPl: `Przymiotnik szeroki ma nieregularną formę stopnia wyższego: szeroki → szerszy / szersza (r.ż.), NIE "szerokszy".

🔑 "Rzeka" — r.ż., więc szersza + od

• A) "szeroka" — stopień równy, nie pasuje z "od"
• B) "szerokszy" — NIE ISTNIEJE, błąd
• D) "najszersza" — stopień najwyższy, ale tu porównanie`,
    topic: "Stopniowanie — nieregularne: szeroki → szerszy (nie \"szerokszy\")",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_024",
    source: "pdf",
    question: "Ten laptop jest _______ od mojego starego komputera.",
    options: [
      { label: "A", text: "lekki" },
      { label: "B", text: "lekkszy" },
      { label: "C", text: "najlżejszy" },
      { label: "D", text: "lżejszy" }
    ],
    correctAnswer: "D",
    explanationRu: `Прилагательное lekki имеет неправильную форму: lekki → lżejszy, НЕ "lekkszy".

🔑 Конструкция: lżejszy + od + dopełniacz

• A) "lekki" — stopień równy, не подходит с "od"
• B) "lekkszy" — НЕ СУЩЕСТВУЕТ, ошибка
• C) "najlżejszy" — stopień najwyższy, но здесь сравнение`,
    explanationPl: `Przymiotnik lekki ma nieregularną formę: lekki → lżejszy, NIE "lekkszy".

🔑 Konstrukcja: lżejszy + od + dopełniacz

• A) "lekki" — stopień równy, nie pasuje z "od"
• B) "lekkszy" — NIE ISTNIEJE, błąd
• C) "najlżejszy" — stopień najwyższy, ale tu porównanie`,
    topic: "Stopniowanie — nieregularne: lekki → lżejszy (nie \"lekkszy\")",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_025",
    source: "pdf",
    question: "Mój brat jest _______ wysoki jak ja.",
    options: [
      { label: "A", text: "tak samo" },
      { label: "B", text: "bardziej" },
      { label: "C", text: "więcej" },
      { label: "D", text: "najbardziej" }
    ],
    correctAnswer: "A",
    explanationRu: `Конструкция tak samo + przymiotnik + jak выражает равенство (не сравнение).

🔑 Формула: tak samo + przymiotnik + jak = такой же... как

• B) "bardziej" — stopień wyższy, требует "niż", не "jak"
• C) "więcej" — для илości, не для качества
• D) "najbardziej" — stopień najwyższy, не подходит с "jak"`,
    explanationPl: `Konstrukcja tak samo + przymiotnik + jak wyraża równość (nie porównanie).

🔑 Formuła: tak samo + przymiotnik + jak = równie... jak

• B) "bardziej" — stopień wyższy, wymaga "niż", nie "jak"
• C) "więcej" — dla ilości, nie dla cechy
• D) "najbardziej" — stopień najwyższy, nie pasuje z "jak"`,
    topic: "Stopniowanie — tak samo... jak (równość, nie porównanie)",
    difficulty: "high"
  },
  {
    id: "B1_STOPNIOWANIE_026",
    source: "pdf",
    question: "Ta książka jest _______ interesująca niż tamta.",
    options: [
      { label: "A", text: "mniej" },
      { label: "B", text: "więcej" },
      { label: "C", text: "najmniej" },
      { label: "D", text: "bardziej" }
    ],
    correctAnswer: "A",
    explanationRu: `Конструкция mniej + przymiotnik выражает меньшую степень качества (stopień niższy).

🔑 Формула: mniej + przymiotnik + niż = менее... чем

• B) "więcej" — для илości, не для качества
• C) "najmniej" — stopień najwyższy (najniższy), но здесь сравнение двух
• D) "bardziej" — противоположное значение (больше, а не меньше)`,
    explanationPl: `Konstrukcja mniej + przymiotnik wyraża niższy stopień cechy (stopień niższy).

🔑 Formuła: mniej + przymiotnik + niż = mniej... niż

• B) "więcej" — dla ilości, nie dla cechy
• C) "najmniej" — stopień najwyższy (najniższy), ale tu porównanie dwóch
• D) "bardziej" — przeciwne znaczenie (więcej, nie mniej)`,
    topic: "Stopniowanie — mniej + przymiotnik (stopień niższy)",
    difficulty: "high"
  },
  {
    id: "B2_STOPNIOWANIE_003",
    source: "pdf",
    question: "Która forma jest stylistycznie NAJBARDZIEJ formalna?",
    options: [
      { label: "A", text: "Jest mądrzejszy niż brat." },
      { label: "B", text: "Jest mądrzejszy od brata." },
      { label: "C", text: "Jest bardziej mądry niż brat." },
      { label: "D", text: "Jest bardziej mądry od brata." }
    ],
    correctAnswer: "B",
    explanationRu: `В формальном польском языке конструкция stopień wyższy + od + dopełniacz считается более литературной и формальной, чем + niż + mianownik.

🔑 Шкала формальности:
1. od + dopełниacz — наиболее формально (B)
2. niż + mianownik — нейтрально (A)
3. bardziej + niż — менее стандартно для простых прилагательных (C, D)

• A) Нейтральный стиль
• C, D) "Bardziej mądry" — избыточно для простого прилагательного`,
    explanationPl: `W formalnej polszczyźnie konstrukcja stopień wyższy + od + dopełniacz jest uważana za bardziej literacką i formalną niż + niż + mianownik.

🔑 Skala formalności:
1. od + dopełniacz — najbardziej formalnie (B)
2. niż + mianownik — neutralnie (A)
3. bardziej + niż — mniej standardowo dla prostych przymiotników (C, D)

• A) Styl neutralny
• C, D) "Bardziej mądry" — redundantne dla prostego przymiotnika`,
    topic: "Stopniowanie — stopień wyższy z \"od\" vs \"niż\" (różnice stylistyczne)",
    difficulty: "very high"
  },
  {
    id: "B2_STOPNIOWANIE_004",
    source: "pdf",
    question: "Które zdanie jest NIEPOPRAWNE?",
    options: [
      { label: "A", text: "Ta sukienka jest bardziej czerwona." },
      { label: "B", text: "Ten kształt jest bardziej okrągły." },
      { label: "C", text: "Ta odpowiedź jest bardziej poprawna." },
      { label: "D", text: "Ten metal jest bardziej żelazny." }
    ],
    correctAnswer: "D",
    explanationRu: `Некоторые прилагательные не степенируются (przymiotniki niestopniowalne), потому что обозначают абсолютные качества:

🔑 Niestopniowalne: żelazny, drewniany, kamienny, martwy, żywy, pusty, pełny (в абсолютном значении), jedyny, główny.

• A) "bardziej czerwona" — допустимо (оттенок цвета)
• B) "bardziej okrągły" — допустимо (степень округлости)
• C) "bardziej poprawna" — допустимо (степень правильности)
• D) "bardziej żelazny" — НЕВОЗМОЖНО, "żelazny" = из железа (абсолютное качество)`,
    explanationPl: `Niektóre przymiotniki nie stopniują się (przymiotniki niestopniowalne), bo oznaczają cechy absolutne:

🔑 Niestopniowalne: żelazny, drewniany, kamienny, martwy, żywy, pusty, pełny (w znaczeniu absolutnym), jedyny, główny.

• A) "bardziej czerwona" — dopuszczalne (odcień koloru)
• B) "bardziej okrągły" — dopuszczalne (stopień okrągłości)
• C) "bardziej poprawna" — dopuszczalne (stopień poprawności)
• D) "bardziej żelazny" — NIEMOŻLIWE, "żelazny" = zrobiony z żelaza (cecha absolutna)`,
    topic: "Stopniowanie — przymiotniki niestopniowalne (absolutne)",
    difficulty: "very high"
  }
  ,
  // ========================================================================
  // TASKS 131-140: ZAIMKI PYTAJĄCE (Interrogative Pronouns) — Part 1
  // Batch 12 — 8x High + 2x Very High difficulty
  // ========================================================================
  {
    id: "B1_ZAIMKI_PYT_001",
    source: "pdf",
    question: "_______ się boisz?",
    options: [
      { label: "A", text: "Kto" },
      { label: "B", text: "Czego" },
      { label: "C", text: "Co" },
      { label: "D", text: "Kogo" }
    ],
    correctAnswer: "B",
    explanationRu: `Глагол bać się требует dopełniacza: bać się kogo/czego.

🔑 Формула: bać się + dopełniacz (czego? kogo?)

В общем вопросе без указания на человека чаще используется czego (чего боишься?)

• A) "Kto" — mianownik, не подходит после "bać się"
• C) "Co" — biernik/mianownik, не подходит после "bać się"
• D) "Kogo" — dopełniacz, но для людей; здесь общий вопрос`,
    explanationPl: `Czasownik bać się wymaga dopełniacza: bać się kogo/czego.

🔑 Formuła: bać się + dopełniacz (czego? kogo?)

W ogólnym pytaniu bez wskazania osoby najczęściej używa się czego (czego się boisz?)

• A) "Kto" — mianownik, nie pasuje po "bać się"
• C) "Co" — biernik/mianownik, nie pasuje po "bać się"
• D) "Kogo" — dopełniacz, ale dla osób; tu ogólne pytanie`,
    topic: "Zaimki pytające — kogo vs czego (dopełniacz)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_002",
    source: "pdf",
    question: "_______ zawdzięczasz swój sukces?",
    options: [
      { label: "A", text: "Komu" },
      { label: "B", text: "Kto" },
      { label: "C", text: "Czemu" },
      { label: "D", text: "Co" }
    ],
    correctAnswer: "A",
    explanationRu: `Глагол zawdzięczać требует celownika: zawdzięczać komu/czemu.

🔑 Формула: zawdzięczać coś + celownik (komu? czemu?)

Вопрос о человеке → komu (кому обязан?)

• B) "Kto" — mianownik, не подходит
• C) "Czemu" — celownik, но для вещей/причин, не людей
• D) "Co" — biernik/mianownik, не подходит`,
    explanationPl: `Czasownik zawdzięczać wymaga celownika: zawdzięczać komu/czemu.

🔑 Formuła: zawdzięczać coś + celownik (komu? czemu?)

Pytanie o osobę → komu (komu zawdzięczasz?)

• B) "Kto" — mianownik, nie pasuje
• C) "Czemu" — celownik, ale dla rzeczy/przyczyn, nie osób
• D) "Co" — biernik/mianownik, nie pasuje`,
    topic: "Zaimki pytające — komu vs czemu (celownik)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_003",
    source: "pdf",
    question: "_______ rozmawiałeś przez telefon?",
    options: [
      { label: "A", text: "Z kim" },
      { label: "B", text: "Z czym" },
      { label: "C", text: "Kogo" },
      { label: "D", text: "O czym" }
    ],
    correctAnswer: "A",
    explanationRu: `Глагол rozmawiać требует narzędnika с предлогом "z": rozmawiać z kim/z czym.

🔑 Формула: rozmawiać z + narzędnik (z kim? z czym?)

Разговор по телефону — с человеком → z kim

• B) "Z czym" — narzędnik, но для вещей
• C) "Kogo" — dopełniacz/biernik без предлога
• D) "O czym" — miejscownik, "rozmawiać o czymś" = о чём, не с кем`,
    explanationPl: `Czasownik rozmawiać wymaga narzędnika z przyimkiem "z": rozmawiać z kim/z czym.

🔑 Formuła: rozmawiać z + narzędnik (z kim? z czym?)

Rozmowa przez telefon — z osobą → z kim

• B) "Z czym" — narzędnik, ale dla rzeczy
• C) "Kogo" — dopełniacz/biernik bez przyimka
• D) "O czym" — miejscownik, "rozmawiać o czymś" = o czym, nie z kim`,
    topic: "Zaimki pytające — z kim vs z czym (narzędnik)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_004",
    source: "pdf",
    question: "_______ myślisz?",
    options: [
      { label: "A", text: "Co" },
      { label: "B", text: "O kim" },
      { label: "C", text: "Kogo" },
      { label: "D", text: "O czym" }
    ],
    correctAnswer: "D",
    explanationRu: `Глагол myśleć требует miejscownika с предлогом "o": myśleć o kim/o czym.

🔑 Формула: myśleć o + miejscownik (o kim? o czym?)

Общий вопрос без указания на человека → o czym (о чём думаешь?)

• A) "Co" — biernik/mianownik без предлога
• B) "O kim" — miejscownik, но для людей
• C) "Kogo" — dopełniacz/biernik без предлога`,
    explanationPl: `Czasownik myśleć wymaga miejscownika z przyimkiem "o": myśleć o kim/o czym.

🔑 Formuła: myśleć o + miejscownik (o kim? o czym?)

Ogólne pytanie bez wskazania na osobę → o czym (o czym myślisz?)

• A) "Co" — biernik/mianownik bez przyimka
• B) "O kim" — miejscownik, ale dla osób
• C) "Kogo" — dopełniacz/biernik bez przyimka`,
    topic: "Zaimki pytające — o kim vs o czym (miejscownik)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_005",
    source: "pdf",
    question: "_______ to jest samochód? — To jest Volkswagen.",
    options: [
      { label: "A", text: "Który" },
      { label: "B", text: "Co za" },
      { label: "C", text: "Jaki" },
      { label: "D", text: "Jakiego" }
    ],
    correctAnswer: "C",
    explanationRu: `Jaki спрашивает о качестве/типе/марке (какой?).
Który спрашивает о выборе из известного множества (который из?).
Co za — разговорное "что за".

🔑 Вопрос о марке/типе → Jaki (Jaki to samochód? — Volkswagen)

• A) "Który" — требует контекста выбора (Który z tych samochodów?)
• B) "Co za" — используется в восклицательных предложениях (Co za samochód!), не в вопросах
• D) "Jakiego" — dopełniacz, не подходит к "to jest"`,
    explanationPl: `Jaki pyta o cechę/typ/markę (jaki?).
Który pyta o wybór ze znanego zbioru (który z?).
Co za — potoczne "co za".

🔑 Pytanie o markę/typ → Jaki (Jaki to samochód? — Volkswagen)

• A) "Który" — wymaga kontekstu wyboru (Który z tych samochodów?)
• B) "Co za" — używane głównie w zdaniach wykrzyknikowych (Co za samochód!), nie w pytaniach
• D) "Jakiego" — dopełniacz, nie pasuje do "to jest"`,
    topic: "Zaimki pytające — jaki vs który vs co za (wybór)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_006",
    source: "pdf",
    question: "_______ to jest torebka?",
    options: [
      { label: "A", text: "Kogo" },
      { label: "B", text: "Która" },
      { label: "C", text: "Jaka" },
      { label: "D", text: "Czyja" }
    ],
    correctAnswer: "D",
    explanationRu: `Czyj/czyja/czyje спрашивает о принадлежности (чей/чья/чьё).
Kogo — dopełniacz от "kto", не используется для принадлежности.

🔑 Вопрос о принадлежности: Czyja (ж.р., согласуется с "torebka")

• A) "Kogo" — dopełniacz, не для принадлежности
• B) "Która" — выбор из множества, не принадлежность
• C) "Jaka" — качество/тип, не принадлежность`,
    explanationPl: `Czyj/czyja/czyje pyta o przynależność (czyj/czyja/czyje).
Kogo — dopełniacz od "kto", nie używa się dla przynależności.

🔑 Pytanie o przynależność: Czyja (r.ż., zgadza się z "torebka")

• A) "Kogo" — dopełniacz, nie dla przynależności
• B) "Która" — wybór ze zbioru, nie przynależność
• C) "Jaka" — cecha/typ, nie przynależność`,
    topic: "Zaimki pytające — czyj vs kogo (przynależność)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_007",
    source: "pdf",
    question: "_______ studentów zdało egzamin?",
    options: [
      { label: "A", text: "Ile" },
      { label: "B", text: "Który" },
      { label: "C", text: "Ilu" },
      { label: "D", text: "Ile z" }
    ],
    correctAnswer: "C",
    explanationRu: `Ile — для niemęskoosobowych (ile książek, ile kobiet).
Ilu — для męskoosobowych (ilu studentów, ilu mężczyzn).

🔑 "Studentów" — męskoosobowe → Ilu studentów?

• A) "Ile" — для niemęskoosobowych
• B) "Który" — выбор, не количество
• D) "Ile z" — неполная конструкция`,
    explanationPl: `Ile — dla niemęskoosobowych (ile książek, ile kobiet).
Ilu — dla męskoosobowych (ilu studentów, ilu mężczyzn).

🔑 "Studentów" — męskoosobowe → Ilu studentów?

• A) "Ile" — dla niemęskoosobowych
• B) "Który" — wybór, nie ilość
• D) "Ile z" — niepełna konstrukcja`,
    topic: "Zaimki pytające — ile vs ilu (liczebniki pytające)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_008",
    source: "pdf",
    question: "_______ jedziesz na wakacje?",
    options: [
      { label: "A", text: "Gdzie" },
      { label: "B", text: "Dokąd" },
      { label: "C", text: "Skąd" },
      { label: "D", text: "Którędy" }
    ],
    correctAnswer: "B",
    explanationRu: `Gdzie — место (где?).
Dokąd — направление движения (куда?).
Skąd — источник движения (откуда?).

🔑 Глагол jechać + направление → Dokąd (куда едешь?)

• A) "Gdzie" — место, не направление
• C) "Skąd" — откуда, противоположное направление
• D) "Którędy" — каким путём, не конечная точка`,
    explanationPl: `Gdzie — miejsce (gdzie?).
Dokąd — kierunek ruchu (dokąd?).
Skąd — źródło ruchu (skąd?).

🔑 Czasownik jechać + kierunek → Dokąd (dokąd jedziesz?)

• A) "Gdzie" — miejsce, nie kierunek
• C) "Skąd" — skąd, przeciwny kierunek
• D) "Którędy" — jaką drogą, nie punkt docelowy`,
    topic: "Zaimki pytające — dokąd vs gdzie vs skąd (kierunek)",
    difficulty: "high"
  },
  {
    id: "B2_ZAIMKI_PYT_001",
    source: "pdf",
    question: "Nie wiem, _______.",
    options: [
      { label: "A", text: "co on chce" },
      { label: "B", text: "co chce on" },
      { label: "C", text: "on co chce" },
      { label: "D", text: "chce co on" }
    ],
    correctAnswer: "A",
    explanationRu: `В pytaniach zależnych (косвенных вопросах) порядок слов — как в утвердительном предложении: zaimek pytający + podmiot + orzeczenie.

🔑 Формула: Nie wiem, co + on + chce (не "co chce on")

• B) "co chce on" — инверсия, как в прямом вопросе (неправильно)
• C) "on co chce" — неправильный порядок
• D) "chce co on" — неправильный порядок`,
    explanationPl: `W pytaniach zależnych szyk zdania jest jak w zdaniu oznajmującym: zaimek pytający + podmiot + orzeczenie.

🔑 Formuła: Nie wiem, co + on + chce (nie "co chce on")

• B) "co chce on" — inwersja jak w pytaniu bezpośrednim (niepoprawnie)
• C) "on co chce" — niepoprawny szyk
• D) "chce co on" — niepoprawny szyk`,
    topic: "Zaimki pytające — pytania zależne (szyk zdania)",
    difficulty: "very high"
  },
  {
    id: "B2_ZAIMKI_PYT_002",
    source: "pdf",
    question: "Zrobię _______, co będzie potrzebne, żeby ci pomóc.",
    options: [
      { label: "A", text: "cokolwiek" },
      { label: "B", text: "ktokolwiek" },
      { label: "C", text: "coś" },
      { label: "D", text: "wszystko" }
    ],
    correctAnswer: "D",
    explanationRu: `Wszystko, co będzie potrzebne — устойчивая конструкция, означающая "всё, что понадобится".

🔑 Формула: wszystko, co... (полнота действий)

• A) "cokolwiek" — не сочетается с "co będzie potrzebne" (избыточно)
• B) "ktokolwiek" — для людей, не для действий
• C) "coś" — что-то неопределённое, слишком слабо для этого контекста`,
    explanationPl: `Wszystko, co będzie potrzebne — stała konstrukcja oznaczająca "wszystko, co się przyda".

🔑 Formuła: wszystko, co... (pełnia działań)

• A) "cokolwiek" — nie łączy się z "co będzie potrzebne" (redundancja)
• B) "ktokolwiek" — dla osób, nie dla działań
• C) "coś" — coś nieokreślonego, zbyt słabe dla tego kontekstu`,
    topic: "Zaimki pytające — cokolwiek vs ktokolwiek vs jakikolwiek",
    difficulty: "very high"
  }
  ,
  // ========================================================================
  // TASKS 141-150: ZAIMKI PYTAJĄCE (Interrogative Pronouns) — Part 2
  // Batch 13 — 8x High + 2x Very High difficulty
  // ========================================================================
  {
    id: "B1_ZAIMKI_PYT_009",
    source: "pdf",
    question: "_______ głosujesz w wyborach?",
    options: [
      { label: "A", text: "Kogo" },
      { label: "B", text: "Za kogo" },
      { label: "C", text: "O kogo" },
      { label: "D", text: "Na kogo" }
    ],
    correctAnswer: "D",
    explanationRu: `Глагол głosować требует конструкции na + biernik: głosować na kogo/na co.

🔑 Формула: głosować na + biernik (на кого голосуешь?)

• A) "Kogo" — biernik без предлога, не подходит
• B) "Za kogo" — другое значение (вместо кого)
• C) "O kogo" — неправильный предлог`,
    explanationPl: `Czasownik głosować wymaga konstrukcji na + biernik: głosować na kogo/na co.

🔑 Formuła: głosować na + biernik (na kogo głosujesz?)

• A) "Kogo" — biernik bez przyimka, nie pasuje
• B) "Za kogo" — inne znaczenie (w zastępstwie)
• C) "O kogo" — niepoprawny przyimek`,
    topic: "Zaimki pytające — na kogo vs za kogo (biernik z przyimkiem)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_010",
    source: "pdf",
    question: "_______ uczysz się polskiego?",
    options: [
      { label: "A", text: "Kiedy" },
      { label: "B", text: "Od kiedy" },
      { label: "C", text: "Do kiedy" },
      { label: "D", text: "Jak długo" }
    ],
    correctAnswer: "B",
    explanationRu: `Od kiedy — с какого момента (начало действия).
Do kiedy — до какого момента (конец действия).
Jak długo — как долго (продолжительность).

🔑 Вопрос о начале продолжающегося действия → Od kiedy (с каких пор?)

• A) "Kiedy" — когда (точный момент), не период
• C) "Do kiedy" — до какого момента, не начало
• D) "Jak długo" — продолжительность, но без указания начала`,
    explanationPl: `Od kiedy — od jakiego momentu (początek działania).
Do kiedy — do jakiego momentu (koniec działania).
Jak długo — jak długo (czas trwania).

🔑 Pytanie o początek trwającego działania → Od kiedy (od kiedy?)

• A) "Kiedy" — kiedy (konkretny moment), nie okres
• C) "Do kiedy" — do jakiego momentu, nie początek
• D) "Jak długo" — czas trwania, ale bez wskazania początku`,
    topic: "Zaimki pytające — od kiedy vs do kiedy vs jak długo",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_011",
    source: "pdf",
    question: "_______ kupiłeś tyle jedzenia?",
    options: [
      { label: "A", text: "Po co" },
      { label: "B", text: "Dlaczego" },
      { label: "C", text: "Na co" },
      { label: "D", text: "Czemu" }
    ],
    correctAnswer: "A",
    explanationRu: `Po co — зачем, для какой цели (cel).
Dlaczego/Czemu — почему, по какой причине (przyczyna).

🔑 Вопрос о цели покупки → Po co (зачем купил?)

• B) "Dlaczego" — причина, не цель
• C) "Na co" — на что (другое значение)
• D) "Czemu" — почему (= dlaczego), причина`,
    explanationPl: `Po co — po co, w jakim celu (cel).
Dlaczego/Czemu — dlaczego, z jakiej przyczyny (przyczyna).

🔑 Pytanie o cel zakupu → Po co (po co kupiłeś?)

• B) "Dlaczego" — przyczyna, nie cel
• C) "Na co" — na co (inne znaczenie)
• D) "Czemu" — dlaczego (= dlaczego), przyczyna`,
    topic: "Zaimki pytające — po co vs dlaczego vs na co (cel)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_012",
    source: "pdf",
    question: "_______ przyjechałeś do pracy?",
    options: [
      { label: "A", text: "Z czym" },
      { label: "B", text: "Na czym" },
      { label: "C", text: "Czym" },
      { label: "D", text: "W czym" }
    ],
    correctAnswer: "C",
    explanationRu: `Czym (narzędnik без предлога) — каким средством передвижения.

🔑 Формула: jechać/przyjechać + czym (чем приехал? — autobusem, samochodem)

• A) "Z czym" — с чем (сопровождение)
• B) "Na czym" — на чём (поверхность)
• D) "W czym" — в чём (внутри)`,
    explanationPl: `Czym (narzędnik bez przyimka) — jakim środkiem transportu.

🔑 Formuła: jechać/przyjechać + czym (czym przyjechałeś? — autobusem, samochodem)

• A) "Z czym" — z czym (towarzyszenie)
• B) "Na czym" — na czym (powierzchnia)
• D) "W czym" — w czym (wewnątrz)`,
    topic: "Zaimki pytające — czym vs z czym vs na czym (narzędnik)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_013",
    source: "pdf",
    question: "_______ koloru jest twój nowy samochód?",
    options: [
      { label: "A", text: "Jaki" },
      { label: "B", text: "Który" },
      { label: "C", text: "Jakiego" },
      { label: "D", text: "Którego" }
    ],
    correctAnswer: "C",
    explanationRu: `Конструкция być + dopełniacz (jakiego koloru?) требует dopełniacza.

🔑 Формула: Jakiego + rzeczownik w dopełniaczu + jest...?

• A) "Jaki" — mianownik, не подходит
• B) "Który" — выбор из множества, не качество
• D) "Którego" — dopełniacz, но для выбора, не качества`,
    explanationPl: `Konstrukcja być + dopełniacz (jakiego koloru?) wymaga dopełniacza.

🔑 Formuła: Jakiego + rzeczownik w dopełniaczu + jest...?

• A) "Jaki" — mianownik, nie pasuje
• B) "Który" — wybór ze zbioru, nie cecha
• D) "Którego" — dopełniacz, ale dla wyboru, nie cechy`,
    topic: "Zaimki pytające — jakiego vs którego (dopełniacz)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_014",
    source: "pdf",
    question: "_______ samochodem przyjechałeś?",
    options: [
      { label: "A", text: "Czyj" },
      { label: "B", text: "Czyim" },
      { label: "C", text: "Czyjego" },
      { label: "D", text: "Czyją" }
    ],
    correctAnswer: "B",
    explanationRu: `Czyj склоняется как прилагательное. "Samochodem" — narzędnik м.р., поэтому нужен czyim.

🔑 Склонение: czyj (mian.) → czyjego (dop.) → czyjemu (cel.) → czyim (narz.)

• A) "Czyj" — mianownik
• C) "Czyjego" — dopełniacz
• D) "Czyją" — biernik/narzędnik ж.р.`,
    explanationPl: `Czyj odmienia się jak przymiotnik. "Samochodem" — narzędnik r.m., więc potrzebny czyim.

🔑 Odmiana: czyj (mian.) → czyjego (dop.) → czyjemu (cel.) → czyim (narz.)

• A) "Czyj" — mianownik
• C) "Czyjego" — dopełniacz
• D) "Czyją" — biernik/narzędnik r.ż.`,
    topic: "Zaimki pytające — czyim vs czyją vs czyjego (odmiana)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_015",
    source: "pdf",
    question: "_______ języku mówisz w domu?",
    options: [
      { label: "A", text: "Jaki" },
      { label: "B", text: "W jakim" },
      { label: "C", text: "Na jakim" },
      { label: "D", text: "Jakiego" }
    ],
    correctAnswer: "B",
    explanationRu: `Конструкция mówić w + miejscownik: mówić w jakim języku.

🔑 Формула: mówić w + miejscownik (в каком языке = на каком языке)

• A) "Jaki" — mianownik, не подходит
• C) "Na jakim" — неправильный предлог для "język"
• D) "Jakiego" — dopełniacz`,
    explanationPl: `Konstrukcja mówić w + miejscownik: mówić w jakim języku.

🔑 Formuła: mówić w + miejscownik (w jakim języku)

• A) "Jaki" — mianownik, nie pasuje
• C) "Na jakim" — niepoprawny przyimek dla "język"
• D) "Jakiego" — dopełniacz`,
    topic: "Zaimki pytające — w jakim vs na jakim (miejscownik)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_016",
    source: "pdf",
    question: "_______ kupujesz ten prezent?",
    options: [
      { label: "A", text: "Komu" },
      { label: "B", text: "Kogo" },
      { label: "C", text: "Do kogo" },
      { label: "D", text: "Dla kogo" }
    ],
    correctAnswer: "D",
    explanationRu: `Kupować dla + dopełniacz — покупать для кого-то.

🔑 В экзаменационной норме предпочитается: kupować coś dla kogo (для кого покупаешь?)

• A) "Komu" — celownik, разговорный вариант, не стандартный
• B) "Kogo" — biernik, не подходит
• C) "Do kogo" — направление, не получатель`,
    explanationPl: `Kupować dla + dopełniacz — kupować dla kogoś.

🔑 W normie egzaminacyjnej preferuje się: kupować coś dla kogo (dla kogo kupujesz?)

• A) "Komu" — celownik, wariant potoczny, niestandardowy
• B) "Kogo" — biernik, nie pasuje
• C) "Do kogo" — kierunek, nie odbiorca`,
    topic: "Zaimki pytające — dla kogo vs komu (cel vs odbiorca)",
    difficulty: "high"
  },
  {
    id: "B2_ZAIMKI_PYT_003",
    source: "pdf",
    question: "Która forma jest bardziej typowa dla języka mówionego?\n\"Nie rozumiem, _______ się tak denerwujesz.\"",
    options: [
      { label: "A", text: "co" },
      { label: "B", text: "czego" },
      { label: "C", text: "czemu" },
      { label: "D", text: "dlaczego" }
    ],
    correctAnswer: "C",
    explanationRu: `Czemu — разговорный синоним "dlaczego", типичный для устной речи.
Dlaczego — нейтральный/формальный вариант.

🔑 Вопрос о регистре: разговорный → czemu

• A) "co" — что (объект), не причина
• B) "czego" — dopełniacz, не подходит для вопроса о причине
• D) "dlaczego" — грамматически верно, но более формально`,
    explanationPl: `Czemu — potoczny synonim "dlaczego", typowy dla języka mówionego.
Dlaczego — wariant neutralny/formalny.

🔑 Pytanie o rejestr: język mówiony → czemu

• A) "co" — co (obiekt), nie przyczyna
• B) "czego" — dopełniacz, nie pasuje do pytania o przyczynę
• D) "dlaczego" — gramatycznie poprawne, ale bardziej formalne`,
    topic: "Zaimki pytające — czemu vs dlaczego (rejestr językowy)",
    difficulty: "very high"
  },
  {
    id: "B2_ZAIMKI_PYT_004",
    source: "pdf",
    question: "Jeśli _______ z biura zadzwoni, powiedz, że wracam za godzinę.",
    options: [
      { label: "A", text: "ktoś" },
      { label: "B", text: "ktokolwiek" },
      { label: "C", text: "każdy" },
      { label: "D", text: "nikt" }
    ],
    correctAnswer: "A",
    explanationRu: `Ktoś z biura — кто-то из офиса (конкретная, хотя и неизвестная особа из определённого круга).

🔑 Формула: ktoś z + dopełniacz (кто-то из...)

• B) "ktokolwiek" — не сочетается с "z biura" (ограниченный круг ≠ любой)
• C) "każdy" — каждый (все по отдельности), не подходит семантически
• D) "nikt" — никто (отрицание)`,
    explanationPl: `Ktoś z biura — ktoś z biura (konkretna, choć nieznana osoba z określonego kręgu).

🔑 Formuła: ktoś z + dopełniacz (ktoś z...)

• B) "ktokolwiek" — nie łączy się z "z biura" (ograniczony krąg ≠ dowolny)
• C) "każdy" — każdy (wszyscy z osobna), nie pasuje semantycznie
• D) "nikt" — nikt (negacja)`,
    topic: "Zaimki pytające — zaimki nieokreślone (ktoś vs ktokolwiek)",
    difficulty: "very high"
  }
  ,
  // ========================================================================
  // TASKS 151-160: ZAIMKI PYTAJĄCE (Interrogative Pronouns) — Part 3
  // Batch 14 — 8x High + 2x Very High difficulty
  // ========================================================================
  {
    id: "B1_ZAIMKI_PYT_017",
    source: "pdf",
    question: "_______ uciekasz?",
    options: [
      { label: "A", text: "Od kogo" },
      { label: "B", text: "Z kim" },
      { label: "C", text: "Za kim" },
      { label: "D", text: "Przed kim" }
    ],
    correctAnswer: "D",
    explanationRu: `Глагол uciekać требует конструкции przed + narzędnik: uciekać przed kim/przed czym.

🔑 Формула: uciekać przed + narzędnik (от кого/чего убегаешь?)

• A) "Od kogo" — dopełniacz, другая конструкция с иным оттенком значения (отдаление, а не избегание)
• B) "Z kim" — с кем, не от кого
• C) "Za kim" — за кем (преследование)`,
    explanationPl: `Czasownik uciekać wymaga konstrukcji przed + narzędnik: uciekać przed kim/przed czym.

🔑 Formuła: uciekać przed + narzędnik (przed kim/czym uciekasz?)

• A) "Od kogo" — dopełniacz, inna konstrukcja o innym odcieniu znaczeniowym (oddalenie, nie unikanie)
• B) "Z kim" — z kim, nie od kogo
• C) "Za kim" — za kim (pościg)`,
    topic: "Zaimki pytające — przed kim vs przed czym (narzędnik z przyimkiem)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_018",
    source: "pdf",
    question: "_______ byłeś wczoraj wieczorem?",
    options: [
      { label: "A", text: "Do kogo" },
      { label: "B", text: "U kogo" },
      { label: "C", text: "Z kim" },
      { label: "D", text: "Kogo" }
    ],
    correctAnswer: "B",
    explanationRu: `U kogo — у кого (место, где находился).
Do kogo — к кому (направление движения).

🔑 Глагол być + место → u kogo (у кого был?)

• A) "Do kogo" — направление, не место
• C) "Z kim" — с кем (сопровождение)
• D) "Kogo" — biernik/dopełniacz без предлога`,
    explanationPl: `U kogo — u kogo (miejsce, gdzie przebywał).
Do kogo — do kogo (kierunek ruchu).

🔑 Czasownik być + miejsce → u kogo (u kogo byłeś?)

• A) "Do kogo" — kierunek, nie miejsce
• C) "Z kim" — z kim (towarzyszenie)
• D) "Kogo" — biernik/dopełniacz bez przyimka`,
    topic: "Zaimki pytające — u kogo vs do kogo (miejscownik vs kierunek)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_019",
    source: "pdf",
    question: "_______ odziedziczyłeś ten zegarek?",
    options: [
      { label: "A", text: "Od kogo" },
      { label: "B", text: "Z kim" },
      { label: "C", text: "Po kim" },
      { label: "D", text: "Dla kogo" }
    ],
    correctAnswer: "C",
    explanationRu: `Глагол odziedziczyć требует конструкции po + miejscownik: odziedziczyć po kim.

🔑 Формула: odziedziczyć coś po + miejscownik (после кого унаследовал?)

• A) "Od kogo" — от кого (получить), но не наследство
• B) "Z kim" — с кем
• D) "Dla kogo" — для кого`,
    explanationPl: `Czasownik odziedziczyć wymaga konstrukcji po + miejscownik: odziedziczyć po kim.

🔑 Formuła: odziedziczyć coś po + miejscownik (po kim odziedziczyłeś?)

• A) "Od kogo" — od kogo (otrzymać), ale nie dziedzictwo
• B) "Z kim" — z kim
• D) "Dla kogo" — dla kogo`,
    topic: "Zaimki pytające — po kim vs po czym (miejscownik z \"po\")",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_020",
    source: "pdf",
    question: "_______ musisz wybierać?",
    options: [
      { label: "A", text: "Między kim" },
      { label: "B", text: "Z kim" },
      { label: "C", text: "Od kogo" },
      { label: "D", text: "Kogo" }
    ],
    correctAnswer: "A",
    explanationRu: `Глагол wybierać требует конструкции między + narzędnik: wybierać między kim/między czym.

🔑 Формула: wybierać między + narzędnik (между кем/чем выбираешь?)

• B) "Z kim" — с кем (сопровождение)
• C) "Od kogo" — от кого
• D) "Kogo" — biernik, прямой объект`,
    explanationPl: `Czasownik wybierać wymaga konstrukcji między + narzędnik: wybierać między kim/między czym.

🔑 Formuła: wybierać między + narzędnik (między kim/czym wybierasz?)

• B) "Z kim" — z kim (towarzyszenie)
• C) "Od kogo" — od kogo
• D) "Kogo" — biernik, dopełnienie bliższe`,
    topic: "Zaimki pytające — między kim vs między czym (narzędnik z \"między\")",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_021",
    source: "pdf",
    question: "_______ oceniasz swoje szanse?",
    options: [
      { label: "A", text: "Ile" },
      { label: "B", text: "Jak" },
      { label: "C", text: "Na ile" },
      { label: "D", text: "Jakie" }
    ],
    correctAnswer: "C",
    explanationRu: `Конструкция oceniać na + biernik — оценивать на сколько (по шкале).

🔑 Формула: oceniać coś na ile (на сколько оцениваешь?)

• A) "Ile" — сколько (количество)
• B) "Jak" — как (способ)
• D) "Jakie" — какие (качество)`,
    explanationPl: `Konstrukcja oceniać na + biernik — oceniać na ile (w skali).

🔑 Formuła: oceniać coś na ile (na ile oceniasz?)

• A) "Ile" — ile (ilość)
• B) "Jak" — jak (sposób)
• D) "Jakie" — jakie (cecha)`,
    topic: "Zaimki pytające — na ile vs ile (ocena)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_022",
    source: "pdf",
    question: "_______ godzinie zaczyna się film?",
    options: [
      { label: "A", text: "Kiedy" },
      { label: "B", text: "Która" },
      { label: "C", text: "Jakiej" },
      { label: "D", text: "O której" }
    ],
    correctAnswer: "D",
    explanationRu: `Конструкция o + miejscownik для указания точного времени: o której godzinie.

🔑 Формула: O której (godzinie)...? (в котором часу?)

• A) "Kiedy" — когда (общий вопрос о времени)
• B) "Która" — которая (mianownik)
• C) "Jakiej" — какой (dopełniacz)`,
    explanationPl: `Konstrukcja o + miejscownik dla wskazania dokładnego czasu: o której godzinie.

🔑 Formuła: O której (godzinie)...? (o której godzinie?)

• A) "Kiedy" — kiedy (ogólne pytanie o czas)
• B) "Która" — która (mianownik)
• C) "Jakiej" — jakiej (dopełniacz)`,
    topic: "Zaimki pytające — o której vs kiedy (czas)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_023",
    source: "pdf",
    question: "_______ kupiłeś ten telefon?",
    options: [
      { label: "A", text: "Ile" },
      { label: "B", text: "Za ile" },
      { label: "C", text: "Na ile" },
      { label: "D", text: "Po ile" }
    ],
    correctAnswer: "B",
    explanationRu: `Конструкция kupić za + biernik — купить за сколько (цена).

🔑 Формула: kupić coś za ile (за сколько купил?)

• A) "Ile" — сколько (количество)
• C) "Na ile" — на сколько (оценка)
• D) "Po ile" — по сколько (цена за единицу)`,
    explanationPl: `Konstrukcja kupić za + biernik — kupić za ile (cena).

🔑 Formuła: kupić coś za ile (za ile kupiłeś?)

• A) "Ile" — ile (ilość)
• C) "Na ile" — na ile (ocena)
• D) "Po ile" — po ile (cena za sztukę)`,
    topic: "Zaimki pytające — za ile vs ile (cena)",
    difficulty: "high"
  },
  {
    id: "B1_ZAIMKI_PYT_024",
    source: "pdf",
    question: "_______ domu mieszkasz?",
    options: [
      { label: "A", text: "Czyj" },
      { label: "B", text: "Czyjego" },
      { label: "C", text: "W czyim" },
      { label: "D", text: "Czyim" }
    ],
    correctAnswer: "C",
    explanationRu: `Конструкция mieszkać w + miejscownik: mieszkać w czyim domu.

🔑 Формула: mieszkać w + miejscownik (w czyim domu?)

• A) "Czyj" — mianownik
• B) "Czyjego" — dopełniacz
• D) "Czyim" — narzędnik без предлога`,
    explanationPl: `Konstrukcja mieszkać w + miejscownik: mieszkać w czyim domu.

🔑 Formuła: mieszkać w + miejscownik (w czyim domu?)

• A) "Czyj" — mianownik
• B) "Czyjego" — dopełniacz
• D) "Czyim" — narzędnik bez przyimka`,
    topic: "Zaimki pytające — w czyim vs czyim (miejscownik)",
    difficulty: "high"
  },
  {
    id: "B2_ZAIMKI_PYT_005",
    source: "pdf",
    question: "To jest człowiek, _______ zawdzięczam wszystko.",
    options: [
      { label: "A", text: "który" },
      { label: "B", text: "któremu" },
      { label: "C", text: "którego" },
      { label: "D", text: "z którym" }
    ],
    correctAnswer: "B",
    explanationRu: `В придаточном предложении zawdzięczać требует celownika: zawdzięczać komu.

🔑 Формула: zawdzięczać coś + celownik → zaimek względny któremu

• A) "który" — mianownik
• C) "którego" — dopełniacz/biernik
• D) "z którym" — narzędnik с предлогом`,
    explanationPl: `W zdaniu podrzędnym zawdzięczać wymaga celownika: zawdzięczać komu.

🔑 Formuła: zawdzięczać coś + celownik → zaimek względny któremu

• A) "który" — mianownik
• C) "którego" — dopełniacz/biernik
• D) "z którym" — narzędnik z przyimkiem`,
    topic: "Zaimki pytające — zaimki względne w zdaniach złożonych",
    difficulty: "very high"
  },
  {
    id: "B2_ZAIMKI_PYT_006",
    source: "pdf",
    question: "Która forma oznacza osobę konkretną, choć nieznaną?\n\"Szukam _______, kto mógłby mi pomóc.\"",
    options: [
      { label: "A", text: "kogoś" },
      { label: "B", text: "kogokolwiek" },
      { label: "C", text: "nikogo" },
      { label: "D", text: "każdego" }
    ],
    correctAnswer: "A",
    explanationRu: `Kogoś — кого-то конкретного, хотя и неизвестного.
Kogokolwiek — кого угодно, любого без исключения.

🔑 Вопрос о конкретности: конкретный, но неизвестный → kogoś

• B) "kogokolwiek" — означает "любого", не "конкретного"
• C) "nikogo" — никого (отрицание)
• D) "każdego" — каждого (всех по отдельности)`,
    explanationPl: `Kogoś — kogoś konkretnego, choć nieznanego.
Kogokolwiek — kogokolwiek, dowolnego bez wyjątku.

🔑 Pytanie o konkretność: konkretny, ale nieznany → kogoś

• B) "kogokolwiek" — oznacza "dowolnego", nie "konkretnego"
• C) "nikogo" — nikogo (negacja)
• D) "każdego" — każdego (wszyscy z osobna)`,
    topic: "Zaimki pytające — zaimki nieokreślone z \"-ś\" vs \"-kolwiek\"",
    difficulty: "very high"
  }
];
