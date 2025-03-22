const body = document.getElementsByTagName(`body`)[0];
const daily = document.getElementById('forecast');
const cityDisplay = document.getElementById(`city-display`);
const date = document.getElementById(`date`);
const temperature = document.getElementById(`temperature`);
const windSpeed = document.getElementById(`wind-speed`);
const cityName = document.getElementById(`city-name`);


const formattedDate = (date) => {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    const newDate = new Date(date);
    return newDate.toLocaleDateString('id-ID', options);
};

const formattedShortDate = (date) => {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const newDate = new Date(date);
    return newDate.toLocaleDateString('id-ID', options);
  };

    const getWeather = async (latitude, longitude) => {
         const WEATHER_URL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,apparent_temperature_max&current=temperature_2m,weather_code,wind_speed_10m`;
        document.getElementById("loading").style.display = "block";

    const response = await fetch(WEATHER_URL);
    const data = await response.json();
    document.getElementById("loading").style.display = "none";

    date.innerText = formattedDate(data.current.time);
    temperature.innerText = data.current.temperature_2m + '°';
    windSpeed.innerText = data.current.wind_speed_10m + 'km/h';

    daily.innerHTML = '';

    for (let i = 1; i < data.daily.time.length; i++) {
        daily.innerHTML += `
        <div class="text">
                <span class="time">${formattedShortDate(data.daily.time[i])}</span>
                <img width="100px" src="${WMO[data.daily.weather_code[i]].day.image}" alt="">
                <span class="cond">${WMO[data.daily.weather_code[i]].day.description}</span>
                <br>
                <span class="temp">${data.daily.apparent_temperature_max[i]}&deg;C</span>
                </div>
         </div>
    </div>
    `;
    }
};


const getGeocoding = async () => {
    let name = cityName.value
    cityDisplay.innerText = name;
    document.getElementById("loading").style.display = "block";

    if (cityName.value === 'Jakarta') {
        body.style.backgroundImage = 'url(https://images.pexels.com/photos/3441726/pexels-photo-3441726.jpeg?cs=srgb&dl=pexels-tomfisk-3441726.jpg&fm=jpg)';
    } else if (cityName.value === 'Bandung') {
        body.style.backgroundImage = 'url(https://asset.kompas.com/crops/GEIiQSsEkCKrIGWEjOp_GaYHIHA=/0x0:1000x667/1200x800/data/photo/2022/07/25/62dec6809a479.jpg)';
    } else if (cityName.value === 'Surabaya') {
        body.style.backgroundImage = 'url(https://ikbis.ac.id/wp-content/uploads/2021/03/Anda-di-Surabaya-Inilah-Pentingnya-Menggunakan-Konsultan-Pajak-Surabaya.jpg)';
    } else if (cityName.value === 'Depok') {
        body.style.backgroundImage = 'url(https://www.pajak.com/storage/2024/01/1619407837104474-0.jpg)';
    } else if (cityName.value === 'Bogor') {
        body.style.backgroundImage = 'url(https://mediaim.expedia.com/destination/1/1c1b644fc26571dd00b23850b1ed1f00.jpg)';
    } else if (cityName.value === 'Malang') {
        body.style.backgroundImage = 'url(https://bic.id/wp-content/uploads/2023/07/Alun-Alun_Tugu_Kota_Malang-HD.webp)';
    } else if (cityName.value === 'Lampung') {
        body.style.backgroundImage = 'url(https://www.agoda.com/wp-content/uploads/2024/06/Lampungs-landmark-siger-tower.jpg)';
    } else if (cityName.value === 'Padang') {
        body.style.backgroundImage = 'url(https://asset.kompas.com/crops/jbgjGxOn3X773sen40WZH1DB6pg=/0x0:1000x667/1200x800/data/photo/2020/08/28/5f48688bddfb2.jpg)';
    } else if (cityName.value === 'Pekanbaru') {
        body.style.backgroundImage = 'url(https://backend.sas-hospitality.com//uploads/artikel/Pekanbaru.jpg)';
    } else if (cityName.value === 'Bali') {
        body.style.backgroundImage = 'url(https://d3p0bla3numw14.cloudfront.net/news-content/img/2021/05/03112735/Tempat-Tinggal-Terbaik-di-Bali.jpg)';
    } else if (cityName.value === 'Makassar') {
        body.style.backgroundImage = 'url(https://uim-makassar.ac.id/wp-content/uploads/2022/07/1_jD-8s4iAF5IBBUi3LlMQog.png)';
    } else if (cityName.value === 'Aceh') {
        body.style.backgroundImage = 'url(https://asset.kompas.com/crops/-H8DB_DqAh1BonZuWR18xxgJkuI=/0x0:1000x667/1200x800/data/photo/2022/07/24/62dd2cd042f85.jpg)';
    } else if (cityName.value === 'Papua') {
        body.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/c/cd/Pulau_Triton.jpg)';
    } else if (cityName.value === 'Medan') {
        body.style.backgroundImage = 'url(https://www.agoda.com/wp-content/uploads/2024/09/Featured-image-Al-Mashun-Mosque-Medan-Indonesia.jpg)';
    } else if (cityName.value === 'Semarang') {
        body.style.backgroundImage = 'url(https://pariwisata.semarangkota.go.id/backend/web/upload/wisata/1702998255_kotalama.jpg)';
    } else if (cityName.value === 'Palembang') {
        body.style.backgroundImage = 'url(https://parksidehotels.co.id/wp-content/uploads/2023/10/ads59a3e1f785d2d.jpg)';
    } else if (cityName.value === 'Yogyakarta') {
        body.style.backgroundImage = 'url(https://kotajogja.co.id/wp-content/uploads/2023/12/Keindahan-Sunset-di-Kawasan-Wisata-Tugu-Jogja.jpg)';
    } else if (cityName.value === 'Jogja') {
        body.style.backgroundImage = 'url(https://kotajogja.co.id/wp-content/uploads/2023/12/Keindahan-Sunset-di-Kawasan-Wisata-Tugu-Jogja.jpg)';
    } else if (cityName.value === 'Maluku') {
        body.style.backgroundImage = 'url(https://authentic-indonesia.com/wp-content/uploads/2020/06/ora-beach-in-seram-island-maluku-1.jpg)';
    } else if (cityName.value === 'Jambi') {
        body.style.backgroundImage = 'url(https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/136/2023/08/17/Museum-Gentala-Arasy-3306544405.jpg)';
    } else if (cityName.value === 'New York') {
        body.style.backgroundImage = 'url(https://www.austrian.com/aircore/media/66/eyJpZGVudGlmaWVyIjoyMzE1NDIsInR5cGUiOiJhc3NldCJ9_1.png)';
    } else if (cityName.value === 'Los Angeles') {
        body.style.backgroundImage = 'url(https://lacounty.gov/wp-content/uploads/2022/03/shutterstock_1418018357-scaled.jpg)';
    } else if (cityName.value === 'Sydney') {
        body.style.backgroundImage = 'url(https://cms.finnair.com/resource/blob/671300/3523a759b61b788b834fe56aa57fa255/sydney-main-data.jpg?impolicy=crop&width=3995&height=2247&x=3&y=0)';
    } else if (cityName.value === 'Paris') {
        body.style.backgroundImage = 'url(https://img.static-af.com/transform/45cb9a13-b167-4842-8ea8-05d0cc7a4d04/)';
    } else if (cityName.value === 'London') {
        body.style.backgroundImage = 'url(https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg)';
    } else if (cityName.value === 'Mecca') {
        body.style.backgroundImage = 'url(https://cdn.britannica.com/43/156343-050-CD194769/pilgrims-Muslim-Kabah-Great-Mosque-of-Mecca.jpg)';
    } else if (cityName.value === 'Madina') {
        body.style.backgroundImage = 'url(https://skmahdi.wordpress.com/wp-content/uploads/2013/03/masjid-nabawi1.jpg)';
    } else if (cityName.value === 'Rome') {
        body.style.backgroundImage = 'url(https://images.ctfassets.net/lmkdg513arga/3Vhm0NRK3OMQIuSo9EDjnp/71b0844f15fbf5e0bff2751f45f6180e/iStock-539115110.jpg?w=2764&fm=jpg)';
    } else if (cityName.value === 'Venice') {
        body.style.backgroundImage = 'url(https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75)';
    } else if (cityName.value === 'Madrid') {
        body.style.backgroundImage = 'url(https://a.travel-assets.com/findyours-php/viewfinder/images/res70/348000/348698-Madrid.jpg)';
    } else if (cityName.value === 'Tokyo') {
        body.style.backgroundImage = 'url(https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg)';
    } else if (cityName.value === 'Seoul') {
        body.style.backgroundImage = 'url(https://www.agoda.com/wp-content/uploads/2024/08/Namsan-Tower-during-autumn-in-Seoul-South-Korea.jpg)';
    } else if (cityName.value === 'Pyongyang') {
        body.style.backgroundImage = 'url(https://static01.nyt.com/images/2019/10/04/world/04nkorea/merlin_143608950_76667c52-d787-4e76-ad42-e7bcc3c19b1b-superJumbo.jpg)';
    } else if (cityName.value === 'Kuala Lumpur') {
        body.style.backgroundImage = 'url(https://a.travel-assets.com/findyours-php/viewfinder/images/res70/473000/473015-Kuala-Lumpur.jpg)';
    } else if (cityName.value === 'Singapore') {
        body.style.backgroundImage = 'url(https://www.agoda.com/wp-content/uploads/2024/04/Featured-image-Singapore-at-night.jpg)';
    } else if (cityName.value === 'Bangkok') {
        body.style.backgroundImage = 'url(https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg)';
    } else if (cityName.value === 'India') {
        body.style.backgroundImage = 'url(https://cdn.oase.id/dynamic/2020/05/09/1003/9kxDsydifW.jpg?w=300)';
    } else if (cityName.value === 'Macau') {
        body.style.backgroundImage = 'url(https://digital.ihg.com/is/image/ihg/ic-alliance-resorts-macau-7964412261-2x1)';
    } else if (cityName.value === 'Las Vegas') {
        body.style.backgroundImage = 'url(https://static01.nyt.com/images/2023/04/13/multimedia/13hours-LasVegas-03-zjkm/13hours-LasVegas-03-zjkm-videoSixteenByNineJumbo1600-v2.jpg)';
    } else if (cityName.value === 'Amsterdam') {
        body.style.backgroundImage = 'url(https://www.pelago.com/img/destinations/amsterdam/0721-0744_amsterdam.jpg)';
    } else if (cityName.value === 'Istanbul') {
        body.style.backgroundImage = 'url(https://assets.micontenthub.com/traveloffers/travel-tips/the-exterior-of-the-6th-century-byzantine-eastern-roman-hagia-sophia-istanbul_AwpCNMYXQ.jpg)';
    } else if (cityName.value === 'Dubai') {
        body.style.backgroundImage = 'url(https://a.travel-assets.com/findyours-php/viewfinder/images/res70/56000/56828-Dubai.jpg)';
    } else if (cityName.value === 'Mexico') {
        body.style.backgroundImage = 'url(https://www.dreamandtravel.com/wp-content/uploads/2023/10/LANDMARKS-MEXICO.jpg)';
    } else if (cityName.value === 'Rio De Janeiro') {
        body.style.backgroundImage = 'url(https://blog.rentcars.com/wp-content/uploads/2019/10/things-to-do-rio-de-janeiro-1.jpg)';
    } else if (cityName.value === 'Kamboja') {
        body.style.backgroundImage = 'url(https://www.indochinatour.com/assets/images/Cambodia-/cambodia-landmark-banner.jpg)';
    } else if (cityName.value === 'Pisa') {
        body.style.backgroundImage = 'url(https://img.oastatic.com/img2/93332055/max/variant.jpg)';
    } else if (cityName.value === 'China') {
        body.style.backgroundImage = 'url(https://www.chinahangzhoutour.com/upload/ueditor/image/20200908/6373517308323377606991413.jpg)';
    } else if (cityName.value === 'San Fransisco') {
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0HjUY5h0wPOfJ4nAXz8RAcMcIOcUsuMqeOw&s)';
    } else if (cityName.value === 'Athens') {
        body.style.backgroundImage = 'url(https://img.klm.com.cn/images/media/2347871C-C943-4032-AEC90234F6C67860)';
    } else if (cityName.value === 'Giza') {
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6V_E6ThV08we20soq56PpokNlZHsy3XRgTA&s)';
    } else if (cityName.value === 'Cairo') {
        body.style.backgroundImage = 'url(https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/4:3/w_1776,h_1332,c_limit/Cairo%20Egypt_GettyImages-1370918272.jpg)';
    } else if (cityName.value === 'Peru') {
        body.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg)';
    } else if (cityName.value === 'Moskow') {
        body.style.backgroundImage = 'url(https://mmc.tirto.id/image/2022/02/22/istock-621233424_ratio-16x9.jpg)';
    } else if (cityName.value === 'Magelang') {
        body.style.backgroundImage = 'url(https://asset.kompas.com/crops/qs7lqo0UsFE7TXqwfxF7RAaYYA0=/1x0:1024x682/1200x800/data/photo/2020/05/11/5eb950a1c8fb3.jpeg)';
    } else if (cityName.value === 'Washington') {
        body.style.backgroundImage = 'url(https://www.travelandleisure.com/thmb/T4h8XPaBn5i44nab5kkrw3FJZeI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-dc-lead-image-WDCTG1223-dea2e651476348bb8e249882f63909ed.jpg)';
    } else if (cityName.value === 'Kendal') {
        body.style.backgroundImage = 'url(https://bagianumum.kendalkab.go.id/assets/img/kantor_pemkab.jpg)';
    } else if (cityName.value === 'Tasikmalaya') {
        body.style.backgroundImage = 'url(https://mediaim.expedia.com/destination/2/5f6ceee3f3b52cf0dcf1f1a7850e8fd8.jpg)';
    } else if (cityName.value === 'Perth') {
        body.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/3/3e/Perth_CBD_skyline_from_State_War_Memorial_Lookout%2C_2023%2C_04_b.jpg)';
    } else if (cityName.value === 'Canberra') {
        body.style.backgroundImage = 'url(https://canberra.com.au/_next/image?url=https%3A%2F%2Fcms.canberra.com.au%2Fwp-content%2Fuploads%2F2022%2F03%2F2413_actgovt_001.jpg&w=3840&q=75)';
    } else if (cityName.value === 'Milan') {
        body.style.backgroundImage = 'url(https://media.admiddleeast.com/photos/670fb282d7b0743e64bc9de3/16:9/w_2560%2Cc_limit/GettyImages-1669837323.jpg)';
    } else if (cityName.value === 'Como') {
        body.style.backgroundImage = 'url(https://images.ctfassets.net/pk1obm75ch5m/deTihVVbjwqd6S9KNCL8s/d9f3ab26faa3dd3567b8ed121f46b896/holiday-homes-lake-como.jpg)';
    } else if (cityName.value === 'Barcelona') {
        body.style.backgroundImage = 'url(https://statemag.state.gov/wp-content/uploads/2024/05/0624POM-A-3-scaled.jpg)';
    } else if (cityName.value === 'Berlin') {
        body.style.backgroundImage = 'url(https://i.natgeofe.com/n/b234ec7d-a988-4b75-9e65-749ddcbea7a0/citylife_berlin_2B4H3T1_web.jpg)';
    } else if (cityName.value === 'Munich') {
        body.style.backgroundImage = 'url(https://easyconferences.eu/imbsa2022/wp-content/uploads/2022/11/ian-kelsall-MEUvVqkU3QI-unsplash-scaled.jpg)';
    } else if (cityName.value === 'Rotterdam') {
        body.style.backgroundImage = 'url(https://i.natgeofe.com/n/b97f9592-2b89-48e4-9c71-d1abe3a5af5e/GettyImages-874189022.jpg)';
    } else if (cityName.value === 'Utrecht') {
        body.style.backgroundImage = 'url(https://i0.wp.com/collectivetravelguides.com/wp-content/uploads/2022/10/Utrecht-Historic-City-Centre-Utrecht.jpg?fit=2000%2C1333&ssl=1)';
    } else if (cityName.value === 'Helsinki') {
        body.style.backgroundImage = 'url(https://res.cloudinary.com/as-tallink-grupp/image/upload/f_auto,fl_lossy,q_auto:best,h_1050,w_2448/travel/destinations/finland/helsinki/helsinki-night-wide.jpg)';
    }  else if (cityName.value === 'Lapland') {
        body.style.backgroundImage = 'url(https://www.lapland.fi/uploads/2020/06/eb6cc8c2-northern-lights-aurora-borealis-yllas-lapland-finland-alexander-kuznetsov-all-about-lapland.jpg)';
    } else if (cityName.value === 'Subang') {
        body.style.backgroundImage = 'url(https://www.rukita.co/stories/wp-content/uploads/2022/05/kebun-teh-ciater-subang-1.png)';
    } else if (cityName.value === 'Doha') {
        body.style.backgroundImage = 'url(https://a.travel-assets.com/findyours-php/viewfinder/images/res70/481000/481987-Doha-And-Vicinity.jpg)';
    } else if (cityName.value === 'Edinburgh') {
        body.style.backgroundImage = 'url(https://www.grayline.com/wp-content/uploads/2025/02/Gray-Line-Edinburgh-Scotland-7-scaled.jpg)';
    } else if (cityName.value === 'Porto') {
        body.style.backgroundImage = 'url(https://followthecamino.com/wp-content/uploads/2022/08/AdobeStock_242130552.jpeg)';
    } else if (cityName.value === 'Lisbon') {
        body.style.backgroundImage = 'url(https://static.portugalbywine.com/media//MULTIMEDIA/FOTOS/80/0003E5DC2E71E4_1920.jpg)';
    } else if (cityName.value === 'Prague') {
        body.style.backgroundImage = 'url(https://undiscoveredpathhome.com/wp-content/uploads/2024/09/best-time-of-year-to-visit-prague-prague-castle-scaled.jpeg)';
    } else if (cityName.value === 'Brussels') {
        body.style.backgroundImage = 'url(https://www.brusselsairlines.com/aircore/media/66/eyJpZGVudGlmaWVyIjoyNzcyLCJ0eXBlIjoiYXNzZXQifQ==_2.png)';
    } else if (cityName.value === 'Malta') {
        body.style.backgroundImage = 'url(https://internationalliving.com/_next/image/?url=https%3A%2F%2Fimages.ctfassets.net%2Fwv75stsetqy3%2F7rTzoyS6NbT9DUhSyb2F9E%2F7b2e47b65e3a5a06f6c3b236b442947b%2FMalta.jpg%3Fq%3D60%26fit%3Dfill%26fm%3Dwebp&w=3840&q=60)';
    } else if (cityName.value === 'Zurich') {
        body.style.backgroundImage = 'url(https://media.myswitzerland.com/image/fetch/c_lfill,g_auto,w_3200,h_1800/f_auto,q_80,fl_keep_iptc/https://www.myswitzerland.com/-/media/dam/resources/places/z/u/zurich/images%20summer/26937_32001800.jpeg)';
    } else if (cityName.value === 'Purwakarta') {
        body.style.backgroundImage = 'url(https://wisatamilenial.com/wp-content/uploads/2020/12/Spot-Foto-7-Pilar-di-Hidden-Valley-Hills-Purwakarta-Image-From-@ananuraena97.jpg)';
    }  else if (cityName.value === 'Purwokerto') {
        body.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/4/4a/View_of_the_General_Gatot_Subroto_Monument.jpg)';
    } else if (cityName.value === 'Kuningan') {
        body.style.backgroundImage = 'url(https://smkpertiwikng.sch.id/wp-content/uploads/2022/09/046125c504b7472d89b06a3b3f49fdd2d25a7570d14ed44b86de5cf9aeb8c494-1.jpg)';
    } else if (cityName.value === 'Cirebon') {
        body.style.backgroundImage = 'url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4vdt_mxqQnndiRroArOM4ONhJXKi4_Rm9MNFTiFYRI2H8baIXXX3wXLVaIImOUTX7ZeoZEmtJBbx1lpWpnkN7yD6JFSRhW4haUWrVz3FUzaJ1IHaxW0gd0BcbfRwdZXpNHSeRTDaxVvw/s1600/1000409042.jpg)';
    } else if (cityName.value === 'Bukittinggi') {
        body.style.backgroundImage = 'url(https://klikpositif.com/wp-content/uploads/2022/03/Jam-Gadang-Bukittinggi-scaled.jpg)';
    } else if (cityName.value === 'Raja Ampat') {
        body.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/8/88/Raja_Ampat%2C_Mutiara_Indah_di_Timur_Indonesia.jpg)';
    } else if (cityName.value === 'Maldives') {
        body.style.backgroundImage = 'url(https://static.independent.co.uk/2024/01/07/11/3-4-scaled.png)';
    } else if (cityName.value === 'Lombok') {
        body.style.backgroundImage = 'url(https://i0.wp.com/reporterontheroad.com/wp-content/uploads/Lombok_Indonesie56.jpg?resize=1536%2C878&ssl=1)';
    } else if (cityName.value === 'Jeddah') {
        body.style.backgroundImage = 'url(https://webook.com/blog/wp-content/uploads/2024/07/jeddah-1536x864.jpg)';
    } else if (cityName.value === 'Riyadh') {
        body.style.backgroundImage = 'url(https://upload.wikimedia.org/wikipedia/commons/2/20/Riyadh_Skyline.jpg)';
    } else if (cityName.value === 'Hanoi') {
        body.style.backgroundImage = 'url(https://images.squarespace-cdn.com/content/v1/6298cb774cf3830bc9b342bf/1725269488958-1NZA9Q8OMM0382X9R1PJ/hanoi-vietnam-imperial-citadel-1.jpg)';
    } else if (cityName.value === 'Firenze', 'Florence') {
        body.style.backgroundImage = 'url(https://www.italia.it/content/dam/tdh/en/interests/toscana/firenze/firenze/media/20210401173629-firenze-toscana-gettyimages-1145040590.jpg)';
    } else if (cityName.value === 'Bologna') {
        body.style.backgroundImage = 'url(https://lp-cms-production.imgix.net/2023-06/iStock-814346692.jpg)';
    } else if (cityName.value === 'Verona') {
        body.style.backgroundImage = 'url(https://a.travel-assets.com/findyours-php/viewfinder/images/res70/340000/340577-Veneto-Italy.jpg)';
    } else if (cityName.value === 'Palermo') {
        body.style.backgroundImage = 'url(https://www.italia.it/content/dam/tdh/en/interests/sicilia/palermo/palermo-in-48-ore/media/1600X1000_cosa_vedere_a_palermo_hero.jpg)';
    } else if (cityName.value === 'Turin') {
        body.style.backgroundImage = 'url(https://www.italia.it/content/dam/tdh/en/interests/piemonte/torino/torino-in-48-ore/media/20220223132855-piazza-san-carlo-torino-piemonte-shutterstock-2102981095-rid.jpg)';
    } else if (cityName.value === 'Amalfi') {
        body.style.backgroundImage = 'url(https://media.cntraveler.com/photos/58ef9dfd0c86721c06473677/16:9/w_2048,h_1152,c_limit/positano-italy-GettyImages-584209898.jpg)';
    } else if (cityName.value === 'Naples') {
        body.style.backgroundImage = 'url(https://www.citalia.com/-/media/bynder/citalia-destinations/italy/cities/naples/naples-2022-city-view-shutterstock-2130956180-hybris.jpg?rev=7c4a6d8bd995490280ff74dcbda15d3e&h=480.375&w=1081.5)';
    } 


    const GEOCODING_URL =  `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=1&language=en&format=json`;

    const response = await fetch(GEOCODING_URL);
    const data = await response.json();
    document.getElementById("loading").style.display = "none";

    let latitude = data.results[0].latitude;
    let longitude = data.results[0].longitude;

    getWeather(latitude, longitude);
};

const getLocation = () => {
    cityDisplay.innerText = 'Jakarta';

     body.style.backgroundImage = 'url(https://images.pexels.com/photos/3441726/pexels-photo-3441726.jpeg?cs=srgb&dl=pexels-tomfisk-3441726.jpg&fm=jpg)';

    navigator.geolocation.getCurrentPosition((postion) => {
        getWeather(postion.coords.latitude, postion.coords.longitude);
    });
};

getLocation();