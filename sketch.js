
var lista_img

class Kropelka {
  
  constructor(x, i) {
    this.x = x;
    this.y = -20;
    this.i = i
    this.r = 0
    this.s = 32
    this.speed = random(0.5, 1.5)
    this.a_speed = random(-0.03, 0.03)
  }
  
  rysuj() {
    translate(this.x, this.y)
    rotate(this.r)
    image(lista_img[this.i], 0, 0, this.s, this.s)
    rotate(-this.r)
    translate(-this.x, -this.y)
  }
  
  spadaj() {
    this.y += this.speed
    this.r += this.a_speed
  }
  
  czy_umar() {
    if (this.y > windowHeight + 50) {
      return true
    }
    return false
  }
  
  klikniete(x, y) {
    if (createVector(x, y).dist(createVector(this.x, this.y)) < 15) {
      this.s = 40
      return true
    } else {
      this.s = 32
      return false
    }
  }
  
}

var mezczyzna = ['Aaron', 'Abram', 'Adam', 'Adrian', 'Alan', 'Albert', 'Aleks', 'Aleksander', 'Aleksy', 'Alfred', 'Ali', 'Alojzy', 'Alwar', 'Amadeusz', 'Ambroży', 'Ananiasz', 'Anastazy', 'Andrzej', 'Antoni', 'Antoniusz', 'Ariel', 'Arkadiusz', 'Arnold', 'Aron', 'Artur', 'Atanazy', 'August', 'Barnaba', 'Bartek', 'Bartłomiej', 'Bartosz', 'Bazyli', 'Beniamin', 'Bernard', 'Błażej', 'Bogdan', 'Bogumił', 'Bogusław', 'Bolesław', 'Bolko', 'Bonifacy', 'Bożydar', 'Brajan', 'Brian', 'Bronisław', 'Bruno', 'Brunon', 'Cezary', 'Chamor', 'Chrystian', 'Cyprian', 'Cyryl', 'Czesław', 'Damian', 'Daniel', 'Dante', 'Dariusz', 'Dawid', 'Diego', 'Dionizy', 'Ditmar', 'Dobromir', 'Dobrosław', 'Dominik', 'Dorian', 'Dymitr', 'Edgar', 'Edmund', 'Edward', 'Edwin', 'Ela', 'Eliasz', 'Emanuel', 'Emil', 'Emilian', 'Emir', 'Eneasz', 'Ernest', 'Erwin', 'Eryk', 'Eugeniusz', 'Eustachy', 'Fabian', 'Felicjan', 'Feliks', 'Filemon', 'Filip', 'Florencjusz', 'Florenty', 'Florian', 'Franciszek', 'Fryderyk', 'Gabriel', 'Gerald', 'Gerard', 'Gerwazy', 'Gilbert', 'Gracjan', 'Grzegorz', 'Gustaw', 'Gwidon', 'Henryk', 'Hieronim', 'Horacy', 'Hubert', 'Hugo', 'Hugon', 'Ignacy', 'Igor', 'Ireneusz', 'Iwan', 'Iwo', 'Iwon', 'Izaak', 'Jacek', 'Jakub', 'Jan', 'Jaromir', 'Jarosław', 'Jędrzej', 'Jeremi', 'Jeremiasz', 'Jerzy', 'Joachim', 'Jonasz', 'Jonatan', 'Józef', 'Jozue', 'Juda', 'Julian', 'Juliusz', 'Justyn', 'Kacper', 'Kajetan', 'Kamil', 'Karol', 'Kasander', 'Kasjan', 'Kazimierz', 'Klaudiusz', 'Konrad', 'Konstanty', 'Konstantyn', 'Kordian', 'Kornel', 'Korneliusz', 'Kosma', 'Kryspin', 'Krystian', 'Krystyn', 'Krzesimir', 'Krzysztof', 'Ksawery', 'Kuba', 'Lech', 'Leokadiusz', 'Leon', 'Leonard', 'Leopold', 'Lew', 'Lucjan', 'Łucjan', 'Lucjusz', 'Ludwik', 'Luka', 'Łukasz', 'Maciej', 'Maks', 'Maksym', 'Maksymilian', 'Manuel', 'Marcel', 'Marceli', 'Marcin', 'Marek', 'Maria', 'Marian', 'Mariusz', 'Mateusz', 'Maurycy', 'Michał', 'Mieszko', 'Mikołaj', 'Miłosław', 'Miłosz', 'Mirosław', 'Natan', 'Neron', 'Nikodem', 'Noe', 'Norbert', 'Norbi', 'Oktawian', 'Oktawiusz', 'Olaf', 'Olgierd', 'Oliwer', 'Oliwier', 'Omar', 'Orest', 'Orlando', 'Oskar', 'Otis', 'Otto', 'Patryk', 'Paweł', 'Piotr', 'Przemysław', 'Radosław', 'Rafał', 'Remigiusz', 'Robert', 'Roch', 'Romuald', 'Ronald', 'Rudolf', 'Rufus', 'Ryszard', 'Sebastian', 'Sergiusz', 'Seweryn', 'Sławomir', 'Sławosz', 'Stanisław', 'Stefan', 'Sylwester', 'Syriusz', 'Szczepan', 'Szczęsny', 'Szymon', 'Tadeusz', 'Teodor', 'Teofil', 'Tobiasz', 'Tomasz', 'Tymon', 'Tytus', 'Waldemar', 'Walenty', 'Walery', 'Walter', 'Wergiliusz', 'Wiesław', 'Wiktor', 'Wilhelm', 'Wincenty', 'Wit', 'Witold', 'Władysław', 'Włodzimierz', 'Wojciech', 'Zachariasz', 'Zachary', 'Zbigniew', 'Zdzisław', 'Zenon', 'Zygfryd', 'Zygmunt']

var kobieta = ['Ada', 'Adela', 'Adelajda', 'Adelina', 'Adriana', 'Adrianna', 'Agata', 'Agnieszka', 'Alberta', 'Albina', 'Aldona', 'Aleks', 'Aleksandra', 'Alfreda', 'Alicja', 'Alina', 'Amalia', 'Amanda', 'Ambrozja', 'Amelia', 'Ana', 'Anabella', 'Anastazja', 'Andrea', 'Andromeda', 'Andżelika', 'Aneta', 'Angela', 'Angelika', 'Ania', 'Aniela', 'Anita', 'Anna', 'Annamaria', 'Antonia', 'Antonietta', 'Antonina', 'Apolonia', 'Ariadna', 'Ariel', 'Arlena', 'Arleta', 'Armida', 'Asia', 'Asteria', 'Atena', 'Augusta', 'Augustyna', 'Aurelia', 'Aurora', 'Barbara', 'Barbora', 'Basia', 'Basiunia', 'Beata', 'Beniamina', 'Berenika', 'Bernadeta', 'Berta', 'Bianka', 'Blanka', 'Błażeja', 'Bogdana', 'Bogna', 'Boguchwała', 'Bogumiła', 'Bogusława', 'Bolesława', 'Bona', 'Bożena', 'Bronisława', 'Brygida', 'Cecylia', 'Celestyna', 'Celia', 'Celina', 'Czesława', 'Dagmara', 'Dalila', 'Daniela', 'Danisława', 'Danka', 'Danuta', 'Daria', 'Daromiła', 'Dawida', 'Debora', 'Diana', 'Dobrawa', 'Dobromiła', 'Dobrota', 'Dominika', 'Dora', 'Dorota', 'Dżesika', 'Edyta', 'Ela', 'Elcia', 'Eliza', 'Elmira', 'Elunia', 'Elusia', 'Elwira', 'Elżbieta', 'Emilia', 'Emma', 'Erna', 'Ernestyna', 'Erwina', 'Eryka', 'Eugenia', 'Ewa', 'Ewalda', 'Ewelina', 'Fatima', 'Faustyna', 'Felicja', 'Filomena', 'Flora', 'Florencja', 'Florentyna', 'Franciszka', 'Frania', 'Freja', 'Frida', 'Fryda', 'Fryderyka', 'Gabriela', 'Gaja', 'Genowefa', 'Georgina', 'Gerda', 'Gertruda', 'Gilda', 'Grażyna', 'Greta', 'Halina', 'Hanna', 'Helena', 'Helga', 'Henia', 'Henryka', 'Hiacynta', 'Hilda', 'Honorata', 'Hortensja', 'Ida', 'Iga', 'Ilona', 'Inga', 'Ira', 'Irena', 'Irma', 'Ismena', 'Iwona', 'Izabela', 'Izolda', 'Izyda', 'Jadwiga', 'Jaga', 'Jagna', 'Jagoda', 'Janina', 'Janka', 'Jessica', 'Joanna', 'Jokasta', 'Jolanta', 'Józefa', 'Józefina', 'Judyta', 'Julia', 'Julianna', 'Julita', 'Justyna', 'Kaja', 'Kalina', 'Kamila', 'Karina', 'Karolina', 'Kasandra', 'Katarzyna', 'Kazimiera', 'Kinga', 'Kira', 'Klara', 'Klarysa', 'Klaudia', 'Klementyna', 'Konstancja', 'Kornelia', 'Krystyna', 'Krzysztofa', 'Ksenia', 'Ksymena', 'Laura', 'Lena', 'Leokadia', 'Leonia', 'Lidia', 'Ligia', 'Liliana', 'Lilianna', 'Liwia', 'Liza', 'Łucja', 'Lucyna', 'Ludwika', 'Luiza', 'Luna', 'Magda', 'Magdalena', 'Maja', 'Małgorzata', 'Malwina', 'Manuela', 'Mara', 'Marcela', 'Marcelina', 'Maria', 'Marianna', 'Marietta', 'Marika', 'Marina', 'Mariola', 'Marlena', 'Marta', 'Martyna', 'Maryja', 'Maryla', 'Maryna', 'Marzena', 'Matylda', 'Maks', 'Melania', 'Melina', 'Michalina', 'Milena', 'Mira', 'Miriam', 'Mirona', 'Mirosława', 'Monika', 'Nadia', 'Narcyza', 'Natalia', 'Natasza', 'Nela', 'Nikola', 'Nikoletta', 'Nina', 'Noemi', 'Nora', 'Norberta', 'Norma', 'Nula', 'Odeta', 'Ofelia', 'Oktawia', 'Olga', 'Olimpia', 'Oliwia', 'Oriana', 'Otylia', 'Patrycja', 'Paulina', 'Petronia', 'Pola', 'Przemysława', 'Rachela', 'Rafaela', 'Regina', 'Renata', 'Rita', 'Roberta', 'Roksana', 'Róża', 'Rozalia', 'Ryta', 'Sabina', 'Sabrina', 'Samanta', 'Samuela', 'Sandra', 'Sara', 'Selena', 'Serena', 'Simona', 'Sława', 'Sławomira', 'Sonia', 'Stanisława', 'Stefa', 'Stefania', 'Sybilla', 'Sylwia', 'Szarlota', 'Tamara', 'Tatiana', 'Tekla', 'Temida', 'Teodora', 'Teodozja', 'Teresa', 'Ulryka', 'Unisława', 'Urszula', 'Walentyna', 'Waleria', 'Wanda', 'Weronika', 'Wiesława', 'Wiktoria', 'Wincenta', 'Winona', 'Wioletta', 'Wisława', 'Władysława', 'Włodzimiera', 'Żaneta', 'Zbigniewa', 'Zdzisława', 'Zofia', 'Zoja', 'Zuzanna', 'Zyta']

var czynnosc = ['gotować', 'szyć', 'szydełkować', 'czytać', 'oglądać filmy', 'kierować autem', 'jeździć pociągiem', 'spacerować', 'malować', 'śpiewać', 'kupować rzadkie figurki', 'rysować', 'robić kolaże', 'blogować', 'imprezować', 'haftować', 'dziergać', 'grać w gry', 'grać na gitarze', 'słuchać muzyki', 'nagrywać zabawne filmiki', 'sprzątać', 'rzeźbić', 'układać puzzle', 'składać zestawy lego', 'spać', 'flirtować', 'randkować', 'się modlić', 'kolekcjonować znaczki', 'zbierać stare monety', 'pisać', 'rozmawiać', 'pić', 'palić', 'żonglować', 'biegać', 'pływać', 'wspinać się', 'zwiedzać', 'podróżować', 'scrollować tiktoka', 'tworzyć lalki', 'odwiedzać muzea', 'robić makijaż', 'piec ciasta', 'pracować', 'pielęgnować ogródek', 'wychodzić ze znajomymi', 'przeglądać się w lustrze', 'fotografować', 'programować', 'próbować dobrej kuchni', 'jeść pomidory', 'liczyć trudne zadania', 'obserwować ptaki', 'bingewatchować seriale', 'zamyślać się', 'latać samolotem', 'hodować patyczaki', 'streamować', 'uprawiać rzadkie rośliny', 'uczęszczać na siłownię', 'chodzić w kółko', 'podziwiać chmury', 'narzekać', 'udzielać się społecznie', 'wpłacać na zbiórki', 'pomagać', 'uczyć się historii brazylii', 'chodzić na koncerty', 'rozpoznawać flagi państw', 'wróżyć z kart', 'wysyłać listy', 'recenzować książki', 'produkować muzykę elektroniczną', 'korespondować z ludźmi poznanymi w internecie', 'wąchać kwiaty', 'płakać', 'rozkręcać stare urządzenia', 'żartować', 'wyprowadzać psy ze schroniska', 'odgrywać role', 'improwizować na scenie', 'kłamać', 'głaskać koty', 'segregować śmieci', 'sklejać modele', 'kopać piłkę', 'rzucać kośćmi', 'przeglądać gazetę', 'surfować po internecie', 'szukać perełek w lumpeksach', 'obcinać włosy']

var zwierze = ['kota', 'kotkę', 'psa', 'dwa koty', 'dwa psy', 'trzy koty', 'cztery koty', 'dwa koty i psa', 'kota i dwa psy', 'papugę', 'dwie papugi', 'królika', 'dwa króliki', 'dwa króliki i psa', 'królika i psa', 'królika i kota', 'patyczaki', 'patyczaki i psa', 'świnkę morską', 'świnkę morską i kota', 'świnkę morską i dwa koty', 'dwie świnki morskie', 'pająka', 'węża', 'jeża', 'jeża i psa', 'kota i jeża', 'psa i brata', 'myszoskoczka', 'szczura', 'rybki', 'hodowlę krewetek', 'dwa szczury ', 'trzy szczury', 'szczura i psa', 'kanarka', 'kota i kanarka', 'kanarka i kota', 'białą myszkę', 'dwie myszy', 'chomika', 'myszy i chomika', 'dwa chomiki']

var ubranie1 = ['eleganckie koszule', 'koszulki z nadrukami zespołów', 'gotyckie koszule', 'wyprasowane koszule', 'zadbane koszule', 'duże koszule', 'bluzki z dużym dekoltem', 'muszkę', 'koszule', 'koszule po starszym bracie', 'koszulki po starszym bracie', 'koszule po starszej siostrze', 'koszulki po starszej siostrze', 'koszulki po dzieciach znajomych rodziców', 'koszulki z vinted', 'koszule w słoneczniki', 'wzorowo zawiązane krawaty', 'czarny binder', 'cielisty binder', 'koszulki ze śmiesznymi nadrukami', 'czarne koszule', 'białe koszule', 'niepasujące do koszul krawaty', 'ciepłe swetry', 'dziurawe koszulki', 'golfy', 'koszulki golfowe', 'kolorowe koszulki', 'kolorowe swetry', 'bluzy zapinane na zamek', 'bluzy', 'bluzy z kieszenią', 'lniane koszule', 'za ciasne koszule', 'prześwitujące koszule', 'oversize’owe koszulki', 'oversize’owe bluzy', 'białe koszulki', 'czarne koszulki', 'koszulki z cekinami', 'sportowe koszulki', 'markowe bluzy', 'koszulki z cytatami z książek', 'rękawiczki bez palców', 'koszulki z nadrukowanymi dziełami sztuki', 'koszulki z obrazkami śmiesznych ryb', 'koszule z ozdobnym haftem na rękawach', 'koszulkę z poprzedniej nocy', 'koszulki z nadrukami rekinów', 'koszule z szerokimi rękawami', 'koszulki z różnych wydarzeń', 'koszulki z prowokacyjnymi nadrukami', 'koszule z falbankami', 'koszulki z jednorożcami', 'koszulki w koty', 'koszulki z nadrukowanymi twarzami znajomych', 'koszulki z potworami z minecrafta', 'koszulki z wizerunkiem hatsune miku', 'koszulki z wilkami', 'koszulki pozbawione nadruków', 'markowe koszulki', 'koszulki w dinozaury', 'koszulę z tygrysami na rękawach', 'koszule w kwiatowe motywy', 'koszule w zwierzęce motywy', 'koszule ze smokami na rękawach', 'koszule, którym zawsze brakuje paru guzików', 'puchate bluzy', 'kraciane koszule', 'flanelowe koszule', 'pasiaste koszule', 'poliestrowe koszule', 'koszule w krowie łaty', 'koszule w panterkę', 'koszulki z wizerunkiem ulubionego muzyka', 'koszulki z Davidem Bowie', 'koszulki z motywacyjnymi cytatami', 'koszulki z ulubionych gier', 'koszulki z obrazami Picassa']

var ubranie2 = ['tęczowe skarpetki', 'skarpetki w zwierzątka', 'skarpetki w pierogi', 'długie skarpety', 'skarpetki nie do pary', 'krótkie skarpety', 'dziurawe skarpety', 'białe skarpetki', 'sztruksowe spodnie', 'kowbojki', 'sportowe spodnie', 'eleganckie kapelusze', 'kaszkiety', 'meloniki', 'dresowe spodnie', 'skórzane spodnie', 'skórzaną kamizelkę', 'cylindry', 'szorty', 'jeansy', 'czarne jeansy', 'szerokie spodnie', 'jaskrawe buty', 'buty z tęczowymi sznurówkami', 'dziurawe buty', 'martensy', 'glany', 'tenisówki', 'plisowane spódnice', 'rurki', 'słuchawki na szyi', 'szaliki z frędzelkami', 'szalik przypominający taśmę filmową', 'szalik ulubionego zespołu', 'czapkę kibica', 'szalik kibica', 'złote kolczyki', 'srebrny kolczyk', 'złoty kolczyk', 'srebrne kolczyki', 'gotycki makijaż', 'kamizelkę w niezapominajki', 'torbę w kształcie rekina', 'za długie spodnie', 'wypchany po brzegi plecak', 'torbę z laptopem', 'pustę torbę na laptopa', 'pelerynę', 'wysokie buty', 'buty na wysokiej podeszwie', 'wiecznie rozwiązane buty', 'ma zawsze książkę w ręce', 'ciasne buty', 'za duże buty', 'ubłocone buty', 'dziurawe spodnie', 'spodnie z łańcuchem u boku', 'czarny płaszcz', 'krótkie spódniczki', 'skórzaną kurtkę', 'lniane spodnie', 'kamizelki', 'wzorzyste kamizelki', 'wełniane spodnie', 'piżamowe spodnie', 'szare ogrodniczki', 'zielone ogrodniczki', 'torbę z mnóstwem przypinek', 'mnóstwo pierścionków', 'ciągle ten sam naszyjnik', 'naszyjnik po mamie', 'sznur pereł', 'spodnie ubrudzone farbą', 'jeansową kurtkę', 'skórzaną kurtkę z punkowymi hasłami', 'różne plecaki, zrobione z pluszaków', 'błyszczącą kamizelkę', 'kamizelkę odblaskową', 'laskę ortopedyczną', 'używa aparatu słuchowego', 'druciane okulary', 'kolorowe soczewki', 'zerowe okulary', 'grube okulary', 'brudne okulary', 'spiczasty kapelusz', 'aparat słuchowy', 'kule ortopedyczne', 'tęczową przypinkę', 'posługuje się językiem migowym', 'farbuje włosy na niebiesko', 'włosy spięte w kucyk', 'włosy splecione w grube warkocze', 'warkoczyki', 'dredy', 'kolorowe peruki', 'aktywistyczne przypinki', 'zawsze ma przy sobie butelkę wody', 'zawsze ma przy sobie coś słodkiego']

var ktomowi = ['Rodzina twierdzi', 'Rodzina mówi', 'Rodzice twierdzą', 'Rodzice mówią', 'Mama twierdzi', 'Tata twierdzi', 'Mama mówi', 'Tata mówi', 'Ojciec twierdzi', 'Ojciec mówi', 'Matka twierdzi', 'Matka mówi', 'Przyjaciele mówią', 'Przyjaciele twierdzą', 'Przyjaciel mówi', 'Przyjaciel twierdzi', 'Przyjaciółka mówi', 'Przyjaciółka twierdzi', 'Partnerka twierdzi', 'Partnerka mówi', 'Partner twierdzi', 'Partner mówi']

var cecha = ['dobrą', 'miłą', 'kochaną', 'ciepłą', 'złośliwą', 'pomocną', 'cierpliwą', 'kreatywną', 'wredną', 'zabawną', 'produktywną', 'trudną', 'pomysłową', 'utalentowaną', 'aktywną', 'głośną', 'wyróżniającą się', 'awangardową', 'interesującą', 'porządną', 'ciekawą', 'spokojną', 'cichą', 'oczytaną', 'mądrą', 'inteligentną', 'silną', 'zdrową', 'ciepłą', 'wspierającą', 'dobrze zorientowaną', 'gadatliwą', 'aktywną społecznie', 'lubianą', 'kolorową', 'zmienną', 'emocjonalną', 'bardzo żywą', 'kulturalną', 'szczerą', 'pracowitą', 'trochę dziwną', 'spragnioną wiedzy', 'ambitną', 'zadaniową', 'wyedukowaną', 'ekstrawertyczną', 'towarzyską', 'introwertyczną', 'trochę zamkniętą w sobie', 'pełną pasji', 'hojną', 'sprawiedliwą', 'rozsądną', 'asertywną', 'altruistyczną', 'obeznaną w świecie', 'pełną pasji', 'bardzo zaangażowaną', 'walczącą o swoje', 'niepoddającą się']

var jak = ['pięknie', 'ładnie', 'ciekawie', 'interesująco', 'świetnie', 'bardzo dobrze', 'zabawnie']

var robicos = ['maluje', 'pisze', 'rysuje', 'rysuje komiksy', 'szkicuje', 'czyta', 'czyta na głos poezję', 'opowiada bajki', 'czyta na głos wiersze', 'recytuje', 'recytuje wiersze', 'opowiada', 'opowiada anegdoty ze swojego życia', 'opowiada o ostatnio przeczytanych książkach', 'opowiada o ostatnio obejrzanych filmach', 'opowiada o ostatnio obejrzanych serialach', 'opowiada o ostatnio przeczytanych wierszach', 'się wypowiada', 'dobiera słowa', 'pisze swoje wiersze', 'pisze opowiadania', 'pisze scenariusze', 'wygląda, kiedy mówi o czymś, co lubi', 'wygląda, kiedy się kłóci', 'wygląda, kiedy się gniewa', 'wygląda, kiedy się zamyśla', 'wygląda, kiedy mówi o czymś, co kocha', 'wygląda, kiedy zajmuje się dziećmi', 'wygląda, kiedy przymierza nowe ubrania']

var wnuki = ["wnuka", "2 wnucząt", "3 wnucząt", "4 wnucząt", "5 wnucząt"]
var wnuki2 = ["wnuka", "2 wnucząt", "3 wnucząt"]

var kierunek = ['prawo', 'medycynę', 'pisarstwo', 'filologię polską', 'filologię angielską', 'filologię romańską', 'germanistykę', 'filologię klasyczną', 'sztukę', 'malarstwo', 'rzeźbę', 'intermedia', 'na politechnice', 'historię sztuki', 'programowanie', 'fizykę', 'matematykę', 'na uniwersytecie medycznym', 'na akademii sztuk pięknych', 'biologię', 'chemię', 'neurobiologię', 'filmoznawstwo', 'architekturę', 'architekturę wnętrz', 'wzornictwo', 'grafikę', 'informatykę', 'tworzenie gier', 'geografię', 'hydrologię', 'klimatologię', 'filologię kaszubską', 'energetykę', 'filozofię', 'psychologię', 'edukację artystyczną', 'muzykę', 'edukację sportową', 'pedagogikę', 'pedagogikę specjalną', 'fizjoterapię', 'socjologię', 'antropologię', 'kulturoznawstwo', 'literaturę rosyjską', 'etnografię', 'etnofilologię kaszubską', 'sinologię', 'japonistykę', 'dziennikarstwo', 'ekonomię', 'kryminologię', 'biofizykę', 'biotechnologię', 'dietetykę', 'inżynierię środowiska', 'mikrobiologię', 'ochronę klimatu', 'ochronę środowiska', 'browarnictwo i słodownictwo']

var praca = ['restauracji', 'gastronomii', 'sklepie', 'sklepie spożywczym', 'kiosku', 'barze', 'gastro', 'żabce', 'markecie', 'klubie', 'biurze', 'korpo', 'lumpeksie', 'oceanarium', 'muzeum', 'skansenie', 'biedronce', 'lidlu', 'call center', 'wydawnictwie', 'bibliotece', 'księgarni', 'kawiarni', 'obsłudze klienta', 'barze mlecznym', 'kwiaciarni', 'kulturze', 'domu kultury', 'teatrze', 'kinie', 'parku narodowym', 'parku', 'hotelu']

var kolo_raw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8/pCKVDlYQ6RCkOlkQFXGUKhbBQmkrtOpgcukXNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEXXBSdJES/5cUWsR4cNyPd/ced+8Ab7PKFMM/ASiqqacTcSGXXxUCr/AjghAGMSIyQ0tmFrNwHV/38PD1Lsaz3M/9OfrlgsEAj0A8xzTdJN4gntk0Nc77xGFWFmXic+JxnS5I/Mh1yeE3ziWbvTwzrGfT88RhYqHUxVIXs7KuEE8TR2VFpXxvzmGZ8xZnpVpn7XvyFwYL6kqG6zQjSGAJSaQgQEIdFVRhIkarSoqBNO3HXfzDtj9FLolcFTByLKAGBaLtB/+D390axalJJykYB3peLOtjFAjsAq2GZX0fW1brBPA9A1dqx19rArOfpDc6WvQICG0DF9cdTdoDLneAoSdN1EVb8tH0FovA+xl9Ux4YuAX61pze2vs4fQCy1NXyDXBwCIyVKHvd5d293b39e6bd3w+Vz3K1GiSNZwAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+kEHA8dKNNVLdYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAo0lEQVRYw+1XQQ7AIAiTvtCn+sPttMSY6ABp2BJ72wFaGoJdKQfJEG9hrfXqv1trQhUwEr5BK0iiia1ChEmuESIe8tVU1jrRNrEu2UzI2EcY5JZ+iNpmbz1YS7cS0fOAOb0GiL5s1mFQkoEs67/twBHAugepDsyGguZa/d6B1ZGD9mZHW09/jt15wFJMS0SMJTRnwigRW6l4R0jYfwErtB48uAGaLW47mh44igAAAABJRU5ErkJggg=="

var kwadrat_raw = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV8/pCKVDlYQ6RCkOlkQFXGUKhbBQmkrtOpgcukXNGlIUlwcBdeCgx+LVQcXZ10dXAVB8APEXXBSdJES/5cUWsR4cNyPd/ced+8Ab7PKFMM/ASiqqacTcSGXXxUCr/AjghAGMSIyQ0tmFrNwHV/38PD1Lsaz3M/9OfrlgsEAj0A8xzTdJN4gntk0Nc77xGFWFmXic+JxnS5I/Mh1yeE3ziWbvTwzrGfT88RhYqHUxVIXs7KuEE8TR2VFpXxvzmGZ8xZnpVpn7XvyFwYL6kqG6zQjSGAJSaQgQEIdFVRhIkarSoqBNO3HXfzDtj9FLolcFTByLKAGBaLtB/+D390axalJJykYB3peLOtjFAjsAq2GZX0fW1brBPA9A1dqx19rArOfpDc6WvQICG0DF9cdTdoDLneAoSdN1EVb8tH0FovA+xl9Ux4YuAX61pze2vs4fQCy1NXyDXBwCIyVKHvd5d293b39e6bd3w+Vz3K1GiSNZwAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+kEHA8eBMqgEvYAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAA00lEQVRYw8VXWw6EMAh08IIclRvufm1iXFqhHbA/JkadB5Whx/HyQvRBVf3c75kZWgh44CwyYIDvEEkTMDNESUXIIAvOLs82gWyp7t8AA3zHFVT+ck9EzAxgq0+SEXSAz0hIZ9v1xEiX+tFqdcATKG+qb3VgJFCYybbsQDbxWOpdBzrVuwTYbjxtbhm9VF2WvzScAa6WJfJrSzTrqxwJx3HWjWhjS01EO9PREoFVIpm2ThuzfiDZTKGPWdk9A1aDKTkXVOwPehxPQM72o7aqyvUaWV8g1qPhRsDxQQAAAABJRU5ErkJggg=="

var pek_raw = "data:image/png;base64,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LmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIgogICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDplOWE1NmQwYy1mZDVhLTRiM2QtOGY2MS03ZTRkZTE2ZWRiYzEiCiAgIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZTExNDU5OWItNDAyNC00Mjk1LTgzM2EtYTg4ZjdmOWFkYjlhIgogICB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWYxZmJhNTUtZTRkYy00NzJmLWE0MDctNzFkYTgzOGJlMjhmIgogICBkYzpGb3JtYXQ9ImltYWdlL3BuZyIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE3NDYwNDA4MjYxOTcwMjAiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4zMiIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIKICAgeG1wOkNyZWF0b3JUb29sPSJHSU1QIDIuMTAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjU6MDQ6MzBUMjE6MjA6MjUrMDI6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI1OjA0OjMwVDIxOjIwOjI1KzAyOjAwIj4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWFhYTYxN2EtZTNjYy00NTgzLThmZTEtZDlmOGFkMmE0NTkzIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI1LTA0LTMwVDIxOjIwOjI2Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PhaNkmIAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfpBB4TFBp1dVWAAAAAGXRFWHRDb21tZW50AENyZWF0ZWQgd2l0aCBHSU1QV4EOFwAAAMlJREFUWMPtVkEKAzEIXMUf9GN5aj7WfqG9VFhKolGrKXSFwB6MO46O8Tj+3SAaoLX25O/euzkeZQVeNbRmGWGKjxnADMQqMMlvCmBEu4cJ7Y7IgKX2q4A//ShSV2tzjvwhU+NVSooPokmj3N7IH5kApB64Z5XpnDBVUT2ToyqdaPNocwB2Zc6JUXXX/6wcr41o2xiljOXDDSDj5xqTWCmbUYLkXTC8wDgG3wcv+jMADZi0GWFFo0lsQTT76AOGuwcRfoPO64GJ2AtdznXj9YsdeAAAAABJRU5ErkJggg=="

var wiersz = ""

var kolo, kwadrat, pek
var najazd = null

function preload(){
  kolo = loadImage(kolo_raw)
  kwadrat = loadImage(kwadrat_raw)
  pek = loadImage(pek_raw)
  lista_img = [kolo, kwadrat, pek]
}

var dystans = 2000
var ped = 10

function nowa_kropla(srodek = false) {
  if (srodek) {
    krople.unshift(new Kropelka(width/2, random([0, 1])))
  } else {
    if (krople.length < 100) {
      krople.unshift(new Kropelka(random(20, width-20), random([0, 1])))
    }
  }
  
  setTimeout(nowa_kropla, dystans)
  if (dystans > 200) {
    dystans -= ped
    ped += 10
  }
}

var krople = []
var canvas

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  utworzWiersz()

  canvas = createCanvas(windowWidth, windowHeight)
  canvas.position(0, 0)
  canvas.style("z-index", "-1")
  imageMode(CENTER)
  
  nowa_kropla(true)
}


function draw() {
  background(40)
  
  najazd = null
  for (let k of krople) {
    k.rysuj()
    k.spadaj()
    if (k.klikniete(mouseX, mouseY)) najazd = k
    if (k.czy_umar()) {
        krople.splice(krople.indexOf(k), 1)
    }
  }
}


function mousePressed() {
  if (!najazd) return

  utworzWiersz()
  
  najazd.i = 2
  setTimeout(strzel.bind(null, najazd), 100)
  najazd = null
}

function strzel(k) {
  krople.splice(krople.indexOf(k), 1)
}


function utworzWiersz() {

  wiersz = ""
  
  var czy_kobieta = false
   
  if (random() < 0.5) {
    wiersz += random(kobieta)
    czy_kobieta = true
  } else {
    wiersz += random(mezczyzna)
  }
  
  wiersz += " ma "
  
  var wiek
  
  if (random() < 0.7) {
    wiek = floor(random(18, 41))
  } else {
    wiek = floor(random(41, 99))
  }
  
  wiersz += wiek + " lat"
  if (wiek%10 > 1 && wiek%10 < 5) wiersz += "a"
  
  var czynnosc1 = random(czynnosc)
  var czynnosc2 = random(czynnosc)
  while (czynnosc1 == czynnosc2) czynnosc2 = random(czynnosc)
  
  wiersz += ", lubi " + czynnosc1 + " i " + czynnosc2

  if (random() < 0.75) wiersz += "\nMa " + random(zwierze)
  
  wiersz += "\nNosi zwykle " + random(ubranie1) + " i " + random(ubranie2) + "\n"
  
  wiersz += random(ktomowi) + ", że jest " + random(cecha) + " osobą i " 
  wiersz += random(jak) + " " + random(robicos)
  
  var czy_pracuje = false
  if (random() < 0.8) czy_pracuje = true
  
  if (wiek >= 18 && wiek <= 65) {
     if (czy_pracuje) wiersz += "\nPracuje w " + random(praca)
  }
  if (wiek >= 18 && wiek <= 25) {
    if (random() < 0.7) {
      if (czy_pracuje) {
        wiersz += " i studiuje " + random(kierunek)
      } else {
        wiersz += "\nStudiuje " + random(kierunek)
      }
    }
  }
  
  var dzieci
  
  if (wiek >= 53) {
    if (random() < 0.5) {
      wiersz += "\nMa " + random([2, 3]) + " dzieci i " + random(wnuki)
    } else if (random() < 0.3) {
      wiersz += "\nMa " + random(["córkę", "syna"]) + " i " + random(wnuki2)
    }
  } else if (wiek >= 25) {
    if (random() < 0.5) {
      wiersz += "\nMa " + random([2, 3]) + " dzieci"
    } else if (random() < 0.3) {
      wiersz += "\nMa " + random(["dziecko", "córkę", "syna"])
    }
  }
  
  wiersz += "\n\nNie głosuje, bo uważa, że "
  if (random() < 0.01) {
    wiersz += "jeno"
  } else {
    if (czy_kobieta) {
      wiersz += "jej"
    } else {
      wiersz += "jego"
    }
  }
  wiersz += " pojedynczy głos nic nie zmieni."


  document.getElementById("wiersz").innerHTML = wiersz;
}



























