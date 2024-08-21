import React, {useState } from 'react'
import '../css/Registration.css'


function Registration() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [age, setAge] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [course, setCourse] = useState('');
    
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);

    const [emContactName, setEmContactName] = useState('');
    const [emContactNumber, setEmContactNumber] = useState('');
    const [comment, setComment] = useState('');

    // const [terms, setTerms] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted!");
        console.log('Fullname state updated:', fullname);
        console.log('Email state updated:', email);
        console.log('Birthdate state updated:', birthdate);
        console.log('Age state updated:', age);
        console.log('Contact state updated:', contact);
        console.log('Gender state updated:', gender);
        console.log('Address state updated:', address);
        console.log('Course state updated:', course);
        console.log('Year state updated:', year, ' - ', year+1);
        console.log('Emergency Contact Name state updated:', emContactName);
        console.log('Emergency Contact Number state updated:', emContactNumber);
        console.log('Comment state updated:', comment);
        // console.log('Terms state updated:', terms);
        setSubmitted(true); 
    }

    const handleFirstInputChange = (e) => {
        const newYear = parseInt(e.target.value, 10);
        setYear(newYear);
    };

    const handleSecondInputChange = (e) => {
        const newYear = parseInt(e.target.value, 10);
        setYear(newYear - 1);
    };

    const agreeTerms = (event) => {
        event.preventDefault();
        setTerms(!terms);
    }
  
    return (
        <>
            <div className="parent__container container-fluid">
                <header className="header">
                    <hgroup>
                        <h2>ReactJS Registration</h2>
                        <p>&copy;Mark Jerome Santos</p>
                    </hgroup>
                </header>

                
                <main>
                    <form onSubmit={handleSubmit} className="registration__form">
                        <label htmlFor='fullname'>Fullname</label>
                        <input type="text" name="fullname" id="fullname" placeholder="Complete Name" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
                    
                        <label htmlFor='email'>Email</label>
                        <input type="email" name="email" id="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />

                        <label htmlFor='birthdate'>Date of Birth</label>
                        <input type="date" name="birthdate" id="birthdate" aria-label="Date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />

                        <div className='grid'>
                            <div>
                                <label htmlFor='age'>Age</label>
                                <input type="text" name="age" id="age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                            </div>

                            <div>
                                <label htmlFor='gender'>Gender</label>
                                <select name="gender" aria-label="Choose Gender" value={gender}  onChange={(e) => setGender(e.target.value)} required>
                                    <option value="" disabled>Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>

                        <label htmlFor='phone_number'>Phone Number</label>
                        <input type="text" name="phone_number" id="phone_number" value={contact} onChange={(e) => setContact(e.target.value)} required />

                        <label htmlFor='address'>Address</label>
                        <textarea
                            name="address"
                            placeholder="Enter your address"
                            aria-label="Address"
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} required
                        >
                        </textarea>

                        <label htmlFor='course'>Course</label>
                        <select name="course" aria-label="Choose Course" value={course} onChange={(e) => setCourse(e.target.value)} required>
                            <option value="" disabled>Select Course</option>
                            <option value="bsit">BSIT</option>
                            <option value="bscs">BSCS</option>
                            <option value="bmma">BMMA</option>
                        </select>

                        <label htmlFor='term'>Preferred Enrollment Term</label>
                        <div className='grid'>
                            <div>
                                <input
                                    name="term1"
                                    type="number"
                                    min={currentYear}
                                    max="2030"
                                    step="1"
                                    value={year}
                                    onChange={handleFirstInputChange}
                                />
                            </div>
                            <div>
                                <input
                                    name="term2"
                                    type="number"
                                    min={currentYear}
                                    max="2030"
                                    step="1"
                                    value={year + 1}
                                    onChange={handleSecondInputChange}
                                />
                            </div>
                        </div>

                        <label htmlFor='em_contact_name'>Emergency Contact Name</label>
                        <input type="text" name="em_contact_name" id="em_contact_name" placeholder="Emergency Contact Name" value={emContactName} onChange={(e) => setEmContactName(e.target.value)} required />

                        <label htmlFor='phone_number'>Phone Number</label>
                        <input type="text" name="em_contact_number" id="em_contact_number" placeholder="Emergency Contact Number" value={emContactNumber} onChange={(e) => setEmContactNumber(e.target.value)} required />

                        <label htmlFor='comment'>Additional Comments</label>
                        <textarea
                            name="comment"
                            placeholder="Enter your comment"
                            aria-label="comment"
                            value={comment} 
                            onChange={(e) => setComment(e.target.value)} required
                        >
                        </textarea>

                        {/* <label>
                            <input name="terms" type="checkbox" onChange={(e) =>setTerms(e.target.value)} role="switch" />
                            I agree to the Terms
                        </label> */}

                        <input type="submit" value="Submit"/>
                    </form>

                    {submitted && (
                        <p className="is-success">Registration Successful</p>
                    )}
                </main>
            </div>
        </>
    );

}

export default Registration;