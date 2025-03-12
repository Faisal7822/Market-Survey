var states={
    dhakawest:["Mirpur Area","Adabor Area","Manikganj Area","Savar Area"],
    bogura:["Bogura Area","Sirajganj Area","Naogaon Area","Rajshahi Area","Chapai Area","Pabna Area"],
    rangpur:["Dinajpur Area","Thakurgaon Area","Rangpur Area","Kurigram Area","Nilphamari Area"]
};

var cities={
    "Mirpur Area":["Balughat Territory","Pallbi Territory","Mirpur Territory"],
    "Adabor Area":["Kallaynpur Territory","Adabor Territory","Tejgaon Territory"],
    "Manikganj Area":["Manikganj Territory","Shibaloy Territory","Dhamrai Territory","Singair Territory"],
    "Savar Area":["Nabinagar Territory","Savar Territory"],
    "Bogura Area":["Sherpur Territory","Bougra Territory","Gabtoli Territory","Gobindaganj Territory"],
    "Sirajganj Area":["Shahjadpur Territory","Ullapara Territory","Sirajganj Territory"],
    "Naogaon Area":["Dhupchacia Territory","Naogaon Territory","Nozipur Territory","Manda Territory"],
    "Rajshahi Area":["Rajshahi Territory","Uposhohor Territory","Putia Territory","Natore Territory"],
    "Chapai Area":["Rohanpur Territory","Chapai Territory","Godagari Territory"],
    "Pabna Area":["Bonpara Territory","Ishwardi Territory","Kashinathpur Territory"],
    "Dinajpur Area":["Joypurhat Territory","Birampur Territory","Dinajpur Territory"],
    "Thakurgaon Area":["Birganj Territory","Pirganj Territory","Thakurgaon Territory","Panchagarh Territory"],
    "Rangpur Area":["Gaibandha Territory","Rangpur Territory","Mahiganj Territory"],
    "Kurigram Area":["Kawnia Territory","Kurigram Terrritory","Nageshwari Territory","Lalmonirhat Territory"],
    "Nilphamari Area":["Saidpur Territory","Domar Territory","Hathibandha Territory"]
};

var market={
    "Joypurhat Territory":["Joypurhat","Akkelpur","Panchbibi"],
    "Birampur Territory":["Birampur","Fulbari"],
    "Dinajpur Territory":["Dinajpur Sadar","Birol","Balubari"],
    "Birganj Territory":["Setabganj","Birganj"],
    "Pirganj Territory":["Pirganj","Ranishankhail"],
    "Thakurgaon Territory":["Thakurgaon Sadar","Boda","Baliadangi"],
    "Panchagarh Territory":["Panchagarh","Tetulia","Atoari"],
    "Gaibandha Territory":["Palashbari","Pirgang RNG","Bonarpara"],
    "Rangpur Territory":["CT Bazar","Gangacharar"],
    "Mahiganj Territory":["Mahiganj","Badarganj","Mithapukur"],
    "Kawnia Territory":["Sundorganj","Kawnia Bazar"],
    "Kurigram Terrritory":["Kurigram Sadar","Ulipur","Rajarhat"],
    "Nageshwari Territory":["Nageshwari Bazar","Bhurungamari"],
    "Lalmonirhat Territory":["Lalmonirhat Bazar","Kaliganj"],
    "Saidpur Territory":["Saidpur Bazar","Nilphamari Sadar","Parbotipur"],
    "Domar Territory":["Domar","Jaldhaka"],
    "Hathibandha Territory":["Hathibandha","Patgram"]
};

var route={
    "Joypurhat":["Puranapoil","Jamalganj","Kalai","Mongolbari","Khetlal","Machua Bazar"],
    "Akkelpur":["Durgaghadah","Purbo Bazar","Akkelpur","Dhomoirhat Naogaon","Madhainagar"],
    "Panchbibi":["Chanpara","Panchbibi","Majina","koria","Rotonpur","Uchai"],
    "Birampur":["Birampur Sadar","Nobabganj Birampur","Katla Bazar","Vaduria Bazar","Raniganj Birampur","Hili Bazar"],
    "Fulbari":["Fulbari Sadar","Koila Khoni","Madilahat","Bejaihat","Aftabganj","Moddhopara"],
    "Dinajpur Sadar":["Khanpur Dinajpur","Boro Bondor","Kosba Road","Bahadur Bazar","Gosaipur","Ramnagar"],
    "Birol":["Kaliganj","Dhokurjhori","Vheradangi","Chokerhat","Bogoldekhi","Norbari"],
    "Balubari":["Karenterhat","New Town","Amtoli Road","10 Mail","Komolpur","Raniganj"],
    "Setabganj":["Bulia","Sultanpur Setabganj","Kaharul Bazar","Mongolpur","Joynondo","Setabganj Sadar"],
    "Birganj":["Jharbari","Gopalganj","13 Mail Road","Kalitola","Murallipur","Kobirajhat"],
    "Pirganj":["Lohagora","Borchuna","Kalopir","Gajor Bazar","Pirganj","College Bazar"],
    "Ranishankhail":["Ranishankhail","Haripur","Nekmorod","Katihar","Jadurani","Kataldangi"],
    "Thakurgaon Sadar":["Vulli Bazar","Akhanagar","Gorea Bazar","Ruhia Bazar","Kochabari","Kalibari"],
    "Boda":["Sakoa","Boda Sadar","Maria","Moydandikhi","Natunhat","Munshirhat"],
    "Baliadangi":["Lahiri Bazar","Baliadangi","Kalomagh","Moharaja","Schoolhat","Horinmari"],
    "Panchagarh":["Jemjute Bazar","Tunirhat","Barister Bazar","Panchagarh Sadar","Jogdol","Kaliyaganj"],
    "Tetulia":["Vojonpur","Tetulia","Buraburi","Shalbahanhat","MAgurmari","Banglabandha"],
    "Atoari":["Atwari Sadar","Mirzapur","Paltapara","Toreya Bazar","Board Bazar","Ramnath"],
    "Palashbari":["Komorpur","Dhaperhat","Merihat","Dholvanga","Nakaihat","Polashbari"],
    "Pirgang RNG":["Kamdia","Fashitola","Gobindaganj","Rajabirat","Ghoraghat","Mohimaganj"],
    "Bonarpara":["Bonarpara","Miar Bazar","Shiber Bazar","Vorot Khali","Ullah Bazar","Badiakhali"],
    "CT Bazar":["CEO Bazar","City Bazar","Vugi","Mulatol","Tarminal","Nowabganj"],
    "Gangacharar":["Gangacharar","Burirhat","Betgari","Paglapir","Purbo Gate","Gozghonta"],
    "Mahiganj":["Lalbagh Rangpur","Jahaz Company","Kamal Kachna","Mahiganj","Modernmor","Station"],
    "Mithapukur":["Gopalpur","Ranipukur","Joigir Bazar","Main Road Mithapukur","Mithapukur","Suran"],
    "Badarganj":["Shempur","Lahirirhat","Bodorganj","Mominpur","Shekherhat","Laldighi"],
    "Sundorganj":["Sundorganj","Noldanga","Bamondanga","Shovadanga","Belka","Domerhat"],
    "Kawnia Bazar":["Madhupur","Anandaghor","Haragach","Pirgacha","Kawnia","Mirbagh"],
    "Kurigram Sadar":["Jolil Biri","Zia Bazar","Pouro Bazar","Mogholbasha","Kholiganj","Kathalbari"],
    "Ulipur":["Chilmari","Bojra","Ulipur Bazar","Romnaghat","Anantapur","Durgapur"],
    "Rajarhat":["Selim Nagar","Singdabori","Nazimkhan","Rajarhat Bazar","Sidurmoti","Rutigram"],
    "Nageshwari Bazar":["Fulbari","Nakhorganj","NAgeshari","Berubari","Raygabj","Vitorbon"],
    "Bhurungamari":["Thanaghat","Bhurungamari","Paglahat","Pateshowari","Sonahat","Andharijor"],
    "Lalmonirhat Bazar":["Ghoshala","Hokars Market","Uttara","Tista","Borobari","Aditmari"],
    "Kaliganj":["Tushvandar","Kakina Bazar","Chaparhat","Shialkhaowa","Chamta Bazar","Botmari Bazar"],
    "Saidpur Bazar":["Saidpur Sadar","Chowmohoni","Ranirbondor","Taraganj","Kishoreganj","Textile"],
    "Nilphamari Sadar":["Tengonmari","Vobaniganj Bazar","Pakerhat","Jadurhat","Panchapukur","Nilphamari Sadar"],
    "Parbotipur":["Parbotipur Sadar","Holdibari","Ambari","Kholahat","Cirirbandor","Sundorpir"],
    "Domar":["Sonahar","Dimla","Ambari","Cilahti","Colony","Domar Sadar"],
    "Jaldhaka":["Koimari","Gulmunda","Kaliganj Jaldhaka","Mirganj","Binnakuri","Jaldhaka"],
    "Hathibandha":["Sofirhat","Bawra Bazar","Borokhata","Hathibandha","Milon Bazar","Saniajan"],
    "Patgram":["Dohogram","Kamarhat","Patgram","Awlahat","Burimari","Sarkarhat"]
};

var countrySelect=document.getElementById("country");
var stateSelect=document.getElementById("state");
var citySelect=document.getElementById("city");
var marketSelect=document.getElementById("market");
var routeSelect=document.getElementById("route");


function populateStates(){
    stateSelect.innerHTML='<option value="">Select A Division </option>';
    citySelect.innerHTML='<option value="">Select A Area </option>';

    var selectedCountry=countrySelect.value;
    if(selectedCountry){
        var selectedStates=states[selectedCountry];
        selectedStates.forEach(function(state){
            var option=document.createElement("option");
            option.value=state;
            option.text=state;
            stateSelect.appendChild(option);
        });
    }
}

function populateCities(){
    citySelect.innerHTML='<option value="">Select A Territory</option>';
    marketSelect.innerHTML='<option value="">Select A Market </option>';
    var selectedState=stateSelect.value;
    if(selectedState){
        var selectedCities=cities[selectedState];
        selectedCities.forEach(function(city){
            var option=document.createElement("option");
            option.value=city;
            option.text=city;
            citySelect.appendChild(option);
        });
    }

}

function populateMarket(){
    marketSelect.innerHTML='<option value="">Select A Markket</option>';
    routeSelect.innerHTML='<option value="">Select A Route </option>';
    var selectedCity=citySelect.value;
    if(selectedCity){
        var selectedMarkets=market[selectedCity];
        selectedMarkets.forEach(function(market){
            var option=document.createElement("option");
            option.value=market;
            option.text=market;
            marketSelect.appendChild(option);
        });
    }

}

function populateRoute(){
    routeSelect.innerHTML='<option value="">Select A Route</option>';
    // marketSelect.innerHTML='<option value="">Select A Market </option>';
    var selectedMarket=marketSelect.value;
    if(selectedMarket){
        var selectedRoutes=route[selectedMarket];
        selectedRoutes.forEach(function(route){
            var option=document.createElement("option");
            option.value=route;
            option.text=route;
            routeSelect.appendChild(option);
        });
    }

}

function populateSales(){
    var outletSelect=document.getElementById("outlet-type");
    var value=outletSelect.value;
    var cetagorySelect=document.getElementById("result");
    cetagorySelect.innerHTML=value;
}

function populateStock(){
    var stockSelect=document.getElementById("stock");
    var value=stockSelect.value;
    var stockSelect=document.getElementById("report");
    stockSelect.innerHTML=value;
}



let url ='https://script.google.com/u/0/home/projects/1RmkPrwdAl0uxhJkW91cwBCLG0ghfoFUwpujsCxihb_yXoBolyfg6Xa6G/edit'
let form=document.querySelector('#form');
form.addEventListener("submit",(e)=>{
    e.target.btn.innerHTML="Data Save";
    let d=new FormData(form);
    fetch(url,{
        method:"POST",
        body:d
    }).then((res)=>res.text())
    .then(()=>{
        e.target.btn.innerHTML="Submit";
        document.getElementById("res").innerHTML="finalRes";
        form.reset();
        setTimeout(()=>{
            document.getElementById("res").innerHTML=''; 
        },50000);
        // console.log(finalRes);
    });
    
    e.preventDefault();
});