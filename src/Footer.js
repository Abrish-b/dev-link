import { FacebookOutlined, TwitterOutlined, GithubOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined } from '@ant-design/icons';

const Footer = () => {
  const style = {
    color : 'white'
  }
  return (
        <ul className='flex justify-center gap-4'>
            <li><FacebookOutlined style={style} /></li>
            <li> <TwitterOutlined style={style}/></li>
            <li> <GithubOutlined style={style}/> </li>
            <li><InstagramOutlined style={style}/></li>
            <li><LinkedinOutlined style={style}/> </li> 
            <li><YoutubeOutlined style={style}/></li>
        </ul>
  )
}

export default Footer