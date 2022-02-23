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
        { id: 'sub-1', name: 'DAŞINMAZ ƏMLAK', link: '/industry/immovableproperty' },
        { id: 'sub-2', name: 'MALİYYƏ SERVİSLƏRİ', link: '/industry/financialservice' },
        { id: 'sub-3', name: 'RETAIL', link: '/industry/retail' },
        { id: 'sub-4', name: 'SƏNAYE MƏHSULLARI', link: '/industry/industryproducts' },
        { id: 'sub-5', name: 'TEXNOLOGİYA, MEDİA VƏ ƏYLƏNCƏ', link: '/industry/techmediaandfun' },
        {
          id: 'sub-6',
          name: 'TRANSPORTASİYA VƏ LOGİSTİKA',
          link: '/industry/transportationandlogistics'
        },
        { id:'sub-7', name: 'TƏCHİZAT', link: '/industry/supplements' },
        { id:'sub-8', name: 'FMCG', link: '/industry/fmcg' },
        { id:'sub-9', name: 'TİKİNTİ', link: '/industry/architect' },
        { id:'sub-10', name: 'İSTEHSALAT', link: '/industry/manufacture' },
        { id:'sub-11', name: 'TƏHSİL', link: '/industry/education' },
        { id:'sub-12', name: 'E-TİCARƏT', link: '/industry/ecommerce' },
        { id:'sub-13', name: 'ENERJİ', link: '/industry/energy' }
      ]
    },
    id2: {
      id: 'id2',
      name: 'Xidmətlər',
      link: '/',
      hasSubmenu: true,
      subMenus: [
        { id: 'sub-1', name: 'SATIŞ VƏ MARKETİNG', link: '/services/marketing' },
        { id: 'sub-2', name: 'TƏŞKİLATİ', link: '/services/companyable' },
        { id: 'sub-3', name: 'STRATEGİYA VƏ MALİYYƏ', link: '/services/finance' },
        { id: 'sub-4', name: 'KAPİTALLAŞMA', link: '/services/investmentable' },
        {
          id: 'sub-5',
          name: 'DOING BUSINESS IN AZERBAIJAN',
          link: '/services/businessazerbaijan'
        },
        { id: 'sub-6', name: 'BİZNES PLAN VƏ TİƏ', link: '/services/businessplan' },
        { id: 'sub-7', name: 'BAZAR ARAŞDIRMASI', link: '/services/marketresearch' }
      ]
    },
    id3: {
      id: 'id3',
      name: 'Məqalələr',
      link: '/',
      hasSubmenu: true,
      subMenus: [
        { id: 'sub-1', name: 'NETFLIX', link: '/ideas' },
        { id: 'sub-2', name: 'LOGİSTİKA', link: '/ideas/logistics' },
        { id: 'sub-3', name: 'ALKOQOL', link: '/ideas/alcohol' },
        { id: 'sub-4', name: 'STARTAP', link: '/ideas/startup' },
        { id: 'sub-5', name: 'MALİYYƏ', link: '/ideas/finance' }
      ]
    },
    id4: {
      id: 'id4',
      name: 'Haqqımızda',
      link: '/',
      hasSubmenu: true,
      subMenus: [
        { id: 'sub-1', name: 'TWC HAQQINDA', link: '/about' },
        { id: 'sub-2', name: 'KOMANDAMIZ', link: '/about/team' },
        { id: 'sub-3', name: 'MÜŞTƏRİ LAYİHƏLƏRİMİZ', link: '/about/testimonials' },
        { id: 'sub-4', name: 'PARTNYORLARIMIZ', link: '/about/partneers' }
      ]
    },
    id5: { id: 'id5', name: 'Karyera', link: '/career', hasSubmenu: false },
    id6: { id: 'id6', name: 'Əlaqə', link: '/contact', hasSubmenu: false }
  }
};
