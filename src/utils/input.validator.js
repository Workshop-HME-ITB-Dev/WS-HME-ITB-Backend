const validator = require('validator');

const validateRegisterInput = ({
    email,
    name,
    password,
}) => {
    // all Cannot be empty
    if (
        validator.isEmpty(email) ||
        validator.isEmpty(name) ||
        validator.isEmpty(password)
    ) {
        throw new Error('Input must not be empty');
    }
    // check if email
    if (!validator.isEmail(email)) {
        throw new Error('Email is not proper');
    }
    // check if name min 5 char
    if (name.length < 5) {
        throw new Error('Name minimum length is 5');
    }
    // check if name max 25 char
    if (name.length > 25) {
        throw new Error('Name maximum length is 25');
    }
    // check if password strongenough (min 5, contains number, contain lowercase, contain uppercase)
    if (!password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{5,})$/)) {
        throw new Error('Password not strong enough');
    }
};

const validateAdminUpdateInput = ({
    id,
    email,
    name,
    password,
}) => {
    // id not empty and is int
    validateId(id);
    validateRegisterInput({ email, name, password });
};

const validateLoginInput = ({ email, password }) => {
    // all Cannot be empty
    if (validator.isEmpty(email) || validator.isEmpty(password)) {
        throw new Error('Input must not be empty');
    }
};

const validateCreateToolInput = ({
    name,
    image,
    activated,
    totalStock,
    priceHour,
    priceDay,
}) => {
    // all not empty
    if (
        validator.isEmpty(name) ||
        validator.isEmpty(image) ||
        validator.isEmpty(activated.toString()) ||
        validator.isEmpty(totalStock.toString()) ||
        validator.isEmpty(priceHour.toString()) ||
        validator.isEmpty(priceHour.toString())
    ) {
        throw new Error('Input must not be empty');
    }
    // Name length minimum 4, max 30
    if (name.length < 4) {
        throw new Error('Name minimum length is 4');
    }
    if (name.length > 30) {
        throw new Error('Name maximum length is 25');
    }
    // image is valid url
    if (!validator.isURL(image, { require_tld: false })) {
        throw new Error('image path not valid');
    }
    // totalStock is integer
    if (!validator.isInt(totalStock.toString()) || totalStock < 0) {
        throw new Error('totalStock must be positive integer');
    }
    // priceHour is integer
    if (!validator.isInt(priceHour.toString()) || priceHour < 0) {
        throw new Error('priceHour must be positive integer');
    }
    // priceDay is integer
    if (!validator.isInt(priceDay.toString()) || priceDay < 0) {
        throw new Error('priceDay must be positive integer');
    }
};

const validateUpdateToolInput = ({
    id,
    name,
    image,
    activated,
    totalStock,
    priceHour,
    priceDay,
}) => {
    // id not empty and is int
    validateId(id);
    // use the same validation as createtool
    validateCreateToolInput({
        name,
        image,
        activated,
        totalStock,
        priceHour,
        priceDay,
    });
};

const validateCreateRentInput = ({
    tools,
    rentName,
    rentNim,
    rentPhone,
    rentLineId,
    organisation,
    fromDate,
    expectedReturnDate,
    status,
    totalPrice,
}) => {
    // check all not empty
    if (
        validator.isEmpty(tools) ||
        validator.isEmpty(rentName) ||
        validator.isEmpty(rentNim) ||
        validator.isEmpty(rentPhone) ||
        validator.isEmpty(rentLineId) ||
        validator.isEmpty(organisation) ||
        validator.isEmpty(fromDate) ||
        validator.isEmpty(expectedReturnDate) ||
        validator.isEmpty(status) ||
        validator.isEmpty(totalPrice.toString())
    ) {
        throw new Error('Input must not be empty');
    }
    // parse tools to json, check if proper json
    if (!validator.isJSON(tools)) {
        throw new Error('tools must be proper json');
    }
    // rentName min 4 max 25
    if (rentName.length < 4 || rentName.length > 25) {
        throw new Error(
            'rentName minimum length is 4 and maximum length is 25',
        );
    }
    // rentNim is integer
    if (!validator.isInt(rentNim.toString()) || Number(rentNim) < 0) {
        throw new Error('rentNim must be a positive integer');
    }
    // phone is phone number
    if (!validator.isMobilePhone(rentPhone)) {
        throw new Error('Phone must be a proper phone number');
    }
    // // fromDate is date
    // if (!(fromDate instanceof Date)) {
    //     throw new Error('fromDate must be a proper date');
    // }
    // // expectedReturnDate is date
    // if (!(expectedReturnDate instanceof Date)) {
    //     throw new Error('expectedReturnDate must be a proper date');
    // }
    // status is in listofstatus
    if (!listOfStatus.includes(status)) {
        throw new Error('status is not known');
    }
    // totalPrice is int
    if (!validator.isInt(totalPrice.toString()) || totalPrice < 0) {
        throw new Error('totalPrice must be a positive integer');
    }
};

const validateUpdateRentInput = ({
    id,
    rentName,
    rentNim,
    rentPhone,
    rentLineId,
    organisation,
    fromDate,
    expectedReturnDate,
    status,
    totalPrice,
    fine,
    pickupName,
    pickupNim,
    returnName,
    returnNim,
    returnDate,
}) => {
    // id not empty and is int
    validateId(id);
    // use the same validation as createRent
    const tools = '{}';
    validateCreateRentInput({
        tools,
        rentName,
        rentNim,
        rentPhone,
        rentLineId,
        organisation,
        fromDate,
        expectedReturnDate,
        status,
        totalPrice,
    });
    // fine is int
    if (!validator.isInt(fine.toString()) || fine < 0) {
        throw new Error('fine must be a positive integer');
    }
    // pickupName min 4 max 25
    if (pickupName && (pickupName.length < 4 || pickupName.length > 25)) {
        throw new Error(
            'pickupName minimum length is 4 and maximum length is 25',
        );
    }
    // pickupNim is int
    if (pickupNim && (!validator.isInt(pickupNim) || Number(pickupNim) < 0)) {
        throw new Error('pickupNim must be a positive integer');
    }
    // returnName min 4 max 25
    if (returnName && (returnName.length < 4 || returnName.length > 25)) {
        throw new Error(
            'returnName minimum length is 4 and maximum length is 25',
        );
    }
    // returnNim is int
    if (
        returnNim &&
        (!validator.isInt(returnNim.toString()) || Number(returnNim) < 0)
    ) {
        throw new Error('returnNim must be a positive integer');
    }
    // returnDate is date
    // if (returnDate && !(returnDate instanceof Date)) {
    //     throw new Error('returnDate must be a proper date');
    // }
};

const validateCreateShopInput = ({
    title,
    imageUrl,
    link,
    price,
}) => {
    // check all not empty
    if (
        validator.isEmpty(title) ||
        validator.isEmpty(imageUrl) ||
        validator.isEmpty(link) ||
        validator.isEmpty(price.toString())
    ) {
        throw new Error('Input must not be empty');
    }
    // title min 5 max 50
    if (title.length < 5 || title.length > 50) {
        throw new Error(
            'title minimum length is 5 and maximum length is 50',
        );
    }
    // imageUrl is properUrl
    if (!validator.isURL(imageUrl)) {
        throw new Error('imageUrl is not a valid url');
    }
    // link is properUrl
    if (!validator.isURL(link)) {
        throw new Error('link is not a valid url');
    }
    // price is int
    if (!validator.isInt(price.toString()) || price < 0) {
        throw new Error('price must be a positive integer');
    }
};

const validateUpdateShopInput = ({
    id,
    title,
    imageUrl,
    link,
    price,
}) => {
    // id not empty and is int
    validateId(id);
    // use the same validation as createShop
    validateCreateShopInput({ title, imageUrl, link, price });
};

const validateCreateArticleInput = ({
    title,
    desc,
    imageUrl,
    publishedDate,
    duration,
    link,
}) => {
    // check all not empty
    if (
        validator.isEmpty(title) ||
        validator.isEmpty(desc) ||
        validator.isEmpty(imageUrl) ||
        validator.isEmpty(publishedDate) ||
        validator.isEmpty(link) ||
        validator.isEmpty(duration.toString())
    ) {
        throw new Error('Input must not be empty');
    }
    // title min 5 max 50
    if (title.length < 5 || title.length > 50) {
        throw new Error(
            'title minimum length is 5 and maximum length is 50',
        );
    }
    // desc min 5 max 250
    if (desc.length < 5 || desc.length > 250) {
        throw new Error(
            'desc minimum length is 5 and maximum length is 250',
        );
    }
    // imageUrl is properUrl
    if (!validator.isURL(imageUrl)) {
        throw new Error('imageUrl is not a valid url');
    }
    // // publishedDate is date
    // if (!(publishedDate instanceof Date)) {
    //     throw new Error('publishedDate must be a proper date');
    // }
    // duration is int
    if (!validator.isInt(duration.toString()) || duration < 0) {
        throw new Error('duration must be a positive integer');
    }
    // link is properUrl
    if (!validator.isURL(link)) {
        throw new Error('link is not a valid url');
    }
};

const validateUpdateArticleInput = ({
    id,
    title,
    desc,
    imageUrl,
    publishedDate,
    duration,
    link,
}) => {
    // id not empty and is int
    validateId(id);
    // use the same validation as createShop
    validateCreateArticleInput({
        title,
        desc,
        imageUrl,
        publishedDate,
        duration,
        link,
    });
};

const validateId = (id) => {
    // id not empty and is int
    if (validator.isEmpty(id.toString())) {
        throw new Error('ID must not be empty');
    }
    if (!validator.isInt(id.toString())) {
        throw new Error('ID must be a positive integer');
    }
};

const listOfStatus = [
    'waiting_pickup',
    'waiting_return',
    'finished',
    'dropped',
];

module.exports = {
    validateRegisterInput,
    validateAdminUpdateInput,
    validateLoginInput,
    validateCreateToolInput,
    validateUpdateToolInput,
    validateCreateRentInput,
    validateUpdateRentInput,
    validateCreateShopInput,
    validateUpdateShopInput,
    validateCreateArticleInput,
    validateUpdateArticleInput,
    validateId
}