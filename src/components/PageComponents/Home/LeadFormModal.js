import React from 'react'
import ZapierForm from 'react-zapier-form'
//import { render } from 'react-dom'


class LeadFormModal extends React.Component{
    constructor(props) {
        super(props)
    }

render() {
    return(
        <ZapierForm action='https://hooks.zapier.com/hooks/catch/4486564/o9jk882/'>
		{({ error, loading, success }) => {
			return (
				<main>
					{error && <div>Something went wrong. Please try again later.</div>}
					{!success && !loading &&
						<div>
							<div>
								<input type='text' name='Name' placeholder='Name' />
							</div>
							<div>
								<input type='email' name='Email' placeholder='Email' />
							</div>
							<div>
								<textarea name='Message' placeholder='Your message' />
							</div>
							<button>Submit</button>
						</div>
					}
					{loading && <div>Loading...</div>}
					{success && <div>Thank you for contacting us!</div>}
				</main>
			)
		}}
	</ZapierForm>
    )
}
}
export default LeadFormModal
