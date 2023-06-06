//i started building the webpage from desktop, and due to my weird form layout
//it's kinda impossible for me to use media query to resize the form layout properly
//so my solution here is to recreate the html structure of the form when it's on a smaller screen

//first of all i need to select the dom element of all the forms

const desktopCoffeeForm = `<div class="form-page msf-hide">
<div class="form-input-container">
    <div class="form-row">
        <div class="form-item is-required">
            <span class="form-text">Today, I am adding a new</span>
            <div class="radio-wrapper">
                <label class="radio-container">
                    <input type="radio" id="coffeeType" name="coffeeType" value="single origin"
                        data-group="0" required>
                    <span class="radio-text">Single Origin</span>
                </label>
                <label class="radio-container">
                    <input type="radio" id="coffeeType" name="coffeeType" value="blend"
                        data-group="0" required>
                    <span class="radio-text">Blend</span>
                </label>
            </div>
        </div>
        <span class="form-text">coffee.</span>
        <div class="form-item is-required">
            <label for="coffeeName">It’s called</label>
            <input type="text" id="coffeeName" name="coffeeName" data-group="0"
                placeholder="coffee name" size="16" required>
        </div>
    </div>
    <div class="form-row">
        <div class="form-item is-required">
            <label for="roasterName">It was roasted by</label>
            <input type="text" id="roasterName" name="roasterName" data-group="0"
                placeholder="roaster name" size="16" required>
        </div>
        <div class="form-item is-required">
            <label for="roasterCountry">from</label>
            <div class="custom-select">
                <select id="roasterCountry" name="roasterCountry" data-group="0" required>
                    <option value="" label="Select a country" selected="selected">Select a
                        country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Aland Islands">Aland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius
                        and Saba</option>
                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">British Indian Ocean
                        Territory</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, Democratic Republic of the Congo">Congo,
                        Democratic Republic of the Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curacao">Curacao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">Heard Island and
                        Mcdonald Islands</option>
                    <option value="Holy See (Vatican City State)">Holy See (Vatican City
                        State)</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">Korea, Democratic
                        People's Republic of</option>
                    <option value="Korea, Republic of">Korea, Republic of</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">Lao People's Democratic
                        Republic</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, the Former Yugoslav Republic of">Macedonia,
                        the Former Yugoslav Republic of</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">Micronesia, Federated
                        States of</option>
                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">Palestinian Territory,
                        Occupied</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Barthelemy">Saint Barthelemy</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Martin">Saint Martin</option>
                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the
                        Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Sint Maarten">Sint Maarten</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and the South Sandwich Islands">South
                        Georgia and the South Sandwich Islands</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                    <option value="Taiwan, Province of China">Taiwan, Province of China
                    </option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">Tanzania, United Republic
                        of</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">United States Minor
                        Outlying Islands</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Viet Nam">Viet Nam</option>
                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                    <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                </select>
            </div>

        </div>
    </div>
    <div class="form-row">
        <div class="form-item is-required">
            <label for="roastDate">It was roasted on</label>
            <input type="date" id="roastDate" name="roastDate" min="2020-01-01" max="2100-01-01"
                data-group="0" required>
        </div>
        <div class="form-item is-required">
            <label for="roastLevel">with a roast level of</label>
            <input type="text" id="roastLevel" name="roastLevel" data-group="0"
                placeholder="roast level" size="16" required>
        </div>
    </div>
    <div class="form-row">
        <div class="form-item">
            <label for="coffeeWeight">The net weight of this coffee is</label>
            <input type="number" id="coffeeWeight" name="coffeeWeight" min="0"
                onkeyup="if(value<0) value=0;" data-group="0">
            <span class="form-text">grams.</span>
        </div>
        <div class="form-item">
            <label for="coffeePrice">
                It cost</label>
            <input type="number" id="coffeePrice" name="coffeePrice" min="0"
                onkeyup="if(value<0) value=0;" data-group="0">
            <span class="form-text">dollars.</span>
        </div>
    </div>
    <div class="form-row">
        <div class="form-item tag-container is-required">
            <label for="coffeeFlavour"">This coffee will taste like</label>
                <input type=" text" id="coffeeFlavour" name="coffeeFlavour" data-group="0"
                required>
        </div>
    </div>
</div>
<div class="progress-container">
    <div class="progress-text">
        <h2>Basic Information.</h2>
        <p>1 / 2</p>
    </div>
    <div class="progress-button">
        <input type="button" class="black-fill white-border" name="back" value="Prev">
        <input type="button" class="black-fill white-border" name="next" value="Next">
    </div>
</div>
</div>
<div class="form-page msf-hide">
<div class="form-input-container">
    <div class="form-row">
        <div class="form-item is-required">
            <label for="originCountry">This origin of this coffee is</label>
            <div class="custom-select">
                <select id="originCountry" name="originCountry" data-group="1" required>
                    <option value="" label="Select a country:" selected="selected">Select a
                        country:</option>
                    <option value="angola">Angola</option>
                    <option value="bolivia">Bolivia</option>
                    <option value="brazil">Brazil</option>
                    <option value="burundi">Burundi</option>
                    <option value="cameroon">Cameroon</option>
                    <option value="central African Republic">Central African Republic
                    </option>
                    <option value="china">China</option>
                    <option value="colombia">Colombia</option>
                    <option value="costa Rica">Costa Rica</option>
                    <option value="cuba">Cuba</option>
                    <option value="dominican Republic">Dominican Republic</option>
                    <option value="ecuador">Ecuador</option>
                    <option value="el Salvador">El Salvador</option>
                    <option value="ethiopia">Ethiopia</option>
                    <option value="gabon">Gabon</option>
                    <option value="ghana">Ghana</option>
                    <option value="guatemala">Guatemala</option>
                    <option value="guinea">Guinea</option>
                    <option value="haiti">Haiti</option>
                    <option value="honduras">Honduras</option>
                    <option value="india">India</option>
                    <option value="indonesia">Indonesia</option>
                    <option value="ivory Coast">Ivory Coast</option>
                    <option value="jamaica">Jamaica</option>
                    <option value="kenya">Kenya</option>
                    <option value="laos">Laos</option>
                    <option value="liberia">Liberia</option>
                    <option value="madagascar">Madagascar</option>
                    <option value="malawi">Malawi</option>
                    <option value="mexico">Mexico</option>
                    <option value="nicaragua">Nicaragua</option>
                    <option value="nigeria">Nigeria</option>
                    <option value="papua New Guinea">Papua New Guinea</option>
                    <option value="panama">Panama</option>
                    <option value="paraguay">Paraguay</option>
                    <option value="peru">Peru</option>
                    <option value="philippines">Philippines</option>
                    <option value="rwanda">Rwanda</option>
                    <option value="sierra Leone">Sierra Leone</option>
                    <option value="tanzania">Tanzania</option>
                    <option value="thailand">Thailand</option>
                    <option value="togo">Togo</option>
                    <option value="uganda">Uganda</option>
                    <option value="venezuela">Venezuela</option>
                    <option value="vietnam">Vietnam</option>
                    <option value="yemen">Yemen</option>
                    <option value="zambia">Zambia</option>
                    <option value="zimbabwe">Zimbabwe</option>
                </select>
            </div>
        </div>
    </div>
    <div class="form-row">
        <div class="form-item">
            <label for="originRegion">Region</label>
            <input type="text" id="originRegion" name="originRegion" data-group="1"
                placeholder="region name" size="14">
        </div>
        <div class="form-item">
            <label for="originFarm">Farm</label>
            <input type="text" id="originFarm" name="originFarm" data-group="1"
                placeholder="farm name" size="14">
        </div>
        <div class="form-item">
            <label for="producerName">It was produced by</label>
            <input type="text" id="producerName" name="producerName" data-group="1"
                placeholder="producer name" size="18">
        </div>
    </div>
    <div class="form-row">
        <div class="form-item is-required">
            <label for="processingMethod">This coffee was processed with</label>
            <input type="text" id="processingMethod" name="processingMethod"
                placeholder="process name" size="24" data-group="1" required>
        </div>
        <div class="form-item">
            <label for="varietal">and the varietal is</label>
            <input type="text" id="varietal" name="varietal" placeholder="coffee varietal"
                size="18" data-group="1">
        </div>
    </div>
    <div class="form-row">
        <div class="form-item">
            <label for="elevation">It was grown at an altitude of</label>
            <input type="number" id="elevation" name="elevation" data-group="1" min="0"
                onkeyup="if(value<0) value=0;">
            <span class="form-text">meters above sea level.</span>
        </div>
    </div>
    <div class="form-row">
        <div class="form-item is-required">
            <label for="coffeeImage">Here is a photo of this lovely coffee.</label>
            <input type="file" accept="image/*" id="coffeeImage" name="coffeeImage"
                data-group="1" required />
        </div>
    </div>
</div>
<div class="progress-container">
    <div class="progress-text">
        <h2>Origin Information.</h2>
        <p>2 / 2</p>
    </div>
    <div class="progress-button">
        <input type="button" class="black-fill white-border" name="back" value="Prev">
        <input type="button" class="black-fill black-border" name="next" value="Next">
        <input type="submit" class="white-fill white-border" name="submit" value="Submit"
            data-a11y-dialog-hide="add-coffee-dialog">
    </div>
</div>
</div>`

changeToMobile();

function changeToMobile(){
    let coffeeForm = document.getElementById("coffee-form");
    console.log(window.innerWidth);
    if(window.innerWidth < 480){
        coffeeForm.innerHTML = "";
    }else{
        coffeeForm.innerHTML = desktopCoffeeForm;
    }
}