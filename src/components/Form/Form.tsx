import { useState } from 'react'
import form from '@components/Form/Form.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

interface IForm {
	title: string
	handleClick: (email: string, password: string) => void
}

export const Form = ({ title, handleClick }: IForm) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { error } = useSelector((state: RootState) => state.modal)

	return (
		<div className={form.form}>
			{/* <div className={form.input}> */}
			<div className={error ? `${form.input} ${form.error}` : form.input}>
				<input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='email' />
			</div>
			<div className={error ? `${form.input} ${form.error}` : form.input}>
				<input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
			</div>
			<button className={form.button} onClick={() => handleClick(email, password)}>
				{title}
			</button>
		</div>
	)
}
