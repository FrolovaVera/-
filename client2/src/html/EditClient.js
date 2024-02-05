import { Context } from "../index"
import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react"
import { set } from "mobx";
import IMask from 'imask';

function EditClientPage() {
const {store} = useContext(Context); 


const [Name, setName] = useState(store.currClient.name);
const [Surname, setSurname] = useState(store.currClient.surname);
const [Fathersname, setFathersname] = useState(store.currClient.fathers_name);
const [Dateofbirth, setDateofbirth] = useState(store.currClient.date_of_birth);
const [Gender, setGender] = useState(store.currClient.Gender);
const [Phonehouse, setPhonehouse] = useState(store.currClient.Phonehouse);
const [Phonemob, setPhonemob] = useState(store.currClient.Phonemob);
const [Email, setEmail] = useState(store.currClient.Email);

const [Passport, setPassport] = useState(store.currClient.Passport);
const [Passportseries, setPassportseries] = useState(store.currClient.Passportseries);
const [Issuedby, setIssuedby] = useState(store.currClient.Issuedby);
const [Dateofissue, setDateofissue] = useState(store.currClient.Dateofissue);
const [Identnumber, setIdentnumber] = useState(store.currClient.Identnumber);
const [Placeofbirth, setPlaceofbirth] = useState(store.currClient.Placeofbirth);
const [Familystatus, setFamilystatus] = useState(store.currClient.Familystatus);
const [Citizenship, setCitizenship] = useState(store.currClient.Citizenship);

const [City, setCity] = useState(store.currClient.City);
const [ActResidAddress, setActResidAddress] = useState(store.currClient.ActResidAddress);
const [Placeofwork, setPlaceofwork] = useState(store.currClient.Placeofwork);
const [Jobposition, setJobposition] = useState(store.currClient.Jobposition);
const [Disability, setDisability] = useState(store.currClient.Disability);
const [Pensioner, setPensioner] = useState(store.currClient.Pensioner);
const [Monthlyincome, setMonthlyincome] = useState(store.currClient.Monthlyincome);
const [Militaryservice, setMilitaryservice] = useState(store.currClient.Militaryservice);


function chengeSelectCity(e) {
    setCity(e.target.value);
}
function chengeSelectDisability(e) {
    setDisability(e.target.value);
}
function chengeSelectFamily(e) {
    setFamilystatus(e.target.value);
}
function chengeSelectCitizenship(e) {
    setCitizenship(e.target.value);
}
function chengeSelectGender(e) {
    setGender(e.target.value);
}
function chengeSelectMilitary(e) {
    setMilitaryservice(e.target.value);
}
function chengeSelectPensioner(e) {
    setPensioner(e.target.value);
}

let MaskForHomeTel = document.getElementById('tel-input');
if(MaskForHomeTel != null){
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
      IMask(MaskForHomeTel, maskOptions);
}
else{
    MaskForHomeTel = document.getElementById('tel-input');
}


let MaskForMobTel = document.getElementById('mobtel');
if(MaskForMobTel != null){
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
      };
      IMask(MaskForMobTel, maskOptions);
}
else{
    MaskForMobTel = document.getElementById('mobtel');
}

let MaskForPassport = document.getElementById('passportMask');
if(MaskForPassport != null){
    const maskOptions = {
        mask: 'ab-000-0000'
      };
      IMask(MaskForPassport, maskOptions);
}
else{
    MaskForPassport = document.getElementById('passportMask');
}

let MaskForPassportSeries = document.getElementById('passportSeries');
if(MaskForPassportSeries != null){
    const maskOptions = {
        mask: '0000-0000-00a0-00aa0'
      };
      IMask(MaskForPassportSeries, maskOptions);
}
else{
    MaskForPassportSeries = document.getElementById('passportSeries');
}

return(
<div id="myModal1" class="modal1">
    <div class="modal-content1">
        <span class="close1" onClick={() => store.isEditClient = true} >&times;</span>
        
        <div className="main-add-dev">
            <div className="pre-dev">
                <pre className='add-pre'>Name: </pre>
                <pre className='add-pre'>Surname: </pre>
                <pre className='add-pre'>Father's name: </pre>
                <pre className='add-pre'>Date of birth: </pre>
                <pre className='add-pre'>Gender: </pre>
                <pre className='add-pre'>Phone house: </pre>
                <pre className='add-pre'>Phone mob: </pre>
                <pre className='add-pre'>E-mail: </pre>
            </div>

            <div className="input-dev">

                <input className='add-input'
                    onChange={e => setName(e.target.value)}
                    value ={Name}/>
               
                <input className='add-input'
                    onChange={e => setSurname(e.target.value)}
                    value ={Surname}/>
                 <input className='add-input'
                    onChange={e => setFathersname(e.target.value)}
                    value ={Fathersname}/>
                <input className='add-input' type="date"
                    onChange={e => setDateofbirth(e.target.value)}
                    value ={Dateofbirth}/>

                <select className="selectfilter"  onChange={chengeSelectGender}>
                    <option selected >Select Gender</option>
                    <option selected >female</option>
                    <option selected >male</option>

                </select> 
                <input className='add-input' id="tel-input" 
                    onChange={e => setPhonehouse(e.target.value)}
                    value ={Phonehouse}/>
                <input className='add-input' id="mobtel"
                    onChange={e => setPhonemob(e.target.value)}
                    value ={Phonemob}/>
                <input className='add-input'
                    onChange={e => setEmail(e.target.value)}
                    value ={Email}/>
                
            </div>
        </div>
            

    </div> 

        <div className="passport-add-dev">
            <div className="pre-dev">
                <pre className='add-pre'>№ passport: </pre>
                <pre className='add-pre'>Passport series: </pre>
                <pre className='add-pre'>Issued by: </pre>
                <pre className='add-pre'>Date of issue: </pre>
                <pre className='add-pre'>Ident. number: </pre>
                <pre className='add-pre'>Place of birth: </pre>
                <pre className='add-pre'>Family status: </pre>
                <pre className='add-pre'>Citizenship: </pre>
            </div>
            <div className="input-dev">
            <input className='add-input'  id="passportMask"
                    onChange={e => setPassport(e.target.value)}
                    value ={Passport}/>
                <input className='add-input' id="passportSeries"
                    onChange={e => setPassportseries(e.target.value)}
                    value ={Passportseries}/>
                 <input className='add-input' type="date"
                    onChange={e => setIssuedby(e.target.value)}
                    value ={Issuedby}/>
                <input className='add-input' type="date"
                    onChange={e => setDateofissue(e.target.value)}
                    value ={Dateofissue}/>
                <input className='add-input'
                    onChange={e => setIdentnumber(e.target.value)}
                    value ={Identnumber}/>
                <input className='add-input'
                    onChange={e => setPlaceofbirth(e.target.value)}
                    value ={Placeofbirth}/>
                <select className="selectfilter"  onChange={chengeSelectFamily}>
                <option selected >Select family status</option>
                    { (store.Family).map(status =>  
                      <option>{status.status}</option>
                    )
                    }
                </select> 
                <select className="selectfilter"  onChange={chengeSelectCitizenship}>
                <option selected >Select citizenship</option>
                    { (store.Citizenship).map(citizenship =>  
                      <option>{citizenship.citizenship}</option>
                    )
                    }
                </select> 
            </div>
        </div> 

        <div className="other-add-dev">
            <div className="pre-dev">
                <pre className='add-pre'>City of actual residence: </pre>
                <pre className='add-pre'>Actual residence address: </pre>
                <pre className='add-pre'>Place of work: </pre>
                <pre className='add-pre'>Job position: </pre>
                <pre className='add-pre'>Disability: </pre>
                <pre className='add-pre'>Pensioner: </pre>
                <pre className='add-pre'>Monthly income: </pre>
                <pre className='add-pre'>Military service: </pre>
            </div>
            <div className="input-dev">
                <select className="selectfilter"  onChange={chengeSelectCity}>
                    <option selected >Select city</option>
                    { (store.City).map(city =>  
                       <option>{city.city}</option>
                    )
                    }
                </select>  
                <input className='add-input'
                    onChange={e => setActResidAddress(e.target.value)}
                    value ={ActResidAddress}/>
                 <input className='add-input'
                    onChange={e => setPlaceofwork(e.target.value)}
                    value ={Placeofwork}/>
                <input className='add-input'
                    onChange={e => setJobposition(e.target.value)}
                    value ={Jobposition}/>
                <select className="selectfilter"  onChange={chengeSelectDisability}>
                    <option selected >Select disability</option>
                    { (store.Disability).map(disability =>  
                      <option>{disability.disability}</option>
                    )
                    }
                </select> 
                <select className="selectfilter"  onChange={chengeSelectPensioner}>
                    <option selected >Select Pensioner</option>
                    <option selected >yes</option>
                    <option selected >no</option>

                </select> 
                <input className='add-input'
                    onChange={e => setMonthlyincome(e.target.value)}
                    value ={Monthlyincome}/>
                <select className="selectfilter"  onChange={chengeSelectMilitary}>
                    <option selected >Select Military service</option>
                    <option selected >yes</option>
                    <option selected >no</option>

                </select> 
        </div>
        <button className='add-btn'  onClick={() => {store.editClient(store.currClient.id,
                Name, Surname,Fathersname, Dateofbirth,
                Gender,  Phonehouse, Phonemob, Email,
                Passport, Passportseries, Issuedby, Dateofissue,
                Identnumber, Placeofbirth, Familystatus, Citizenship,
                City, ActResidAddress, Placeofwork, Jobposition,
                Disability, Pensioner, Monthlyincome, Militaryservice)}}>edit</button>
    </div> 
</div>

)}
export default observer(EditClientPage);