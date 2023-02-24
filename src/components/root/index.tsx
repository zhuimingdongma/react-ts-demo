import './index.less'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { Input, Space } from 'antd'

const { Search } = Input
export default function Root() {
  let navigate = useNavigate()
  return (
    <>
      <div className='flex'>
        <div className='sidebar'>
          {/* <div className='sidebar-title'>
            <h1>React Router Contacts</h1>
          </div> */}
          <div className='sidebar-box flex center'>
            <Search placeholder='input search text' style={{ width: 150 }} />
            <button className='sidebar-btn ml-1'>New</button>
          </div>
          <div onClick={() => navigate('contacts/1')} className='sidebar-jump'>
            Your Name
          </div>
          <div onClick={() => navigate('contacts/2')} className='sidebar-jump'>
            Your Friend
          </div>
        </div>
        <div className='detail'>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}
