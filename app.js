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
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwLco9hTkPXTUSRXuh5_AFF3DJBxVnrEOow&s)';
    } else if (cityName.value === 'Singapore') {
        body.style.backgroundImage = 'url(https://www.agoda.com/wp-content/uploads/2024/04/Featured-image-Singapore-at-night.jpg)';
    } else if (cityName.value === 'Bangkok') {
        body.style.backgroundImage = 'url(https://static.independent.co.uk/2025/01/03/14/newFile-12.jpg)';
    } else if (cityName.value === 'India') {
        body.style.backgroundImage = 'url(https://cdn.oase.id/dynamic/2020/05/09/1003/9kxDsydifW.jpg?w=300)';
    } else if (cityName.value === 'Macau') {
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhwFKpLjUTv-y0XFK4htbUjeTHeDXtJU1cg&s)';
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
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTqD2wohgKU8RbUVb-ZA3fzN66ITSnMKTYHw&s)';
    } else if (cityName.value === 'Kamboja') {
        body.style.backgroundImage = 'url(https://www.indochinatour.com/assets/images/Cambodia-/cambodia-landmark-banner.jpg)';
    } else if (cityName.value === 'Pisa') {
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkpMvLpqDvrBzRSRZv0Mo7gOpmsxgcuY2DvQ&s)';
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
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSujr7zcu9Ql5pQKfqq0EWrkiGrgrJCMAGPQ&s)';
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
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0150ZEgIqe7YrSnguQ9MAjMKPg-6PlcbEw&s)';
    } else if (cityName.value === 'Como') {
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv80l9bbZe6U9BxU3ZZcR4ucGpYsUAVYBx-Q&s)';
    } else if (cityName.value === 'Barcelona') {
        body.style.backgroundImage = 'url(https://statemag.state.gov/wp-content/uploads/2024/05/0624POM-A-3-scaled.jpg)';
    } else if (cityName.value === 'Berlin') {
        body.style.backgroundImage = 'url(https://i.natgeofe.com/n/b234ec7d-a988-4b75-9e65-749ddcbea7a0/citylife_berlin_2B4H3T1_web.jpg)';
    } else if (cityName.value === 'Munich') {
        body.style.backgroundImage = 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0Pnuke1tD4LrqhokJ1oiu1Fb5Tvr7S3pJQ&s)';
    } else if (cityName.value === 'Rotterdam') {
        body.style.backgroundImage = 'url(https://i.natgeofe.com/n/b97f9592-2b89-48e4-9c71-d1abe3a5af5e/GettyImages-874189022.jpg)';
    } else if (cityName.value === 'Utrecht') {
        body.style.backgroundImage = 'url(https://i0.wp.com/collectivetravelguides.com/wp-content/uploads/2022/10/Utrecht-Historic-City-Centre-Utrecht.jpg?fit=2000%2C1333&ssl=1)';
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