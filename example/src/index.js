import axios from '../node_modules/_axios@0.17.1@axios'
axios.post('http://localhost:3000/common/options.php', {
  subType: 'type_0'
}).then(res => {
  console.info(res)
  console.info(res.data)
})