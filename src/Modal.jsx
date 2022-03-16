import { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useShow } from './context';
const Modal = () => {
	const ref = useRef();
	const { isModalOpen, closeModal } = useShow();

	useEffect(() => {
		const onBodyClick = event => {
			if (ref.current.contains(event.target)) {
				return;
			}
			closeModal;
		};

		document.body.addEventListener('click', onBodyClick, {
			capture: true,
		});
		return () => {
			document.body.removeEventListener('click', onBodyClick, {
				capture: true,
			});
		};
	}, []);

	return (
		<div
			className={`modal-overlay ${isModalOpen ? 'show-modal' : null}`}
			ref={ref}>
			<div className='modal-container'>
				<h3 className='modal-content'></h3>
				<button className='close-modal-btn' onClick={closeModal}>
					<FaTimes />
				</button>
			</div>
		</div>
	);
};

export default Modal;
