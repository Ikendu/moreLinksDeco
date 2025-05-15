import { Link } from 'react-router-dom'

export default function whatsapp() {
  return (
    <div>
      <Link
        to={
          'https://wa.me/2348140960034?text=Hello%20there!%20I%20want%20to%20discuss%20with%20you.'
        }
        target='_blank'
      >
        <i className='fa-brands fa-whatsapp fa-fade whatsapp'></i>
      </Link>
    </div>
  )
}
