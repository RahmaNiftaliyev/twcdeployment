/*
 *   Copyright (c) 2022 
 *   All rights reserved.
 */
export const navigationData = {
  ids: ['id1', 'id2', 'id3', 'id4', 'id5', 'id6'],
  entities: {
    id1: {
      id: 'id1',
      name: 'Sənaye',
      link: '/',
      hasSubmenu: true,
      subMenus: [
        { name: 'DAŞINMAZ ƏMLAK', link: '/industry/immovableproperty' },
        { name: 'MALİYYƏ SERVİSLƏRİ', link: '/industry/financialservice' },
        { name: 'RETAIL', link: '/industry/retail' },
        { name: 'SƏNAYE MƏHSULLARI', link: '/industry/industryproducts' },
        { name: 'TEXNOLOGİYA, MEDİA VƏ ƏYLƏNCƏ', link: '/industry/techmediaandfun' },
        {
          name: 'TRANSPORTASİYA VƏ LOGİSTİKA',
          link: '/industry/transportationandlogistics',
        },
        { name: 'TƏCHİZAT', link: '/industry/supplements' },
        { name: 'FMCG', link: '/industry/fmcg' },
        { name: 'TİKİNTİ', link: '/industry/architect' },
        { name: 'İSTEHSALAT', link: '/industry/manufacture' },
        { name: 'TƏHSİL', link: '/industry/education' },
        { name: 'E-TİCARƏT', link: '/industry/ecommerce' },
        { name: 'ENERJİ', link: '/industry/energy' },
      ],
    },
    id2: {
      id: 'id2',
      name: 'Xidmətlər',
      link: '/',
      hasSubmenu: true,
      subMenus: [
        { name: 'SATIŞ VƏ MARKETİNG', link: '/services/marketing' },
        { name: 'TƏŞKİLATİ', link: '/services/companyable' },
        { name: 'STRATEGİYA VƏ MALİYYƏ', link: '/services/finance' },
        { name: 'KAPİTALLAŞMA', link: '/services/investmentable' },
        {
          name: 'DOING BUSINESS IN AZERBAIJAN',
          link: '/services/businessazerbaijan',
        },
        { name: 'BİZNES PLAN VƏ TİƏ', link: '/services/businessplan' },
        { name: 'BAZAR ARAŞDIRMASI', link: '/services/marketresearch' },
      ],
    },
    id3: {
      id: 'id3',
      name: 'Məqalələr',
      link: '/',
      hasSubmenu: true,
      subMenus: [
        { name: 'NETFLIX', link: '/ideas' },
        { name: 'LOGİSTİKA', link: '/ideas/logistics' },
        { name: 'ALKOQOL', link: '/ideas/alcohol' },
        { name: 'STARTAP', link: '/ideas/startup' },
        { name: 'MALİYYƏ', link: '/ideas/finance' },
      ],
    },
    id4: {
      id: 'id4',
      name: 'Haqqımızda',
      link: '/',
      hasSubmenu: true,
      subMenus: [
        { name: 'TWC HAQQINDA', link: '/about' },
        { name: 'KOMANDAMIZ', link: '/about/team' },
        { name: 'MÜŞTƏRİ LAYİHƏLƏRİMİZ', link: '/about/testimonials' },
        { name: 'PARTNYORLARIMIZ', link: '/about/partneers' },
      ],
    },
    id5: { id: 'id5', name: 'Karyera', link: '/career', hasSubmenu: false },
    id6: { id: 'id6', name: 'Əlaqə', link: '/contact', hasSubmenu: false },
  },
}
