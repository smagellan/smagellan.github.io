ymaps.ready(init);

function init() {
    var objs = [{
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 37,8 кв. м, адрес: г. Москва, ул. Лухмановская, д. 34, кв. 370, к/н 77:03:0010009:3006, с-к  Юдина Е.Ю., пор. 1498-4А.",
        "start_price": "6657200 рубли",
        "lon": 55.7172029999999978,
        "lat": 37.9000210000000024
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 44,6 кв. м, г. Москва, ул. Реутовская, д. 4, кв. 256, к/н 77:03:00070 06:7889, с-к Адамов А.В., пор. 1500-4А.",
        "start_price": "5535313.04999999981 рубли",
        "lon": 55.7410190000000014,
        "lat": 37.8363119999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 45,5 кв. м, адрес: г. Москва, ул. Малахитовая, д. 6, корп. 2, кв. 179, к/н 77:02:0019008:1409, с-к Черненко А.Г., пор. 1537-4А.",
        "start_price": "4789920 рубли",
        "lon": 55.8311300000000017,
        "lat": 37.662308000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 60,5 кв. м, адрес: г. Москва, ул. Большая Филевская, д. 16, корп. 1, кв. 166, к/н 77:07:0002004:3084, с-к Куликова Н.П., пор. 1497-4А.",
        "start_price": "13504120 рубли",
        "lon": 55.7447540000000004,
        "lat": 37.4860320000000016
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 61,8  кв. м, г. Москва адрес: ул. Соловьиная роща, д. 9, кв. 37, к/н 77:08:0001009:1523, с-к Шадрин В.Б., пор. 1438-4А",
        "start_price": "10847616 рубли",
        "lon": 55.8932679999999991,
        "lat": 37.3989580000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30191358",
        "prop_name": "1/4 доли в праве на квартиру общей площадью 72,3 кв. м, г. Москва, Осенний б-р, д. 10, корп. 2, кв. 688, к/н 77:07:0001002:18419, с-к Чупов И.в., пор. 1270-4А",
        "start_price": "2000000 рубли",
        "lon": 55.757987,
        "lat": 37.4074560000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30191358",
        "prop_name": "квартира 34,5 кв. м, г. Москва, ул. Правды, д. 1, кв. 54, к/н 77:09:0004020:3773, с-к Шмелева О.в., пор. 1265-4А",
        "start_price": "6261060 рубли",
        "lon": 55.7864950000000022,
        "lat": 37.5797620000000023
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29282767",
        "prop_name": "Должник: Танатаров Х.М.\nКвартира, общей площадью 31,2 кв.м., по адресу: г. Москва, Сиреневый б-р, д. 69, корп. 4, кв. 30, к/н 77:03:0005019:2377.",
        "start_price": "3828000 рубли",
        "lon": 55.8025680000000008,
        "lat": 37.7943879999999979
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31278295",
        "prop_name": "Квартира 55,4 кв. м, адрес: г. Москва, Врачебный пр., д. 10, корп. 2, кв. 83, к/н 77:08:0007008:2524, с-к Бидо Н.И., пор. 1392-4А",
        "start_price": "5578040 рубли",
        "lon": 55.8136470000000031,
        "lat": 37.4574390000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31278295",
        "prop_name": "Квартира 26,1 кв. м, адрес: г. Москва, Волгоградский пр-т, д. 1, стр. 1, кв. 55, к/н 77:01:0006040:1952, с-к Грознов С.Н., пор. 1380-4А",
        "start_price": "5236000 рубли",
        "lon": 55.7076440000000019,
        "lat": 37.7492739999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30942958",
        "prop_name": "Должник Милявский Д.Л.: квартира общей площадью 53 кв.м. в г. Москва, Можайский р-н, ул. Гришина, д. 2, корп. 1, кв. 252, к/н 77:07:0008002:6028.",
        "start_price": "8150000 рубли",
        "lon": 55.7228059999999985,
        "lat": 37.4175889999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28505873",
        "prop_name": "Квартира, общей площадью 56,1 кв.м., по адресу: г. Москва, ул. Большая Дорогомиловская, д. 9, кв. 130, к/н 77:07:0007002:10037.",
        "start_price": "12000000 рубли",
        "lon": 55.7459490000000031,
        "lat": 37.5620469999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30268154",
        "prop_name": "Повторные торги\nДолжник: Полтавец Т.Г. \nКвартира, общей площадью 38,4 кв.м., по адресу: г. Москва, ул. Вилиса Лациса, д. 25, кв. 228, к/н 77:08:0003001:7523",
        "start_price": "4657320 рубли",
        "lon": 55.862130999999998,
        "lat": 37.4198710000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30656942",
        "prop_name": "Повторные торги\nПронькин В.А., Пронькина И.Л Квартира, общей площадью 73 кв.м., по адресу: г. Москва, ул. Никулинская, д. 23, корп. 1, кв. 89, к/н 77:07:0014004:4021",
        "start_price": "9261600 рубли",
        "lon": 55.6706909999999979,
        "lat": 37.4521480000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30038323",
        "prop_name": "Квартира 114,6 кв.м, адрес: г. Москва, пр-д Рощинский 6-й, д. 1, кв.40, к/н 77:05:0001012:3936,\nс-к Назаева А.А.,., пор. 1242-4А",
        "start_price": "20962632 рубли",
        "lon": 55.7087489999999974,
        "lat": 37.6154519999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30038323",
        "prop_name": "Квартира 150,3 кв.м, адрес: Москва, ул. Минская, д. 1Г, корп. 2, кв. 68, к/н 77:07:0013001:1809,\nс-к Эмиргамзаев А.Г., пор. 1244-4А",
        "start_price": "46098922.3999999985 рубли",
        "lon": 55.7274349999999998,
        "lat": 37.4942070000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30038323",
        "prop_name": "Нежилое помещение, общей площадью 3754,00 кв. м, г. Москва, ул. Авиационная, д. 66\nв подв. и на 2-м эт. зд., к/н 77:08:0009001:3706, с-к ООО «БЕТТАГРАНТ», пор. 1239-4А",
        "start_price": "658345102.50999999 рубли",
        "lon": 55.8099899999999991,
        "lat": 37.4639600000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30038323",
        "prop_name": "Квартира 32 кв. м, адрес: г. Москва, ул. Коцюбинского, д. 5, кор. 2, кв. 5, к/н\n77:07:0004008:7055, с-к Закутнер Н.И., пор. 1241-4А.",
        "start_price": "4232000 рубли",
        "lon": 55.729695999999997,
        "lat": 37.4296539999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31088660",
        "prop_name": "Повторные торги. Должники Федосеева О.Г., Ченцов А.Б.: Лот 2. 1/2 доля в праве на квартиру общей площадью 51,7 кв.м. в г. Москва, ул. Мелиховская, д. 4, кв. 2, к/н 77:02:0002008:1286.",
        "start_price": "2040000 рубли",
        "lon": 55.9006779999999992,
        "lat": 37.6070080000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28788706",
        "prop_name": "должника (собственника) Малинина Д.Г.: квартира общ.пл.62,6кв.м., по адресу: г.Москва, ш. Алтуфьевское, д.18, кв. 308, к/н 77:02:0008002:1374",
        "start_price": "7820000 рубли",
        "lon": 55.8814899999999994,
        "lat": 37.5865709999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 57,50 кв.м., адрес: г. Москва, ул. Раменки, д.8, корп. 2, кв.331, к/н 77:07:0013005:2684, с-к Иванова М.Е., пор. 1167-4А",
        "start_price": "8866400 рубли",
        "lon": 55.6907449999999997,
        "lat": 37.4915030000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 44,3 кв.м, адрес: г.Москва,\nул. Профсоюзная, д. 20/9, кв. 256, к/н\n77:06:0003004:2199, с-к Ефимова Ю.А.,\nпор. 1160-4А",
        "start_price": "5735200 рубли",
        "lon": 55.6495200000000025,
        "lat": 37.5325109999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 45,2 кв. м, адрес: г. Москва,\nул. Ферсмана, д. 5, кор. 2, кв. 225,\nк/н 77:06:0002005:2705, с-к Коньков С.В.,\nпор. 1159-4А,",
        "start_price": "6191200 рубли",
        "lon": 55.6942459999999997,
        "lat": 37.5726299999999966
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 54,7 кв.м, адрес: г. Москва,\nул. Б. Черкизовская, д. 5, кор. 2, кв. 79,\nк/н 77:03:0003023:3293, с-к Трошков Д.Н.\nпор. 1158-4А,",
        "start_price": "6119180 рубли",
        "lon": 55.7981910000000028,
        "lat": 37.7283800000000014
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "1/2 доли в праве общей долевой соб-ти квартиры, общ. пл. 57,7 кв.м, адрес:г. Москва, ул. Мосфильмовская, д. 2В, кв.1, к/н 77:07:006004:4431, с-к Шоргина Е.Г., пор. 1203-4А",
        "start_price": "4000000 рубли",
        "lon": 55.7149319999999975,
        "lat": 37.5145180000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 61 кв. м, адрес: г. Москва\nул. Ясеневая, д. 10, корп. 2, кв. 335,\nк/н 77:05:0011003:12591, с-к Мальцева Н.Н.,\nпор. 1195-4А",
        "start_price": "5499760 рубли",
        "lon": 55.6029369999999972,
        "lat": 37.7295560000000023
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 121,1 кв. м, адрес:\nг. Москва ул. Минская, д. 1Г, кор . 2, кв. 161,\nк/н 77:07:0013001:1898 с-к Яковлева Е.А.\nпор. 1147-4А",
        "start_price": "37690904 рубли",
        "lon": 55.7274349999999998,
        "lat": 37.4942070000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 68,9 кв. м, адрес:\nг. Москва ул. Алабяна, д. 15, кв. 50,\nк/н 77:09:0005002:1830, с-к Бондаренко Ф.Я.\nпор. 1150-4А",
        "start_price": "12000000 рубли",
        "lon": 55.8013339999999971,
        "lat": 37.5064059999999984
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 53,4 кв. м, адрес:\nг. Москва, ул. Софьи Ковалевской, д. 12, кор. 1,\nкв. 42, к/н 77:09:0002009:7621 с-ки Рабазанов\nР.Р., Рабазанова А.Н., пор. 1146-4А",
        "start_price": "5200000 рубли",
        "lon": 55.8860689999999991,
        "lat": 37.5341189999999969
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 73г,8 кв. г. Москва, адрес:\nул. Генерала Белобородова, д. 21,\nкв. 110, к/н 77:08:0002022:2212, с-к Хан В.Р.,\nпор. 1148-4А",
        "start_price": "13186407.1999999993 рубли",
        "lon": 55.8310540000000017,
        "lat": 37.3546979999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30657952",
        "prop_name": "Первичные торги\nДолжник: Афанасьев И.Е. \nКвартира, общей площадью 76,7 кв.м., по адресу: г. Москва, ул. Вилиса Лациса, д. 25, корп. 1, кв. 123, к/н 77:08:0003001:7246",
        "start_price": "9840000 рубли",
        "lon": 55.862130999999998,
        "lat": 37.4198710000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30722872",
        "prop_name": "Квартира 109 кв. м, г. Москва, Пятницкое ш., д. 42, корп. 1, кв. 93–94, к/н 77:08:0002016:2437, с-к Шер С.Н., пор. 1269-4А",
        "start_price": "11324040 рубли",
        "lon": 55.8486550000000008,
        "lat": 37.3704999999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30722872",
        "prop_name": "Квартира 45,6 кв. м, г. Москва, пр-д Юрловский, д. 7, кв. 224. к/н 77:02:0008007:3479 Яковлева Е.А., пор. 1261-4А",
        "start_price": "4063680 рубли",
        "lon": 55.8695310000000021,
        "lat": 37.6210489999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30562658",
        "prop_name": "Квартира 44,2 кв. м, г. Москва, ул. 26-ти Бакинских комиссаров, д. 6, корп. 2, кв. 35, к/н 77:07:0014008:12572, с-к Фуртат К.В., пор. 1428-4А",
        "start_price": "6283613.59999999963 рубли",
        "lon": 55.6588700000000003,
        "lat": 37.4888079999999988
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30562658",
        "prop_name": "Квартира 31,6 кв. м, адрес: г. Москва, ул. Маршала Василевского, д. 7, корп. 2, кв. 142, к/и 77:08:0009011:3300, с-к Исаков П.С., пор. 1433-4А",
        "start_price": "4202400 рубли",
        "lon": 55.8063780000000023,
        "lat": 37.4683890000000019
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30562658",
        "prop_name": "Комната № 2, 13,5 кв. м, адрес: г. Москва, ул. Новощукинская, д. 10, корп. 2, кв. 6, к/н 77:08:0009004:6760, с-к Шергина Т.А., пор. 1435-4А",
        "start_price": "2460000 рубли",
        "lon": 55.8059229999999999,
        "lat": 37.4557860000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30562658",
        "prop_name": "Квартира 166,4 кв. м, адрес: г. Москва, Большой Головин переулок, д. 2, кв. 7, к/н 77:01:0001090:1911, с-к Томаш С.Ю., пор. 1378-4А",
        "start_price": "2642625 доллар США",
        "lon": 55.7693879999999993,
        "lat": 37.6286399999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30562658",
        "prop_name": "Квартира 26,1 кв. м, адрес: г. Москва, Волгоградский пр-т, д. 1, стр. 1, кв. 55, к/н 77:01:0006040:1952, с-к Грознов С.Н., пор. 1380-4А, н/ц 6 160 000,00 руб.",
        "start_price": "6160000 рубли",
        "lon": 55.7076440000000019,
        "lat": 37.7492739999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31391168",
        "prop_name": "Квартира 70,9 кв.м., адрес: г. Москва, ул. Косыгина, д. 5, кв. 292, к/н 77:06:0001002:4294, с-к Кузумова А.А., пор. 1590-4А",
        "start_price": "14790000 рубли",
        "lon": 55.7062540000000013,
        "lat": 37.5575469999999996
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29038131",
        "prop_name": "должника (собственника) Мерко И.А.:1/2 доля в праве на квартиру общей площадью 163кв.м., по адресу: г. Москва, Богословский пер., д.3, кв. 36, к/н 77:01:0001070:1068",
        "start_price": "27910600 рубли",
        "lon": 55.762475000000002,
        "lat": 37.5995070000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30442368",
        "prop_name": "Квартира 56,1 кв. м, адрес: г. Москва, Щелковское шоссе, д. 43, корп. 1, кв. 44, к/н 77:03:0002014:5641, с-к Брик Л.И., пор. 1165-4А",
        "start_price": "5921100 рубли",
        "lon": 55.8100809999999967,
        "lat": 37.7957170000000033
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30442368",
        "prop_name": "Квартира 54,7 кв. м, адрес: г. Москва, ул. Б. Черкизовская, д. 5, корп. 2, кв. 79, к/н 77:03:0003023:3293, с-к Трошков Д.Н., пор. 1158-4А",
        "start_price": "5201303 рубли",
        "lon": 55.7981910000000028,
        "lat": 37.7283800000000014
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30442368",
        "prop_name": "Квартира 73,8 кв. м, адрес: г. Москва, ул. Генерала Белобородова, д. 21, кв. 110, к/н 77:08:0002022:2212, с-к Хан В.Р., пор. 1148-4А",
        "start_price": "11208446.1199999992 рубли",
        "lon": 55.8310540000000017,
        "lat": 37.3546979999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30442368",
        "prop_name": "Квартира 68,9 кв. м, адрес: г. Москва, ул. Алабяна, д. 15, кв. 50, к/н 77:09:0005002:1830, с-к Бондаренко Ф.Я., пор. 1150-4А",
        "start_price": "10200000 рубли",
        "lon": 55.8013339999999971,
        "lat": 37.5064059999999984
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30442368",
        "prop_name": "Квартира 34,7 кв. м, адрес: г. Москва, ул. Введенского, д. 27, корп. 2, кв. 70, к/н 77:06:0008007:3715, с-к Посохов А.И., пор. 1170-4А",
        "start_price": "3890450 рубли",
        "lon": 55.6415440000000032,
        "lat": 37.5402089999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29887714",
        "prop_name": "Квартира 45,6 кв. м, адрес:\nг. Москва, пр-т Вернадского, д. 111, кв. 19,\nк/н 77:07:0014009:5173, с-к Мельникова И.Н.,\nпор. 1234-4А",
        "start_price": "6466400 рубли",
        "lon": 55.6816559999999967,
        "lat": 37.5153350000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29887714",
        "prop_name": "Квартира 32,6 кв. м, адрес:\nг. Москва, ул. Генерала Тюленева, д. 31,\nкв. 230, к/н 77:06:0007005:4281, с-к\nХайретдинов Р.Р., пор. 1236-4А",
        "start_price": "3413185.60000000009 рубли",
        "lon": 55.6181709999999967,
        "lat": 37.4873350000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28890641",
        "prop_name": "Квартира, общей площадью 97,4 кв.м. по адресу: г. Москва, Пушкарёв пер., д. 16, кв. 5, к/н 77:01:0001090:1959",
        "start_price": "73883610 рубли",
        "lon": 55.768886000000002,
        "lat": 37.6284240000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28890641",
        "prop_name": "Квартира, общей площадью 104,5 кв.м. по адресу: г. Москва, Пушкарёв пер., д. 16, кв. 4, к/н 77:01:0001090:1958",
        "start_price": "79269383 рубли",
        "lon": 55.768886000000002,
        "lat": 37.6284240000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28890641",
        "prop_name": "Квартира, общей площадью 131,1 кв.м., по адресу г. Москва, ул. Щербаковская, д. 57/20, кв. 77, к/н 77:03:0003018:3813.",
        "start_price": "24252990 рубли",
        "lon": 55.782829999999997,
        "lat": 37.7331769999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28890641",
        "prop_name": "Квартира, общей площадью 81,4 кв.м., по адресу г. Москва, Ленинский пр-т, д. 86, кв. 244, к/н 77:06:0001007:1358.",
        "start_price": "19831136 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29425021",
        "prop_name": "Должник Ильюшин А.Н.: Квартира, общей площадью 82 кв.м. по адресу г. Москва, ул. Покрышкина, д. 11, кв. 293, к/н 77:07:0014007:6038.",
        "start_price": "17269810 рубли",
        "lon": 55.6645380000000003,
        "lat": 37.4734830000000017
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30440705",
        "prop_name": "Квартира 42 кв. м, адрес: г. Москва, ул. Дмитрия Ульянова, д. 9/11, корп. 2, кв. 18, к/н 77:06:0002007:1265, с-к Дейсадзе Э.А., пор. 1342-4А",
        "start_price": "4414000 рубли",
        "lon": 55.6871119999999991,
        "lat": 37.5761869999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30440705",
        "prop_name": "Квартира 49,6 кв. м, адрес: г. Москва, ул. Красная Пресня, д. 38, кв. 96, к/н 77:01:0004023:3369, с-к Тамразова Л.О., пор. 1332-4А",
        "start_price": "143891.200000000012 доллар США",
        "lon": 55.7616799999999984,
        "lat": 37.5709769999999992
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30241804",
        "prop_name": "Должники Федосеева О.Г., Ченцов А.Б.: Лот 2. 1/2 доля в праве на квартиру общей площадью 51,7 кв.м. в г. Москва, ул. Мелиховская, д. 4, кв. 2, к/н 77:02:0002008:1286.",
        "start_price": "2400000 рубли",
        "lon": 55.9006779999999992,
        "lat": 37.6070080000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 36,1 кв.м., адрес: г. Москва, Коломенский пр., д. 23, корп. 2, кв. 38, к/н 77:05:0004006:7003, с-ки Перегоедова Б.С., Перегоедов В.В., пор. 1445-4А",
        "start_price": "4695910 рубли",
        "lon": 55.6649340000000024,
        "lat": 37.6425010000000029
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29872085",
        "prop_name": "должника (собственника) Аверьяновой А.В.: квартира общей площадью 63,6 кв.м по адресу г.Москва, ул. Сивашская д. 2, корп. 2,  кв. 36, к/н 77:06:0005007:2316",
        "start_price": "7462960.04999999981 рубли",
        "lon": 55.661287999999999,
        "lat": 37.6018070000000009
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30654230",
        "prop_name": "Должник Царенко А.Н.: квартира общей площадью 78,9 кв.м. в г. Москва, Комсомольский пр-т, д. 38/16, кв. 89, к/н 77:01:0005011:1888",
        "start_price": "14400000 рубли",
        "lon": 55.7255439999999993,
        "lat": 37.5800410000000014
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
        "prop_name": "Квартира 49,6 кв. м, адрес г. Москва, ул. Красная Пресня, д. 38, кв. 96, к/н 77:01:0004023:3369, с-к Тамразова Л.О., пор.1332-4А",
        "start_price": "7375314.6799999997 рубли",
        "lon": 55.7616799999999984,
        "lat": 37.5709769999999992
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 48,4 кв. м, адрес: г. Москва, ул. Планерная, д. 18, корп. 1, кв. 5, к/н 77:08:0003005:4028, с-к Мурадян С.А., пор.1347-4А",
        "start_price": "5537920 рубли",
        "lon": 55.8646770000000004,
        "lat": 37.4364539999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31259639",
        "prop_name": "Квартира 32,6 кв. м, адрес: г. Москва, ул. Генерала Тюленева, д. 31, кв. 230, к/н 77:06:0007005:4281, с-к Хайретдинов P.P., пор. 1236-4А",
        "start_price": "3413185.60000000009 рубли",
        "lon": 55.6181709999999967,
        "lat": 37.4873350000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31259639",
        "prop_name": "Квартира 45,1 кв. м, адрес: г. Москва, ул. Охотничья, д. 6, кв. 59, к/н 77:03:0003009:3365, с-к Дианова О.С., пор. 1541-4А",
        "start_price": "5620800 рубли",
        "lon": 55.795104000000002,
        "lat": 37.6854760000000013
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30114502",
        "prop_name": "Повторные торги. Должник Якобишвили Н.М.: квартира общей площадью 146 кв.м. по адресу г. Москва, Большой Головин пер., д. 4, кв. 1, к/н 77:01:0001090:1834.",
        "start_price": "97841443 рубли",
        "lon": 55.7693879999999993,
        "lat": 37.6286399999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28788390",
        "prop_name": "должника (собственника) Карапетян М.Р.: квартира общ.пл.52,8кв.м., по адресу: г.Москва, ул. Декабристов, д.26, кв.188, к/н 77:02:0008006:5027",
        "start_price": "6432800 рубли",
        "lon": 55.8637519999999981,
        "lat": 37.6060289999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483261",
        "prop_name": "Квартира 35,4 кв.м., адрес: г. Москва, Каширское шоссе, д. 148, корп. 1, кв. 184, к/н 77:05:0010009:4219, с-к Мацола О.Б., пор. 1635-4А",
        "start_price": "7950000 рубли",
        "lon": 55.6411170000000013,
        "lat": 37.6835090000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28649611",
        "prop_name": "должника (собственника) Бобровой М.Ю.: квартира площадью 38,4 кв.м., по адресу: г. Москва, Каширское ш., д.80, корп.1, кв. 395, к/н 77:05:0011001:6432",
        "start_price": "4147007.20000000019 рубли",
        "lon": 55.6411170000000013,
        "lat": 37.6835090000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28383499",
        "prop_name": "Квартира, общей площадью 37,9 кв.м. по адресу г. Москва, ул. 2-ая Вольская, д. 3, кв. 120, к/н 77:04:0006002:2593.",
        "start_price": "2839591.20000000019 рубли",
        "lon": 55.686827000000001,
        "lat": 37.92971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30316328",
        "prop_name": "квартира 57,50 кв. м, адрес: г. Москва, ул. Раменки, д. 8, корп. 2, кв. 331, к/н 77:07:0013005:2684, с-к Иванова М.Е.пор. 1167-4А",
        "start_price": "7536440 рубли",
        "lon": 55.6907449999999997,
        "lat": 37.4915030000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30316328",
        "prop_name": "квартира 38,5 кв. м, адрес: г. Москва, ул. Октябрьская, д. 33, кв. 10, к/н 77:02:0024029:2786, с-к Подгорный Р.А.пор. 1152-4А",
        "start_price": "5925520 рубли",
        "lon": 55.7922500000000028,
        "lat": 37.613197999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30316328",
        "prop_name": "квартира 61 кв. м, адрес: г. Москва ул. ясеневая, д. 10, корп. 2, кв. 335 пор. 1195-4А",
        "start_price": "4674796 рубли",
        "lon": 55.6029369999999972,
        "lat": 37.7295560000000023
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28419963",
        "prop_name": "должника (собственника) Каплан В.И.: квартира площадью 70,1кв.м., по адресу: г. Москва, Ленинский проспект, д.36, кв. 155, к/н 77:06:0001002:1883",
        "start_price": "14065600 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28408691",
        "prop_name": "должника (собственника) Инкина И.Г.: квартира из 2-х комнат площадью 44,6кв.м., по адресу: г. Москва, ул. Расковой, д.9, кв. 29, к/н 77:09:0004020:2193",
        "start_price": "7527600 рубли",
        "lon": 55.7879080000000016,
        "lat": 37.5729710000000026
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29038027",
        "prop_name": "должника (собственника) Яндиева Р.Ш.: квартира площадью 162,3кв.м., по адресу: г. Москва, ул. Крылатские Холмы, д.33, корп.1, кв.161, к/н 77:07:0001002:4634",
        "start_price": "49857489.1599999964 рубли",
        "lon": 55.755747999999997,
        "lat": 37.4149120000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 50,5 кв. м, адрес: г. Москва, ул. Снежная, д. 27, корп. 2, кв. 282, к/н 77:02:0014011:4299 с-к Дмитриев Р.В., пор. 1488-4А",
        "start_price": "8752226 рубли",
        "lon": 55.8524049999999974,
        "lat": 37.6469469999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28667178",
        "prop_name": "должника (собственника) Акимовой Ю.Ю.: 1/3 доля в праве собственности на квартиру 63,6 кв.м по адресу: г.Москва, ул.Сивашская, д.2, корп.2, кв.55, к/н 77:06:0005007:2335",
        "start_price": "2670955 рубли",
        "lon": 55.661287999999999,
        "lat": 37.6018070000000009
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29555202",
        "prop_name": "Повторные торги. Должник Михелашвили Л.Р.: Квартира, общей площадью 97,4 кв.м. по адресу: г. Москва, Пушкарёв пер., д. 16, кв. 5, к/н 77:01:0001090:1959",
        "start_price": "62801068.5 рубли",
        "lon": 55.768886000000002,
        "lat": 37.6284240000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29555202",
        "prop_name": "Повторные торги. Должник Михелашвили Л.Р.: Квартира, общей площадью 104,5 кв.м. по адресу: г. Москва, Пушкарёв пер., д. 16, кв. 4, к/н 77:01:0001090:1958",
        "start_price": "67378975.549999997 рубли",
        "lon": 55.768886000000002,
        "lat": 37.6284240000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29555202",
        "prop_name": "Повторные торги. Должник Михелашвили Л.Р.: Квартира, общей площадью 131,1 кв.м., по адресу г. Москва, ул. Щербаковская, д. 57/20, кв. 77, к/н 77:03:0003018:3813.",
        "start_price": "20615041.5 рубли",
        "lon": 55.782829999999997,
        "lat": 37.7331769999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29555202",
        "prop_name": "Повторные торги. Должник Михелашвили Л.Р.: Квартира, общей площадью 81,4 кв.м., по адресу г. Москва, Ленинский пр-т, д. 86, кв. 244, к/н 77:06:0001007:1358.",
        "start_price": "16856465.6000000015 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29284691",
        "prop_name": "Повторные торги. Должник Ковалева О.В.: гараж-бокс, общей площадью 18,2 кв.м., по адресу: г. Москва, пр-т Вернадского, д. 5, корп. 1, к/н 77:06:0001003:7715.",
        "start_price": "735250 рубли",
        "lon": 55.6816559999999967,
        "lat": 37.5153350000000003
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30573906",
        "prop_name": "Квартира 32,6 кв. м, адрес: г. Москва, ул. Генерала Тюленева, д. 31, кв. 230, к/н 77:06:0007005:4281, с-к Хайретдинов Р.Р., пор. 1236-4А",
        "start_price": "2901207.75999999978 рубли",
        "lon": 55.6181709999999967,
        "lat": 37.4873350000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30573906",
        "prop_name": "Квартира 31,7 кв. м, адрес: г. Москва, Карамышевская наб., д. 10, корп. 1, кв. 5, к/н 77:08:0010012:2188, с-к Плаксина С.Е., пор. 1240-4А",
        "start_price": "4024699 рубли",
        "lon": 55.7691700000000026,
        "lat": 37.4768419999999978
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30573906",
        "prop_name": "Квартира 32 кв. м, адрес: г. Москва, ул. Коцюбинского, д. 5, кор. 2, кв. 5, к/н 77:07:0004008:7055, с-к Закутнер Н.И., пор. 1241-4А",
        "start_price": "3597200 рубли",
        "lon": 55.729695999999997,
        "lat": 37.4296539999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31787058",
        "prop_name": "Квартира общей площадью 48,9 кв. м, адрес: г. Москва, ул. Планерная, д. 22, корп. 1, кв. 138, к/н 77:08:0003005:4547, с-к Самойлов К.Ю., пор. 1652-4А",
        "start_price": "6342368.79999999981 рубли",
        "lon": 55.8646770000000004,
        "lat": 37.4364539999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31639455",
        "prop_name": "Квартира  49,2 кв. м, адрес: г. Москва, ул. Кленовый бульвар, д. 10, корп. 2, кв. 330, к/н 77:05:0004007:5184, с-к Цыганов В.А., пор. 1647-4А",
        "start_price": "7370254.40000000037 рубли",
        "lon": 55.6803209999999993,
        "lat": 37.6764300000000034
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29849399",
        "prop_name": "Повторные торги\nДолжник: Мерзликин А.Д. \nКомната, общей площадью 17,9 кв.м., по адресу: г. Москва, Борисовские пруды, д. 46, корп. 2, кв. 408, к. 1, к/н 77:05:0012003:23255.",
        "start_price": "2242569.2799999998 рубли",
        "lon": 55.6358579999999989,
        "lat": 37.738387000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29731106",
        "prop_name": ". Квартира 66,7 кв.м, адрес: г.Москва,\nул. Довженко, д. 12, кор. 3., кв. 155,\nк/н 77:07:0006004:14120, с-ки Бовт И.О., Бовт\nО.А., пор. 1208-4А",
        "start_price": "383000 доллар США",
        "lon": 55.7204490000000021,
        "lat": 37.5127390000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29731106",
        "prop_name": "Квартира 96,1 кв. м, адрес: г. Москва,\nпер. 1-й Волконский, д. 15, кв. 113 к/н\n77:01:0004001:2167, с-к Калинская Л.А., пор.\n1210-4А",
        "start_price": "25854956.8000000007 рубли",
        "lon": 55.7746080000000006,
        "lat": 37.6162789999999987
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29698913",
        "prop_name": "Первичные торги\nДолжник: Березинская А.С. \nКвартира, общей площадью 35,5 кв.м., по адресу: г. Москва, ул. Саратовская, д. 5, корп. 2, кв. 126, к/н 77:04:0002005:7134",
        "start_price": "3952000 рубли",
        "lon": 55.7156420000000026,
        "lat": 37.7398960000000017
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30313739",
        "prop_name": "Квартира 54,2 кв. м, г. Москва, ул. Остафьевская, д. 35, корп. 1, кв. 5, к/н 77:06:0012010:4278, пор. 1272-4А, с-к Кузичкина (Нехонова) Н.Д.",
        "start_price": "5440000 рубли",
        "lon": 55.5312950000000001,
        "lat": 37.4974050000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30313739",
        "prop_name": "Квартира 53,4 кв. м, г. Москва, ул. Скобелевская, д. 21, кв. 27, к/н 77:06:0012001:6151, пор. 1273-4А, с-к Михальченко А.А.",
        "start_price": "5600000 рубли",
        "lon": 55.5473819999999989,
        "lat": 37.5553820000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30313739",
        "prop_name": "Квартира 20,1 кв. м, г. Москва, ул. Енисейская, д. 17, корп 2, кв. 378, к/н 77:02:0014006:1406, пор. 1297-4А, с-к Жалнерская Л.B.",
        "start_price": "2314000 рубли",
        "lon": 55.8697379999999981,
        "lat": 37.6646619999999999
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30313739",
        "prop_name": "Квартира 44,3 кв. м, г. Москва, 2-й Мосфильмоский пер., д. 12, кв. 81, к/н 77:07:0006004:6512, пор. 1298-4А, с-к Андронов В.А.",
        "start_price": "7489600 рубли",
        "lon": 55.7149319999999975,
        "lat": 37.5145180000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30313739",
        "prop_name": "Квартира 100,2 кв. м, г. Москва, Ломоносовский пр-т., д. 29, корп. 2, кв. 204, к/н 77:07:0013004:3823, пор. 1299-4А, с-к Далгатов И.Д.",
        "start_price": "15000000 рубли",
        "lon": 55.6972900000000024,
        "lat": 37.5292680000000018
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28646603",
        "prop_name": "Квартира общей площадью 77,2 кв.м. по адресу: г. Москва, ул. Адмирала Лазарева, д. 27, кв. 146, к/н 77:06:0012004:2944. Должник Горелик И.П.",
        "start_price": "8061400 рубли",
        "lon": 55.5417690000000022,
        "lat": 37.5147059999999968
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 63,7 кв. м, адрес: г. Москва, ул. Троицкая, д. 10, стр. 1, кв. 419, к/н 77:01:0003044:2502, с-к Смолин И.В., пор. 1451-4А.",
        "start_price": "10960920 рубли",
        "lon": 55.7748970000000028,
        "lat": 37.6250459999999975
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 41 кв. м, адрес: г. Москва, ул. Нижегородская, д. 9А, кв. 131, к/н 77:01:0006034:1164, с-к Иванова М.В., пор. 1477-4А.",
        "start_price": "5392298 рубли",
        "lon": 55.736148,
        "lat": 37.7005770000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31641243",
        "prop_name": "Квартира 53,9 кв. м, адрес: г. Москва, ул. Крылатские Холмы, д. 30, корп. 3, кв. 150, к/н 77:07:0001002:25994, с-к Иванов Е.В., пор. 1531-4А.",
        "start_price": "9252113.98000000045 рубли",
        "lon": 55.755747999999997,
        "lat": 37.4149120000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "1/2 доли в квартире 32,2 кв. м, адрес: г. Москва, ш. Щелковское, д. 38/66, кв. 5, к/н 77:03:0005010:6261, с-ки Макаров Г.Н., Разикова Н.Г., пор. 1163-4А",
        "start_price": "1200000 рубли",
        "lon": 55.8100809999999967,
        "lat": 37.7957170000000033
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29944288",
        "prop_name": "Повторные торгиДолжник: Густап Н.В. Квартира, общей площадью 36,3 кв.м., по адресу: г. Москва, Крюковский тупик, д. 6, кв. 118, к/н 77:04:0001002:2811",
        "start_price": "3940116.52000000002 рубли",
        "lon": 55.7642979999999966,
        "lat": 37.7105389999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28649554",
        "prop_name": "должника (собственника) Селезнева М.Ф.: квартира площадью 46,3 кв.м., по адресу: г. Москва, ул.Онежская, д.53, корп.1, кв.60, к/н 77:09:0001013:1669",
        "start_price": "4628337.04000000004 рубли",
        "lon": 55.8542839999999998,
        "lat": 37.5159009999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28505684",
        "prop_name": "Квартира №14, общей площадью 35 кв.м., по адресу г. Москва, ул. Малая Грузинская, д. 25, стр.2, кв. 14, к/н 77:01:0004023:2805.",
        "start_price": "6397440 рубли",
        "lon": 55.767043000000001,
        "lat": 37.5723330000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29872023",
        "prop_name": "должника (собственника) Трофимова В.Н.: квартира общей площадью 39,2 кв.м по адресу: г. Москва, ул. Дыбенко, д. 44, кв. 46, к/н 77:09:0001008:6289",
        "start_price": "4505000 рубли",
        "lon": 55.8730109999999982,
        "lat": 37.4831840000000014
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30242300",
        "prop_name": "Должник Чуйко Р.В.: квартира общей площадью 113,1 кв.м. в г. Москва, ул. Островитянова, д. 4, кв. 295, к/н 77:06:0007001:10799.",
        "start_price": "20368000 рубли",
        "lon": 55.637672000000002,
        "lat": 37.5099900000000019
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30041419",
        "prop_name": "должника (собственника) Копыца   Е.В.: квартира общей площадью 38,1 кв.м по адресу: г.Москва, ул. Алтайская, д. 4, кв. 2, к/н 77:03:0002017:9276",
        "start_price": "3843360 рубли",
        "lon": 55.8202020000000019,
        "lat": 37.8162530000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29038359",
        "prop_name": "должника (собственника) Артеменко Е.В.: квартира общ.пл.48,1 кв.м. по адресу: г.Москва, Каширское ш., д.66, корп.1, кв.6 (состоящая из двух комнат: к.1 – к/н 77:05:0005005:9575, к.2 – к/н 77:05:0005005:9576)",
        "start_price": "6105583.20000000019 рубли",
        "lon": 55.6411170000000013,
        "lat": 37.6835090000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29279407",
        "prop_name": "Повторные торгиДолжник: Ефимов С.А.Квартира общей площадью 36,3 кв.м., по адресу: г. Москва, ул. Череповецкая, д. 22, кв. 63, к/н 77:02:0001017:4786.",
        "start_price": "4662250 рубли",
        "lon": 55.8982400000000013,
        "lat": 37.5706890000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30038295",
        "prop_name": "должника (собственника) Бедрицкого А.С.: квартира общей площадью квартира пл. 34,7 кв.м по адресу: г.Москва, ул. Весенняя, д. 10, кв. 53, к/н 77:09:0002018:1514",
        "start_price": "3672680 рубли",
        "lon": 55.8738949999999974,
        "lat": 37.513655
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30520905",
        "prop_name": "Повторные торги. Должник Харитонова Н.А.: квартира, общей площадью 44,6 кв.м. по адресу г. Москва, ул. Новокузьминская 4-я, д. 7, корп. 1, кв. 28, к/н 77:04:0002014:5695.",
        "start_price": "3876000 рубли",
        "lon": 55.7106819999999985,
        "lat": 37.790300000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29176084",
        "prop_name": "должника (собственника) Шайзаковой К.В.: квартира пл. 112,6 кв.м по адресу г.Москва, пр-т. Вернадского, д. 105, корп. 4,  кв. 402, к/н 77:07:0014008:3701",
        "start_price": "24000000 рубли",
        "lon": 55.6816559999999967,
        "lat": 37.5153350000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31484024",
        "prop_name": "Повторные торги\nДолжник: Мелик-Шахназарова Н.Л. \nКвартира, общей площадью 114,6 кв.м., по адресу: г. Москва, ул. Генерала Белобородова, д. 23, кв. 32, к/н 77:08:0002022:2149",
        "start_price": "19631600 рубли",
        "lon": 55.8310540000000017,
        "lat": 37.3546979999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29284156",
        "prop_name": "Повторные торги. Должник Сенчук Д.Е.: квартира, общей площадью 42,6 кв.м., по адресу: г. Москва, ул. Гришина, д. 24, корп. 1, кв. 44, к/н 77:07:0008002:12110.",
        "start_price": "4715800 рубли",
        "lon": 55.7228059999999985,
        "lat": 37.4175889999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30191358",
        "prop_name": "квартира 45,6 кв. м, г. Москва, пр-д юрловский, д. 7, кв. 224. к/н 77:02:0008007:3479 Яковлева Е.А., пор. 1261-4А",
        "start_price": "4780800 рубли",
        "lon": 55.8695310000000021,
        "lat": 37.6210489999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30191358",
        "prop_name": "квартира 109 кв. м, г. Москва, Пятницкое ш., д. 42, корп. 1, кв. 93–94, к/н 77:08:0002016:2437, с-к Шер С.Н., пор. 1269-4А",
        "start_price": "13322400 рубли",
        "lon": 55.8486550000000008,
        "lat": 37.3704999999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29552830",
        "prop_name": "Повторные торги\nДолжник: Лазуто Р.А.\nКвартира, общей площадью 74,5 кв.м., по адресу: г. Москва, ул. Профсоюзная, д. 60, кв. 369, к/н 77:06:0003012:5017.",
        "start_price": "10200000 рубли",
        "lon": 55.6495200000000025,
        "lat": 37.5325109999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28521960",
        "prop_name": "должника (собственника) Толоконской Г.М.:1/2 доля квартиры общей площадью 62,5 кв.м., по адресу: г.Москва, ул.Коломенская, д.5, кв.199, к/н 77:05:0004012:1456",
        "start_price": "4675000 рубли",
        "lon": 55.6783459999999977,
        "lat": 37.6947109999999981
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28667238",
        "prop_name": "должника (собственника) Демидова О.В.: квартира площадью 63,7 кв.м по адресу: г.Москва, Ореховый бульвар, д. 25, кв. 220, к/н 77:05:0011005:6475",
        "start_price": "194324 доллар США",
        "lon": 55.6131680000000017,
        "lat": 37.7315060000000031
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29470817",
        "prop_name": "должника (собственника) Мирошниченко В.В.: квартира пл.58,2кв.м по адресу: г.Москва, ш.Энтузиастов, д.82/2, корп.1, кв.53, к/н 77:03:0006012:8525",
        "start_price": "6225387.08000000007 рубли",
        "lon": 55.7618259999999992,
        "lat": 37.7696479999999966
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28929187",
        "prop_name": "должника (собственника) Казаковой А.В.: квартира общ.пл. 43,7 кв.м. по адресу: г.Москва, ул.Верхняя Первомайская, д.25, кв.21, к/н 77:03:0005008:5032",
        "start_price": "5210500 рубли",
        "lon": 55.7992539999999977,
        "lat": 37.7936600000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31278295",
        "prop_name": "Квартира 166,4 кв. м, адрес: г. Москва, Большой Головин переулок, д. 2, кв. 7, к/н 77:01:0001090:1911, с-к Томаш С.Ю., пор. 1378-4А",
        "start_price": "140440891.819999993 рубли",
        "lon": 55.7693879999999993,
        "lat": 37.6286399999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28649625",
        "prop_name": "должника (собственника) Швецова А.В.: квартира площадью 34,8 кв.м., по адресу: г. Москва, ул. Ростокинская, д.10, кв. 64, к/н 77:02:0019005:1865",
        "start_price": "4329560 рубли",
        "lon": 55.8343759999999989,
        "lat": 37.6619489999999999
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30288553",
        "prop_name": "должника (собственника) Глущенко А.В.: квартира общ.пл.37,3 кв.м. по адресу: г.Москва, ул.Высокая, д.15, кв.63, к/н 77:05:0004005:2219",
        "start_price": "6235596.59999999963 рубли",
        "lon": 55.6799449999999965,
        "lat": 37.656523
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29018897",
        "prop_name": "Должник Ким А.Ю. Квартира, общей площадью 33,6 кв.м. по адресу: г. Москва, ул. Кадырова, д. 8, кв. 126, к/н 77:06:0012009:6751.",
        "start_price": "4066213 рубли",
        "lon": 55.5364509999999996,
        "lat": 37.5092619999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29596235",
        "prop_name": "должника (собственника) Казаковой А.В.: квартира общ.пл.43,7 кв.м. по адресу: г.Москва, ул.Верхняя Первомайская, д.25, кв.21, к/н 77:03:0005008:5032",
        "start_price": "4428925 рубли",
        "lon": 55.7992539999999977,
        "lat": 37.7936600000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30942343",
        "prop_name": "Должник Епишкин С.Н.: квартира общей площадью 31,9 кв.м. в г. Москва, ул. Смольная, д. 39, кв. 4, к/н 77:09:0001009:3646.",
        "start_price": "2742400 рубли",
        "lon": 55.859332000000002,
        "lat": 37.4840650000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30404921",
        "prop_name": "Повторные торги\nДолжник: Гвелесиани М.А. \nКвартира, общей площадью 52,9 кв.м., по адресу: г. Москва, ул. Обручева, д. 18, кв. 34, к/н 77:06:0006001:3248",
        "start_price": "8024000 рубли",
        "lon": 55.6563009999999991,
        "lat": 37.5360680000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28755534",
        "prop_name": "Квартира, общей площадью 74,7 кв.м. по адресу: г. Москва, Гурьевский пр-д, д. 11, корп. 1, кв. 244, к/н 77:05:0011009:6892.",
        "start_price": "6110650 рубли",
        "lon": 55.6055410000000023,
        "lat": 37.7511160000000032
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29699933",
        "prop_name": "Первичные торги\nДолжник: Неудачина М.В.\nКвартира, общей площадью 32,2 кв.м., по адресу: г. Москва, ул. Героев Панфиловцев, д. 12, корп. 1, кв. 210, к/н 77:08:0003003:3266",
        "start_price": "5365600 рубли",
        "lon": 55.8583619999999996,
        "lat": 37.4226019999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30208320",
        "prop_name": "Квартира-1/3 доли в праве общей долевой собственности,  кадастровый (или условный) номер объекта: 77:09:0001016:5440, назначение объекта: жилое, площадь объекта: 45.4 кв.м., вид права: общая долевая собственность. Собственник (правообладатель) имущества: Веревкин М.М.",
        "start_price": "1507050 рубли",
        "lon": 55.8445919999999987,
        "lat": 37.5029559999999975
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28420228",
        "prop_name": "должника (собственника) Яндиева Р.Ш.: квартира площадью 162,3кв.м., по адресу: г. Москва, ул. Крылатские Холмы, д.33, корп.1, кв.161, к/н 77:07:0001002:4634",
        "start_price": "58655869.6000000015 рубли",
        "lon": 55.755747999999997,
        "lat": 37.4149120000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30267483",
        "prop_name": "Повторные торги\nДолжник: Козловская Д.А.Квартира, общей площадью 67,3 кв.м., по адресу: г. Москва, ул. Профсоюзная, д. 43, корп. 2, кв. 687, к/н 77:06:0004007:2607.",
        "start_price": "14585444.4399999995 рубли",
        "lon": 55.6495200000000025,
        "lat": 37.5325109999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31280825",
        "prop_name": "Квартира 30,4 кв. м, адрес: г. Москва, ул. Онежская, д. 38, корп. 3, кв. 339, к/н 77:09:0001014:2398, с-к Семиряко А.В., пор. 1539-4А",
        "start_price": "3566000 рубли",
        "lon": 55.8542839999999998,
        "lat": 37.5159009999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28778169",
        "prop_name": "Квартира, общей площадью 42,0 кв.м., по адресу: г. Москва, Ясный пр-д, д. 20, корп. 2, кв. 194, к/н 77:02:0006002:3212. Должник(и): Чеканов И.А., Чеканова С.И., Чеканов А.К.",
        "start_price": "4222120 рубли",
        "lon": 55.8738699999999966,
        "lat": 37.6256119999999967
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29871948",
        "prop_name": "должника (собственника) Хамидулиной Л.О.: квартира общей площадью 62,2 кв.м по адресу: г. Москва, ул. Коломенская, д. 9, кв. 72, к/н 77:05:0004012:2230",
        "start_price": "7705760 рубли",
        "lon": 55.6783459999999977,
        "lat": 37.6947109999999981
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28778105",
        "prop_name": "Квартира, общей площадью 93,1 кв.м.,по адресу: г. Москва, ул. Абрамцевская, д. 4, корп. 2, кв. 26, к/н 77:02:0001016:4907. Должник: Минеев С.М.",
        "start_price": "11190760 рубли",
        "lon": 55.9000569999999968,
        "lat": 37.5739050000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28757655",
        "prop_name": "Квартира, общей площадью 28,0 кв.м. по адресу: г. Москва, Мичуринский проспект, д. 10, корп. 1, кв. 36, к/н 77:07:0013003:3081.",
        "start_price": "4269040 рубли",
        "lon": 55.6930789999999973,
        "lat": 37.4905419999999978
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30521645",
        "prop_name": "Повторные торги. Должник Шахов Г.Н.: квартира, общей площадью 45 кв.м., по адресу г. Москва, ул. Кировоградская, д. 9, корп. 3, кв. 130, к/н 77:05:0006004:11662.",
        "start_price": "8585323 рубли",
        "lon": 55.6144549999999995,
        "lat": 37.6050230000000028
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29426071",
        "prop_name": "Должник Хашаков А.И.: квартира, общей площадью 35,1 кв.м. по адресу г. Москва, ул. Перовская, д. 4, корп. 1, кв. 32, к/н 77:03:0006002:3915.",
        "start_price": "4024000 рубли",
        "lon": 55.7458079999999967,
        "lat": 37.784317999999999
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29020452",
        "prop_name": "Должник: Сусарова Д.С.\nКвартира, общей площадью 63,0 кв.м., по адресу: г. Москва, ш. Каширское, д. 116, корп. 1, кв. 55, к/н 77:05:0011003:8266.",
        "start_price": "7752800 рубли",
        "lon": 55.6411170000000013,
        "lat": 37.6835090000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30546581",
        "prop_name": "Повторные торги\nДолжник: Шлыкова Н.Н. 1/2 доля в праве собственности на квартиру, общей площадью 37 кв.м., по адресу: г. Москва, ул. Балаклавский пр-т, д. 4, корп. 1, кв. 18, к/н 77:05:0003005:2790",
        "start_price": "1617040 рубли",
        "lon": 55.6422960000000018,
        "lat": 37.5915299999999988
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30112900",
        "prop_name": "Повторные торги. Должники Жбанкова И.В., Лужецкая А.О.: квартира общей площадью 72,5 кв.м. по адресу г. Москва, ул. Ивантеевская, д. 9, кв. 6, к/н 77:03:0001013:2339",
        "start_price": "13829566.6400000006 рубли",
        "lon": 55.8176429999999968,
        "lat": 37.7243369999999985
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31355941",
        "prop_name": "Повторные торги\nДолжник: Фролова Н.В. \nКвартира, общей площадью 47,2 кв.м., по адресу: г. Москва, ул. Старый Петровско-Разумовский пр-д, д. 3, кв. 67, к/н 77:09:0004014:2620",
        "start_price": "5536560 рубли",
        "lon": 55.7999069999999975,
        "lat": 37.5592449999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29554858",
        "prop_name": "Должник: Гвелесиани М.А. \nКвартира, общей площадью 52,9 кв.м., по адресу: г. Москва, ул. Обручева, д. 18, кв. 34, к/н 77:06:0006001:3248",
        "start_price": "9440000 рубли",
        "lon": 55.6563009999999991,
        "lat": 37.5360680000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28409020",
        "prop_name": "должника (собственника) Утева С.И. Утевой О.Г.: квартира площадью 39,3кв.м., по адресу: г. Москва, Мичуринский проспект, д.13, кв.9, к/н 77:07:0013004:3181",
        "start_price": "6489240 рубли",
        "lon": 55.6930789999999973,
        "lat": 37.4905419999999978
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29684487",
        "prop_name": "Повторные торги. Должник Монастырский Н.Я.: квартира, общей площадью 63,3 кв.м., принадлежащая на праве общей долевой собственности Монастырскому Н.Я. – 1/3 доля, Монастырскому Я.Г. – 1/3 доля и Монастырской В.А. - 1/3 доля, по адресу г. Москва, ул. Ясеневая, д. 34, кв. 566, к/н 77:05:0011009:11326.",
        "start_price": "5932926.04999999981 рубли",
        "lon": 55.6029369999999972,
        "lat": 37.7295560000000023
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29684193",
        "prop_name": "Должник Жуков А.А.: квартира, общей площадью 74,2 кв.м. по адресу г. Москва, Борисовские пруды, д. 8, корп. 3, кв. 170, к/н 77:05:0012004:4432.",
        "start_price": "11698000 рубли",
        "lon": 55.6358579999999989,
        "lat": 37.738387000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29165182",
        "prop_name": "Должник: Крупянко С.С.\nКвартира, общей площадью 30,3 кв.м., по адресу: г. Москва, ш. Щёлковское, д. 53, кв. 90, к/н 77:03:0002014:6204.",
        "start_price": "2748000 рубли",
        "lon": 55.8100809999999967,
        "lat": 37.7957170000000033
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28514071",
        "prop_name": "Квартира общей площадью 36,3 кв.м., по адресу: г. Москва, ул. Череповецкая, д. 22, кв. 63, к/н 77:02:0001017:4786. Должник: Ефимов С.А.",
        "start_price": "5485000 рубли",
        "lon": 55.8982400000000013,
        "lat": 37.5706890000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31404477",
        "prop_name": "Квартира 69.2 кв.м, адрес: г. Москва, ул. Соколово- Мещерская, д. 31 кв 14, к/н 77:08:0001005:2047, с-к ОАО «Инвест-Эстейт», пор. 1306-4А.",
        "start_price": "10222100 рубли",
        "lon": 55.8994720000000029,
        "lat": 37.3874599999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31090938",
        "prop_name": "Должник Гурецкий И.В.: квартира, общей площадью 38,5 кв.м. в г. Москва, Заревый пр-д, д. 19, кв. 76, к/н 77:02:0004003:1298.",
        "start_price": "4790400 рубли",
        "lon": 55.8849689999999981,
        "lat": 37.6570350000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30653865",
        "prop_name": "Должник Баранова Т.С.: квартира общей площадью 44,1 кв.м. в г. Москва, Дмитровское шоссе, д. 45, корп 1, кв. 139, к/н 77:09:0003008:4242.",
        "start_price": "4548000 рубли",
        "lon": 55.8759299999999968,
        "lat": 37.5477190000000007
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28786766",
        "prop_name": "должника (собственника) Енина В.В.: квартира общ.пл.53,2кв.м., по адресу: г.Москва, ул. Речников, д. 14, корп.2, кв. 103, к/н 77:05:0004010:5434",
        "start_price": "7590500 рубли",
        "lon": 55.680965999999998,
        "lat": 37.6910809999999969
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29703173",
        "prop_name": "Первичные торги\nДолжник: Худойдодова С.Н.\nКвартира, общей площадью 37,3 кв.м., по адресу: г. Москва, ул. Сиреневый бульвар, д. 37/40, кв.2, к/н 77:03:0005011:1501",
        "start_price": "4254400 рубли",
        "lon": 55.8025680000000008,
        "lat": 37.7943879999999979
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29286892",
        "prop_name": "Должник Розен Г.А.: квартира общей площадью 51,1 кв.м. по адресу г. Москва, ул. 15-я Парковая, д. 18, корп. 2, кв. 195, к/н 77:03:0005021:6307.",
        "start_price": "7961829.59999999963 рубли",
        "lon": 55.8003119999999981,
        "lat": 37.8188490000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31611462",
        "prop_name": "Должник Волков Р.Я.: квартира, общей площадью 57,8 кв.м. в г. Москва, ул. Свободы, д. 81, корп. 2, кв. 51, к/н 77:08:0003005:6256.",
        "start_price": "6240000 рубли",
        "lon": 55.8533550000000005,
        "lat": 37.4515999999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28785518",
        "prop_name": "должника (собственника) Шайдуллина Э.А.: квартира общ.пл.72,7кв.м., по адресу: г.Москва, пер. Уваровский, д.10, кв.1А, к/н 77:08:0002020:2340",
        "start_price": "5721520 рубли",
        "lon": 55.8303969999999978,
        "lat": 37.3503510000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28920777",
        "prop_name": "должника (собственника) Коптевой И.Э.: квартира пл. 46,5 кв.м. по адресу: г.Москва, ул. Мастеровая, д.17/1, корп.2, кв.3, к/н 77:03:0006002:2350",
        "start_price": "5620200 рубли",
        "lon": 55.7451229999999995,
        "lat": 37.7563889999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28807170",
        "prop_name": "должника (собственника) Иванова В.А.: 1/4 доля в собственности на квартиру общ.пл.45,1 кв.м, по адресу: г.Москва, ул.Свободы, д.83, корп.1, кв.7, к/н 77:08:0003005:7164",
        "start_price": "856200 рубли",
        "lon": 55.8533550000000005,
        "lat": 37.4515999999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29020439",
        "prop_name": "Должник: Шепилов П.Л.\nКвартира, общей площадью 37,6 кв.м., по адресу: г. Москва, ул. Бескудниковский бульвар, д. 22, кв. 68, к/н 77:09:0002027:7610",
        "start_price": "4506400 рубли",
        "lon": 55.8738340000000022,
        "lat": 37.5478359999999967
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29872191",
        "prop_name": "должника (собственника) Акулова А.В.: квартира пл. 42,7 кв.м по адресу г.Москва, 9-я Северная Линия д. 11,кв. 100, к/н 77:02:0025009:1973",
        "start_price": "4414081.95999999996 рубли",
        "lon": 55.9332670000000007,
        "lat": 37.5517619999999965
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29338480",
        "prop_name": "должника (собственников) Маркачевой Ю.В., Грязева В.А.: квартира общей площадью 73 кв.м по адресу: г.Москва, Ленинский пр-т, д.99, кв.159, к/н 77:06:0003013:1895",
        "start_price": "15510674.1999999993 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29697516",
        "prop_name": "Повторные торги \nДолжник: Елисеева М.Л.\nКвартира, общей площадью 50,4 кв.м. по адресу г. Москва, ул. Липецкая, д. 10, корп. 1, кв. 22, к/н 77:05:0010003:12201.",
        "start_price": "4274480 рубли",
        "lon": 55.5942140000000009,
        "lat": 37.6727199999999982
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29470700",
        "prop_name": "должника (собственника)Филимонова И.С., Филимоновой И.А.: квартира общ.пл.51,1 кв.м, по адресу: г.Москва, ул.Цюрупы, д.18, корп.1, кв.269, к/н 77:06:0004005:2667.",
        "start_price": "9571000 рубли",
        "lon": 55.6673449999999974,
        "lat": 37.5723780000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31484125",
        "prop_name": "Повторные торги\nДолжник: Афанасьев И.Е.\n Квартира, общей площадью 76,7 кв.м., по адресу: г. Москва, ул. Вилиса Лациса, д. 25, корп. 1, кв. 123, к/н 77:08:0003001:7246",
        "start_price": "8364000 рубли",
        "lon": 55.862130999999998,
        "lat": 37.4198710000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29425744",
        "prop_name": "Должник Федоров Н.Н.: квартира, общей площадью 76,8 кв.м. по адресу г. Москва, ул. Металлургов, д. 19, кв. 9, к/н 77:03:0006010:5786.",
        "start_price": "5849675.20000000019 рубли",
        "lon": 55.7603369999999998,
        "lat": 37.7975860000000026
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30038323",
        "prop_name": "Квартира 31,7 кв. м, адрес: г. Москва, Карамышевская наб., д. 10, корп. 1, кв. 5 к/н\n77:08:0010012:2188, с-к Плаксина С.Е., пор. 1240-4А",
        "start_price": "4734940 рубли",
        "lon": 55.7691700000000026,
        "lat": 37.4768419999999978
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30038323",
        "prop_name": "Нежилое пом.,общ пл-дь 7430,00 кв. м., г. Москва, ул. Авиационна я, д. 66, в подвале на\n1-м и 2-м эт. зд. к/н 77:08:0009001:3705, с-к ООО «БЕТТАГРАНТ», пор. 1239-4А",
        "start_price": "1371502146.19000006 рубли",
        "lon": 55.8099899999999991,
        "lat": 37.4639600000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28790853",
        "prop_name": "должника (собственника)Филимонова И.С., Филимоновой И.А.: квартира общ.пл.51,1 кв.м, по адресу: г.Москва, ул.Цюрупы, д.18, корп.1, кв.269, к/н 77:06:0004005:2667",
        "start_price": "11260000 рубли",
        "lon": 55.6673449999999974,
        "lat": 37.5723780000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30940718",
        "prop_name": "Повторные торги. Должник Денисенкова Е.В.: квартира общей площадью 47,8 кв.м. в г. Москва, ул. Гришина, д. 9, кв. 42, к/н 77:07:0008002:10188.",
        "start_price": "5922120 рубли",
        "lon": 55.7228059999999985,
        "lat": 37.4175889999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28505974",
        "prop_name": "Комната, общей площадью 12,2 кв.м. по адресу: г. Москва, ул. 1-я Курьяновская, д. 47, кв. 9, комн. 2, к/н 77:04:0003013:4007.",
        "start_price": "1491000 рубли",
        "lon": 55.6546909999999997,
        "lat": 37.7031100000000023
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29038215",
        "prop_name": "должника (собственника) Замолоцких В.И.: 1/2 доля в праве на квартиру площадью 74,8кв.м., по адресу: г. Москва, Нагатинская наб., д. 40/1, кв.77, к/н 77:05:0004009:2729",
        "start_price": "4935950 рубли",
        "lon": 55.6850409999999982,
        "lat": 37.6613919999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28409245",
        "prop_name": "должника (собственника) Умаровой И.Г. Магомедова С.И.: квартира площадью 82кв.м., по адресу: г. Москва, ул.Новопесчаная, д.23, корп.7, кв.6, к/н 77:09:0005003:5117",
        "start_price": "513910 доллар США",
        "lon": 55.7974680000000021,
        "lat": 37.5133679999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29471944",
        "prop_name": "должника (собственника) Агаева Ш.А. оглы: 1/2 доля квартиры общей площадью 144,7кв.м., по адресу: г.Москва, пр-кт Мира, д.167, кв.48, к/н 77:02:0018008:1234",
        "start_price": "9974750 рубли",
        "lon": 55.8128030000000024,
        "lat": 37.6379820000000009
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29699626",
        "prop_name": "Первичные торги\nДолжник: Костенко С.Н.\nКвартира, общей площадью 37,9 кв.м., по адресу: г. Москва, ул. Генерала Белобородова, д. 14, корп. 2, кв. 70, к/н 77:08:0002020:4342.",
        "start_price": "4751820.79999999981 рубли",
        "lon": 55.8310540000000017,
        "lat": 37.3546979999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30654623",
        "prop_name": "Должник Вахромеева М.Н.: комната № 3 общей площадью 15,4 кв.м. в г. Москва, ул. Ивантеевская, д. 17, корп. 1, кв. 4, к. 3, к/н 77:03:0001013:2913.",
        "start_price": "2024000 рубли",
        "lon": 55.8176429999999968,
        "lat": 37.7243369999999985
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28786188",
        "prop_name": "должника (собственника) Рузановой М.В.: квартира общ.пл.53,4кв.м., по адресу: г.Москва, ул. Южнобутовская, д.85, кв.16, к/н 77:06:0012008:5326",
        "start_price": "5148960 рубли",
        "lon": 55.5361959999999968,
        "lat": 37.5290159999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29968269",
        "prop_name": "Повторные торги. Должник Исаева Е.М.: Квартира общей площадью 50,1 кв.м. по адресу: г. Москва, ул. Толбухина, д. 11, корп. 2, кв. 130, к/н 77:07:0008001:4553.",
        "start_price": "11900000 рубли",
        "lon": 55.7201189999999968,
        "lat": 37.4012669999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30937545",
        "prop_name": "Первичные торги\nДолжник: Павлова А.А.\nКвартира, общей площадью 49,6 кв.м., по адресу: г. Москва, ул. Севанская, д. 11, кв. 25, к/н 77:05:0005008:10679",
        "start_price": "5620000 рубли",
        "lon": 55.6238850000000014,
        "lat": 37.6527230000000017
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 53,7 кв.м., адрес: г. Москва, ул. Генерала Белобородова, д.18, кв.190. К/н 77:080002020:3440, с-к Дейнекина Ю.С., пор. 1204-4А",
        "start_price": "7232230.40000000037 рубли",
        "lon": 55.8310540000000017,
        "lat": 37.3546979999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29594645",
        "prop_name": "Квартира 38,5 кв. м, адрес:\nг. Москва ул. Октябрьская, д. 33, кв. 10,\nк/н 77:02:0024029:2786, с-к Подгорный Р.А., пор.1152-4А",
        "start_price": "6971200 рубли",
        "lon": 55.7922500000000028,
        "lat": 37.613197999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31088343",
        "prop_name": "Повторные торги. Должники Асанова О.М., Асанов М.К.: квартира общей площадью 50,4 кв.м. в г. Москва, ул. Душинская, д. 14, кв. 106, к/н 77:04:0001013:1401.",
        "start_price": "131356.279999999999 доллар США",
        "lon": 55.7461470000000006,
        "lat": 37.7052120000000031
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29700666",
        "prop_name": "Первичные торги\nДолжник: Крсманович О.С.\nКвартира, общей площадью 53,2 кв.м., по адресу: г. Москва, ул. Академика Анохина, д. 9, корп. 1, кв. 305, к/н 77:07:0014007:4735",
        "start_price": "10389600 рубли",
        "lon": 55.656762999999998,
        "lat": 37.4716949999999969
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29333693",
        "prop_name": "должника (собственника) Демидова О.В.: квартира площадью 63,7 кв.м по адресу: г.Москва, Ореховый бульвар, д. 25, кв. 220, к/н 77:05:0011005:6475",
        "start_price": "165175.399999999994 доллар США",
        "lon": 55.6131680000000017,
        "lat": 37.7315060000000031
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30035172",
        "prop_name": "должника (собственника) Элишаковой Т.М.: квартира общей площадью 145,7 кв.м по адресу: г.Москва, Большой Головин пер., д.4, кв.2, к/н 77:01:0001090:1835",
        "start_price": "97640374.650000006 рубли",
        "lon": 55.7693879999999993,
        "lat": 37.6286399999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31319861",
        "prop_name": "Квартира из 4 комнат, назначение жилое, общая площадь 146,7 кв. м., кадастровый номер 77:01:0001059:2378,собственник М.Д. Балакин. Адрес местонахождения: г. Москва, р-н Арбат, ул. Композиторская, д. 17, кв. 67.",
        "start_price": "81365000 рубли",
        "lon": 55.7514370000000028,
        "lat": 37.5865360000000024
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30623279",
        "prop_name": "должника (собственника) Мостовой Л.А.: комната №4 площадью 11 кв.м по адресу: г. Москва, пер. Малый Николопесковский, д.11/2, строен.1, кв.25, к.4 , к/н 77:01:0001046:2286",
        "start_price": "3303683.10000000009 рубли",
        "lon": 55.7505299999999977,
        "lat": 37.5924460000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30521974",
        "prop_name": "Повторные торги. Должник Золотарева И.В.: квартира, общей площадью 65,4 кв.м. по адресу: г. Москва, ул. Гурьянова, д. 35, кв. 140, к/н 77:04:0003008:1320.",
        "start_price": "6204150 рубли",
        "lon": 55.6773669999999967,
        "lat": 37.7232229999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28763904",
        "prop_name": "Квартира, общей площадью 69,7 кв.м. по адресу: г. Москва, ул. Митинская, д. 12, кв. 292, к/н 77:08:0002009:2706.",
        "start_price": "125772.119999999995 доллар США",
        "lon": 55.8453700000000026,
        "lat": 37.363861
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28755907",
        "prop_name": "Квартира, общей площадью 30,2 кв.м. по адресу: г. Москва, ул. Сельскохозяйственная, д. 7/1, кв. 68, к/н 77:02:0018010:1758.",
        "start_price": "3366000 рубли",
        "lon": 55.8378790000000009,
        "lat": 37.6364459999999994
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29557736",
        "prop_name": "Должники Джавадова Г.Х., Гусейнов Ф.А.: квартира общей площадью 32,8 кв.м. по адресу г. Москва, ул. Матвеевская, д. 1, кв. 237, к/н 77:07:0012010:3812.",
        "start_price": "4256800 рубли",
        "lon": 55.7024040000000014,
        "lat": 37.4707250000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29339115",
        "prop_name": "должника (собственника) Никифоровой В.С.: квартира общей площадью 42,7 кв.м по адресу: г.Москва, Дмитровское ш., д. 52, корп. 2,  кв. 12, к/н 77:09:0003025:2935",
        "start_price": "5054400 рубли",
        "lon": 55.8759299999999968,
        "lat": 37.5477190000000007
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30525376",
        "prop_name": "Должник Григорьев А.А.: квартира общей площадью 30,5 кв.м. в г. Москва, ул. 7-я Парковая, д. 2, корп. 3, кв. 8, к/н 77:03:0005014:4547",
        "start_price": "5536000 рубли",
        "lon": 55.7975489999999965,
        "lat": 37.7938040000000015
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29843859",
        "prop_name": "Повторные торги. Должник Сагова М.С.: квартира, общей площадью 44,8 кв.м. по адресу: г. Москва, ул. Генерала Рычагова, д. 13, кв. 52, к/н 77:09:0003002:1376.",
        "start_price": "5100000 рубли",
        "lon": 55.8414929999999998,
        "lat": 37.5377480000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30026891",
        "prop_name": "должника (собственника) Мостовой Л.А.: комната №4 площадью 11 кв.м по адресу: г. Москва, пер. Малый Николопесковский, д.11/2, строен.1, кв.25, к.4 , к/н 77:01:0001046:2286",
        "start_price": "3886686 рубли",
        "lon": 55.7505299999999977,
        "lat": 37.5924460000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30562658",
        "prop_name": "Квартира 55,4 кв. м, адрес: г. Москва, Врачебный пр., д. 10, корп. 2, кв. 83,к/н 77:08:0007008:2524, с-к Бидо Н.И., пор. 1392-4А",
        "start_price": "6562400 рубли",
        "lon": 55.8136470000000031,
        "lat": 37.4574390000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30562658",
        "prop_name": "Квартира 74,4 кв. м, адрес: г. Москва, ул. Газопровод, д. 15, кв. 211, к/н 77:05:0008005:4583, с-ки Зуровский Д.М., Можина О.В., пор. 1391-4А, н/ц 9 646 763,20 руб.",
        "start_price": "9646763.19999999925 рубли",
        "lon": 55.589421999999999,
        "lat": 37.6072599999999966
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30562658",
        "prop_name": "Квартира 63,5 кв. м, адрес: г. Москва, ул. Маршала Василевского, д. 1, корп. 2, кв. 93, к/н 77:08:0009017:1340, с-ки Стась А.К., Кремчукова Н.Г., пор. 1385-4А",
        "start_price": "10052800 рубли",
        "lon": 55.8063780000000023,
        "lat": 37.4683890000000019
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28790640",
        "prop_name": "должника (собственника) Рощиной Е.И.: квартира общ.пл.34 кв.м, по адресу: г.Москва, ул.Артамонова, д.12, корп.2, кв.116, к/н 77:07:0009003:10186",
        "start_price": "5370000 рубли",
        "lon": 55.7188360000000031,
        "lat": 37.4562889999999982
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28614933",
        "prop_name": "Квартира общей площадью 34,9 кв.м.,по адресу: г. Москва, Черницынский пр-д, д. 12,кв.71, к/н 77:03:0002012:514. Должник: Масалов Д.В.",
        "start_price": "3791820.08000000007 рубли",
        "lon": 55.8207840000000033,
        "lat": 37.7892310000000009
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28513988",
        "prop_name": "Квартира, общей площадью 33,7 кв.м. по адресу г. Москва, ул. Василисы Кожиной, д. 8, к. 3, кв. 25, к/н 77:07:0005007:8652. Должник: Андреев А.А.",
        "start_price": "6382400 рубли",
        "lon": 55.7356160000000003,
        "lat": 37.4971079999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30721644",
        "prop_name": "Квартира 59,6 кв. м, адрес: г. Москва, ул. Чертановская, д. 21, корп. 3, кв. 75, к/н 77:05:0007002:7422, с-к Савельева И.А., пор. 1381-4А",
        "start_price": "8021600 рубли",
        "lon": 55.6194369999999978,
        "lat": 37.5939199999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30721644",
        "prop_name": "Квартира 72,9 кв. м, адрес: г. Москва, Ленинский проспект, д. 35, кв. 72, к/н 77:05:0001009:3491, с-к Сергеев Д.В., пор. 1434-4А",
        "start_price": "14975200 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30851579",
        "prop_name": "Квартира 36,7 кв. м, адрес: г. Москва, ул. Зои и Александра Космодемьянских, д. 29, кв. 48, к/н 77:09:0003015:4140, с-к Насырова А.Н., пор. 1440-4А",
        "start_price": "4922400 рубли",
        "lon": 55.8218109999999967,
        "lat": 37.5144639999999967
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30721644",
        "prop_name": "Квартира 57,6 кв. м, адрес: г. Москва, ул. Ватутина, д. 18, корп. 2, кв. 61, к/н 77:07:0009003:4635, с-к Шабанов Д.А., пор. 1382-4А",
        "start_price": "10132000 рубли",
        "lon": 55.721938999999999,
        "lat": 37.4565130000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31407580",
        "prop_name": "Квартира 47,0 кв.м., адрес: г. Москва, ул. Судостроительная, д. 8, к. 1, кв. 78, к/н 77:05:0004008:4636, с-к Анженевская Е.В., пор. 1594-4А.",
        "start_price": "99460.8000000000029 доллар США",
        "lon": 55.6825949999999992,
        "lat": 37.680607000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29338840",
        "prop_name": "должника (собственника) Элишаковой Т.М.: квартира общей площадью 145,7 кв.м по адресу: г.Москва, Большой Головин пер., д.4, кв.2, к/н 77:01:0001090:1835",
        "start_price": "114871029 рубли",
        "lon": 55.7693879999999993,
        "lat": 37.6286399999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28408918",
        "prop_name": "должника (собственника) Лохмаева А.В.: квартира площадью 44,6кв.м., по адресу: г. Москва, ул. Удальцова, д.6, кв. 162, к/н 77:07:0013007:9024",
        "start_price": "6067005.55999999959 рубли",
        "lon": 55.6791539999999969,
        "lat": 37.5016900000000035
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31399289",
        "prop_name": "Квартира 54,3 кв. м, адрес: г. Москва, ул. Минская, д. 1Г, корп. 2, кв. 14, 77:07:0013001:1759, с-к Новикова Т.И., пор. 1274-4А",
        "start_price": "10500000 рубли",
        "lon": 55.7274349999999998,
        "lat": 37.4942070000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31608436",
        "prop_name": "Повторные торги. Должник Милявский Д.Л.: квартира общей площадью 53 кв.м. в г. Москва, Можайский р-н, ул. Гришина, д. 2, корп. 1, кв. 252, к/н 77:07:0008002:6028.",
        "start_price": "6927500 рубли",
        "lon": 55.7228059999999985,
        "lat": 37.4175889999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28527261",
        "prop_name": "должника (собственника) Яковлева М.А.: квартира площадью 31,5 кв.м., по адресу: г. Москва, Балаклавский пр-кт, д.4, корп.4, кв. 276, к/н 77:05:0003005:3051",
        "start_price": "3481600 рубли",
        "lon": 55.6422960000000018,
        "lat": 37.5915299999999988
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28383518",
        "prop_name": "1/2 доля в праве общей долевой собственности комнат №2,3, жилой площадью 21,6 кв.м. по адресу г. Москва, ул. 7-я Лазенки, д. 6, кв. 1, к. 2,3, к/н 77:07:0015004:3000.",
        "start_price": "422240 рубли",
        "lon": 55.6575089999999975,
        "lat": 37.3508449999999996
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31391168",
        "prop_name": "Квартира 31,9 кв.м., адрес: г. Москва, Волгоградский проспект, д. 113, корпус 3, кв. 1, к/н 77:04:0002018:3137, с-к Нещеретный В.М., пор. 1588-4А",
        "start_price": "3086000 рубли",
        "lon": 55.7076440000000019,
        "lat": 37.7492739999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30445365",
        "prop_name": "Квартира 69,2 кв. м, адрес: г. Москва, ул. Соколово-Мещерская, д. 31, кв. 14, к/н 77:08:0001005:2047, с-к ОАО «Инвест-Эстейт», пор. 1306-4А",
        "start_price": "14190680 рубли",
        "lon": 55.8994720000000029,
        "lat": 37.3874599999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28408477",
        "prop_name": "должника (собственника) Кремкова И.В.: квартира площадью 136,6кв.м., по адресу: г. Москва, ул. Троицкая, д.8, кв.9, к/н 77:01:0003044:3479",
        "start_price": "55227560 рубли",
        "lon": 55.7748970000000028,
        "lat": 37.6250459999999975
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30546648",
        "prop_name": "Первичные торги\nДолжник: Белоусова А.Н.\nЖилое помещение, общей площадью 19,4 кв.м., по адресу: г. Москва, ул. Константинова, д. 22, кв. 15, ком. 2, к/н 77:02:0023005:3335",
        "start_price": "1497600 рубли",
        "lon": 55.8169449999999969,
        "lat": 37.6558860000000024
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29684234",
        "prop_name": "Должник Ким О.Э.: квартира, общей площадью 289,3 кв.м. по адресу г. Москва, Покровский б-р, д. 14/6, кв. 23, к/н 77:01:0001023:1496.",
        "start_price": "72224219.200000003 рубли",
        "lon": 55.7565889999999982,
        "lat": 37.6475220000000022
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30442368",
        "prop_name": "Квартира 53,7 кв. м, адрес: г. Москва, ул. Генерала Белобородова, д. 18, кв. 190, к/н 77:08:0002020:3440, с-к Дейнекина Ю.С., пор. 1204-4А",
        "start_price": "6147395.83999999985 рубли",
        "lon": 55.8310540000000017,
        "lat": 37.3546979999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30442368",
        "prop_name": "Квартира 66,7 кв. м, адрес: г. Москва, ул. Довженко, д. 12, корп. 3, кв. 155, к/н 77:07:0006004:14120, с-ки Бовт И.О., Бовт О.А, пор. 1208-4А",
        "start_price": "21152188.0399999991 рубли",
        "lon": 55.7204490000000021,
        "lat": 37.5127390000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30657992",
        "prop_name": "Первичные торги\nДолжник: Мелик-Шахназарова Н.Л. \nКвартира, общей площадью 114,6 кв.м., по адресу: г. Москва, ул. Генерала Белобородова, д. 23, кв. 32, к/н 77:08:0002022:2149",
        "start_price": "23096000 рубли",
        "lon": 55.8310540000000017,
        "lat": 37.3546979999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30113661",
        "prop_name": "Повторные торги. Должник Розен Г.А.: квартира общей площадью 51,1 кв.м. по адресу г. Москва, ул. 15-я Парковая, д. 18, корп. 2, кв. 195, к/н 77:03:0005021:6307.",
        "start_price": "6767555.16000000015 рубли",
        "lon": 55.8003119999999981,
        "lat": 37.8188490000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29147375",
        "prop_name": "Шамба М.В.: квартира общей площадью 34,8 кв.м., по адресу г. Москва, ул. Малая Грузинская, д. 25, стр. 2, кв. 78, к/н 77:01:0004023:2869.",
        "start_price": "6975000 рубли",
        "lon": 55.767043000000001,
        "lat": 37.5723330000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31223565",
        "prop_name": "Повторные торги\nДолжники: Бекирова Е.Г. Кызы, Бекиров Н.Б. Оглы. Квартира общей площадью 44,9 кв.м, по адресу: г. Москва, ул. Азовская, д. 37, корп. 1, кв. 50, к/н",
        "start_price": "162290.5 доллар США",
        "lon": 55.653182000000001,
        "lat": 37.5983659999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29887714",
        "prop_name": "Квартира 63,2 кв. м, адрес:\nг. Москва, 4-й Новомихалковскийпр-зд ,\nд. 15, кв. 18, к/н 77:09:0003002:3163, с-к Аксенов\nС.И., пор. 1218-4А",
        "start_price": "6733000 рубли",
        "lon": 55.838358999999997,
        "lat": 37.5368500000000012
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28891389",
        "prop_name": "Квартира, общей площадью 76,2 кв.м. по адресу г. Москва, ул. Борисовские Пруды, д. 21, корп. 1, кв. 171, к/н 77:05:0011010:6445.",
        "start_price": "11744800 рубли",
        "lon": 55.6358579999999989,
        "lat": 37.738387000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30028819",
        "prop_name": "должников (собственника) Суханова Д., Хановой Д.В.(Сухановой Н.В.): комната №3 площадью 16,8кв.м по адресу: г. Москва, ул.Дмитрия Ульянова, д.12, корп.2, кв.18, к.3, к/н 77:06:0003003:3847",
        "start_price": "2702851.20000000019 рубли",
        "lon": 55.6871119999999991,
        "lat": 37.5761869999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30313739",
        "prop_name": "Квартира 121 кв. м, г. Москва, пр-т Андропова, д. 42, корп. 1, кв. 8, к/н 77:05:0004006:7557, пор. 1307, с-к Плеханова И.В.",
        "start_price": "39009600 рубли",
        "lon": 55.6765899999999974,
        "lat": 37.6630449999999968
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28409194",
        "prop_name": "должника (собственника) Коваленко А.В.: квартира площадью 72,6кв.м., по адресу: г. Москва, ул. Братеевская, д.21, кв.62, к/н 77:05:0012003:20032",
        "start_price": "7642520 рубли",
        "lon": 55.634841999999999,
        "lat": 37.764088000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30031536",
        "prop_name": "должника (собственника) Оголенко Г.Ф.: квартира обшей площадью 39,9 кв.м по адресу: г. Москва, ул. Пятницкая, д. 39, кв. 76, к/н 77:01:0002011:1424",
        "start_price": "8925000 рубли",
        "lon": 55.7378259999999983,
        "lat": 37.6281719999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29871844",
        "prop_name": "должника (собственника) Шайзаковой К.В.: квартира пл. 112,6 кв.м по адресу г.Москва, пр-т. Вернадского, д. 105, корп. 4,  кв. 402, к/н 77:07:0014008:3701",
        "start_price": "20400000 рубли",
        "lon": 55.6816559999999967,
        "lat": 37.5153350000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30546704",
        "prop_name": "Первичные торги\nДолжник: Дингес Н.А.\n1/4 доли в праве собственности на квартиру, общей площадью 62 кв.м., по адресу: г. Москва, 2-й Раушский пер., д. 3, кв.15, к/н 77:01:0002022:2973",
        "start_price": "2500000 рубли",
        "lon": 55.7469170000000034,
        "lat": 37.6345329999999976
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30624283",
        "prop_name": "должников (собственника) Суханова Д., Хановой Д.В.(Сухановой Н.В.): комната №3 площадью 16,8кв.м по адресу: г. Москва, ул.Дмитрия Ульянова, д.12, корп.2, кв.18, к.3, к/н 77:06:0003003:3847",
        "start_price": "2297423.52000000002 рубли",
        "lon": 55.6871119999999991,
        "lat": 37.5761869999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28890641",
        "prop_name": "Квартира, общей площадью 105,4 кв.м. по адресу: г. Москва, Пушкарёв пер., д. 16, кв. 8, к/н 77:01:0001090:1962.",
        "start_price": "79952091 рубли",
        "lon": 55.768886000000002,
        "lat": 37.6284240000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29684423",
        "prop_name": "Должник Шахов Г.Н.: квартира, общей площадью 45 кв.м., по адресу г. Москва, ул. Кировоградская, д. 9, корп. 3, кв. 130, к/н 77:05:0006004:11662.",
        "start_price": "10100380 рубли",
        "lon": 55.6144549999999995,
        "lat": 37.6050230000000028
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30237553",
        "prop_name": "Повторные торги. Должник Хашаков А.И.: квартира, общей площадью 35,1 кв.м. по адресу г. Москва, ул. Перовская, д. 4, корп. 1, кв. 32, к/н 77:03:0006002:3915.",
        "start_price": "3420400 рубли",
        "lon": 55.7458079999999967,
        "lat": 37.784317999999999
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30546694",
        "prop_name": "Первичные торги\nДолжник: Пимениди К.С.\nКвартира, общей площадью 40 кв.м., по адресу: г. Москва, ул. Раевского, д. 3, кв. 137, к/н 77:07:0007002:7433",
        "start_price": "8806464 рубли",
        "lon": 55.7451440000000034,
        "lat": 37.5525880000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29018764",
        "prop_name": "Должник: Мерзликин А.Д.\nКомната, общей площадью 17,9 кв.м., по адресу: г. Москва, Борисовские пруды, д. 46, корп. 2, кв. 408, к. 1, к/н 77:05:0012003:23255.",
        "start_price": "2638316.79999999981 рубли",
        "lon": 55.6358579999999989,
        "lat": 37.738387000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29849329",
        "prop_name": "Повторные торги\nДолжник: Муров В.Л. \nКвартира, общей площадью 211,7 кв.м., по адресу: г. Москва, ул. Садовая-Черногрязская, д. 3Б, стр. 1, кв. 7, к/н 77:01:0003008:3448.",
        "start_price": "49436733.0399999991 рубли",
        "lon": 55.7665870000000012,
        "lat": 37.6524089999999987
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29147153",
        "prop_name": "Исаева Е.М.: Квартира общей площадью 50,1 кв.м. по адресу: г. Москва, ул. Толбухина, д. 11, корп. 2, кв. 130, к/н 77:07:0008001:4553.",
        "start_price": "14000000 рубли",
        "lon": 55.7201189999999968,
        "lat": 37.4012669999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30993036",
        "prop_name": "Квартира 43,2 кв. м, адрес: г. Москва, ул. Алтайская, д. 27, кв. 131, к/н 77:03:00020 19:1450, с-к Шаврина А.К., пор. 1485-4А",
        "start_price": "4763952 рубли",
        "lon": 55.8202020000000019,
        "lat": 37.8162530000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30993036",
        "prop_name": "Квартира 60,1 кв. м, адрес: г. Москва, ул. Болотниковская, д. 31, корп. 1, кв. 28, к/н 77:06:0005010:4410, совместная собственность, с-ки Краснова О.А., Краснов В.А., пор. 1487-4А",
        "start_price": "8604000 рубли",
        "lon": 55.6596979999999988,
        "lat": 37.5907219999999995
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29018733",
        "prop_name": "Должник: Акопян Э.Б.\nКвартира, общей площадью 51,8 кв.м., по адресу: г. Москва, ул. Теплый стан, д. 11, корп. 1, кв. 84, к/н 77:06:0007005:8963.",
        "start_price": "6842134.40000000037 рубли",
        "lon": 55.6241950000000003,
        "lat": 37.4926260000000013
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29744490",
        "prop_name": "должника (собственника) Артеменко Е.В.: квартира общ.пл.48,1 кв.м. по адресу: г.Москва, Каширское ш., д.66, корп.1, кв.6 (состоящая из двух комнат: к.1 – к/н 77:05:0005005:9575, к.2 – к/н 77:05:0005005:9576).",
        "start_price": "5189745.71999999974 рубли",
        "lon": 55.6411170000000013,
        "lat": 37.6835090000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29019247",
        "prop_name": "Должник Беляева Н.Ю.: квартира, общей площадью 32,3 кв.м. по адресу: г. Москва, ул. Миклухо-Маклая, д. 57, корп. 2, кв. 22, к/н 77:06:0008004:3243.",
        "start_price": "5702272.21999999974 рубли",
        "lon": 55.6456129999999973,
        "lat": 37.5189909999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28666960",
        "prop_name": "должника (собственника) Никитиной Е.В.: квартира пл.31,9кв.м., по адресу: г. Москва, ул.Жебрунова, д.1, кв. 82, к/н 77:03:0003006:1578",
        "start_price": "5990800 рубли",
        "lon": 55.7845409999999973,
        "lat": 37.6820889999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31394225",
        "prop_name": "о возобновлении торгов по имуществу должника: Новиковой Т.И., Поручение на реализацию № 1274-4А от 15.08.2018 г.: Квартира общей площадью 54,3 кв.м., адрес: г. Москва, ул. Минская, д. 1Г, корп. 2, кв. 14, к/н 77:07:0013001:1759.",
        "start_price": "10500000 рубли",
        "lon": 55.7274349999999998,
        "lat": 37.4942070000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29976934",
        "prop_name": "Должник Ходжаметова Л.Н.: квартира общей площадью 76 кв.м. в г. Москва, ул. Автозаводская, д. 9/1, кв. 80, к/н 77:05:002003:2088",
        "start_price": "12092360 рубли",
        "lon": 55.7040930000000003,
        "lat": 37.6516900000000021
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29341219",
        "prop_name": "должника (собственника) Макаренкова А.М.: квартира общей площадью 38,7 кв.м по адресу: г.Москва, ул.Большая Набережная, д.5, кв.222, к/н 77:08:0006011:1477",
        "start_price": "5766400 рубли",
        "lon": 55.8305379999999971,
        "lat": 37.4589209999999966
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30798455",
        "prop_name": "Повторные торги. Должник Шубников П.Л.: квартира общей площадью 39,6 кв.м. в г. Москва, ул. Якорная, д. 4, корп. 1, кв. 98, к/н 77:05:0004009:10278.",
        "start_price": "4454000 рубли",
        "lon": 55.6848939999999999,
        "lat": 37.6844699999999975
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30267803",
        "prop_name": "Повторные торги\nДолжник: Акопян Э.Б. \nКвартира, общей площадью 51,8 кв.м., по адресу: г. Москва, ул. Теплый стан, д. 11, корп. 1, кв. 84, к/н 77:06:0007005:8963.",
        "start_price": "5815814.24000000022 рубли",
        "lon": 55.6241950000000003,
        "lat": 37.4926260000000013
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30546512",
        "prop_name": "Повторные торги\nДолжник: Крсманович О.С. \nКвартира, общей площадью 53,2 кв.м., по адресу: г. Москва, ул. Академика Анохина, д. 9, корп. 1, кв. 305, к/н 77:07:0014007:4735",
        "start_price": "8831160 рубли",
        "lon": 55.656762999999998,
        "lat": 37.4716949999999969
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29165267",
        "prop_name": "Должник: Алленых А.С., Алленых С.В.\nКвартира, общей площадью 58,3 кв.м., по адресу: г. Москва, ул. Нарвская, д. 1А, корп. 2, кв. 4, к/н 77:09:0001023:1959",
        "start_price": "12519000 рубли",
        "lon": 55.8373130000000018,
        "lat": 37.5047169999999994
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28527003",
        "prop_name": "должника (собственника) Ковалева Д.С.: квартира площадью 51,3 кв.м., по адресу: Москва, ул. Чертановская, д.21, корп.2, кв. 184, к/н 77:05:0007002:7219",
        "start_price": "4755240 рубли",
        "lon": 55.6194369999999978,
        "lat": 37.5939199999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31229188",
        "prop_name": "Должник Соловьев Д.А.: доля в праве собственности (доля в праве 5/6 на квартиру общей площадью 55,9 кв.м. в г. Москва, Гурьевский пр-д, д. 35/58, кв. 466, к/н 77:05:0011009:3546.",
        "start_price": "4650000 рубли",
        "lon": 55.6055410000000023,
        "lat": 37.7511160000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30134970",
        "prop_name": "Должник Карпенко Е.И.: квартира общей площадью 72,5 кв.м. в г. Москва, Открытое шоссе, д. 26, корп. 10, кв. 122, к/н 77:03:0002004:6959.",
        "start_price": "7835392.79999999981 рубли",
        "lon": 55.8186600000000013,
        "lat": 37.7460129999999978
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29148467",
        "prop_name": "Баврина Н.В.: 2/3 доли в праве общей долевой собственности, принадлежащих Бавриной Н.В. в квартире общей площадью 49 кв.м. по адресу: г. Москва, ул. Медынская, д. 12, корп. 2, кв. 21, к/н 77:05:0009003:12974.",
        "start_price": "1957687.89999999991 рубли",
        "lon": 55.5853060000000028,
        "lat": 37.6465069999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29944402",
        "prop_name": "Повторные торги\nДолжник: Швачко И.Р. 1/2 доля квартиры, общей площадью 37,7 кв.м., принадлежащая на праве долевой собственности Швачко И.Р. и Скрылеву Г.Е., по адресу: г. Москва, ул. Кравченко, д. 9, кв. 29, к/н 77:07:0013007:4711",
        "start_price": "2399040 рубли",
        "lon": 55.676712000000002,
        "lat": 37.5176980000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29177081",
        "prop_name": "должника (собственника) Акулова А.В.: квартира пл. 42,7 кв.м по адресу г.Москва, 9-я Северная Линия д. 11,кв. 100, к/н 77:02:0025009:1973",
        "start_price": "5193037.59999999963 рубли",
        "lon": 55.9332670000000007,
        "lat": 37.5517619999999965
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30546545",
        "prop_name": "Повторные торги\nДолжник: Худойдодова С.Н. Квартира, общей площадью 37,3 кв.м., по адресу: г. Москва, ул. Сиреневый бульвар, д. 37/40, кв.2, к/н 77:03:0005011:1501",
        "start_price": "3616240 рубли",
        "lon": 55.8025680000000008,
        "lat": 37.7943879999999979
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30521272",
        "prop_name": "Повторные торги. Должник Ким О.Э.: квартира, общей площадью 289,3 кв.м. по адресу г. Москва, Покровский б-р, д. 14/6, кв. 23, к/н 77:01:0001023:1496.",
        "start_price": "61390586.3200000003 рубли",
        "lon": 55.7565889999999982,
        "lat": 37.6475220000000022
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29018958",
        "prop_name": "Должник Николаева О.А. Квартира, общей площадью 76,9 кв.м. по адресу: г. Москва, ул. 2-ая Фрунзенская, д. 9, кв. 4, к/н 77:01:0005018:4805",
        "start_price": "15215680 рубли",
        "lon": 55.7230599999999967,
        "lat": 37.5821880000000021
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30657683",
        "prop_name": "Первичные торгиДолжник: Ермаков Г.Ю. Квартира, общей площадью 52,1 кв.м., по адресу: г. Москва, ул. Дубнинская, д. 28, корп. 2, кв. 164, к/н 77:09:0002028:9198",
        "start_price": "6646000 рубли",
        "lon": 55.8765709999999984,
        "lat": 37.5576280000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30134821",
        "prop_name": "Должник Денисенкова Е.В.: квартира общей площадью 47,8 кв.м. в г. Москва, ул. Гришина, д. 9, кв. 42, к/н 77:07:0008002:10188.",
        "start_price": "6967200 рубли",
        "lon": 55.7228059999999985,
        "lat": 37.4175889999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29175598",
        "prop_name": "должника (собственника) Зражевской О.В.: 1/4 доля в праве общей долевой собственности квартиры площадью 293,6кв.м, по адресу: г. Москва, ул. Усачёва, д.19А, корп.1, кв. 75, к/н 77:01:0005010:2038",
        "start_price": "23737100 рубли",
        "lon": 55.726785999999997,
        "lat": 37.5685239999999965
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30939930",
        "prop_name": "Повторные торги. Должник Гарунов В.Н.: квартира общей площадью 40,6 кв.м. в г. Москва, 3-й Сетуньский пр-д, д. 3, кв. 206, к/н 77:07:0006003:2325.",
        "start_price": "4784650 рубли",
        "lon": 55.7324890000000011,
        "lat": 37.5357449999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29020421",
        "prop_name": "Должник: Муров В.Л.\nКвартира, общей площадью 211,7 кв.м., по адресу: г. Москва, ул. Садовая-Черногрязская, д. 3Б, стр. 1, кв. 7, к/н 77:01:0003008:3448.",
        "start_price": "58160862.3999999985 рубли",
        "lon": 55.7665870000000012,
        "lat": 37.6524089999999987
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30440705",
        "prop_name": "Квартира 48,4 кв. м, адрес: г. Москва, ул. Планерная, д. 18, корп. 1, кв. 5, к/н 77:08:0003005:4028, с-к Мурадян С.А., пор. 1347-4А",
        "start_price": "6515200 рубли",
        "lon": 55.8646770000000004,
        "lat": 37.4364539999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30440705",
        "prop_name": "Комната 16,4 кв. м, адрес: г. Москва, ул. Вучетича, д. 9, корп.1, кв.24, к.2, к/н 77:09:0003021:9807, с-к Мишин В.А., пор. 1340-4А",
        "start_price": "1716800 рубли",
        "lon": 55.8110369999999989,
        "lat": 37.5580500000000015
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30440705",
        "prop_name": "Квартира 66,3 кв. м, адрес: г. Москва, ул. Расплетина, д. 13, кв. 6, к/н 77:08:0011001:2392, с-к Васильев А.Н., пор. 1346-4А",
        "start_price": "8000000 рубли",
        "lon": 55.7938699999999983,
        "lat": 37.4832019999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30440705",
        "prop_name": "Квартира 63,5 кв. м, адрес: г. Москва, пр-д Сумской, д. 27. кв. 44, к/н 77:05:0006004:20835, с-к Гусейнов Т.М. Оглы, пор. 1348-4А",
        "start_price": "9464000 рубли",
        "lon": 55.6345519999999993,
        "lat": 37.6054900000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30935216",
        "prop_name": "Первичные торги\nДолжник: Гуреева Л.В.\nКвартира, общей площадью 48,8 кв.м., по адресу: г. Москва, Заревый пр-д, д. 10, кв. 291, к/н 77:02:0004004:2097",
        "start_price": "6624000 рубли",
        "lon": 55.8849689999999981,
        "lat": 37.6570350000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29341856",
        "prop_name": "должника (собственника) Суровой Т.В.: квартира общей площадью 33,5 кв.м по адресу: г.Москва, ул.Гурьянова, д.49, кв.80, к/н 77:04:0003008:7516",
        "start_price": "3536000 рубли",
        "lon": 55.6773669999999967,
        "lat": 37.7232229999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31224651",
        "prop_name": "Первичные торги\nДолжник: Сутягина Т.А. \nКвартира, общей площадью 38,3 кв.м., по адресу: г. Москва, ул. Старая Басманная, д. 9, корп. 2, кв. 6, к/н 77:01:0003008:1531",
        "start_price": "6620000 рубли",
        "lon": 55.7664959999999965,
        "lat": 37.6631890000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30241804",
        "prop_name": "Должники Федосеева О.Г., Ченцов А.Б.: Лот 1. 1/2 доля в праве на квартиру общей площадью 51,7 кв.м. в г. Москва, ул. Мелиховская, д. 4, кв. 2, к/н 77:02:0002008:1286.",
        "start_price": "2400000 рубли",
        "lon": 55.9006779999999992,
        "lat": 37.6070080000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28786599",
        "prop_name": "должника (собственника) Силантьева В.А.: квартира общ.пл.73,9кв.м., по адресу: г.Москва, ул. Маршала Катукова, д.20, корп.1, кв. 108, к/н 77:08:0008005:1173",
        "start_price": "11900000 рубли",
        "lon": 55.8075919999999996,
        "lat": 37.4078879999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 61,8 кв.м., адрес: г. Москва, ул. Соловьиная роща, д. 9, кв. 37, к/н 77:08:0001009:1523, с-к  Шадрин В.Б., пор. 1438-4А",
        "start_price": "9220473.59999999963 рубли",
        "lon": 55.8932679999999991,
        "lat": 37.3989580000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 71,6 кв.м., адрес: г. Москва, пл. Малая Сухаревская, д. 3, кв. 100, к/н 77:01:0003043:1886, с-к  Леонов А.И., пор. 1444-4А",
        "start_price": "12503840 рубли",
        "lon": 55.7730590000000035,
        "lat": 37.6301670000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31483707",
        "prop_name": "Квартира 91,8 кв.м., адрес: г. Москва, 1-й Краснокурсантский пр-д., д. 5/7, кв. 24, к/н 77:04:0001003:2354, с-к Калашникова Н.В., пор. 1490-4А",
        "start_price": "8723316.75999999978 рубли",
        "lon": 55.760787999999998,
        "lat": 37.6959680000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28785847",
        "prop_name": "должника (собственников) Роледер О.А. Казанкова Ю.А.: квартира общ.пл.99,7кв.м., по адресу: г.Москва, ул. Южнобутовская, д.69, кв.31, к/н 77:06:0012008:5254",
        "start_price": "11520370.9600000009 рубли",
        "lon": 55.5361959999999968,
        "lat": 37.5290159999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30268306",
        "prop_name": "Повторные торги\nДолжник: Ермолова В.А.\n Комната, общей площадью 13,8 кв.м., по адресу: г. Москва, ул. Белореченская, д. 19, кв. 184, ком. 3, к/н 77:04:0004015:6712.",
        "start_price": "1669272.84000000008 рубли",
        "lon": 55.6628669999999985,
        "lat": 37.7724779999999996
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30653018",
        "prop_name": "Повторные торги. Должник Беляева Н.Ю.: квартира, общей площадью 32,3 кв.м. по адресу: г. Москва, ул. Миклухо-Маклая, д. 57, корп. 2, кв. 22, к/н 77:06:0008004:3243.",
        "start_price": "4846931.38999999966 рубли",
        "lon": 55.6456129999999973,
        "lat": 37.5189909999999998
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29470265",
        "prop_name": "должника (собственника) Бокина В.И.: квартира общ.пл.80,4кв.м, по адресу: г.Москва, ул.Ленинский пр-кт, д.90, кв.302, к/н 77:06:0001007:2097",
        "start_price": "12785045.8399999999 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29684349",
        "prop_name": "Должники Звонарева Н.В., Звонарев В.М.: квартира, общей площадью 38,6 кв.м., по адресу г. Москва, ул. Курганская, д. 6, кв. 62, к/н 77:03:0002018:12759.",
        "start_price": "4080800 рубли",
        "lon": 55.8296890000000019,
        "lat": 37.8138089999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31482870",
        "prop_name": "Должник Мамедов А.К. оглы: квартира общей площадью 43,4 кв.м. в г. Москва, ул. 5-я Кожуховская, д. 10, корп. 1, кв. 109, к/н 77:05:0002006:1878",
        "start_price": "147120 доллар США",
        "lon": 55.7051429999999996,
        "lat": 37.6735370000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29176777",
        "prop_name": "должника (собственника) Аверьяновой А.В.: квартира общей площадью 63,6 кв.м по адресу г.Москва, ул. Сивашская д. 2, корп. 2,  кв. 36, к/н 77:06:0005007:2316",
        "start_price": "8779953 рубли",
        "lon": 55.661287999999999,
        "lat": 37.6018070000000009
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30520580",
        "prop_name": "Повторные торги. Должник Астахова Н.А.: квартира, общей площадью 47,3 кв.м. по адресу г. Москва, ул. Дмитрия Ульянова, д. 43, корп. 2, кв. 73, к/н 77:06:0002015:3421.",
        "start_price": "6375000 рубли",
        "lon": 55.6871119999999991,
        "lat": 37.5761869999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28670203",
        "prop_name": "должника (собственника) Демидова О.В.: квартира площадью 63,7 кв.м по адресу: г.Москва, Ореховый бульвар, д. 25, кв. 220, к/н 77:05:0011005:6475",
        "start_price": "194324 доллар США",
        "lon": 55.6131680000000017,
        "lat": 37.7315060000000031
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29018779",
        "prop_name": "Должник Чурилова О.В. Квартира, общей площадью 36,4 кв.м. по адресу: г. Москва, Балаклавский пр-т, д. 56, корп. 1, кв. 87, к/н 77:06:0005014:2338.",
        "start_price": "4769067.12000000011 рубли",
        "lon": 55.6422960000000018,
        "lat": 37.5915299999999988
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28539416",
        "prop_name": "должника (собственника) Регуляна И.В.: квартира общей площадью 35 кв.м., по адресу: г. Москва, Центросоюзный пер., д.4, кв. 60, к/н 77:01:0003024:2565",
        "start_price": "6735245 рубли",
        "lon": 55.7797979999999995,
        "lat": 37.6860870000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31754161",
        "prop_name": "Повторные торги\nДолжник: Павлова А.А.\nКвартира, общей площадью 49,6 кв.м., по адресу: г. Москва, ул. Севанская, д. 11, кв. 25, к/н 77:05:0005008:10679",
        "start_price": "4777000 рубли",
        "lon": 55.6238850000000014,
        "lat": 37.6527230000000017
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28514035",
        "prop_name": "Квартира, общей площадью 70,7 кв.м. по адресу г. Москва, Котельническая наб., д. 1/15, корп. Б, кв. 87, к/н 77:01:0002024:1499. Должник: Будько А.Ф.",
        "start_price": "18200000 рубли",
        "lon": 55.7441249999999968,
        "lat": 37.6435069999999996
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29175292",
        "prop_name": "должника (собственника) Регуляна И.В.: квартира общей площадью 35 кв.м., по адресу: г. Москва, Центросоюзный пер., д.4, кв. 60, к/н 77:01:0003024:2565",
        "start_price": "5724958.25 рубли",
        "lon": 55.7797979999999995,
        "lat": 37.6860870000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30653254",
        "prop_name": "Повторные торги. Должник Жуков А.А.: квартира, общей площадью 74,2 кв.м. по адресу г. Москва, Борисовские пруды, д. 8, корп. 3, кв. 170, к/н 77:05:0012004:4432.",
        "start_price": "9943300 рубли",
        "lon": 55.6358579999999989,
        "lat": 37.738387000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29165159",
        "prop_name": "Должник: Густап Н.В.\nКвартира, общей площадью 36,3 кв.м., по адресу: г. Москва, Крюковский тупик, д. 6, кв. 118, к/н 77:04:0001002:2811",
        "start_price": "4653431.20000000019 рубли",
        "lon": 55.7642979999999966,
        "lat": 37.7105389999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29176614",
        "prop_name": "должника (собственника) Трофимова В.Н.: квартира общей площадью 39,2 кв.м по адресу: г. Москва, ул. Дыбенко, д. 44, кв. 46, к/н 77:09:0001008:6289",
        "start_price": "5300000 рубли",
        "lon": 55.8730109999999982,
        "lat": 37.4831840000000014
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28419108",
        "prop_name": "должника (собственника) Ильина В.В.: квартира пл.47,6кв.м., по адресу: г.Москва, ул. Яблочкова, д. 29, кв. 16, к/н 77:02:0020002:2812",
        "start_price": "6606200 рубли",
        "lon": 55.820177000000001,
        "lat": 37.5806249999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28789987",
        "prop_name": "должника (собственника) Малышева Ю.А.: квартира общ.пл.85,2кв.м, по адресу: г.Москва, Загородное ш.,д.15,корп.1,кв.43, к/н 77:05:0001015:3940",
        "start_price": "12542000 рубли",
        "lon": 55.6953170000000028,
        "lat": 37.6102690000000024
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31349070",
        "prop_name": "Повторные торги.  Должник Вахромеева М.Н.: комната № 3 общей площадью 15,4 кв.м. в г. Москва, ул. Ивантеевская, д. 17, корп. 1, кв. 4, к. 3, к/н 77:03:0001013:2913.",
        "start_price": "1720400 рубли",
        "lon": 55.8176429999999968,
        "lat": 37.7243369999999985
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29333716",
        "prop_name": "должника (собственника) Оруджова З.М.: квартира площадью 47,1 кв.м, г.Москва, ул.Хабаровская, д.20, кв.110, к/н 77:03:0002019:5778",
        "start_price": "147129.899999999994 доллар США",
        "lon": 55.8211379999999977,
        "lat": 37.8260890000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 53,1 кв. м, адрес: г. Москва, ул. Октябрьская, д. 69, кв. 39, к/н 77:02:0024018:1242, с-ки Никитина Е.М., Никитина К.А., пор. 1263-4А",
        "start_price": "8174280 рубли",
        "lon": 55.7922500000000028,
        "lat": 37.613197999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 121кв. м, адрес: г. Москва, пр-т Андропова, д. 42, корп. 1, кв. 8, к/н 77:05:0004006:7557, с-к Плеханова И.В., пор. 1307-4А",
        "start_price": "33158160 рубли",
        "lon": 55.6765899999999974,
        "lat": 37.6630449999999968
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31005470",
        "prop_name": "Квартира 63,5 кв. м, адрес: г. Москва, пр-д Сумской, д. 27. кв. 44, к/н 77:05:0006004:20835, с-к Гусейнов Т.М. Оглы, пор. 1348-4А",
        "start_price": "8044400 рубли",
        "lon": 55.6345519999999993,
        "lat": 37.6054900000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31752008",
        "prop_name": "Должник Литвиненко В.Н.: квартира общей площадью 30 кв.м. в г. Москва, ул. Ивана Франко, д. 26, корп. 1, кв. 15, к/н 77:07:0004008:1210.",
        "start_price": "3770000 рубли",
        "lon": 55.7278200000000012,
        "lat": 37.4238509999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28789730",
        "prop_name": "должника (собственника) Бокина В.И.: квартира общ.пл.80,4кв.м, по адресу: г.Москва, ул.Ленинский пр-кт, д.90, кв.302, к/н 77:06:0001007:2097",
        "start_price": "15041230.4000000004 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30942747",
        "prop_name": "Должник Борнякова М.Г.: комната № 2 общей площадью 17,1 кв.м. в г. Москва, ул. Люблинская, д. 127/1, кв. 31, комн. 2, к/н 77:04:0000000:5416",
        "start_price": "1800000 рубли",
        "lon": 55.6802240000000026,
        "lat": 37.7382070000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28948842",
        "prop_name": "Квартира, общей площадью 108,1 кв.м., по адресу: г. Москва, ш. Рублевское, д. 26, корп. 4, кв. 1, к/н 77:07:0002001:5524. Должник: Иванова М.М.",
        "start_price": "25925000 рубли",
        "lon": 55.7469680000000025,
        "lat": 37.4179040000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30134501",
        "prop_name": "Должник Колосова Т.Я.: квартира общей площадью 60,1 кв.м. в г. Москва, ул. 16-я Парковая, д. 19, корп. 3, кв. 53, к/н 77:03:0005021:5298.",
        "start_price": "5400000 рубли",
        "lon": 55.800139999999999,
        "lat": 37.8270240000000015
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29282418",
        "prop_name": "Должник: Ермолова В.А.\nКомната, общей площадью 13,8 кв.м., по адресу: г. Москва, ул. Белореченская, д. 19, кв. 184, ком. 3, к/н 77:04:0004015:6712.",
        "start_price": "1963850.39999999991 рубли",
        "lon": 55.6628669999999985,
        "lat": 37.7724779999999996
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28788593",
        "prop_name": "должника (собственника) Нечет О.В.: квартира общ.пл.35,9кв.м., по адресу: г.Москва, ул.Вилиса Лациса, д.31, корп.1, кв.23, к/н 77:08:0003001:2137",
        "start_price": "3887440.31999999983 рубли",
        "lon": 55.862130999999998,
        "lat": 37.4198710000000005
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29595380",
        "prop_name": "должника (собственника) Глущенко А.В.: квартира общ.пл.37,3 кв.м. по адресу: г.Москва, ул.Высокая, д.15, кв.63, к/н 77:05:0004005:2219",
        "start_price": "7335996 рубли",
        "lon": 55.6799449999999965,
        "lat": 37.656523
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29423529",
        "prop_name": "Повторные торги\nДолжник: Андреев А.А.\nКвартира, общей площадью 33,7 кв.м. по адресу г. Москва, ул. Василисы Кожиной, д. 8, к. 3, кв. 25, к/н 77:07:0005007:8652.",
        "start_price": "5425040 рубли",
        "lon": 55.7356160000000003,
        "lat": 37.4971079999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29345344",
        "prop_name": "должника (собственника) Кушнаренко М.Ф.: квартира общей площадью 84,8 кв.м по адресу: г. Москва, ул. Дмитрия Ульянова, д. 28, корп. 2, кв. 101, к/н 77:06:0004001:4902",
        "start_price": "17081000 рубли",
        "lon": 55.6871119999999991,
        "lat": 37.5761869999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28948990",
        "prop_name": "Квартира, общей площадью 58,8 кв.м., по адресу: г. Москва, ул. Флотская, д. 78, кв. 52, к/н 77:09:0001014:4248. Должник : Малютина Ю.В.",
        "start_price": "6479720 рубли",
        "lon": 55.8530209999999983,
        "lat": 37.4982669999999985
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29340738",
        "prop_name": "должника (собственника) Копыца   Е.В.: квартира общей площадью 38,1 кв.м по адресу: г.Москва, ул. Алтайская, д. 4, кв. 2, к/н 77:03:0002017:9276",
        "start_price": "4521600 рубли",
        "lon": 55.8202020000000019,
        "lat": 37.8162530000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29018722",
        "prop_name": "Должник: Козловская Д.А.\nКвартира, общей площадью 67,3 кв.м., по адресу: г. Москва, ул. Профсоюзная, д. 43, корп. 2, кв. 687, к/н 77:06:0004007:2607.",
        "start_price": "17159346.3999999985 рубли",
        "lon": 55.6495200000000025,
        "lat": 37.5325109999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30405837",
        "prop_name": "Первичные торги\nДолжник: Захарин А.А.\nКвартира общей площадью 51,3 кв.м, по адресу: г. Москва, ул. Чертановская, д. 21, корп. 1, кв. 216, к/н 77:05:0007002:6940",
        "start_price": "6521748.79999999981 рубли",
        "lon": 55.6194369999999978,
        "lat": 37.5939199999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28869129",
        "prop_name": "Квартира, общей площадью 143,2 кв.м. по адрсеу: г. Москва, Большой Головин переулок, д. 4, кв. 3, к/н 77:01:0001090:1836.",
        "start_price": "112900030 рубли",
        "lon": 55.7693879999999993,
        "lat": 37.6286399999999972
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28778159",
        "prop_name": "Квартира, общей площадью 62,8 кв.м., по адресу: г. Москва, ул. Снайперская, д. 12, кв. 278, к/н 77:03:0007003:11812. Должник: Корнеева Р.В.",
        "start_price": "5516075.6799999997 рубли",
        "lon": 55.7226789999999994,
        "lat": 37.8134950000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30579846",
        "prop_name": "Квартира 35 кв. м, адрес: г. Москва, бульвар Яна Райниса, д. 20, к. 1, кв. 95, к/н 77:08:0003006:4425, с-к Хробостов В.С., пор. 1211-4А",
        "start_price": "4709850 рубли",
        "lon": 55.8487560000000016,
        "lat": 37.4210660000000033
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29165210",
        "prop_name": "Должник: Красовская Ю.В.\nКвартира, общей площадью 35,4 кв.м., по адресу: г. Москва, ул. Корнейчука, д. 48А, кв. 233, к/н 77:02:0002006:2693.",
        "start_price": "3968000 рубли",
        "lon": 55.8993099999999998,
        "lat": 37.6216420000000014
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29944343",
        "prop_name": "Повторные торги\nДолжник: Исмаилова Д.С. Доля равная 3/4 в праве общей собственности на помещение, общей площадью 44,5 кв.м., по адресу: г. Москва, ш. Очаковское, д. 13, корп. 1, кв. 81, к/н 77:07:0012008:1484",
        "start_price": "2550000 рубли",
        "lon": 55.6906540000000021,
        "lat": 37.4500990000000016
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28649630",
        "prop_name": "должника (собственника) Плясунова А.Н.: квартира площадью 81 кв.м., по адресу: г. Москва, ул. Никулинская, д.27, к.3, кв. 56, к/н 77:07:0014004:1588",
        "start_price": "11171040 рубли",
        "lon": 55.6706909999999979,
        "lat": 37.4521480000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29176378",
        "prop_name": "должника (собственника) Хамидулиной Л.О.: квартира общей площадью 62,2 кв.м по адресу: г. Москва, ул. Коломенская, д. 9, кв. 72, к/н 77:05:0004012:2230",
        "start_price": "9065600 рубли",
        "lon": 55.6783459999999977,
        "lat": 37.6947109999999981
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28538969",
        "prop_name": "должника (собственника) Сиголаевой Н.В.: квартира из 2 комнат площадью 37,2кв.м, по адресу: г. Москва, ул. Маршала Тухачевского, д. 22, корп.1, кв. 51, к/н 77:08:0010003:5067",
        "start_price": "5310800 рубли",
        "lon": 55.7842729999999989,
        "lat": 37.4718659999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29333676",
        "prop_name": "должника (собственника) Каплан В.И.: квартира площадью 70,1кв.м., по адресу: г. Москва, Ленинский проспект, д.36, кв. 155, к/н 77:06:0001002:1883",
        "start_price": "11955760 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30316328",
        "prop_name": "1/2 доли в праве общей долевой соб-ти квартиры, общ. пл. 57,7 кв. м, адрес: г. Москва ул. Мосфильмовская, д. 2в, кв. 1, к/н 77:07:0006004:4431, с-к Шоргина Е.Г.пор. 1203-4А",
        "start_price": "3400000 рубли",
        "lon": 55.7149319999999975,
        "lat": 37.5145180000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30316328",
        "prop_name": "квартира 53,4 кв. м, адрес: г. Москва, ул. Софьи ковалевской, д. 12, кор. 1, кв. 42, к/н 77:09:0002009:7621 с-ки Рабазанов Р.Р., Рабазанова А.Н., пор. 11464А",
        "start_price": "4420000 рубли",
        "lon": 55.8860689999999991,
        "lat": 37.5341189999999969
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30405793",
        "prop_name": "Первичные торги\nДолжники: Колесников В.А., Колесникова Н.И.\nКвартира общей площадью 53,3 кв.м, по адресу: г. Москва, ул. Бартеневская, д. 23, корп. 2, кв. 39, к/н 77:06:0012003:2781",
        "start_price": "92615.1999999999971 доллар США",
        "lon": 55.5491639999999975,
        "lat": 37.525818000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28640193",
        "prop_name": "Квартира общей площадью 72,7 кв.м.,по адресу: г. Москва, ул. Кастанаевская, д.51.к.1,кв.83, к/н 77:07:0005004:6614. Должник: Каныгина О.В.",
        "start_price": "9614520 рубли",
        "lon": 55.7347090000000023,
        "lat": 37.474884000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29286081",
        "prop_name": "Должники Жбанкова И.В., Лужецкая А.О.: квартира общей площадью 72,5 кв.м. по адресу г. Москва, ул. Ивантеевская, д. 9, кв. 6, к/н 77:03:0001013:2339",
        "start_price": "16270078.4000000004 рубли",
        "lon": 55.8176429999999968,
        "lat": 37.7243369999999985
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30134279",
        "prop_name": "Должник Чепрасова Е.Н.: квартира общей площадью 72,3 кв.м. в г. Москва, ул. Алтайская, д. 4, кв. 275, к/н 77:03:0002017:9548.",
        "start_price": "8220800 рубли",
        "lon": 55.8202020000000019,
        "lat": 37.8162530000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28778020",
        "prop_name": "Квартира, общей площадью 91,8 кв.м., по адресу: г. Москва. 1-й Краснокурсантский пр-д, д. 5/7, кв. 24, к/н 77:04:0001003:2354. Должник: Калашникова Н.В.",
        "start_price": "12726200 рубли",
        "lon": 55.760787999999998,
        "lat": 37.6959680000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31355179",
        "prop_name": "Повторные торги\nДолжник: Пимениди К.С. \nКвартира, общей площадью 40 кв.м., по адресу: г. Москва, ул. Раевского, д. 3, кв. 137, к/н 77:07:0007002:7433",
        "start_price": "7485494.40000000037 рубли",
        "lon": 55.7451440000000034,
        "lat": 37.5525880000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30939656",
        "prop_name": "Повторные торги. Должник Чепрасова Е.Н.: квартира общей площадью 72,3 кв.м. в г. Москва, ул. Алтайская, д. 4, кв. 275, к/н 77:03:0002017:9548.",
        "start_price": "6987680 рубли",
        "lon": 55.8202020000000019,
        "lat": 37.8162530000000032
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29336635",
        "prop_name": "должника (собственника) Оголенко Г.Ф.: квартира площадью с учетом помещений вспомогательного использования 39,9 кв.м, общей площадью 36,2кв.м по адресу: г. Москва, ул. Пятницкая, д. 39, кв. 76, к/н 77:01:0002011:1424",
        "start_price": "10500000 рубли",
        "lon": 55.7378259999999983,
        "lat": 37.6281719999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31090353",
        "prop_name": "Должник Синявский Л.В.: квартира, общей площадью 57,3 кв.м. в г. Москва, Кутузовский пр-д, д. 4, кв. 18, к/н 77:07:0006005:4418.",
        "start_price": "10114000 рубли",
        "lon": 55.7402990000000003,
        "lat": 37.5226559999999978
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28408562",
        "prop_name": "должника (собственника) Моргуновой И.В.: квартира площадью 35,8кв.м., по адресу: г. Москва, Каширское шоссе, д.94, корп.1, кв. 107, к/н 77:05:0011002:9640",
        "start_price": "4530783.55999999959 рубли",
        "lon": 55.6411170000000013,
        "lat": 37.6835090000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29038635",
        "prop_name": "должника (собственника) Денисова А.В.: квартира общ.пл.44,8 кв.м. по адресу: г.Москва, Шелепихинская наб., д. 12, кв.30, к/н 77:01:0004046:2453",
        "start_price": "5829600 рубли",
        "lon": 55.752830000000003,
        "lat": 37.5205449999999985
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28527180",
        "prop_name": "должника (собственников) Кузовина М.В. Кузовиной О.А.: квартира общей площадью 48,8кв.м, по адресу: г. Москва, ул. Академика Варги, д.28, кв.9, к/н 77:06:0007007:3108",
        "start_price": "5407565.36000000034 рубли",
        "lon": 55.6299890000000019,
        "lat": 37.4763749999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30170001",
        "prop_name": "должника (собственника) Кушнаренко М.Ф.: квартира общей площадью 84,8 кв.м по адресу: г. Москва, ул. Дмитрия Ульянова, д. 28, корп. 2, кв. 101, к/н 77:06:0004001:4902",
        "start_price": "14518850 рубли",
        "lon": 55.6871119999999991,
        "lat": 37.5761869999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 38,3 кв. м, адрес: г. Москва, ул. Бехтерева, д. 33, кв. 48, к/н 77:05:0005008:4334, с-к Лахурин А.А., пор. 1536-4А",
        "start_price": "4366504 рубли",
        "lon": 55.6272650000000013,
        "lat": 37.6473689999999976
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 46,7 кв.м., адрес: г. Москва, ул. Дубнинская, д. 40А, корп. 4, кв. 203, к/н 77:09:0002007:9410, с-к Черноплёкова Л.И., пор. 1481-4А",
        "start_price": "7600000 рубли",
        "lon": 55.7198250000000002,
        "lat": 37.6348290000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 53,9 кв. м, адрес: г. Москва, ул. Крылатские Холмы, д. 30, корп. 3, кв. 150, к/н 77:07:0001002:25994, с-к Иванов Е.В., пор. 1531-4А",
        "start_price": "10884839.9800000004 рубли",
        "lon": 55.755747999999997,
        "lat": 37.4149120000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31145491",
        "prop_name": "Квартира 45,5 кв. м, адрес: г. Москва, ул. Малахитовая, д. 6, корп. 2, кв. 179, к/н 77:02:0019008:1409, с-к Черненко А.Г., пор. 1537-4А",
        "start_price": "5635200 рубли",
        "lon": 55.8311300000000017,
        "lat": 37.662308000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28408650",
        "prop_name": "должника (собственника) Кучерявой М.В.: квартира площадью 44,4кв.м., по адресу: г. Москва, Ореховый проезд, д.35, корп. 1, кв. 46, к/н 77:05:0012001:6272",
        "start_price": "3803240 рубли",
        "lon": 55.6213180000000023,
        "lat": 37.7301130000000029
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28961624",
        "prop_name": "Должник: Бужинский А.А.Квартира, общей площадью 74,6 кв.м., по адресу: г. Москва, ул. Академика Янгеля, д. 3, кв. 93, к/н 77:05:0008007:6892.",
        "start_price": "8528900 рубли",
        "lon": 55.5957050000000024,
        "lat": 37.5914039999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30033994",
        "prop_name": "должника (собственников) Маркачевой Ю.В., Грязева В.А.: квартира общей площадью 73 кв.м по адресу: г.Москва, Ленинский пр-т, д.99, кв.159, к/н 77:06:0003013:1895",
        "start_price": "13184073.0700000003 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30405826",
        "prop_name": "Первичные торги\nДолжники: Бекирова Е.Г. Кызы, Бекиров Н.Б. Оглы.\nКвартира общей площадью 44,9 кв.м, по адресу: г. Москва, ул. Азовская, д. 37, корп. 1, кв. 50, к/н 77:06:0005017:2101",
        "start_price": "190930 доллар США",
        "lon": 55.653182000000001,
        "lat": 37.5983659999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28920229",
        "prop_name": "должника (собственника) Зальман Н.В.: квартира пл. 44,3 кв.м по адресу: г.Москва, ул. Нагорная, д.2, корп.1, кв.11, к/н 77:06:0002017:1085",
        "start_price": "5655050 рубли",
        "lon": 55.6778440000000003,
        "lat": 37.601618000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29684099",
        "prop_name": "Должник Харитонова Н.А.: квартира, общей площадью 44,6 кв.м. по адресу г. Москва, ул. Новокузьминская 4-я, д. 7, корп. 1, кв. 28, к/н 77:04:0002014:5695.",
        "start_price": "4560000 рубли",
        "lon": 55.7106819999999985,
        "lat": 37.790300000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31581195",
        "prop_name": "Первичные торги\nДолжник:Борисов В.В.\nКвартира, общей площадью 100,4 кв.м., по адресу: г. Москва, ул. Щукинская, д. 2, кв. 285, к/н 77:08:0009008:2488",
        "start_price": "20816800 рубли",
        "lon": 55.8085689999999985,
        "lat": 37.4743179999999967
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29700180",
        "prop_name": "Первичные торги\nДолжник(и): Тишенкова В.А., Тишенков В.А., Тишенков А.Л.\nКвартира, общей площадью 51,3 кв.м., по адресу: г. Москва, ул. Адмирала Лазарева, д. 38, кв. 98, к/н 77:06:0012006:4128",
        "start_price": "5391200 рубли",
        "lon": 55.5417690000000022,
        "lat": 37.5147059999999968
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29556903",
        "prop_name": "Повторные торги. Должник Кулявцев К.В.: Квартира, общей площадью 94,3 кв.м., по адресу: г. Москва, ул. Кедрова, д. 13, корп. 1, кв. 27, к/н 77:06:0004001:3689",
        "start_price": "14653320 рубли",
        "lon": 55.6840669999999989,
        "lat": 37.5710669999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29849292",
        "prop_name": "Повторные торги\nДолжник: Шепилов П.Л.\nКвартира, общей площадью 37,6 кв.м., по адресу: г. Москва, ул. Бескудниковский бульвар, д. 22, кв. 68, к/н 77:09:0002027:7610",
        "start_price": "3830440 рубли",
        "lon": 55.8738340000000022,
        "lat": 37.5478359999999967
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31751216",
        "prop_name": "Должник Никитина Н.В.: квартира общей площадью 75,4 кв.м. в г. Москва, ул. 8-я Соколиной горы, д. 8, корп. 2, кв. 137, к/н 77:03:0004007:8620.",
        "start_price": "11152800 рубли",
        "lon": 55.7683499999999981,
        "lat": 37.7378659999999968
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30242197",
        "prop_name": "Должники Асанова О.М., Асанов М.К.: квартира общей площадью 50,4 кв.м. в г. Москва, ул. Душинская, д. 14, кв. 106, к/н 77:04:0001013:1401.",
        "start_price": "154536.799999999988 доллар США",
        "lon": 55.7461470000000006,
        "lat": 37.7052120000000031
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29555202",
        "prop_name": "Повторные торги. Должник Михелашвили Л.Р.: Квартира, общей площадью 105,4 кв.м. по адресу: г. Москва, Пушкарёв пер., д. 16, кв. 8, к/н 77:01:0001090:1962.",
        "start_price": "67959277.349999994 рубли",
        "lon": 55.768886000000002,
        "lat": 37.6284240000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28505945",
        "prop_name": "Квартира, общей площадью 37,4 кв.м., по адресу: г. Москва, Крутицкая набережная, д. 17, кв. 43, к/н 77:05:0002001:3203.",
        "start_price": "6452552 рубли",
        "lon": 55.7237289999999987,
        "lat": 37.6591280000000026
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31581017",
        "prop_name": "Первичные торги\nДолжник: Акимкин А.И.\nКвартира, общей площадью 24 кв.м., по адресу: г. Москва, Севастопольский пр-кт, д. 7, корп. 5, кв. 79, к/н 77:05:0001015:5698",
        "start_price": "3212000 рубли",
        "lon": 55.6588649999999987,
        "lat": 37.5736270000000019
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30156362",
        "prop_name": "должника (собственника) Кондратовой И.В.: квартира обшей площадью 37,6 кв.м по адресу: г. Москва, ул. Севанская, д.15, корп.1, кв. 79, к/н 77:05:0005008:10929",
        "start_price": "4688000 рубли",
        "lon": 55.6238850000000014,
        "lat": 37.6527230000000017
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28527558",
        "prop_name": "должника (собственника) Бушиной Т.Н.: квартира общей площадью 129,6кв.м, по адресу: г. Москва, ул.Профсоюзная, д.104, кв.368, к/н 77:06:0006005:13458",
        "start_price": "22080960 рубли",
        "lon": 55.6495200000000025,
        "lat": 37.5325109999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29470430",
        "prop_name": "должника (собственника) Малышева Ю.А.: квартира общ.пл.85,2кв.м, по адресу: г.Москва, Загородное ш.,д.15,корп.1,кв.43, к/н 77:05:0001015:3940",
        "start_price": "10660700 рубли",
        "lon": 55.6953170000000028,
        "lat": 37.6102690000000024
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28853931",
        "prop_name": "Должник: Лазуто Р.А.\nКвартира, общей площадью 74,5 кв.м., по адресу: г. Москва, ул. Профсоюзная, д. 60, кв. 369, к/н 77:06:0003012:5017.",
        "start_price": "12000000 рубли",
        "lon": 55.6495200000000025,
        "lat": 37.5325109999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29850594",
        "prop_name": "Первичные торги\nДолжник: Пронькин В.А., Пронькина И.Л\nКвартира, общей площадью 73 кв.м., по адресу: г. Москва, ул. Никулинская, д. 23, корп. 1, кв. 89, к/н 77:07:0014004:4021",
        "start_price": "10896000 рубли",
        "lon": 55.6706909999999979,
        "lat": 37.4521480000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30798302",
        "prop_name": "Повторные торги. Должник Ходжаметова Л.Н.: квартира общей площадью 76 кв.м. в г. Москва, ул. Автозаводская, д. 9/1, кв. 80, к/н 77:05:002003:2088",
        "start_price": "10278506 рубли",
        "lon": 55.7040930000000003,
        "lat": 37.6516900000000021
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29736241",
        "prop_name": ". Квартира 35 кв. м, адрес: г. Москва,бульвар Яна Райниса, д. 20, к. 1, кв. 95,к/н 77:08:0003006:4425, с-к Хробостов В.С., пор.1211-4А",
        "start_price": "5541000 рубли",
        "lon": 55.8487560000000016,
        "lat": 37.4210660000000033
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28419505",
        "prop_name": "должника (собственника) Моргунова С.И. Моргуновой И.А.: квартира площадью 34,9кв.м., по адресу: г. Москва, ул. Красного Маяка, д.6, кв. 67, к/н 77:05:0007002:5934",
        "start_price": "3696000 рубли",
        "lon": 55.6122939999999986,
        "lat": 37.5942969999999974
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31090772",
        "prop_name": "Должник Венецкая К.В.: квартира, общей площадью 34,4 кв.м. в г. Москва, ул. Смирновская, д. 4б, кв. 45, к/н 77:04:0001014:1450.",
        "start_price": "4435135.30999999959 рубли",
        "lon": 55.7364219999999975,
        "lat": 37.710287000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30134670",
        "prop_name": "Должник Гарунов В.Н.: квартира общей площадью 40,6 кв.м. в г. Москва, 3-й Сетуньский пр-д, д. 3, кв. 206, к/н 77:07:0006003:2325.",
        "start_price": "5629000 рубли",
        "lon": 55.7324890000000011,
        "lat": 37.5357449999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28649678",
        "prop_name": "должника (собственника) Новичковой А.В.: квартира площадью 111,9 кв.м., по адресу: г. Москва, ул. Авиационная, д.79, кв.472, к/н 77:08:0009004:5883",
        "start_price": "34503200 рубли",
        "lon": 55.8099899999999991,
        "lat": 37.4639600000000002
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29844299",
        "prop_name": "Должник Пятакова О.Г.: квартира, общей площадью 38,5 кв.м. в г. Москва, ул. Исаковского, д. 33, корп. 2, кв. 235, к/н 77:08:0008001:3334.",
        "start_price": "5763600 рубли",
        "lon": 55.8145930000000021,
        "lat": 37.4078609999999969
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28649672",
        "prop_name": "должника (собственника) Сармановой Э.С.: квартира площадью 53,3 кв.м., по адресу: г. Москва, ул. Покрышкина, д.9, кв.107, к/н 77:07:0014007:5402",
        "start_price": "8520400 рубли",
        "lon": 55.6645380000000003,
        "lat": 37.4734830000000017
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30035836",
        "prop_name": "должника (собственника) Никифоровой В.С.: квартира общей площадью 42,7 кв.м по адресу: г.Москва, Дмитровское ш., д.52, корп.2,  кв. 12, к/н 77:09:0003025:2935",
        "start_price": "4296240 рубли",
        "lon": 55.8759299999999968,
        "lat": 37.5477190000000007
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29286994",
        "prop_name": "Должник Филатова О.В.: 1/2 доли в квартире № 249, общей площадью 103,7 кв.м., принадлежащая на праве долевой собственности Филатову А.В. и Филатовой О.В. по адресу г. Москва, ул. Привольная, д. 65/32, кв. 249, к/н 77:04:0005008:2366.",
        "start_price": "6000000 рубли",
        "lon": 55.6895269999999982,
        "lat": 37.8489599999999982
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29701376",
        "prop_name": "Повторные торги. Должник Гурбанов Ш.Н. оглы: квартира, общей площадью 76,2 кв.м. по адресу г. Москва, ул. Борисовские Пруды, д. 21, корп. 1, кв. 171, к/н 77:05:0011010:6445.",
        "start_price": "9983080 рубли",
        "lon": 55.6358579999999989,
        "lat": 37.738387000000003
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28505831",
        "prop_name": "Квартира, общей площадью 42,6 кв.м., по адресу: г. Москва, ул. Гришина,д. 24, корп. 1, кв. 44, к/н 77:07:0008002:12110.",
        "start_price": "5548000 рубли",
        "lon": 55.7228059999999985,
        "lat": 37.4175889999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28920391",
        "prop_name": "должника (собственника) Юферовой Е.В.: квартира пл. 44,3 кв.м. по адресу: г.Москва, ул. Челябинская, д.7, кв.95, к/н 77:03:0005024:6688",
        "start_price": "4367640 рубли",
        "lon": 55.7776110000000003,
        "lat": 37.8290000000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29339315",
        "prop_name": "должника (собственника) Бедрицкого А.С., Бедрицкой Н.Н.: квартира общей площадью квартира пл. 34,7 кв.м по адресу: г.Москва, ул. Весенняя, д. 10, кв. 53, к/н 77:09:0002018:1514",
        "start_price": "4320800 рубли",
        "lon": 55.8738949999999974,
        "lat": 37.513655
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31148170",
        "prop_name": "Квартира 63,5 кв. м, адрес: г. Москва, ул. Маршала Василевского , д. 1, корп. 2, кв. 93, к/н 77:08:0009017:1340, Общая совместная собственность Стась А.К. и Кремчуковой Н.Г., пор. 1385-4А",
        "start_price": "8544880 рубли",
        "lon": 55.8063780000000023,
        "lat": 37.4683890000000019
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29019293",
        "prop_name": "Сагова М.С.: квартира, общей площадью 44,8 кв.м. по адресу: г. Москва, ул. Генерала Рычагова, д. 13, кв. 52, к/н 77:09:0003002:1376.",
        "start_price": "6000000 рубли",
        "lon": 55.8414929999999998,
        "lat": 37.5377480000000006
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
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28869074",
        "prop_name": "Квартира, общей площадью 63,3 кв.м., принадлежащая на праве общей долевой собственности Монастырскому Н.Я. – 1/3 доля, Монастырскому Я.Г. – 1/3 доля и Монастырской В.А. - 1/3 доля, по адресу г. Москва, ул. Ясеневая, д. 34, кв. 566, к/н 77:05:0011009:11326.",
        "start_price": "6979913 рубли",
        "lon": 55.6029369999999972,
        "lat": 37.7295560000000023
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29285756",
        "prop_name": "Должник Якобишвили Н.М.: квартира общей площадью 146 кв.м. по адресу г. Москва, Большой Головин пер., д. 4, кв. 1, к/н 77:01:0001090:1834.",
        "start_price": "115107580 рубли",
        "lon": 55.7693879999999993,
        "lat": 37.6286399999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29470556",
        "prop_name": "должника (собственника) Рощиной Е.И.: квартира общ.пл.34 кв.м, по адресу: г.Москва, ул.Артамонова, д.12, корп.2, кв.116, к/н 77:07:0009003:10186",
        "start_price": "4564500 рубли",
        "lon": 55.7188360000000031,
        "lat": 37.4562889999999982
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30546774",
        "prop_name": "Первичные торги \nДолжник: Фролова Н.В.\nКвартира, общей площадью 47,2 кв.м., по адресу: г. Москва, ул. Старый Петровско-Разумовский пр-д, д. 3, кв. 67, к/н 77:09:0004014:2620",
        "start_price": "6513600 рубли",
        "lon": 55.799436,
        "lat": 37.5667279999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29165235",
        "prop_name": "Должник: Кулемин В.С.\nКвартира, общей площадью 46,9 кв.м., по адресу: г. Москва, пр-т Ленинградский, д. 59, кв. 29, к/н 77:09:0005004:4822.",
        "start_price": "5810000 рубли",
        "lon": 55.7942850000000021,
        "lat": 37.5456259999999986
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29019082",
        "prop_name": "Должник Сгибнев А.В. Право требования по договору №650/МО-2/ОПТ участия в долевом строительстве жилого дома от 17.03.2016г., по адресу: г. Москва, ул. Новогиреевская, вл. 5, к/н 77:03:0006017:21.",
        "start_price": "19559982.3999999985 рубли",
        "lon": 55.7560110000000009,
        "lat": 37.7967680000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28779809",
        "prop_name": "Квартира, общей площадью 164,8 кв.м., по адресу: г. Москва, ш. Рублевское, д. 34, корп. 2, кв. 467, к/н 77:07:0001002:9578",
        "start_price": "25357600 рубли",
        "lon": 55.7469680000000025,
        "lat": 37.4179040000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29696072",
        "prop_name": "Повторные торги\nДолжник: Махсудян С.В. \nКвартира, общей площадью 154,2 кв.м., по адресу: г. Москва, Ленинский проспект, д. 128, корп. 1, кв.107, к/н 77:07:0013007:5857",
        "start_price": "27141556.1799999997 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30573906",
        "prop_name": "Квартира 114,6 кв. м, адрес: г. Москва, пр-д Рощинский 6-й, д. 1, кв. 40, к/н 77:05:0001012:3936, с-к Назаева А.А., пор. 1242-4А",
        "start_price": "17818237.1999999993 рубли",
        "lon": 55.7087489999999974,
        "lat": 37.6154519999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30573906",
        "prop_name": "Квартира 63,2 кв. м, адрес: г. Москва, 4-й Новомихалковский пр-зд, д. 15, кв. 18, к/н 77:09:0003002:3163, с-к Аксенов С.И., пор. 1218-4А",
        "start_price": "5723050 рубли",
        "lon": 55.8419939999999997,
        "lat": 37.5440809999999985
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31222613",
        "prop_name": "Повторные торги\nДолжники: Колесников В.А., Колесникова Н.И. Квартира общей площадью 53,3 кв.м, по адресу: г. Москва, ул. Бартеневская, д. 23, корп. 2, кв. 39, к/н 77:06:0012003:2781",
        "start_price": "78722.9199999999983 доллар США",
        "lon": 55.5491639999999975,
        "lat": 37.525818000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31355542",
        "prop_name": "Повторные торги\nДолжник: Дингес Н.А.\n1/4 доли в праве собственности на квартиру, общей площадью 62 кв.м., по адресу: г. Москва, 2-й Раушский пер., д. 3, кв.15, к/н 77:01:0002022:2973",
        "start_price": "2125000 рубли",
        "lon": 55.7469170000000034,
        "lat": 37.6345329999999976
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29018850",
        "prop_name": "Должник Хлусова А.В. Квартира, общей площадью 34,2 кв.м. по адресу: г. Москва, ул. Тимирязевская, д. 32, корп. 2, кв. 76, к/н 77:09:0003022:4668.",
        "start_price": "3897349.95999999996 рубли",
        "lon": 55.820920000000001,
        "lat": 37.5602599999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30042482",
        "prop_name": "должника (собственника) Макаренкова А.М.: квартира общей площадью 38,7 кв.м по адресу: г.Москва, ул.Большая Набережная, д.5, кв.222, к/н 77:08:0006011:1477",
        "start_price": "4901440 рубли",
        "lon": 55.8305379999999971,
        "lat": 37.4589209999999966
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28764314",
        "prop_name": "Квартира, общей площадью 94,3 кв.м., по адресу: г. Москва, ул. Кедрова, д. 13, корп. 1, кв. 27, к/н 77:06:0004001:3689",
        "start_price": "17239200 рубли",
        "lon": 55.6840669999999989,
        "lat": 37.5710669999999993
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31639455",
        "prop_name": "Квартира 51,7 кв. м, адрес: г. Москва, ул. Илимская, д. 12, кв. 43, к/н 77:02:0001017:3303, с-к Манджиева Е.Т., пор. 1260-4А",
        "start_price": "5333428 рубли",
        "lon": 55.891213999999998,
        "lat": 37.5771569999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29944495",
        "prop_name": "Повторные торги\nДолжник: Красовская Ю.В.\nКвартира, общей площадью 35,4 кв.м., по адресу: г. Москва, ул. Корнейчука, д. 48А, кв. 233, к/н 77:02:0002006:2693.",
        "start_price": "3372800 рубли",
        "lon": 55.8993099999999998,
        "lat": 37.6216420000000014
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28786302",
        "prop_name": "должника (собственника) Мизгаревой И.А.: квартира общ.пл.61,2кв.м., по адресу: г.Москва, проезд Дежнёва, д.19, корп.2, кв.422, к/н 77:02:0006006:2462",
        "start_price": "6972720 рубли",
        "lon": 55.8709100000000021,
        "lat": 37.6379909999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28778140",
        "prop_name": "Квартира, общей площадью 31,6 кв.м., по адресу: г. Москва, ш. Открытое, д. 6, корп. 5, кв. 72, к/н 77:03:0003021:2521. Должник Арутюнян С.С.",
        "start_price": "3379336.83999999985 рубли",
        "lon": 55.8186600000000013,
        "lat": 37.7460129999999978
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29684595",
        "prop_name": "Повторные торги. Должники Якобишвили Н.М. и Элишакова Т.М.: квартира, общей площадью 143,2 кв.м. по адресу: г. Москва, Большой Головин переулок, д. 4, кв. 3, к/н 77:01:0001090:1836.",
        "start_price": "95965025.5 рубли",
        "lon": 55.7693879999999993,
        "lat": 37.6286399999999972
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29255608",
        "prop_name": "Квартира-1/3 доли в праве общей долевой собственности,  кадастровый (или условный) номер объекта: 77:09:0001016:5440, назначение объекта: жилое, площадь объекта: 45.4 кв.м., вид права: общая долевая собственность. Собственник (правообладатель) имущества: Веревкин М.М.",
        "start_price": "1773000 рубли",
        "lon": 55.8445919999999987,
        "lat": 37.5029559999999975
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28409107",
        "prop_name": "должника (собственника) Оганесяна К.С.: квартира из 3-х комнат площадью 62,5кв.м., по адресу: г. Москва, ул. Говорова, д.11, корп.1, кв. 65, к/н 77:07:0008001:8282",
        "start_price": "260525 доллар США",
        "lon": 55.7187959999999975,
        "lat": 37.395508999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28920537",
        "prop_name": "должника (собственника) Демакова С.И.: квартира пл. 285,8 кв.м. по адресу: г.Москва, ул. Сретенка, д.26/1, кв.62, к/н 77:01:0001087:1529",
        "start_price": "113050000 рубли",
        "lon": 55.7696660000000008,
        "lat": 37.6322150000000022
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29731106",
        "prop_name": "Квартира 34,7 кв. м, адрес: г. Москва,\nул. Введенского, д. 27, корп. 2., кв. 70,\nк/н 77:06:0008007:3715, с-к Посохов А.И., пор.\n1170-4А",
        "start_price": "4577000 рубли",
        "lon": 55.6415440000000032,
        "lat": 37.5402089999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28506229",
        "prop_name": "Степановой В.И.: квартира № 177 общей площадью 35,5 кв.м., по адресу: г. Москва, ул. Бартеневская, д. 9, к/н 77:06:0012003:2447.Должник: Степанова В.И.",
        "start_price": "3644800 рубли",
        "lon": 55.5491639999999975,
        "lat": 37.525818000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31794241",
        "prop_name": "Квартира общей площадью 138,9 кв. м, адрес: г. Москва ул. Велозаводская, д. 11/1, кв. 193, к/н 77:04:0001018:1790, с-к Черкесова С.И., пор. 1546-4А",
        "start_price": "15580896.4399999995 рубли",
        "lon": 55.7133340000000032,
        "lat": 37.6652729999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30546430",
        "prop_name": "Повторные торги\nДолжник: Неудачина М.В. \nКвартира, общей площадью 32,2 кв.м., по адресу: г. Москва, ул. Героев Панфиловцев, д. 12, корп. 1, кв. 210, к/н 77:08:0003003:3266",
        "start_price": "4560760 рубли",
        "lon": 55.8583619999999996,
        "lat": 37.4226019999999977
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28646031",
        "prop_name": "Квартира общей площадью 38,9 кв.м. по адресу: г. Москва, ул. Новгородская, д. 34, кв. 67, к/н 77:02:0001011:4106. Должник Кустинский С.А.",
        "start_price": "5882850 рубли",
        "lon": 55.8984870000000029,
        "lat": 37.579977999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30654077",
        "prop_name": "Должник Корнеева Ю.А.: квартира общей площадью 36,3 кв.м. в г. Москва, ул. Бирюлёвская, д. 52, корп. 2, кв. 436, к/н 77:05:0010004:5287.",
        "start_price": "2872000 рубли",
        "lon": 55.5907040000000023,
        "lat": 37.6641410000000008
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29338101",
        "prop_name": "должника (собственников) Перпериди Д.В., Метакса А.Н.: квартира общей площадью 73,9 кв.м по адресу: г. Москва, ул. Привольная, д. 5, корп.2, кв. 284, к/н 77:04:0005004:4594",
        "start_price": "8518937.59999999963 рубли",
        "lon": 55.6895269999999982,
        "lat": 37.8489599999999982
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30799022",
        "prop_name": "Квартира 31,8 кв. м, Москва, ул. Маршала Чуйкова, д. 13, корп. 3, кв. 48, к/н 77:04:0004006:6105, пор. 1309-4А, с-к Шулика В.Г.",
        "start_price": "3960604 рубли",
        "lon": 55.6985430000000008,
        "lat": 37.7616080000000025
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28882093",
        "prop_name": "Должник: Махсудян С.В.\nКвартира, общей площадью 154,2 кв.м., по адресу: г. Москва, Ленинский проспект, д. 128, корп. 1, кв.107, к/н 77:07:0013007:5857",
        "start_price": "31931242.5599999987 рубли",
        "lon": 55.6826450000000008,
        "lat": 37.5371639999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30127374",
        "prop_name": "Повторные торги. Должник ООО «Ист Фор-Вард»: квартира общей площадью 128,6 кв.м. по адресу г. Москва, Ломоносовский пр-т, д. 25, корп. 3, кв. 98, к/н 77:07:0013004:20995.",
        "start_price": "37077165.2400000021 рубли",
        "lon": 55.6972900000000024,
        "lat": 37.5292680000000018
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28506407",
        "prop_name": "Квартира, общей площадью 59 кв.м., по адресу г. Москва, ул. Кировоградская, д. 2, кв. 164, к/н 77:05:0006004:12070. Должник: Белый В.В.",
        "start_price": "8160000 рубли",
        "lon": 55.6144549999999995,
        "lat": 37.6050230000000028
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30723784",
        "prop_name": "Квартира 35,5 кв. м, адрес: г. Москва, Студеный пр., д. 4, к. 4, кв. 273, к/н 77:02:0004001:2025, с-к Крушняк Е.Б., пор. 1162-4А,",
        "start_price": "4109750 рубли",
        "lon": 55.8932629999999975,
        "lat": 37.663018000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29696974",
        "prop_name": "Повторные торги\nДолжник: Барбашов Р.В.\nКвартира, общей площадью 164,8 кв.м., по адресу: г. Москва, ш. Рублёвское, д. 34, корп. 2, кв. 467, к/н 77:07:0001002:9578",
        "start_price": "21553960 рубли",
        "lon": 55.7469680000000025,
        "lat": 37.4179040000000001
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29286308",
        "prop_name": "Должник ООО «Ист Фор-Вард»: квартира общей площадью 128,6 кв.м. по адресу г. Москва, Ломоносовский пр-т, д. 25, корп. 3, кв. 98, к/н 77:07:0013004:20995.",
        "start_price": "43620194.3999999985 рубли",
        "lon": 55.6972900000000024,
        "lat": 37.5292680000000018
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28505747",
        "prop_name": "Квартира №365, общей площадью 76,1 кв.м. по адресу г. Москва, б-р Адмирала Ушакова, д. 14, кв. 365, к/н 77:06:0012002:6517.",
        "start_price": "9163000 рубли",
        "lon": 55.5468779999999995,
        "lat": 37.5505580000000023
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30032918",
        "prop_name": "должника (собственников) Перпериди Д.В., Метакса А.Н.: квартира общей площадью 73,9 кв.м по адресу: г. Москва, ул. Привольная, д. 5, корп.2, кв. 284, к/н 77:04:0005004:4594",
        "start_price": "7241096.95999999996 рубли",
        "lon": 55.6895269999999982,
        "lat": 37.8489599999999982
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31399539",
        "prop_name": "Комната 16,4 кв.м., адрес: г. Москва, ул. Вучетича, д. 9, корп. 1, кв. 24. к. 2, к/н 77:09:0003021:9807, с-к Мишин В.А., пор. 1340-4А",
        "start_price": "1459280 рубли",
        "lon": 55.8110369999999989,
        "lat": 37.5580500000000015
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31399539",
        "prop_name": "Квартира 59,6 кв.м., адрес: г. Москва, ул. Чертановская, д. 21, корп. 3, кв. 75, к/н 77:05:0007002:7422, с-к Савельева И.А., пор. 1381-4А",
        "start_price": "6818360 рубли",
        "lon": 55.6194369999999978,
        "lat": 37.5939199999999971
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30934938",
        "prop_name": "Первичные торги\nДолжник: Лапаревич И.С.\nКвартира, общей площадью 38,7 кв.м., по адресу: г. Москва, ул. Енисейская, д. 30, кв. 216, к/н 77:02:0011006:3516",
        "start_price": "4640000 рубли",
        "lon": 55.8697379999999981,
        "lat": 37.6646619999999999
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30313739",
        "prop_name": "Квартира 129,1 кв. м, г. Москва, ул. Спиридоновка, д. 10, кв. 5, к/н 77:01:0001068:1469, пор. 1300-4А, с-к Цыганкова И.А.",
        "start_price": "52962400 рубли",
        "lon": 55.7613100000000017,
        "lat": 37.5922219999999996
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29932144",
        "prop_name": "Повторные торги. Должник Баврина Н.В.: 2/3 доли в праве общей долевой собственности, принадлежащих Бавриной Н.В. в квартире общей площадью 49 кв.м. по адресу: г. Москва, ул. Медынская, д. 12, корп. 2, кв. 21, к/н 77:05:0009003:12974.",
        "start_price": "1664034.71999999997 рубли",
        "lon": 55.5853060000000028,
        "lat": 37.6465069999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31357110",
        "prop_name": "Повторные торгиДолжник: Ермаков Г.Ю. Квартира, общей площадью 52,1 кв.м., по адресу: г. Москва, ул. Дубнинская, д. 28, корп. 2, кв. 164, к/н 77:09:0002028:9198",
        "start_price": "5649100 рубли",
        "lon": 55.8765709999999984,
        "lat": 37.5576280000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30313739",
        "prop_name": "Квартира 52,3 кв. м, г. Москва, Федеративный пр-т., д. 15, корп. 1, кв. 121, к/н 77:03:0006019:5254, пор. 1308-4А, с-к Соколова Л.А.",
        "start_price": "5000000 рубли",
        "lon": 55.7566040000000029,
        "lat": 37.8030479999999969
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30313739",
        "prop_name": "Квартира 53,1 кв. м, г. Москва, ул. Октябрьская, д. 69, кв. 39, к/н 77:02:0024018:1242, пор. 1263-4А, с-к Никитина Е.М, Никитина К.А.",
        "start_price": "9616800 рубли",
        "lon": 55.7922500000000028,
        "lat": 37.613197999999997
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29683951",
        "prop_name": "Должник Золотарева И.В.: квартира, общей площадью 65,4 кв.м. по адресу: г. Москва, ул. Гурьянова, д. 35, кв. 140, к/н 77:04:0003008:1320.",
        "start_price": "7299000 рубли",
        "lon": 55.6773669999999967,
        "lat": 37.7232229999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29337718",
        "prop_name": "должника (собственника) Федотова В.Ю.: квартира общей площадью 36,8 кв.м по адресу: г. Москва, ул. Нижегородская, д. 54, кв. 62, к/н 77:04:0001020:2999",
        "start_price": "1500000 рубли",
        "lon": 55.736148,
        "lat": 37.7005770000000027
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30722872",
        "prop_name": "Квартира 150,3 кв. м, адрес: Москва, ул. Минская, д. 1Г, корп. 2, кв. 68, к/н 77:07:0013001:1809, с-к Эмиргамзаев А.Г., пор. 1244-4А",
        "start_price": "39184084.0399999991 рубли",
        "lon": 55.757987,
        "lat": 37.4074560000000034
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30522227",
        "prop_name": "Повторные торги. Должники Звонарева Н.В., Звонарев В.М.: квартира, общей площадью 38,6 кв.м., по адресу г. Москва, ул. Курганская, д. 6, кв. 62, к/н 77:03:0002018:12759.",
        "start_price": "3468680 рубли",
        "lon": 55.8296890000000019,
        "lat": 37.8138089999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28645758",
        "prop_name": "Квартира общей площадью 63,5 кв.м. по адресу: г. Москва, Мичуринский пр-т, д. 38, кв. 187, к/н 77:07:0013003:3742. Должники Маслов Р.А.,Васильева А.А.",
        "start_price": "9542866.3599999994 рубли",
        "lon": 55.6930789999999973,
        "lat": 37.4905419999999978
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29554460",
        "prop_name": "Должник: Иванников А.М. \nКвартира, общей площадью 38,6 кв.м., по адресу: г. Москва, ул. Академика Челомея, д. 8, корп.2, кв. 241, к/н 77:06:0003014:4217",
        "start_price": "5084300 рубли",
        "lon": 55.6611049999999992,
        "lat": 37.5307859999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28948684",
        "prop_name": "Должник: Сараев А.Б.\nКвартира, общей площадью 56,1 кв.м., по адресу: г. Москва, ул. Хамовнический вал, д. 28, кв. 109, к/н 77:01:0005011:3650",
        "start_price": "10421680 рубли",
        "lon": 55.7207220000000021,
        "lat": 37.5630540000000011
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31086569",
        "prop_name": "Первичные торги\nДолжник: Родионов А.А.\nКвартира, общей площадью 31,8 кв.м., по адресу: г. Москва, Калошин пер., д. 6, стр. 1, кв. 32, к/н 77:01:0001058:1844",
        "start_price": "8818480 рубли",
        "lon": 55.7484520000000003,
        "lat": 37.5920869999999994
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=30114159",
        "prop_name": "Повторные торги. Должник: Танатаров Х.М. Квартира, общей площадью 31,2 кв.м., по адресу: г. Москва, Сиреневый б-р, д. 69, корп. 4, кв. 30, к/н 77:03:0005019:2377.",
        "start_price": "3253800 рубли",
        "lon": 55.8025680000000008,
        "lat": 37.7943879999999979
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29684280",
        "prop_name": "Должник Астахова Н.А.: квартира, общей площадью 47,3 кв.м. по адресу г. Москва, ул. Дмитрия Ульянова, д. 43, корп. 2, кв. 73, к/н 77:06:0002015:3421.",
        "start_price": "7500000 рубли",
        "lon": 55.6871119999999991,
        "lat": 37.5761869999999973
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29838649",
        "prop_name": "Должник Антошина А.А.: квартира, общей площадью 42,8 кв.м. в г. Москва, Гвардейская ул., д. 16, кв. 33, к/н 77:07:0008003:8082.",
        "start_price": "4596754.40000000037 рубли",
        "lon": 55.723232000000003,
        "lat": 37.4240840000000006
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29967762",
        "prop_name": "Повторные торги. Должник Филатова О.В.: 1/2 доли в квартире № 249, общей площадью 103,7 кв.м., принадлежащая на праве долевой собственности Филатову А.В. и Филатовой О.В. по адресу г. Москва, ул. Привольная, д. 65/32, кв. 249, к/н 77:04:0005008:2366.",
        "start_price": "5100000 рубли",
        "lon": 55.6895269999999982,
        "lat": 37.8489599999999982
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=28764159",
        "prop_name": "Квартира, общей площадью 80,9 кв.м. по адресу: г. Москва, ул. Свободы, д. 18, кв. 16, к/н 77:08:0006002:2482.",
        "start_price": "8741400 рубли",
        "lon": 55.8533550000000005,
        "lat": 37.4515999999999991
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31088660",
        "prop_name": "Повторные торги. Должники Федосеева О.Г., Ченцов А.Б.: Лот 1. 1/2 доля в праве на квартиру общей площадью 51,7 кв.м. в г. Москва, ул. Мелиховская, д. 4, кв. 2, к/н 77:02:0002008:1286.",
        "start_price": "2040000 рубли",
        "lon": 55.9006779999999992,
        "lat": 37.6070080000000004
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29401917",
        "prop_name": "Повторные торги\nДолжник: Будько А.Ф.\nКвартира, общей площадью 70,7 кв.м. по адресу г. Москва, Котельническая наб., д. 1/15, корп. Б, кв. 87, к/н 77:01:0002024:1499.",
        "start_price": "15470000 рубли",
        "lon": 55.7441249999999968,
        "lat": 37.6435069999999996
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=31750678",
        "prop_name": "Повторные торги. Должник Орлова И.Б.: квартира общей площадью 64,9 кв.м. в г. Москва, Северный б-р, д. 3, кв. 4, к/н 77:02:0008003:4273.",
        "start_price": "6162840 рубли",
        "lon": 55.8675709999999981,
        "lat": 37.6114999999999995
    }, {
        "notification_url": "http://torgi.gov.ru/restricted/notification/notificationView.html?notificationId=29401021",
        "prop_name": "Должник: Полтавец Т.Г.\nКвартира, общей площадью 38,4 кв.м., по адресу: г. Москва, ул. Вилиса Лациса, д. 25, кв. 228, к/н 77:08:0003001:7523",
        "start_price": "5479200 рубли",
        "lon": 55.862130999999998,
        "lat": 37.4198710000000005
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
