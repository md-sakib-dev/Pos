import * as Yup from 'yup'

export const signInSchema= Yup.object({
    email:Yup.string().email().required("Please Enter your email"),
    password:Yup.string().min(6).required("Please Enter your password"),
})

export const createUserSchema= Yup.object({
    name:Yup.string().min(3).max(25).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter your name"),
    employee_name:Yup.string().min(3).max(25).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter  employee name"),
    employee_id: Yup.number().typeError("Employee ID must be a number").required("Enter your id").test('len', 'Employee ID must be exactly 8 digits', val => val.toString().length === 8),
    Role: Yup.string().required('Please select a role'), 
    Branch: Yup.string().required('Please select a branch'), 
    password:Yup.string().min(6).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Please Enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null], "Password must match"),
})
export const editUserSchema= Yup.object({
    name:Yup.string().min(3).max(25).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter your name"),
    employee_name:Yup.string().min(3).max(25).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter  employee name"),
    employee_id: Yup.number().typeError("Employee ID must be a number").required("Enter your id").test('len', 'Employee ID must be exactly 8 digits', val => val.toString().length === 8),
    Role: Yup.string().required('Please select a role'), 
    Branch: Yup.string().required('Please select a branch'), 
    password:Yup.string().min(6).matches(/^\S*$/, 'Password cannot contain spaces').required("Please Enter your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null], "Password must match"),
})

export const addProductSchema= Yup.object({
    group: Yup.string().required('Please select a group'), 
    category: Yup.string().required('Please select an category'),
    house: Yup.string().required('Please select an warehouse'),
    size: Yup.string().required('Please select a size'),
    brand: Yup.string().required('Please select a brand'),
    type: Yup.string().required('Please select a type'),
    name:Yup.string().min(5).max(40).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter product name"),
    price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .required('Price is required'),
    message: Yup.string()
    .max(200, 'Description must be at most 200 characters')
    .required('Description is required'),

})
export const editProductSchema= Yup.object({
    group: Yup.string().required('Please select a group'), 
    category: Yup.string().required('Please select an category'),
    house: Yup.string().required('Please select an warehouse'),
    size: Yup.string().required('Please select a size'),
    brand: Yup.string().required('Please select a brand'),
    type: Yup.string().required('Please select a type'),
    name:Yup.string().min(5).max(40).matches(/^[^\s]+$/, 'Name cannot contain spaces').required("Enter product name"),
    price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .required('Price is required'),
    message: Yup.string()
  .max(200, 'Description must be at most 200 characters')
  .required('Description is required'),

})
export const editPriceSchema=Yup.object({
    price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .required('Price is required'),

})
export const editLabelSchema=Yup.object({
    label: Yup.string()
    .matches(/^[0-9]{10}$/)
    .required('Barcode is required')
})
export const editGetProductSchema=Yup.object({
    product: Yup.string()
    .matches(/^[0-9]{10}$/)
    .required('Barcode is required')
})
export const mergeGroup=Yup.object({
    group: Yup.string().required('Please select a group'), 
    newgroup: Yup.string().required('Please select another group'),

})
export const mergeType=Yup.object({
    type: Yup.string().required('Please select a type'), 
    newtype: Yup.string().required('Please select another type'),

})
export const mergeCategory=Yup.object({
    category: Yup.string().required('Please select a category'), 
    newcategory: Yup.string().required('Please select another category'),

})
export const mergeBrand=Yup.object({
    brand: Yup.string().required('Please select a brand'), 
    newbrand: Yup.string().required('Please select another brand'),

})
export const mergeSize=Yup.object({
    size: Yup.string().required('Please select a size'), 
    newsize: Yup.string().required('Please select another size'),

})
export const giftSale=Yup.object({
    serial : Yup.number().typeError("Serial must be a number").required("Enter serial").test('len', 'serial must be exactly 8 digits', val => val.toString().length === 8),
    date: Yup.date().typeError("Date must be a valid date").required("Enter date"),
})

export const  cardPay=Yup.object({
    group: Yup.string().required('Please select a group'), 
    newgroup: Yup.string().required('Please select another group'),
    price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .required('Price is required'),
    mobile: Yup.string()
    .matches(/^[01]\d{9}$/, 'Mobile number must be exactly 11 digits and start with 01')
    .required('Mobile number is required'),

})
export const SaleSchema=Yup.object({
    barcode : Yup.number().typeError("Serial must be a number").required("Enter serial").test('len', 'serial must be exactly 8 digits', val => val.toString().length === 8),
    qty : Yup.number()
    .typeError('Quantity must be a number')
    .positive('Quantity must be a positive number')
    .integer('Quantity must be an integer')
    .required('Quantity is required')
   
})
export const creditSlip =Yup.object({
    price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .required('Price is required'),
    slip: Yup.string()
    .matches(/^[0-9]+$/, 'Slip number must contain only numbers')
    .required('Slip number is required'),


})
export const  Giftslip=Yup.object({
    group: Yup.string().required('Please select a group'), 
    price: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .required('Price is required'),
    gift: Yup.string()
    .matches(/^[0-9]+$/, 'Gift number must contain only numbers')
    .required('Gift number is required'),

})
export const DiscountSchema=Yup.object({
    discount: Yup.string().required('Please select  discount'), 
    company: Yup.string().required('Please select  company'), 
    gender: Yup.string().required('Please select  gender'), 
    code:  Yup.number().typeError("Serial must be a number").required("Enter serial").test('len', 'serial must be exactly 8 digits', val => val.toString().length === 6),
})
export const Giftcardschema=Yup.object({
    issue: Yup.string().required('Please select  discount'), 
    voucher: Yup.string().required('Please select  discount'),
    voucherno: Yup.number().typeError("Serial must be a number").required("Enter voucher no").test('len', 'serial must be exactly 8 digits', val => val.toString().length === 6),
    amount: Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .required('Price is required'),
    tamount:  Yup.string()
    .matches(/^\d+(\.\d{1,2})?$/, 'Price must be a valid number with up to two decimal places')
    .matches(/^[^,]*$/, 'Price cannot contain commas')
    .required('Total Amount  is required'),
    code:   Yup.number().typeError("Serial must be a number").required("Enter code").test('len', 'code must be exactly 6 digits', val => val.toString().length === 6),
})

export const walletschema= Yup.object({
    tform: Yup.string().required('Please select  discount'), 
    code:   Yup.number().typeError("Serial must be a number").required("Enter code").test('len', 'code must be exactly 6 digits', val => val.toString().length === 6),
})
export const Invoice=Yup.object({
    from: Yup.date().typeError("Date must be a valid date").required("Enter date"),
    to: Yup.date().typeError("Date must be a valid date").required("Enter date"),

})
export const productschema=Yup.object({
    deliver:  Yup.string().required('Please select  a type'), 
    deliverno: Yup.number().typeError("Serial must be a number").required("Enter code").test('len', 'code must be exactly 6 digits', val => val.toString().length === 6),
})