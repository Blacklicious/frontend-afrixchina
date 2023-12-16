import React from 'react'
import { FacebookOutlined, LinkedinOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import Image from 'next/image';

const Footer  = () => {
  return (
    <div className="global-footer bg-gray-900 text-white p-6 w-[100%]">
			<div className="  py-4 ">
				<div className="flex flex-wrap justify-center">
					<nav role="navigation" aria-labelledby="block-footer-menu" id="block-footer" className=" w-full md:w-3/4 justify-center">
						<div className="text-xl grid grid-cols-2 sm:grid-cols-4 social-follow justify-center w-[100%] p-6  border-b-2 border-gray-200">
							<div  className='' >
									<a href="https://web.facebook.com/profile.php?id=61553020997452" target="_blank" rel="noreferrer" className='flex items-center justify-center'>
											<FacebookOutlined className='text-4xl m-3'/> Facebook
									</a>
							</div>
							<div  className=''>
									<a href="https://www.linkedin.com/company//?viewAsMember=true" target="_blank" rel="noreferrer" className='flex items-center justify-center'>
											<LinkedinOutlined className='text-4xl m-3'/> LinkedIn
									</a>
							</div>
							<div  className=''>
									<a href="https://www.instagram.com/afrixchina.ml/" target="_blank" rel="noreferrer" className='flex items-center justify-center'>
											<InstagramOutlined className='text-4xl m-3'/> Instagram
									</a>
							</div>
							<div  className='justify-'>
									<a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className='flex items-center justify-center'>
											<YoutubeOutlined className='text-4xl m-3'/> Youtube
									</a>
							</div>
						</div>
						<ul className="grid grid-cols-3 text-center p-6 text-md ">
							<li>© 2023 Afrixchina</li>
							<li><a href="/privacy-policy">Privacy Policy</a></li>
							<li><a href="/terms-service">Terms of Service</a></li>
						</ul>
					</nav>         
				</div>
			</div>
		</div>
  )  
}

export default Footer;
