import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const adapterCreator = () => {
  return {
    selectId: (article) => article.id,
    sortComparer: (preArticle, nextArticle) => preArticle.id.localeCompare(nextArticle.id)
  };
};

const articlesAdapter = createEntityAdapter(adapterCreator());

const initialState = {
  error: null,
  status: 'idle',
  selectedArticle: {},
  articles: {
    ids: ['ids1', 'ids2', 'ids3', 'ids4', 'ids5'],
    entities: {
      ids1: {
        id: 'ids1',
        name: 'NETFLIX',
        title: 'Netflix biznes modelini necə dəyişdi',
        subtitles: [
          '“Hər-DVD icarəsi üçün ödəniş konsepsiyasından aylıq sabit ödənişli subscription-a keçid”',
          '“Online məhdudiyyətsiz kontent izləmənin industriyada inqilabı”',
          '“Netflix Originals ilə unikal satış üstünlüyü”',
          '“İstifadəçi ehtiyaclarını qarşılayaraq qlobal genişlənmə”'
        ],
        subcontents: [
          '1997-ci ildə bir DVD kirayə mağaza kimi işə başlayan Netflix, 2020-ci ilin sonundan etibarən, 190-dan çox ölkədə fəaliyyət göstərərkən 204 milyon istifadəçisi və 25 milyard ABŞ dolları gəliri olan ən böyük subscription-əsaslı kontent izləmə oyunçusudur. Şirkətin bu müddətə qədərki inkişaf strategiyasını 4 mərhələyə bölmək olar.',
          'Birinci mərhələdə, idarə heyəti, sürətli böyüyən e-ticarətə addım atmaq üçün DVD’lərin VHS lentləri ilə müayisədə inventarlaşdırma və göndərmə xərclərinin üstünlüyünü nəzərə alaraq Netflixi dünyanın ilk DVD kirayə mağazası olaraq qurdular. Daha sonra biznes modeli hər-icare-üçün-ödənişdən aylıq-sabit-ödənişli-subscription konsepsiyasına çevrildi və bu nəticədə Blockbuster üzərində rəqabət üstünlüyü (limitsiz kirayə, son tarixsiz kirayə, cəriməsiz gecikmə, eyni gündə çatdırılma və s.) ilə nəticələndi. 2002-ci ildəki IPO-dan (İlkin Kütləvi Təklif) sonra, şirkət hələ də mənfəətə çatmasada, təxminən 1 milyon aylıq abunəçiyə sahib idi.',
          'İkinci mərhələdə, Netflix abunəçilərinə 2007-ci ildə fərdi kompüterlərdən anında məhdudiyyətsiz kontent izləmə imkanı təqdim edərək Media və Əyləncə industriasında inqilab etdi və 2019-cu ilin sonunda DVD seqmenti ümumi satışların 2%-dən azını təşkil etdi. Əlavə olaraq, Netflix-in strategiyası ABŞ-dan qonşu bazarlara genişlənmək idi. Demək olar ki, potensial bazarları ev-bazarına bənzər istifadəçi xüsusiyyətlərinə malik olanlara limitləmək məcburiyyətində qaldılar. Məsələn, coğrafi, iqtisadi və sosial-demoqrafik xüsusiyyətlərinə görə Kanadaya 2010-cu ildə daxil oldular.',
          'Üçüncü mərhələdə, komanda 2015-ci ilə qədər 50 ölkəyə genişlənərək daha sürətli genişlənmə strategiyası həyata keçirməyə başladı. Burada, genişlənmə strategiyasının mümkünlüyü üçün maliyyə cəhətdən dayanıqlı istifadəçi bazası, yüksək sürətli internetin mövcudluğu və ağıllı telefonlardan, tabletlərdən və smart televizorlardan geniş istifadə əsas faktorlar idi. Bununla birlikdə, başlanğıcda genişlənmənin sürəti bir neçə çətinliyə görə limitli idi. Birincisi, 2012 -ci ilə qədər Netflix öz kontentini istehsal etmirdi, buna görə də şirkət, kontent platformasını digər kontent izləmə vasitələrindən (məsələn, kabel TV) fərqləndirmək və müştəriləri Netflix-ə abunə olmağa inandırmaq üçün sadəcə özünə məxsus kontent təklif etməli idi. Bunun üçün isə qlobal lisenziya hüquqlarına sahib olmalı idi. İkincisi, Asiyada axın edən pirat kontent izləmı çox sıradandır. Buna görə də kontent Netflix-ə məxsus olmadıqda, Netflix-in unikal satış üstünlüyü o qədər də cəlbedici deyildi. Bu səbəbdən idarəetmə qrupunun bu problemlərə həlli, şirkətin kontent lisenziyasından müstəsna genişlik və keyfiyyətə malik kontent yaradıcısına çevrilməsini təmin edən Netflix Originals-ı (+1.500 kontent 2021 May etibarilə) yaradıb, ona fokuslanmaq idi.',
          'Dördüncü mərhələdə Netflix, daha çox hədəflənmiş bir məzmun istehsal modeli və daha hədəflənmiş bir marketinq modeli ilə çox sürətlə genişlənməsini dəstəkləmək üçün əlindən gələn hər şeyi etdi və nəticədə 2020-ci ilə qədər 190-dan çox ölkəyə genişləndi. Keçən on illiyin əvvələrindən industrilaşmış ölkələrdə kabel kəsmə inqilabının bir hissəsi olaraq istifadəçilərin məzmun istehlakı zövqlərinin dəyişməsi səbəbindən bir çox rəqib artıq tədricən artan itki dərəcələri (churn rate) ilə üzləşməyə başladığı üçün Netflixin böyüməsi sadəcə müstəqil təkliflərdən deyil, həm də rəqib kabel televiziyaları ilə əməkdaşlıdan (məsələn, T-Mobile, Comcast) gəldi. Bundan əlavə, istifadəçi bazasının artması ilə Netflix iki istiqamətdə əhəmiyyətli sıçrayışlar etdi. Birincisi, istifadəçi məlumatları üzərində aparılan təcrübələr, kontentin orijinal olaraq yerli olarsa, platformanın qlobal auditoriya cəlb edə biləcəyi aşkar olundu. İkincisi, Netflix, inkişaf etməkdə olan bazarlarda istifadəçilərin mobil telefonları vasitəsi ilə internetə daxil olmağa meyilli olduqlarını aşkar etdi. Buna görə də şirkət daha aşağı sürətli internet ilə daha səmərəli content izləmə və daha rəqabətli aylıq abunə haqqı təklif etdi. Bu səbəbdən Asiya və Sakit Okean ölkələri istifadəçilərinin sayı 2017-ci ildə 7 milyondan 2021-ci ilin birinci yarısına 28 milyona yüksəldi. BigTechs (Amazon, Google, Apple və ənənəvi Media və Əyləncə şirkətləri tərəfindən hazirda axın edilən bir sənayedə, Netflix-in rəqabət üstünlüyünü qoruya biləcəyi və son on ildən bəri kabel kəsənlər tərəfindən dəstəklənən bazar artımını daha da ələ ala bilib ya da bilməyəcəyi qlobal Telekommunikasiya, Media və Əyləncə industriasının dinamikasının necə formalaşması üçün çox maraqlıdır.'
        ],
        date: new Date(2021, 9, 8).toISOString(),
        author: 'Anar İsmayılov',
        details: []
      },
      ids2: {
        id: 'ids2',
        name: 'LOGISTIKA',
        title: 'Logistika',
        subtitle: [
          '“Yüksək rəqabət və müştərilərin fərqlənən tələbləri Azərbaycandakı hava yükdaşıma şirkətlərini daha çox fərdiləşdirilmiş kampaniyalar təklif etmək üçün öz müştərilərinin məlumat bazasını toplayıb kateqoriyalaşdırmağın əhəmiyyətini artıracaq.”'
        ],
        subcontents: [
          'Komandamızın apardığı ilkin araşdırmalara görə, Azərbaycanda hava yükdaşıma şirkətlərini seçərkən qiymət, qəbul məntəqələri və sürət aparıcı amillərdir. Sənayedə nəzərə çarpacaq dərəcədə gərgin rəqabət aparıcı firmaları bazar payını artırmaq üçün yeni bir dəyər təklifi formalaşdırmağı tələb edir. Hal-hazırda təqribən 55 hava yükdaşıma şirkəti mövcuddur. Bununla belə, onların əksəriyyəti eyni dəyər təklifləri üzərində rəqabət aparır. 1A rəqabət meyarları:',
          'Qrafikdən də göründüyü kimi, firmaların əksəriyyəti dıyır təklifini bəyannamə doldurulma və konkret hədəf qruplarına müxtəlif tanıtım kampaniyaları təklif etməklə həyata keçirir. Karqo firmalarının əldə etməyə çalışdıqları digər mühüm amillər bölgələr daxilində qəbul məntəqələrinin sayını artırmaqdır. Bununla belə, bizim mövzu ilə bağlı ilkin və ikinci dərəcəli araşdırmalarımız Azərbaycanda yükdaşıma sənayesinin gələcəyinin firmaların öz müştərilərinə daha çox fərdiləşdirilmiş təkliflər həyata keçirəcəyini proqnozlaşdırır. Daha dəqiq desək, müştərilərinizi digərlərindən daha yaxşı tanımaq vaxtı artıq yetişib! Böyük onlayn B2C platformaları artıq bu strategiyanı qəbul ediblər. Məsələn, Amazon, Facebook və YouTube istifadəçilərinin nə istədiklərini onların özlərindən daha yaxşı bilir.'
        ],
        date: new Date(2021, 11, 23).toISOString(),
        author: 'Çingiz Novruzzadə',
        details: []
      },
      ids3: {
        id: 'ids3',
        name: 'ALKOQOL',
        title: 'Böyüyən qlobal industriya satışları istehlak dalğası üzərində deyil',
        subtitles: ['Böyüyən qlobal industriya satışları istehlak dalğası üzərində deyil', 'Hazırki trendlər'],
        subcontents: [
          'Alkoqollu içkilər senayesinin yeni dövründə bir şey dəqiqdir: premiumizasiya bazar mənzərəsini həmişəlik dəyişəcək. Sürətli dəyişən istehlakçı davranışları rəqabət balansına təsir göstərdiyi üçün zəif oyunçular mövqelərini qorumaqda əziyyət çəkir. Qalib olmaq üçün oyunçular cəsarətli hərəkətlər etməlidir. Ancaq, hazırki premiumizasiya dalğasını üstələyə bilmək üçün alkoqol istehlakı trendlərinin şirkətlərin bizneslərinə necə təsir etdiyini və hansı strategiyaların tətbiq edilməsini tapmalıdır.',
          'Premiumizasiya:Həm qlobal, həm də yerli perspektivdən baxdıqda dəyişən yaş strukturu və insanların səhhətlərinə olan diqqətləri alkoqol istehlakına mənfi təsir göstərir (aşağıdakı cədvələ nəzər yetirin); bir çox ölkədə alkoqol istehlakı ya mənfi ya da dəyişməz olaraq qalır.',
          'Ancaq bu, şirkətlər üçün satışların azalmasına səbəb olmur, əksinə daha yüksək qiymətlərə görə satışların artmasına gətirib çıxarır (aşağıdakı cədvələ nəzər yetirin) xüsusilə inkişaf etmiş və sənayeləşmiş ölkələrdə baxmayaraq ki, inkişaf etməkdə olan ölkələr üçün son illərdə istehlakın bazar həddinin yetişməsi müşahidə olunur.'
        ],
        date: new Date(2021, 9, 14).toISOString(),
        author: 'Anar İsmayılov',
        details: []
      },
      ids4: {
        id: 'ids4',
        name: 'STARTAP',
        title: 'Azərbaycanın startap ekosisteminin çətinliyi hansılardır?',
        date: new Date(2021, 8, 7).toISOString(),
        author: 'Anar İsmayılov',
        details: []
      },
      ids5: {
        id: 'ids5',
        name: 'MALIYYƏ',
        title:
          'Söhbət şirkətlərin özlərini maliyyələşdirməsindən gedirsə, cavab sadəcə faiz dərəcələrindən asılı deyil',
        date: new Date(2022, 0, 18).toISOString(),
        author: 'Anar İsmayılov',
        details: []
      }
    }
  }
};

const sliceInvoker = () => {
  return {
    name: 'articles',
    initialState,
    reducers: {},
    extraReducers: {}
  };
};

const articlesSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllArticles,
  selectById: selectArticleById,
  selectIds: selectAllArticlesIds
} = articlesAdapter.getSelectors((state) => state.articles.articles);

export default articlesSlice.reducer;
