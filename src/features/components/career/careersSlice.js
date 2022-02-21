import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const careersAdapter = createEntityAdapter({
  selectId: (vacancy) => vacancy.id,
  sortComparer: (preVacancy, nextVacancy) => preVacancy.id.localeCompare(nextVacancy.id)
});

const initialState = {
  status: 'idle',
  error: null,
  activeVacation: {},
  vacantions: {
    ids: ['ids1', 'ids2'],
    entities: {
      ids1: {
        id: 'ids1',
        name: 'Associate',
        forwarding: '/career/vacancies/',
        orders: [
          'Müştərilərin tələblərinə uyğun biznes layihələrinin təşkili və icra edilməsi',
          'Təyin edilmiş müştərilərlə görüşmək və problemli vəziyyətin ilkin qiymətləndirilməsinin aparılması',
          'Problemin qısa şəkildə müəyyənləşdirilməsi və fərziyyənin təklif edilməsi üçün müştəri haqqında məlumatın toplanması',
          'Təklif olunan həllin irəli sürülməsi üçün kəmiyyət və keyfiyyət təhlilinin aparılması',
          'Əldə edilən təhlil nəticələrinin birləşdirilməsi və həllərin müştəriyə təqdim edilməsi'
        ],
        qualifications: [
          'Bakalavr dərəcəsi gözlənilir; Magistr/MBA üstünlükdür',
          'Ən az 1 illik menecment konsaltinq təcrübəsi',
          'MS Office səriştəsi gözənilir',
          'Müxtəlif sektorlar haqqında geniş biliklər',
          'Yüksək iş etikası, intellektual maraq və müstəsna müştəri xidməti',
          'İngilis dilini sərbəst bilmək gözləniləndir'
        ],
        personalQuality: [
          'İntensiv iş yükünü strukturlaşdırmaq və istiqamət almadan idarə etmək bacarığı',
          'Komandanın istədiyi nəticəni əldə etmək üçün kömək etmək arzusunda olmaq',
          'Müştərilər və komanda ilə effektiv əməkdaşlıq üçün yüksək emosional zəka',
          'Şirkət rəhbərləri və səhmdarlarla işləmək üçün yüksək özgüvən və yetkinlik'
        ]
      },
      ids2: {
        id: 'ids2',
        name: 'Biznes konsultant',
        forwarding: '/career/vacancies/',
        orders: [
          'Müştərilərin tələblərinə uyğun biznes layihələrinin təşkili və icra edilməsi',
          'Təyin edilmiş müştərilərlə görüşmək və problemli vəziyyətin ilkin qiymətləndirilməsinin aparılması',
          'Problemin qısa şəkildə müəyyənləşdirilməsi və fərziyyənin təklif edilməsi üçün müştəri haqqında məlumatın toplanması',
          'Təklif olunan həllin irəli sürülməsi üçün kəmiyyət və keyfiyyət təhlilinin aparılması',
          'Əldə edilən təhlil nəticələrinin birləşdirilməsi və həllərin müştəriyə təqdim edilməsi'
        ],
        qualifications: [
          'Bakalavr dərəcəsi gözlənilir; Magistr/MBA üstünlükdür',
          'Menecement konsaltinq təcrübəsi tələb olunmur, lakin üstünlükdür',
          'MS Office səriştəsi gözənilir',
          'Müxtəlif sektorlar haqqında geniş biliklər',
          'Yüksək iş etikası, intellektual maraq və müstəsna müştəri xidməti',
          'İngilis dilini sərbəst bilmək gözləniləndir'
        ],
        personalQuality: [
          'İntensiv iş yükünü strukturlaşdırmaq və istiqamət almadan idarə etmək bacarığı',
          'Komandanın istədiyi nəticəni əldə etmək üçün kömək etmək arzusunda olmaq',
          'Müştərilər və komanda ilə effektiv əməkdaşlıq üçün yüksək emosional zəka',
          'Şirkət rəhbərləri və səhmdarlarla işləmək üçün yüksək özgüvən və yetkinlik'
        ]
      }
    }
  }
};

const sliceInvoker = () => {
  return {
    name: 'vacantions',
    initialState,
    reducers: {},
    extraReducers: {}
  };
};

const careersSlice = createSlice(sliceInvoker());

export const {
  selectAll: selectAllVacancies,
  selectById: selectVacantionById,
  selectIds: selectVacationIds
} = careersAdapter.getSelectors((state) => state.careers.vacantions);

export default careersSlice.reducer;
