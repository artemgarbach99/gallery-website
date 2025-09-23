import footer from '@components/Footer/Footer.module.scss'

export const Footer = () => {
	return (
		<div className={footer.footer}>
			<div className='container'>
				<div className={footer.body}>
					<div className={footer.item}>privacy policy | terms & conditions</div>
					<div className={footer.item}>all copyright (c) 2022 reserved</div>
				</div>
			</div>
		</div>
	)
}
