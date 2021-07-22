window.setTimeout(function() {
    const mass = [
    {
         'id': 'RU',
         'adress': {
             'Full_name': 'Test Testing',
             'street': 'Lugovaya,26,31',
             'city': 'Dimitrovgrad',
             'zip_code': '433514',  
             'region': '73',
             'phone': '+79991251222',
             'country': 'Russian Federation'
         }
    },
    {
         'id': 'US',
         'adress': {
             'Full_name': 'Test Testing',
             'street': '1737  Sheila Lane',
             'city': 'Wendover',
             'zip_code': '89883',
             'region': 'VA',
             'phone': '408-571-0862',
             'country': 'United States'
         }

    },
    {
         'id': 'DE',
         'adress': {
             'Full_name': 'Test Testing',
             'street': 'Charlottenburger Str. 7',
             'city': 'Berlin',
             'zip_code': '13086',
             'phone': '0201 13 69199',
             'country': 'Germany'
         }

    },
    {
         'id': 'GB',
         'adress': {
             'Full_name': 'Test Testing',
             'street': '14 Beaupre Avenue',
             'city': 'Wisbech',
             'zip_code': 'PE14 8PB',
             'phone': '077 4956 5340',
             'country': 'United Kingdom'
         }

    },
    {
         'id': 'FR',
         'adress': {
             'Full_name': 'Test Testing',
             'street': '130 rue Descartes',
             'city': 'STRASBOURG',
             'zip_code': '67000',
             'phone': '03.31.37.92951',
             'country': 'France'
         }

    },
    {
         'id': 'ES',
         'adress': {
             'Full_name': 'Test Testing',
             'street': 'Extramuros 34',
             'city': 'Morata de Tajuña',
             'zip_code': '28530',
             'phone': '713 406 865',
             'country': 'Spain',
             'region': 'MD'
         }

    },
    {
         'id': 'UA',
         'adress': {
             'Full_name': 'Test Testing',
             'street': 'KHmelnitskogo B. Ul., bld. 28, appt. 36',
             'city': 'Odessa',
             'zip_code': '65001',
             'phone': '+380 (048) 733-69858',
             'country': 'Ukraine',
             'region': '65'
         }

    },
    {
         'id': 'CN',
         'adress': {
             'Full_name': 'Test Testing',
             'street': 'Nan Bei Da Jie 75hao Yu Xi Shi Gong An Ju',
             'city': 'YuXi',
             'zip_code': '653100',
             'phone': '13013783616',
             'country': 'China',
             'region': '53'
         }

    },
    {
         'id': 'AE',
         'adress': {
             'Full_name': 'Test Testing',
             'street': 'Box No. 43075',
             'city': 'Dubai',
             'zip_code': '43051',
             'phone': '13013783616',
             'country': 'United Arab Emirates',
             'region': 'DB'
         }

    }
  ]
    const test = document.querySelector('#ec-country');
  
     if (test) {
         test.addEventListener('change', () => { 
           mass.forEach(({id, adress}) => {    
             if (id === `${test.value}`){
                 new Promise((resolve) => {
                   Ecwid.OnAPILoaded.add(() => {
                     Ecwid.Cart.setAddress({
                           'name': `${adress.Full_name}`,
                           'street': `${adress.street}`,
                           'city': `${adress.city}`,
                           'countryName': `${adress.country}`,
                           'postalCode': `${adress.zip_code}`,
                           'stateOrProvinceCode': `${adress.region}`,
                           'phone': `${adress.phone}`
                     }, () => resolve('ok'), (code, msg) => resolve(code + msg))
                   })
                 })
             }
         })
       });
     }
  },1000);
  