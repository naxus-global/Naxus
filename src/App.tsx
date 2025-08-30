import React from 'react';
import { Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
declare namespace JSX {
	interface IntrinsicElements {
		'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
			url?: string;
		};
	}
}

function App() {
	return (
		<div className="relative flex flex-col  items-center justify-center h-screen bg-[#000004] overflow-x-hidden overflow-y-hidden">
			<div className='absolute left-0 top-0'>
				<spline-viewer className=' w-screen h-[calc(100vh+128px)]' url="https://prod.spline.design/lWSR2d-6vJGY4ojL/scene.splinecode" />
			</div>
			<div className='flex flex-col justify-center z-[999]'>
				<div className='flex items-center justify-center space-x-[1rem]'>
					<svg width="52" height="52" viewBox="0 0 64 64">
						<rect className="fill-transparent" width="64" height="64" />
						<path className="fill-[white]" d="M61.15,48.81V21.35c0-3.81-2.05-7.36-5.35-9.27l-7.12-4.11l-2,1.78c-5.64,5.02-9.14,12-9.85,19.45
	c-1.52-0.59-3.15-0.9-4.84-0.9c-2.56,0-4.83-1.62-5.71-3.95c-0.88-3.31-2.33-6.44-4.27-9.26l0.01-0.01
	c-0.03-0.03-0.05-0.06-0.08-0.09c-0.38-0.54-0.78-1.08-1.19-1.6l9.59-5.54c1.02-0.59,2.28-0.59,3.3,0l6.22,3.59
	c1.26-1.64,2.69-3.17,4.25-4.56l1.05-0.93l-7.82-4.51c-3.3-1.91-7.4-1.91-10.7,0l-14.6,8.43l-5.67,3.26l5.71,3.18
	c0.02,0.01,2.08,1.19,4.04,3.29c1.17,1.76,2.09,3.68,2.73,5.7c0.1,0.42,0.21,0.83,0.35,1.23c0.45,1.78,0.69,3.62,0.69,5.49
	c0,5.5-2.03,10.78-5.64,14.85l-2.34-1.35c-1.02-0.59-1.65-1.68-1.65-2.85V19.47l-7.41-4.28v27.46c0,3.81,2.05,7.36,5.35,9.27
	l7.12,4.11l2-1.78c5.64-5.02,9.14-12,9.85-19.45c1.51,0.58,3.14,0.9,4.84,0.9c2.53,0,4.81,1.58,5.7,3.94
	c0.88,3.31,2.33,6.46,4.28,9.28l-0.01,0.01c0.03,0.03,0.05,0.06,0.08,0.09c0.38,0.54,0.78,1.08,1.19,1.6l-9.59,5.54
	c-1.02,0.59-2.28,0.59-3.3,0l-5.63-3.25c-1.3,1.7-2.77,3.28-4.39,4.73l-0.88,0.78l7.2,4.16C28.3,63.52,30.15,64,32,64
	c1.85,0,3.7-0.48,5.35-1.43l14.6-8.43l5.67-3.26l-5.71-3.18c-0.02-0.01-2.08-1.19-4.04-3.29c-2.43-3.64-3.76-7.96-3.76-12.42
	c0-5.5,2.03-10.78,5.64-14.85l2.34,1.35c1.02,0.59,1.65,1.68,1.65,2.85v23.18L61.15,48.81z"/>

						{/* width="48" height="48"/>
<path class="st0" d="M45.86,36.61V16.01c0-2.86-1.54-5.52-4.01-6.95l-5.34-3.08l-1.5,1.33c-4.23,3.77-6.86,9-7.39,14.59
	c-1.14-0.44-2.36-0.68-3.63-0.68c-1.92,0-3.62-1.21-4.28-2.96c-0.66-2.48-1.74-4.83-3.2-6.95l0.01-0.01
	c-0.02-0.02-0.04-0.04-0.06-0.07c-0.28-0.41-0.58-0.81-0.9-1.2l7.19-4.15c0.76-0.44,1.71-0.44,2.47,0l4.67,2.69
	c0.95-1.23,2.01-2.38,3.19-3.42l0.78-0.7l-5.86-3.39c-2.48-1.43-5.55-1.43-8.03,0L9.04,7.39L4.79,9.84l4.28,2.38
	c0.02,0.01,1.56,0.9,3.03,2.47c0.88,1.32,1.57,2.76,2.04,4.27c0.07,0.31,0.16,0.62,0.26,0.92c0.34,1.33,0.52,2.72,0.52,4.12
	c0,4.12-1.52,8.09-4.23,11.14l-1.75-1.01c-0.76-0.44-1.24-1.26-1.24-2.14V14.6L2.14,11.4v20.59c0,2.86,1.54,5.52,4.01,6.95
	l5.34,3.08l1.5-1.33c4.23-3.77,6.86-9,7.39-14.59c1.13,0.44,2.36,0.68,3.63,0.68c1.89,0,3.61,1.18,4.28,2.95
	c0.66,2.49,1.75,4.84,3.21,6.96l-0.01,0.01c0.02,0.02,0.04,0.04,0.06,0.07c0.28,0.41,0.58,0.81,0.9,1.2l-7.19,4.15
	c-0.76,0.44-1.71,0.44-2.47,0l-4.23-2.44c-0.98,1.27-2.08,2.46-3.3,3.55l-0.66,0.59l5.4,3.12C21.22,47.64,22.61,48,24,48
	c1.39,0,2.78-0.36,4.01-1.07l10.95-6.32l4.25-2.44l-4.28-2.38c-0.02-0.01-1.56-0.9-3.03-2.47c-1.82-2.73-2.82-5.97-2.82-9.31
	c0-4.12,1.52-8.09,4.23-11.14l1.75,1.01c0.76,0.44,1.24,1.26,1.24,2.14V33.4L45.86,36.61z"/> */}

					</svg>
					<h1 className="text-[2.2rem] sm:text-[2.5rem] font-bold text-white">Naxus</h1>

				</div>
				<h1 className="flex justify-center text-center text-[1rem] sm:text-[4rem] font-bold text-white pb-[120px] sm:pb-10">
  Coming Soon
</h1>

	<div className='
  flex flex-col
  desktop:flex-row
  items-center
  p-[2rem]
  desktop:space-x-[2rem]
  space-y-[2rem]
  desktop:space-y-0
  sm:bg-[rgba(20,20,20,.9)]
  sm:backdrop-blur-[3rem]   /* البلور هيظهر بس في الديسكتوب */
  rounded-[1rem]
  sm:shadow-[0_0_0_1px_inset_rgba(52,52,52,1)]
'>
					<div className='space-y-[2rem] w-[256px]'>
						<div className='flex items-center space-x-[1rem]'>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
								<path className='fill-[white]' d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
							</svg>
							<Link target="_blank" 
								to="https://wa.me/201552115666"
								className='flex items-center justify-center h-[38px] w-[100%] rounded-[12px] bg-gradient-to-r from-[#3352ff90] to-[#000003] shadow-[0_0_0_2px_inset_rgba(255,255,255,.15)] hover:scale-[1.05] transition duration-[.1s] hover:from-[#000003] hover:to-[#3352FF] text-[14px] text-[white] font-[600] outline-none no-underline focus:outline-none'

							>
								WhatsApp
							</Link>
						</div>
						<div className='flex items-center space-x-[1rem]'>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
								<path className='fill-[white]' d="M7,38c-2.075,0-6-1.132-6-5.416c0-3.997,3.503-5.95,5.858-6.288	c5.277-0.755,8.417-0.488,20.577,5.388C42.229,38.834,48,31,48,31s-1.684,4.039-6,5c-3.286,0.731-8.216,0.973-15.436-2.516	C14.91,27.853,11.985,27.58,7.142,28.276C5.99,28.441,3,29.537,3,32.584C3,35.961,6.837,36,7,36c0.553,0,1,0.447,1,1S7.553,38,7,38z"></path><path className='fill-[white]' d="M22.039,22.625c-0.644,0-1.287-0.155-1.871-0.464L6,14.661v9.762 c0.196-0.043,0.389-0.08,0.575-0.107c1.119-0.16,2.454-0.324,3.869-0.324c4.24,0,8.748,1.486,17.862,5.891 c3.858,1.865,7.384,2.811,10.479,2.811c1.239,0,2.301-0.156,3.215-0.39V13.118l-18.172,9.086 C23.266,22.485,22.652,22.625,22.039,22.625z"></path><path className='fill-[white]' d="M21.104,20.394c0.57,0.301,1.254,0.31,1.83,0.021l19.049-9.525 c-0.087-1.046-0.969-1.863-2.039-1.833l-32,0.889C6.862,9.976,6,10.862,6,11.945v0.453L21.104,20.394z"></path><path className='fill-[white]' d="M38.785,34.693c-2.964,0-6.714-0.769-11.349-3.01c-9.241-4.465-13.272-5.691-16.991-5.691 c-1.175,0-2.319,0.122-3.586,0.304C6.586,26.335,6.296,26.405,6,26.489v11.566c0,1.083,0.862,1.969,1.944,1.999l32,0.889 C41.07,40.974,42,40.07,42,38.944v-4.589C41.052,34.562,39.987,34.693,38.785,34.693z"></path><path className='fill-[white]' d="M38,26.673v1.772c1.543-0.004,2.871-0.193,4-0.444c4.316-0.961,5-5,5-5S45.058,26.985,38,26.673z"></path>
							</svg>

							<a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=Naxus.team@hotmail.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className='flex items-center justify-center h-[38px] w-[100%] rounded-[12px] bg-gradient-to-r from-[#3352FF90] to-[#000003] shadow-[0_0_0_2px_inset_rgba(255,255,255,.15)] hover:scale-[1.05] transition duration-[.1s] hover:from-[#000003] hover:to-[#3352FF]  text-[14px] text-[white] font-[600] outline-none no-underline focus:outline-none'
>
  Hotmail
</a>

						</div>
						<div className='flex items-center space-x-[1rem]'>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
								<path className='fill-[white]' d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
							</svg>
							<Link target="_blank" 
								to="https://www.linkedin.com/company/naxus"
								className='flex items-center justify-center h-[38px] w-[100%] rounded-[12px] bg-gradient-to-r from-[#3352FF90] to-[#000003] shadow-[0_0_0_2px_inset_rgba(255,255,255,.15)] hover:scale-[1.05] transition duration-[.1s] hover:from-[#000003] hover:to-[#3352FF]  text-[14px] text-[white] font-[600] outline-none no-underline focus:outline-none'

							>
								Linkedin
							</Link>
						</div>
					</div>
					<div className='space-y-[2rem] w-[256px]'>
						<div className='flex items-center space-x-[1rem]'>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
								<path className='fill-[white]' d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#000003" d="M20 31L20 17 32 24z"></path>
							</svg>
							<Link target="_blank" 
								to="https://www.youtube.com/@naxus-team"
								className='flex items-center justify-center h-[38px] w-[100%] rounded-[12px] bg-gradient-to-r from-[#3352FF90] to-[#000003] shadow-[0_0_0_2px_inset_rgba(255,255,255,.15)] hover:scale-[1.05] transition duration-[.1s] hover:from-[#000003] hover:to-[#3352FF]  text-[14px] text-[white] font-[600] outline-none no-underline focus:outline-none'

							>
								YouTube
							</Link>
						</div>
						<div className='flex items-center space-x-[1rem]'>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
								<path className='fill-[white]' d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
							</svg>
							<Link target="_blank" 
								to="https://www.facebook.com/naxus.global "
								className='flex items-center justify-center h-[38px] w-[100%] rounded-[12px] bg-gradient-to-r from-[#3352FF90] to-[#000003] shadow-[0_0_0_2px_inset_rgba(255,255,255,.15)] hover:scale-[1.05] transition duration-[.1s] hover:from-[#000003] hover:to-[#3352FF]  text-[14px] text-[white] font-[600] outline-none no-underline focus:outline-none'

							>
								Facebook
							</Link>
						</div>
						<div className='flex items-center space-x-[1rem]'>
							<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64">
								<path className='fill-[white]' d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"></path>
							</svg>

							<Link target="_blank" 
								to="https://www.instagram.com/naxus.team/"
								className='flex items-center justify-center h-[38px] w-[100%] rounded-[12px] bg-gradient-to-r from-[#3352FF90] to-[#000003] shadow-[0_0_0_2px_inset_rgba(255,255,255,.15)] hover:scale-[1.05] transition duration-[.1s] hover:from-[#000003] hover:to-[#3352FF]  text-[14px] text-[white] font-[600] outline-none no-underline focus:outline-none'

							>
								Instagram
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default App;
