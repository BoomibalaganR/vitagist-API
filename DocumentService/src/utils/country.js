//identity document map based on country
const COUNTRIES_IDOC_MAP = {
    'India': {
                'aadhar': 'AADHAR Card',
                'driver_license': 'Driver Licence',
                'pancard': 'PAN Card',
                'passport': 'Passport',
                'voterid': 'Voter ID'
            }
        
}

//identity document id validation logic based on country
const COUNTRIES_IDOC_VALIDATE = {
    'India': {
                'aadhar': /^[0-9]{12}$/,
                'driver_license': null,
                'pancard': /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                'passport': null,
                'voterid': /^[A-Z]{3}[0-9]{7}$/
            }
} 


exports.validateIdProof = (country, doctype, docid) => {
    if (COUNTRIES_IDOC_MAP[country] && COUNTRIES_IDOC_MAP[country][doctype]) {
        const pattern = COUNTRIES_IDOC_VALIDATE[country][doctype] 
        // return pattern ? pattern.test(docid): true
        if (pattern) {
            return pattern.test(docid)
        }else{
            return true
        }
    } 
    return false
}