ymaps.ready(init);

function init() {
    var objs = [{
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31391168",
        "prop_name": "Квартира 31,9 кв.м., адрес: г. Москва, Волгоградский проспект, д. 113, корпус 3, кв. 1, к/н 77:04:0002018:3137, с-к Нещеретный В.М., пор. 1588-4А",
        "start_price": "3086000 рубли",
        "lon": 55.7076440000000019,
        "lat": 37.7492739999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 41 кв. м, адрес: г. Москва, ул. Нижегородская, д. 9А, кв. 131, к/н 77:01:0006034:1164, с-к Иванова М.В., пор. 1477-4А.",
        "start_price": "5392298 рубли",
        "lon": 55.736148,
        "lat": 37.7005770000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 60,5 кв. м, адрес: г. Москва, ул. Большая Филевская, д. 16, корп. 1, кв. 166, к/н 77:07:0002004:3084, с-к Куликова Н.П., пор. 1497-4А.",
        "start_price": "13504120 рубли",
        "lon": 55.7447540000000004,
        "lat": 37.4860320000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31391168",
        "prop_name": "Квартира 70,9 кв.м., адрес: г. Москва, ул. Косыгина, д. 5, кв. 292, к/н 77:06:0001002:4294, с-к Кузумова А.А., пор. 1590-4А",
        "start_price": "14790000 рубли",
        "lon": 55.7062540000000013,
        "lat": 37.5575469999999996
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 44,6 кв. м, г. Москва, ул. Реутовская, д. 4, кв. 256, к/н 77:03:00070 06:7889, с-к Адамов А.В., пор. 1500-4А.",
        "start_price": "5535313.04999999981 рубли",
        "lon": 55.7410190000000014,
        "lat": 37.8363119999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 53,9 кв. м, адрес: г. Москва, ул. Крылатские Холмы, д. 30, корп. 3, кв. 150, к/н 77:07:0001002:25994, с-к Иванов Е.В., пор. 1531-4А.",
        "start_price": "9252113.98000000045 рубли",
        "lon": 55.755747999999997,
        "lat": 37.4149120000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 45,5 кв. м, адрес: г. Москва, ул. Малахитовая, д. 6, корп. 2, кв. 179, к/н 77:02:0019008:1409, с-к Черненко А.Г., пор. 1537-4А.",
        "start_price": "4789920 рубли",
        "lon": 55.8311300000000017,
        "lat": 37.662308000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30657992",
        "prop_name": "Первичные торги\nДолжник: Мелик-Шахназарова Н.Л. \nКвартира, общей площадью 114,6 кв.м., по адресу: г. Москва, ул. Генерала Белобородова, д. 23, кв. 32, к/н 77:08:0002022:2149",
        "start_price": "23096000 рубли",
        "lon": 55.8310540000000017,
        "lat": 37.3546979999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 61,8  кв. м, г. Москва адрес: ул. Соловьиная роща, д. 9, кв. 37, к/н 77:08:0001009:1523, с-к Шадрин В.Б., пор. 1438-4А",
        "start_price": "10847616 рубли",
        "lon": 55.8932679999999991,
        "lat": 37.3989580000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 44,1 кв. м, адрес: г. Москва, ул. Красного Маяка, д. 1, корп. 2, кв. 7, к/н 77:05:0007005:5853, с-к Аркатов Д.М., пор. 1439-4А",
        "start_price": "4678400 рубли",
        "lon": 55.6122939999999986,
        "lat": 37.5942969999999974
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 42 кв. м, адрес: г. Москва, ул. Ереванская, д. 17, корп. 1, кв. 10, к/н 77:05:0005009:8157, с-к Касаткина Н.А., пор. 1441-4А",
        "start_price": "3920000 рубли",
        "lon": 55.6298159999999982,
        "lat": 37.6738969999999966
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 45,2 кв. м, адрес: г. Москва, ул. Реутовская, д. 12, корп. 1, кв. 225, к/н 77:03:0007006:9168, с-к Нилкина Е.В., пор. 1442-4А",
        "start_price": "4992000 рубли",
        "lon": 55.7410190000000014,
        "lat": 37.8363119999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 49,4 кв. м, адрес: г. Москва, ул. Старый Гай, д. 12, кв. 13, к/н 77:03:0007006:13304, с-к Зинатулин Д.Ш., пор. 1443-4А",
        "start_price": "4310400 рубли",
        "lon": 55.74071,
        "lat": 37.8302219999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 71,6 кв. м, адрес: г. Москва, пл. Малая Сухаревская, д. 3, кв. 100, к/н 77:01:0003043:1886, с-к Леонов А.И., пор. 1444-4А",
        "start_price": "14710400 рубли",
        "lon": 55.7730590000000035,
        "lat": 37.6301670000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 36,1 кв. м, адрес: г. Москва, Коломенский пр., д. 23, корп. 2, кв. 38, к/н 77:05:0004006:7003, с-ки Перегоедова Б.С., Перегоедов В.В., пор. 1445-4А.",
        "start_price": "5524600 рубли",
        "lon": 55.6649340000000024,
        "lat": 37.6425010000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 38,5 кв. м, адрес: г. Москва, ул. Б. Академическая , д. 35, кв. 23, к/н 77:09:0003010:1094, с-к Серебрянников В.И., пор. 1450-4А",
        "start_price": "4296000 рубли",
        "lon": 55.8359530000000035,
        "lat": 37.5378200000000035
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 63,7 кв. м, адрес: г. Москва, ул. Троицкая, д. 10, стр. 1, кв. 419, к/н 77:01:0003044:2502, с-к Смолин И.В., пор. 1451-4А",
        "start_price": "12895200 рубли",
        "lon": 55.7748970000000028,
        "lat": 37.6250459999999975
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 41 кв. м, адрес: г. Москва, ул. Нижегородская, д. 9А,  кв. 131, к/н 77:01:0006034:1164, с-к Иванова М.В., пор. 1477-4А",
        "start_price": "6343880.79999999981 рубли",
        "lon": 55.736148,
        "lat": 37.7005770000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31278295",
        "prop_name": "Квартира 26,1 кв. м, адрес: г. Москва, Волгоградский пр-т, д. 1, стр. 1, кв. 55, к/н 77:01:0006040:1952, с-к Грознов С.Н., пор. 1380-4А",
        "start_price": "5236000 рубли",
        "lon": 55.7076440000000019,
        "lat": 37.7492739999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31278295",
        "prop_name": "Квартира 55,4 кв. м, адрес: г. Москва, Врачебный пр., д. 10, корп. 2, кв. 83, к/н 77:08:0007008:2524, с-к Бидо Н.И., пор. 1392-4А",
        "start_price": "5578040 рубли",
        "lon": 55.8136470000000031,
        "lat": 37.4574390000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31223565",
        "prop_name": "Повторные торги\nДолжники: Бекирова Е.Г. Кызы, Бекиров Н.Б. Оглы. Квартира общей площадью 44,9 кв.м, по адресу: г. Москва, ул. Азовская, д. 37, корп. 1, кв. 50, к/н",
        "start_price": "162290.5 доллар США",
        "lon": 55.653182000000001,
        "lat": 37.5983659999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30624283",
        "prop_name": "должников (собственника) Суханова Д., Хановой Д.В.(Сухановой Н.В.): комната №3 площадью 16,8кв.м по адресу: г. Москва, ул.Дмитрия Ульянова, д.12, корп.2, кв.18, к.3, к/н 77:06:0003003:3847",
        "start_price": "2297423.52000000002 рубли",
        "lon": 55.6871119999999991,
        "lat": 37.5761869999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30993036",
        "prop_name": "Квартира 43,2 кв. м, адрес: г. Москва, ул. Алтайская, д. 27, кв. 131, к/н 77:03:00020 19:1450, с-к Шаврина А.К., пор. 1485-4А",
        "start_price": "4763952 рубли",
        "lon": 55.8202020000000019,
        "lat": 37.8162530000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30942958",
        "prop_name": "Должник Милявский Д.Л.: квартира общей площадью 53 кв.м. в г. Москва, Можайский р-н, ул. Гришина, д. 2, корп. 1, кв. 252, к/н 77:07:0008002:6028.",
        "start_price": "8150000 рубли",
        "lon": 55.7228059999999985,
        "lat": 37.4175889999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30993036",
        "prop_name": "Квартира 37,8 кв. м, адрес: г. Москва, ул. Лухмановская, д. 34, кв. 370, к/н 77:03:0010009:3006, пор. 1498-4А",
        "start_price": "7832000 рубли",
        "lon": 55.7172029999999978,
        "lat": 37.9000210000000024
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31485804",
        "prop_name": "Первичные торги\nДолжник: Ларина М.В.\nКвартира, общей площадью 63 кв.м., по адресу: г. Москва, ул. Кондратюка, д. 9, корп. 2, кв. 47, к/н 77:02:0022009:1853",
        "start_price": "9000000 рубли",
        "lon": 55.8191660000000027,
        "lat": 37.6338500000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31394225",
        "prop_name": "о возобновлении торгов по имуществу должника: Новиковой Т.И., Поручение на реализацию № 1274-4А от 15.08.2018 г.: Квартира общей площадью 54,3 кв.м., адрес: г. Москва, ул. Минская, д. 1Г, корп. 2, кв. 14, к/н 77:07:0013001:1759.",
        "start_price": "10500000 рубли",
        "lon": 55.7274349999999998,
        "lat": 37.4942070000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30798455",
        "prop_name": "Повторные торги. Должник Шубников П.Л.: квартира общей площадью 39,6 кв.м. в г. Москва, ул. Якорная, д. 4, корп. 1, кв. 98, к/н 77:05:0004009:10278.",
        "start_price": "4454000 рубли",
        "lon": 55.6848939999999999,
        "lat": 37.6844699999999975
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31229188",
        "prop_name": "Должник Соловьев Д.А.: доля в праве собственности (доля в праве 5/6 на квартиру общей площадью 55,9 кв.м. в г. Москва, Гурьевский пр-д, д. 35/58, кв. 466, к/н 77:05:0011009:3546.",
        "start_price": "4650000 рубли",
        "lon": 55.6055410000000023,
        "lat": 37.7511160000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30657683",
        "prop_name": "Первичные торгиДолжник: Ермаков Г.Ю. Квартира, общей площадью 52,1 кв.м., по адресу: г. Москва, ул. Дубнинская, д. 28, корп. 2, кв. 164, к/н 77:09:0002028:9198",
        "start_price": "6646000 рубли",
        "lon": 55.8765709999999984,
        "lat": 37.5576280000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30939930",
        "prop_name": "Повторные торги. Должник Гарунов В.Н.: квартира общей площадью 40,6 кв.м. в г. Москва, 3-й Сетуньский пр-д, д. 3, кв. 206, к/н 77:07:0006003:2325.",
        "start_price": "4784650 рубли",
        "lon": 55.7324890000000011,
        "lat": 37.5357449999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30935216",
        "prop_name": "Первичные торги\nДолжник: Гуреева Л.В.\nКвартира, общей площадью 48,8 кв.м., по адресу: г. Москва, Заревый пр-д, д. 10, кв. 291, к/н 77:02:0004004:2097",
        "start_price": "6624000 рубли",
        "lon": 55.8849689999999981,
        "lat": 37.6570350000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31224651",
        "prop_name": "Первичные торги\nДолжник: Сутягина Т.А. \nКвартира, общей площадью 38,3 кв.м., по адресу: г. Москва, ул. Старая Басманная, д. 9, корп. 2, кв. 6, к/н 77:01:0003008:1531",
        "start_price": "6620000 рубли",
        "lon": 55.7664959999999965,
        "lat": 37.6631890000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 61,8 кв.м., адрес: г. Москва, ул. Соловьиная роща, д. 9, кв. 37, к/н 77:08:0001009:1523, с-к  Шадрин В.Б., пор. 1438-4А",
        "start_price": "9220473.59999999963 рубли",
        "lon": 55.8932679999999991,
        "lat": 37.3989580000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 36,1 кв.м., адрес: г. Москва, Коломенский пр., д. 23, корп. 2, кв. 38, к/н 77:05:0004006:7003, с-ки Перегоедова Б.С., Перегоедов В.В., пор. 1445-4А",
        "start_price": "4695910 рубли",
        "lon": 55.6649340000000024,
        "lat": 37.6425010000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31088660",
        "prop_name": "Повторные торги. Должники Федосеева О.Г., Ченцов А.Б.: Лот 2. 1/2 доля в праве на квартиру общей площадью 51,7 кв.м. в г. Москва, ул. Мелиховская, д. 4, кв. 2, к/н 77:02:0002008:1286.",
        "start_price": "2040000 рубли",
        "lon": 55.9006779999999992,
        "lat": 37.6070080000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 91,8 кв.м., адрес: г. Москва, 1-й Краснокурсантский пр-д., д. 5/7, кв. 24, к/н 77:04:0001003:2354, с-к Калашникова Н.В., пор. 1490-4А",
        "start_price": "8723316.75999999978 рубли",
        "lon": 55.760787999999998,
        "lat": 37.6959680000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30653018",
        "prop_name": "Повторные торги. Должник Беляева Н.Ю.: квартира, общей площадью 32,3 кв.м. по адресу: г. Москва, ул. Миклухо-Маклая, д. 57, корп. 2, кв. 22, к/н 77:06:0008004:3243.",
        "start_price": "4846931.38999999966 рубли",
        "lon": 55.6456129999999973,
        "lat": 37.5189909999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31482870",
        "prop_name": "Должник Мамедов А.К. оглы: квартира общей площадью 43,4 кв.м. в г. Москва, ул. 5-я Кожуховская, д. 10, корп. 1, кв. 109, к/н 77:05:0002006:1878",
        "start_price": "147120 доллар США",
        "lon": 55.7051429999999996,
        "lat": 37.6735370000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31754161",
        "prop_name": "Повторные торги\nДолжник: Павлова А.А.\nКвартира, общей площадью 49,6 кв.м., по адресу: г. Москва, ул. Севанская, д. 11, кв. 25, к/н 77:05:0005008:10679",
        "start_price": "4777000 рубли",
        "lon": 55.6238850000000014,
        "lat": 37.6527230000000017
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30623279",
        "prop_name": "должника (собственника) Мостовой Л.А.: комната №4 площадью 11 кв.м по адресу: г. Москва, пер. Малый Николопесковский, д.11/2, строен.1, кв.25, к.4 , к/н 77:01:0001046:2286",
        "start_price": "3303683.10000000009 рубли",
        "lon": 55.7505299999999977,
        "lat": 37.5924460000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30722872",
        "prop_name": "Квартира 45,6 кв. м, г. Москва, пр-д Юрловский, д. 7, кв. 224. к/н 77:02:0008007:3479 Яковлева Е.А., пор. 1261-4А",
        "start_price": "4063680 рубли",
        "lon": 55.8695310000000021,
        "lat": 37.6210489999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30653254",
        "prop_name": "Повторные торги. Должник Жуков А.А.: квартира, общей площадью 74,2 кв.м. по адресу г. Москва, Борисовские пруды, д. 8, корп. 3, кв. 170, к/н 77:05:0012004:4432.",
        "start_price": "9943300 рубли",
        "lon": 55.6358579999999989,
        "lat": 37.738387000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30654230",
        "prop_name": "Должник Царенко А.Н.: квартира общей площадью 78,9 кв.м. в г. Москва, Комсомольский пр-т, д. 38/16, кв. 89, к/н 77:01:0005011:1888",
        "start_price": "14400000 рубли",
        "lon": 55.7255439999999993,
        "lat": 37.5800410000000014
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31349070",
        "prop_name": "Повторные торги.  Должник Вахромеева М.Н.: комната № 3 общей площадью 15,4 кв.м. в г. Москва, ул. Ивантеевская, д. 17, корп. 1, кв. 4, к. 3, к/н 77:03:0001013:2913.",
        "start_price": "1720400 рубли",
        "lon": 55.8176429999999968,
        "lat": 37.7243369999999985
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 53,1 кв. м, адрес: г. Москва, ул. Октябрьская, д. 69, кв. 39, к/н 77:02:0024018:1242, с-ки Никитина Е.М., Никитина К.А., пор. 1263-4А",
        "start_price": "8174280 рубли",
        "lon": 55.7922500000000028,
        "lat": 37.613197999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 48,4 кв. м, адрес: г. Москва, ул. Планерная, д. 18, корп. 1, кв. 5, к/н 77:08:0003005:4028, с-к Мурадян С.А., пор.1347-4А",
        "start_price": "5537920 рубли",
        "lon": 55.8646770000000004,
        "lat": 37.4364539999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31608436",
        "prop_name": "Повторные торги. Должник Милявский Д.Л.: квартира общей площадью 53 кв.м. в г. Москва, Можайский р-н, ул. Гришина, д. 2, корп. 1, кв. 252, к/н 77:07:0008002:6028.",
        "start_price": "6927500 рубли",
        "lon": 55.7228059999999985,
        "lat": 37.4175889999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30993036",
        "prop_name": "Квартира 60,1 кв. м, адрес: г. Москва, ул. Болотниковская, д. 31, корп. 1, кв. 28, к/н 77:06:0005010:4410, совместная собственность, с-ки Краснова О.А., Краснов В.А., пор. 1487-4А",
        "start_price": "8604000 рубли",
        "lon": 55.6596979999999988,
        "lat": 37.5907219999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30993036",
        "prop_name": "Квартира 91,8 кв. м, адрес: г. Москва, 1-й Краснокурсантский пр-д., д. 5/7, кв. 24, к/н 77:04:0001003:2354, с-к Калашникова Н.В., пор. 1490-4А",
        "start_price": "10262725.5999999996 рубли",
        "lon": 55.760787999999998,
        "lat": 37.6959680000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30993036",
        "prop_name": "Квартира 44,6 кв. м, адрес: г. Москва, ул. Реутовская, д. 4, кв. 256, к/н 77:03:0007006:7889, с-к Адамов А.В., пор. 1500-4А",
        "start_price": "6512133 рубли",
        "lon": 55.7410190000000014,
        "lat": 37.8363119999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 71,6 кв.м., адрес: г. Москва, пл. Малая Сухаревская, д. 3, кв. 100, к/н 77:01:0003043:1886, с-к  Леонов А.И., пор. 1444-4А",
        "start_price": "12503840 рубли",
        "lon": 55.7730590000000035,
        "lat": 37.6301670000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 43,2 кв.м., адрес: г. Москва, ул. Алтайская, д. 27, кв 131, к/н 77:03:0002019:1450, с-к  Шаврина А.К., пор. 1485-4А",
        "start_price": "4049359.20000000019 рубли",
        "lon": 55.8202020000000019,
        "lat": 37.8162530000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 60,1 кв.м., адрес: г. Москва, ул. Болотниковская, д. 31, корп. 1, кв. 28, к/н 77:06:0005010:4410,  с-ки Краснова О.А., Краснов В.А. (совместная собственность), пор. 1487-4А",
        "start_price": "7313400 рубли",
        "lon": 55.6596979999999988,
        "lat": 37.5907219999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 54,2 кв. м, адрес: г. Москва, ул. Остафьевская, д. 35, корп. 1, кв. 5, к/н 77:06:0012010:4278, с-к Кузичкина (Нехонова) Н.Д., пор. 1272-4А",
        "start_price": "4624000 рубли",
        "lon": 55.5312950000000001,
        "lat": 37.4974050000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 44,3 кв. м, адрес: г. Москва, 2-й Мосфильмоский пер., д. 12, кв. 81, к/н 77:07:0006004:6512, с-к Андронов В.А., пор. 1298-4А",
        "start_price": "6366160 рубли",
        "lon": 55.7247780000000006,
        "lat": 37.5238960000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 129,1 кв. м, адрес: г. Москва, ул. Спиридоновка, д. 10, кв. 5, к/н 77:01:0001068:1469, с-к Цыганкова И.А., пор. 1300-4А",
        "start_price": "45018047.6499999985 рубли",
        "lon": 55.7613100000000017,
        "lat": 37.5922219999999996
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 121кв. м, адрес: г. Москва, пр-т Андропова, д. 42, корп. 1, кв. 8, к/н 77:05:0004006:7557, с-к Плеханова И.В., пор. 1307-4А",
        "start_price": "33158160 рубли",
        "lon": 55.6765899999999974,
        "lat": 37.6630449999999968
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 49,6 кв. м, адрес г. Москва, ул. Красная Пресня, д. 38, кв. 96, к/н 77:01:0004023:3369, с-к Тамразова Л.О., пор.1332-4А",
        "start_price": "7375314.6799999997 рубли",
        "lon": 55.7616799999999984,
        "lat": 37.5709769999999992
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 63,5 кв. м, адрес: г. Москва, пр-д Сумской, д. 27. кв. 44, к/н 77:05:0006004:20835, с-к Гусейнов Т.М. Оглы, пор. 1348-4А",
        "start_price": "8044400 рубли",
        "lon": 55.6345519999999993,
        "lat": 37.6054900000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31259639",
        "prop_name": "Квартира 32,6 кв. м, адрес: г. Москва, ул. Генерала Тюленева, д. 31, кв. 230, к/н 77:06:0007005:4281, с-к Хайретдинов P.P., пор. 1236-4А",
        "start_price": "3413185.60000000009 рубли",
        "lon": 55.6181709999999967,
        "lat": 37.4873350000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31259639",
        "prop_name": "Квартира 52,1 кв. м, адрес: г. Москва, Филевский б-р, д. 21, кв. 106, к/н 77:07:0002002:5692, с-к Пригорный В.П., пор. 1545-4А",
        "start_price": "6524000 рубли",
        "lon": 55.7634270000000001,
        "lat": 37.4908649999999994
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31259639",
        "prop_name": "Квартира 138,9 кв. м, адрес: г. Москва ул. Велозаводская, д. 11/1, кв. 193, к/н 77:04:0001018:1790, с-к Черкесова С.Й., пор. 1546-4А",
        "start_price": "18330466.3999999985 рубли",
        "lon": 55.7133340000000032,
        "lat": 37.6652729999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31259639",
        "prop_name": "Квартира 39,3 кв. м, адрес: г. Москва ул. Судакова, д. 15, кв. 97, к/н 77:04:0004011:6406, с-к Эйнуллаев Г.А. Оглы, пор. 1548-4А",
        "start_price": "4114710.39999999991 рубли",
        "lon": 55.6728840000000034,
        "lat": 37.7487619999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483261",
        "prop_name": "Квартира 35,4 кв.м., адрес: г. Москва, Каширское шоссе, д. 148, корп. 1, кв. 184, к/н 77:05:0010009:4219, с-к Мацола О.Б., пор. 1635-4А",
        "start_price": "7950000 рубли",
        "lon": 55.6411170000000013,
        "lat": 37.6835090000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30939656",
        "prop_name": "Повторные торги. Должник Чепрасова Е.Н.: квартира общей площадью 72,3 кв.м. в г. Москва, ул. Алтайская, д. 4, кв. 275, к/н 77:03:0002017:9548.",
        "start_price": "6987680 рубли",
        "lon": 55.8202020000000019,
        "lat": 37.8162530000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 50,5 кв. м, адрес: г. Москва, ул. Снежная, д. 27, корп. 2, кв. 282, к/н 77:02:0014011:4299 с-к Дмитриев Р.В., пор. 1488-4А",
        "start_price": "8752226 рубли",
        "lon": 55.8524049999999974,
        "lat": 37.6469469999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 53,9 кв. м, адрес: г. Москва, ул. Крылатские Холмы, д. 30, корп. 3, кв. 150, к/н 77:07:0001002:25994, с-к Иванов Е.В., пор. 1531-4А",
        "start_price": "10884839.9800000004 рубли",
        "lon": 55.755747999999997,
        "lat": 37.4149120000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 38,3 кв. м, адрес: г. Москва, ул. Бехтерева, д. 33, кв. 48, к/н 77:05:0005008:4334, с-к Лахурин А.А., пор. 1536-4А",
        "start_price": "4366504 рубли",
        "lon": 55.6272650000000013,
        "lat": 37.6473689999999976
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 45,5 кв. м, адрес: г. Москва, ул. Малахитовая, д. 6, корп. 2, кв. 179, к/н 77:02:0019008:1409, с-к Черненко А.Г., пор. 1537-4А",
        "start_price": "5635200 рубли",
        "lon": 55.8311300000000017,
        "lat": 37.662308000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31148170",
        "prop_name": "Квартира 74,4 кв. м, адрес: г. Москва, ул. Газопровод, д. 15, кв. 211, к/н 77:05:0008005:4583, Совместная собственность Зуровского Д.М. и Можиной О.В., пор. 1391-4А",
        "start_price": "8199748.71999999974 рубли",
        "lon": 55.589421999999999,
        "lat": 37.6072599999999966
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31148170",
        "prop_name": "Квартира 44,2 кв. м, адрес: г. Москва, ул. 26-ти Бакинских Комиссаров, д. 6, корп. 2, кв. 35, к/н 77:07:0014008:12572, с-к Фуртат К.В., пор. 1428-4А",
        "start_price": "5341071.55999999959 рубли",
        "lon": 55.6588700000000003,
        "lat": 37.4888079999999988
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31148170",
        "prop_name": "Квартира 31,6 кв. м, адрес: г. Москва, ул. Маршала Василевского, д. 7, корп. 2, кв. 142, к/и 77:08:0009011:3300, с-к Исаков П.С., пор. 1433-4А",
        "start_price": "3572040 рубли",
        "lon": 55.8063780000000023,
        "lat": 37.4683890000000019
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31148170",
        "prop_name": "Комната № 2, площадь 13,5 кв. м, адрес: г. Москва, ул. Новощукинская, д. 10, корп. 2, кв. 6, к/н 77:08:0009004:6760, с-к Шергина Т.А., пор. 1435-4А",
        "start_price": "2091000 рубли",
        "lon": 55.8059229999999999,
        "lat": 37.4557860000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30855101",
        "prop_name": "Квартира 45,2 кв. м, адрес: г. Москва, ул. Ферсмана, д. 5, корп. 2, кв. 225, к/н 77:06:0002005:2705, с-к Коньков С.В., пор. 1159-4А",
        "start_price": "5262520 рубли",
        "lon": 55.6942459999999997,
        "lat": 37.5726299999999966
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31639455",
        "prop_name": "Квартира 91,1 кв. м, адрес: г. Москва, г. Московский, ул. Радужная, д. 14, корп. 2, кв. 274, к/н 50:21:0000000:23772, с-ки Айрумян Ш.В., Айрумян И.М.,  пор. 1648-4А",
        "start_price": "5952800 рубли",
        "lon": 55.8598619999999997,
        "lat": 37.6639070000000018
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31639455",
        "prop_name": "Квартира 75,2 кв. м, адрес: г. Москва, Солнцевский пр-т,  д. 12, кв. 54, к/н 77:07:0015003:11532, с-к Кузьмин А.В., пор. 1650-4А",
        "start_price": "7200000 рубли",
        "lon": 55.6496470000000016,
        "lat": 37.4054080000000013
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31399539",
        "prop_name": "Квартира 59,6 кв.м., адрес: г. Москва, ул. Чертановская, д. 21, корп. 3, кв. 75, к/н 77:05:0007002:7422, с-к Савельева И.А., пор. 1381-4А",
        "start_price": "6818360 рубли",
        "lon": 55.6194369999999978,
        "lat": 37.5939199999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31399539",
        "prop_name": "Квартира 72,9 кв.м., адрес: г. Москва, Ленинский проспект, д. 35, кв. 72, к/н 77:05:0001009:3491, с-к Сергеев Д.В., пор. 14344А",
        "start_price": "12728920 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31399539",
        "prop_name": "Квартира 45,2 кв.м., адрес: г. Москва, ул.Реутовская, д. 12, корп. 1, кв. 225, к/н 77:03:0007006:9168, с-к Нилкина Е.В., пор. 1442-4А",
        "start_price": "4243200 рубли",
        "lon": 55.7410190000000014,
        "lat": 37.8363119999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30722872",
        "prop_name": "Квартира 109 кв. м, г. Москва, Пятницкое ш., д. 42, корп. 1, кв. 93–94, к/н 77:08:0002016:2437, с-к Шер С.Н., пор. 1269-4А",
        "start_price": "11324040 рубли",
        "lon": 55.8486550000000008,
        "lat": 37.3704999999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31090938",
        "prop_name": "Должник Гурецкий И.В.: квартира, общей площадью 38,5 кв.м. в г. Москва, Заревый пр-д, д. 19, кв. 76, к/н 77:02:0004003:1298.",
        "start_price": "4790400 рубли",
        "lon": 55.8849689999999981,
        "lat": 37.6570350000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31404477",
        "prop_name": "Квартира 69.2 кв.м, адрес: г. Москва, ул. Соколово- Мещерская, д. 31 кв 14, к/н 77:08:0001005:2047, с-к ОАО «Инвест-Эстейт», пор. 1306-4А.",
        "start_price": "10222100 рубли",
        "lon": 55.8994720000000029,
        "lat": 37.3874599999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 63,7 кв. м, адрес: г. Москва, ул. Троицкая, д. 10, стр. 1, кв. 419, к/н 77:01:0003044:2502, с-к Смолин И.В., пор. 1451-4А.",
        "start_price": "10960920 рубли",
        "lon": 55.7748970000000028,
        "lat": 37.6250459999999975
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 37,8 кв. м, адрес: г. Москва, ул. Лухмановская, д. 34, кв. 370, к/н 77:03:0010009:3006, с-к  Юдина Е.Ю., пор. 1498-4А.",
        "start_price": "6657200 рубли",
        "lon": 55.7172029999999978,
        "lat": 37.9000210000000024
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "1/2 доли в квартире 32,2 кв. м, адрес: г. Москва, ш. Щелковское, д. 38/66, кв. 5, к/н 77:03:0005010:6261, с-ки Макаров Г.Н., Разикова Н.Г., пор. 1163-4А",
        "start_price": "1200000 рубли",
        "lon": 55.8100809999999967,
        "lat": 37.7957170000000033
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 36,7 кв. м, адрес: г. Москва, ул. Зои и Александра Космодемьянских, д. 29, кв. 48, к/н 77:09:0003015:4140, с-к Насырова А.Н., пор. 1440-4А",
        "start_price": "4922400 рубли",
        "lon": 55.8218109999999967,
        "lat": 37.5144639999999967
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31484024",
        "prop_name": "Повторные торги\nДолжник: Мелик-Шахназарова Н.Л. \nКвартира, общей площадью 114,6 кв.м., по адресу: г. Москва, ул. Генерала Белобородова, д. 23, кв. 32, к/н 77:08:0002022:2149",
        "start_price": "19631600 рубли",
        "lon": 55.8310540000000017,
        "lat": 37.3546979999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31278295",
        "prop_name": "Квартира 166,4 кв. м, адрес: г. Москва, Большой Головин переулок, д. 2, кв. 7, к/н 77:01:0001090:1911, с-к Томаш С.Ю., пор. 1378-4А",
        "start_price": "140440891.819999993 рубли",
        "lon": 55.7693879999999993,
        "lat": 37.6286399999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31086569",
        "prop_name": "Первичные торги\nДолжник: Родионов А.А.\nКвартира, общей площадью 31,8 кв.м., по адресу: г. Москва, Калошин пер., д. 6, стр. 1, кв. 32, к/н 77:01:0001058:1844",
        "start_price": "8818480 рубли",
        "lon": 55.7484520000000003,
        "lat": 37.5920869999999994
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30942343",
        "prop_name": "Должник Епишкин С.Н.: квартира общей площадью 31,9 кв.м. в г. Москва, ул. Смольная, д. 39, кв. 4, к/н 77:09:0001009:3646.",
        "start_price": "2742400 рубли",
        "lon": 55.859332000000002,
        "lat": 37.4840650000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31224287",
        "prop_name": "Повторные торги\nДолжник: Захарин А.А. \nКвартира общей площадью 51,3 кв.м, по адресу: г. Москва, ул. Чертановская, д. 21, корп. 1, кв. 216, к/н 77:05:0007002:6940",
        "start_price": "5543486.48000000045 рубли",
        "lon": 55.6194369999999978,
        "lat": 37.5939199999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31754470",
        "prop_name": "Первичные торги\nДолжник: Королева Т.В. \nКвартира, общей площадью 42 кв.м., по адресу: г. Москва, ул. Клязьминская, д. 32, кв. 105, к/н 77:09:0002004:2649",
        "start_price": "3800000 рубли",
        "lon": 55.8896289999999993,
        "lat": 37.5273639999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31280825",
        "prop_name": "Квартира 30,4 кв. м, адрес: г. Москва, ул. Онежская, д. 38, корп. 3, кв. 339, к/н 77:09:0001014:2398, с-к Семиряко А.В., пор. 1539-4А",
        "start_price": "3566000 рубли",
        "lon": 55.8542839999999998,
        "lat": 37.5159009999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31355941",
        "prop_name": "Повторные торги\nДолжник: Фролова Н.В. \nКвартира, общей площадью 47,2 кв.м., по адресу: г. Москва, ул. Старый Петровско-Разумовский пр-д, д. 3, кв. 67, к/н 77:09:0004014:2620",
        "start_price": "5536560 рубли",
        "lon": 55.7999069999999975,
        "lat": 37.5592449999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30653865",
        "prop_name": "Должник Баранова Т.С.: квартира общей площадью 44,1 кв.м. в г. Москва, Дмитровское шоссе, д. 45, корп 1, кв. 139, к/н 77:09:0003008:4242.",
        "start_price": "4548000 рубли",
        "lon": 55.8759299999999968,
        "lat": 37.5477190000000007
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31611462",
        "prop_name": "Должник Волков Р.Я.: квартира, общей площадью 57,8 кв.м. в г. Москва, ул. Свободы, д. 81, корп. 2, кв. 51, к/н 77:08:0003005:6256.",
        "start_price": "6240000 рубли",
        "lon": 55.8533550000000005,
        "lat": 37.4515999999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30656942",
        "prop_name": "Повторные торги\nПронькин В.А., Пронькина И.Л Квартира, общей площадью 73 кв.м., по адресу: г. Москва, ул. Никулинская, д. 23, корп. 1, кв. 89, к/н 77:07:0014004:4021",
        "start_price": "9261600 рубли",
        "lon": 55.6706909999999979,
        "lat": 37.4521480000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31484125",
        "prop_name": "Повторные торги\nДолжник: Афанасьев И.Е.\n Квартира, общей площадью 76,7 кв.м., по адресу: г. Москва, ул. Вилиса Лациса, д. 25, корп. 1, кв. 123, к/н 77:08:0003001:7246",
        "start_price": "8364000 рубли",
        "lon": 55.862130999999998,
        "lat": 37.4198710000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30940718",
        "prop_name": "Повторные торги. Должник Денисенкова Е.В.: квартира общей площадью 47,8 кв.м. в г. Москва, ул. Гришина, д. 9, кв. 42, к/н 77:07:0008002:10188.",
        "start_price": "5922120 рубли",
        "lon": 55.7228059999999985,
        "lat": 37.4175889999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31088660",
        "prop_name": "Повторные торги. Должники Федосеева О.Г., Ченцов А.Б.: Лот 1. 1/2 доля в праве на квартиру общей площадью 51,7 кв.м. в г. Москва, ул. Мелиховская, д. 4, кв. 2, к/н 77:02:0002008:1286.",
        "start_price": "2040000 рубли",
        "lon": 55.9006779999999992,
        "lat": 37.6070080000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30654623",
        "prop_name": "Должник Вахромеева М.Н.: комната № 3 общей площадью 15,4 кв.м. в г. Москва, ул. Ивантеевская, д. 17, корп. 1, кв. 4, к. 3, к/н 77:03:0001013:2913.",
        "start_price": "2024000 рубли",
        "lon": 55.8176429999999968,
        "lat": 37.7243369999999985
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30937545",
        "prop_name": "Первичные торги\nДолжник: Павлова А.А.\nКвартира, общей площадью 49,6 кв.м., по адресу: г. Москва, ул. Севанская, д. 11, кв. 25, к/н 77:05:0005008:10679",
        "start_price": "5620000 рубли",
        "lon": 55.6238850000000014,
        "lat": 37.6527230000000017
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31088343",
        "prop_name": "Повторные торги. Должники Асанова О.М., Асанов М.К.: квартира общей площадью 50,4 кв.м. в г. Москва, ул. Душинская, д. 14, кв. 106, к/н 77:04:0001013:1401.",
        "start_price": "131356.279999999999 доллар США",
        "lon": 55.7461470000000006,
        "lat": 37.7052120000000031
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31319861",
        "prop_name": "Квартира из 4 комнат, назначение жилое, общая площадь 146,7 кв. м., кадастровый номер 77:01:0001059:2378,собственник М.Д. Балакин. Адрес местонахождения: г. Москва, р-н Арбат, ул. Композиторская, д. 17, кв. 67.",
        "start_price": "81365000 рубли",
        "lon": 55.7514370000000028,
        "lat": 37.5865360000000024
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30657952",
        "prop_name": "Первичные торги\nДолжник: Афанасьев И.Е. \nКвартира, общей площадью 76,7 кв.м., по адресу: г. Москва, ул. Вилиса Лациса, д. 25, корп. 1, кв. 123, к/н 77:08:0003001:7246",
        "start_price": "9840000 рубли",
        "lon": 55.862130999999998,
        "lat": 37.4198710000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30722872",
        "prop_name": "Квартира 150,3 кв. м, адрес: Москва, ул. Минская, д. 1Г, корп. 2, кв. 68, к/н 77:07:0013001:1809, с-к Эмиргамзаев А.Г., пор. 1244-4А",
        "start_price": "39184084.0399999991 рубли",
        "lon": 55.757987,
        "lat": 37.4074560000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31750678",
        "prop_name": "Повторные торги. Должник Орлова И.Б.: квартира общей площадью 64,9 кв.м. в г. Москва, Северный б-р, д. 3, кв. 4, к/н 77:02:0008003:4273.",
        "start_price": "6162840 рубли",
        "lon": 55.8675709999999981,
        "lat": 37.6114999999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30721644",
        "prop_name": "Квартира 59,6 кв. м, адрес: г. Москва, ул. Чертановская, д. 21, корп. 3, кв. 75, к/н 77:05:0007002:7422, с-к Савельева И.А., пор. 1381-4А",
        "start_price": "8021600 рубли",
        "lon": 55.6194369999999978,
        "lat": 37.5939199999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30721644",
        "prop_name": "Квартира 57,6 кв. м, адрес: г. Москва, ул. Ватутина, д. 18, корп. 2, кв. 61, к/н 77:07:0009003:4635, с-к Шабанов Д.А., пор. 1382-4А",
        "start_price": "10132000 рубли",
        "lon": 55.721938999999999,
        "lat": 37.4565130000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30721644",
        "prop_name": "Квартира 72,9 кв. м, адрес: г. Москва, Ленинский проспект, д. 35, кв. 72, к/н 77:05:0001009:3491, с-к Сергеев Д.В., пор. 1434-4А",
        "start_price": "14975200 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31407580",
        "prop_name": "Квартира 47,0 кв.м., адрес: г. Москва, ул. Судостроительная, д. 8, к. 1, кв. 78, к/н 77:05:0004008:4636, с-к Анженевская Е.В., пор. 1594-4А.",
        "start_price": "99460.8000000000029 доллар США",
        "lon": 55.6825949999999992,
        "lat": 37.680607000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31399289",
        "prop_name": "Квартира 54,3 кв. м, адрес: г. Москва, ул. Минская, д. 1Г, корп. 2, кв. 14, 77:07:0013001:1759, с-к Новикова Т.И., пор. 1274-4А",
        "start_price": "10500000 рубли",
        "lon": 55.7274349999999998,
        "lat": 37.4942070000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31752008",
        "prop_name": "Должник Литвиненко В.Н.: квартира общей площадью 30 кв.м. в г. Москва, ул. Ивана Франко, д. 26, корп. 1, кв. 15, к/н 77:07:0004008:1210.",
        "start_price": "3770000 рубли",
        "lon": 55.7278200000000012,
        "lat": 37.4238509999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30942747",
        "prop_name": "Должник Борнякова М.Г.: комната № 2 общей площадью 17,1 кв.м. в г. Москва, ул. Люблинская, д. 127/1, кв. 31, комн. 2, к/н 77:04:0000000:5416",
        "start_price": "1800000 рубли",
        "lon": 55.6802240000000026,
        "lat": 37.7382070000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30942094",
        "prop_name": "Должник Орлова И.Б.: квартира общей площадью 64,9 кв.м. в г. Москва, Северный б-р, д. 3, кв. 4, к/н 77:02:0008003:4273.",
        "start_price": "7250400 рубли",
        "lon": 55.8675709999999981,
        "lat": 37.6114999999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31090508",
        "prop_name": "Должник Иосильзон С.Г.: квартира, общей площадью 63,6 кв.м. в г. Москва, 1-й Неопалимовский пер., д. 10, кв. 15, к/н 77:01:0005002:2575",
        "start_price": "16388000 рубли",
        "lon": 55.7406390000000016,
        "lat": 37.5807319999999976
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30658178",
        "prop_name": "Первичные торги\nДолжник: Топчая А.Ю. \nКвартира, общей площадью 60 кв.м., по адресу: г. Москва, ул. Ясеневая, д. 10, корп. 2, кв. 299, к/н 77:05:0011003:12555",
        "start_price": "5374400 рубли",
        "lon": 55.6029369999999972,
        "lat": 37.7295560000000023
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31259639",
        "prop_name": "Квартира 45,1 кв. м, адрес: г. Москва, ул. Охотничья, д. 6, кв. 59, к/н 77:03:0003009:3365, с-к Дианова О.С., пор. 1541-4А",
        "start_price": "5620800 рубли",
        "lon": 55.795104000000002,
        "lat": 37.6854760000000013
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31485639",
        "prop_name": "Первичные торги\nДолжник: Романова С.И.\nКвартира, общей площадью 32 кв.м., по адресу: г. Москва, ул. Обручева, д. 11, корп. 3, кв. 12, к/н 77:06:0003013:3322",
        "start_price": "5197000 рубли",
        "lon": 55.6563009999999991,
        "lat": 37.5360680000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483261",
        "prop_name": "Квартира 81,6 кв.м., адрес: г. Москва, ул. Костякова, д. 10, кв. 260, к/н 77:09:0003023:6475, с-к Конторина А.В., пор. 1633-4А",
        "start_price": "13678177.5999999996 рубли",
        "lon": 55.7609149999999971,
        "lat": 37.5548610000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31355179",
        "prop_name": "Повторные торги\nДолжник: Пимениди К.С. \nКвартира, общей площадью 40 кв.м., по адресу: г. Москва, ул. Раевского, д. 3, кв. 137, к/н 77:07:0007002:7433",
        "start_price": "7485494.40000000037 рубли",
        "lon": 55.7451440000000034,
        "lat": 37.5525880000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31090353",
        "prop_name": "Должник Синявский Л.В.: квартира, общей площадью 57,3 кв.м. в г. Москва, Кутузовский пр-д, д. 4, кв. 18, к/н 77:07:0006005:4418.",
        "start_price": "10114000 рубли",
        "lon": 55.7402990000000003,
        "lat": 37.5226559999999978
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 46,7 кв.м., адрес: г. Москва, ул. Дубнинская, д. 40А, корп. 4, кв. 203, к/н 77:09:0002007:9410, с-к Черноплёкова Л.И., пор. 1481-4А",
        "start_price": "7600000 рубли",
        "lon": 55.7198250000000002,
        "lat": 37.6348290000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31581195",
        "prop_name": "Первичные торги\nДолжник:Борисов В.В.\nКвартира, общей площадью 100,4 кв.м., по адресу: г. Москва, ул. Щукинская, д. 2, кв. 285, к/н 77:08:0009008:2488",
        "start_price": "20816800 рубли",
        "lon": 55.8085689999999985,
        "lat": 37.4743179999999967
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31751216",
        "prop_name": "Должник Никитина Н.В.: квартира общей площадью 75,4 кв.м. в г. Москва, ул. 8-я Соколиной горы, д. 8, корп. 2, кв. 137, к/н 77:03:0004007:8620.",
        "start_price": "11152800 рубли",
        "lon": 55.7683499999999981,
        "lat": 37.7378659999999968
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31581017",
        "prop_name": "Первичные торги\nДолжник: Акимкин А.И.\nКвартира, общей площадью 24 кв.м., по адресу: г. Москва, Севастопольский пр-кт, д. 7, корп. 5, кв. 79, к/н 77:05:0001015:5698",
        "start_price": "3212000 рубли",
        "lon": 55.6588649999999987,
        "lat": 37.5736270000000019
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30798302",
        "prop_name": "Повторные торги. Должник Ходжаметова Л.Н.: квартира общей площадью 76 кв.м. в г. Москва, ул. Автозаводская, д. 9/1, кв. 80, к/н 77:05:002003:2088",
        "start_price": "10278506 рубли",
        "lon": 55.7040930000000003,
        "lat": 37.6516900000000021
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31090772",
        "prop_name": "Должник Венецкая К.В.: квартира, общей площадью 34,4 кв.м. в г. Москва, ул. Смирновская, д. 4б, кв. 45, к/н 77:04:0001014:1450.",
        "start_price": "4435135.30999999959 рубли",
        "lon": 55.7364219999999975,
        "lat": 37.710287000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31148170",
        "prop_name": "Квартира 63,5 кв. м, адрес: г. Москва, ул. Маршала Василевского , д. 1, корп. 2, кв. 93, к/н 77:08:0009017:1340, Общая совместная собственность Стась А.К. и Кремчуковой Н.Г., пор. 1385-4А",
        "start_price": "8544880 рубли",
        "lon": 55.8063780000000023,
        "lat": 37.4683890000000019
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30855101",
        "prop_name": "Квартира 34,5 кв. м, адрес: г. Москва, ул. Правды, д. 1, кв 54, к/н 77:09:0004020:3773, с-к Шмелева О.В., пор. 1265-4А",
        "start_price": "5321901 рубли",
        "lon": 55.7864950000000022,
        "lat": 37.5797620000000023
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31786316",
        "prop_name": "Квартира общей площадью 73,6 кв. м, адрес: г. Москва, ул. Таллинская, д. 17, корп. 2, кв. 29, к/н 77:08:0008008:2475, с-к Тю З.Г., пор. 1651-4А",
        "start_price": "8100000 рубли",
        "lon": 55.7992080000000001,
        "lat": 37.4011679999999984
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31222613",
        "prop_name": "Повторные торги\nДолжники: Колесников В.А., Колесникова Н.И. Квартира общей площадью 53,3 кв.м, по адресу: г. Москва, ул. Бартеневская, д. 23, корп. 2, кв. 39, к/н 77:06:0012003:2781",
        "start_price": "78722.9199999999983 доллар США",
        "lon": 55.5491639999999975,
        "lat": 37.525818000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31787058",
        "prop_name": "Квартира общей площадью 48,9 кв. м, адрес: г. Москва, ул. Планерная, д. 22, корп. 1, кв. 138, к/н 77:08:0003005:4547, с-к Самойлов К.Ю., пор. 1652-4А",
        "start_price": "6342368.79999999981 рубли",
        "lon": 55.8646770000000004,
        "lat": 37.4364539999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31355542",
        "prop_name": "Повторные торги\nДолжник: Дингес Н.А.\n1/4 доли в праве собственности на квартиру, общей площадью 62 кв.м., по адресу: г. Москва, 2-й Раушский пер., д. 3, кв.15, к/н 77:01:0002022:2973",
        "start_price": "2125000 рубли",
        "lon": 55.7469170000000034,
        "lat": 37.6345329999999976
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31639455",
        "prop_name": "Квартира 51,7 кв. м, адрес: г. Москва, ул. Илимская, д. 12, кв. 43, к/н 77:02:0001017:3303, с-к Манджиева Е.Т., пор. 1260-4А",
        "start_price": "5333428 рубли",
        "lon": 55.891213999999998,
        "lat": 37.5771569999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31639455",
        "prop_name": "Квартира  49,2 кв. м, адрес: г. Москва, ул. Кленовый бульвар, д. 10, корп. 2, кв. 330, к/н 77:05:0004007:5184, с-к Цыганов В.А., пор. 1647-4А",
        "start_price": "7370254.40000000037 рубли",
        "lon": 55.6803209999999993,
        "lat": 37.6764300000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31794241",
        "prop_name": "Квартира общей площадью 138,9 кв. м, адрес: г. Москва ул. Велозаводская, д. 11/1, кв. 193, к/н 77:04:0001018:1790, с-к Черкесова С.И., пор. 1546-4А",
        "start_price": "15580896.4399999995 рубли",
        "lon": 55.7133340000000032,
        "lat": 37.6652729999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30654077",
        "prop_name": "Должник Корнеева Ю.А.: квартира общей площадью 36,3 кв.м. в г. Москва, ул. Бирюлёвская, д. 52, корп. 2, кв. 436, к/н 77:05:0010004:5287.",
        "start_price": "2872000 рубли",
        "lon": 55.5907040000000023,
        "lat": 37.6641410000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30723784",
        "prop_name": "Квартира 35,5 кв. м, адрес: г. Москва, Студеный пр., д. 4, к. 4, кв. 273, к/н 77:02:0004001:2025, с-к Крушняк Е.Б., пор. 1162-4А,",
        "start_price": "4109750 рубли",
        "lon": 55.8932629999999975,
        "lat": 37.663018000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31399539",
        "prop_name": "Комната 16,4 кв.м., адрес: г. Москва, ул. Вучетича, д. 9, корп. 1, кв. 24. к. 2, к/н 77:09:0003021:9807, с-к Мишин В.А., пор. 1340-4А",
        "start_price": "1459280 рубли",
        "lon": 55.8110369999999989,
        "lat": 37.5580500000000015
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30934938",
        "prop_name": "Первичные торги\nДолжник: Лапаревич И.С.\nКвартира, общей площадью 38,7 кв.м., по адресу: г. Москва, ул. Енисейская, д. 30, кв. 216, к/н 77:02:0011006:3516",
        "start_price": "4640000 рубли",
        "lon": 55.8697379999999981,
        "lat": 37.6646619999999999
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31357110",
        "prop_name": "Повторные торги\nДолжник: Ермаков Г.Ю. \nКвартира, общей площадью 52,1 кв.м., по адресу: г. Москва, ул. Дубнинская, д. 28, корп. 2, кв. 164, к/н 77:09:0002028:9198",
        "start_price": "5649100 рубли",
        "lon": 55.8765709999999984,
        "lat": 37.5576280000000011
    }];

    var myMap = new ymaps.Map("map", {
        center: [55.753359, 37.621440],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    for (var i = 0; i < objs.length; ++i) {
        var obj = objs[i];
        var myPlacemark = new ymaps.Placemark([obj.lon, obj.lat], {
            balloonContentHeader: obj.start_price,
            balloonContentBody: obj.prop_name + "<br><a href='" + obj.notification_url + "'>notification</a>",
            balloonContentFooter: "",
            hintContent: ""
        });

        myMap.geoObjects.add(myPlacemark);
    }
}
