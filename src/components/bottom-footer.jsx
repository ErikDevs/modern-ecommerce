import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AppleIcon from '@mui/icons-material/Apple';
import ShopIcon from '@mui/icons-material/Shop';

const BottomFooter = () => {
  return (
    <div className='copy-right'>
    <p>©simplex_dev</p>
    <p>Terms & Privacy</p>
    <div className='social-media'>
      <FacebookIcon className='social-icon' />
      <InstagramIcon className='social-icon' />
      <LinkedInIcon className='social-icon' />
      <TwitterIcon className='social-icon'  />
      <YouTubeIcon className='social-icon' />
    </div> 
    <div className='store-items'>
    <i className='store'><AppleIcon className='social-icon' /><span className='store-title'><p>Apple</p><p>Store</p></span></i>
    <i className='store'><ShopIcon className='social-icon' /><span className='store-title'><p>Google</p><p>Play-store</p></span></i>
    </div></div>
  )
}

export default BottomFooter