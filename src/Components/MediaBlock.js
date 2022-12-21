// import React from "react";
// import img from '../assets/💻  Macbook.svg';
// import play from '../assets/play.svg'
// import "@fancyapps/ui/dist/fancybox.css";
// import { Fancybox } from "@fancyapps/ui";
// import '../Components/MediaBlock.css'
// import {useMediaQuery, useTheme} from '@mui/material';

// const Media = () => {
//     const theme = useTheme()
//     const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
// 	Fancybox.bind("[data-fancybox-plyr]", {
// 		on: {
// 			reveal: (fancybox, slide) => {
// 				if (typeof Plyr === undefined) {
// 					return;
// 				}

// 				let $el;

// 				if (slide.type === "html5video") {
// 					$el = slide.$content.querySelector("video");
// 				} else if (slide.type === "video") {
// 					$el = document.createElement("div");
// 					$el.classList.add("plyr__video-embed");

// 					$el.appendChild(slide.$iframe);

// 					slide.$content.appendChild($el);
// 				}

// 				if ($el) {
// 					slide.player = new Plyr($el);
// 				}
// 			},
// 			"Carousel.unselectSlide": (fancybox, carousel, slide) => {
// 				if (slide.player) {
// 					slide.player.pause();
// 				}
// 			},
// 			"Carousel.selectSlide": (fancybox, carousel, slide) => {
// 				if (slide.player) {
// 					slide.player.play();
// 				}
// 			},
// 		},
// 	});
// 	return (
//         <React.Fragment>
//             {isMatch?(
//                 <>
//                 </>
//             ):(
//                 <>
//                 <div className='media-block'>
// 			<div className='media-title'>
// 				<h3>Как происходит обучение на YtYt?</h3>
// 				<p className='media-desc'>
// 					Обучение должно быть комфортным. Поэтому мы разработали собственную
// 					платформу для обучения программированию. На ней вы можете не только
// 					изучать теорию, но и запускать готовые примеры и даже писать свой
// 					собственный код.
// 				</p>
// 			</div>
// 			<div className='media-video'>
// 				<div>
// 					<img src={img} alt='' />
// 					<div className='btn-play'>
// 						<a
// 							href='http://media.w3.org/2010/05/sintel/trailer.mp4'
// 							data-fancybox-plyr>
// 							<img width={122} src={play} alt='' />
// 						</a>
// 					</div>
// 					<div className='overlay'></div>
// 				</div>
// 			</div>
// 		</div>
//                 </>
//             )}
		
//         </React.Fragment>
// 	);
// };

// export default Media;
