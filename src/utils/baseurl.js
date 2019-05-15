const baseUrl =
(process.env.NODE_ENV === 'production')?
'http://localhost'
:
// 'https://reqres.in'
'http://95.156.255.76:8000'


export default baseUrl
