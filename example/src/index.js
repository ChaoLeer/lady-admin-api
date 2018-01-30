import axios from '../node_modules/_axios@0.17.1@axios'
import qs from 'qs'
axios.post('http://localhost:3000/controller/user/user.php', qs.stringify({
  subType: 'type_0',
  artTag: ''
})).then(res => {
  console.info(res)
  console.info(res.data)
})