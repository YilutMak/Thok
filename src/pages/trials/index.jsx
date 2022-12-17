import Head from 'next/head'
import { useRouter } from 'next/router'

export default function SWRIndex() {
  const { push } = useRouter()

  return (
    <div>
      <Head>
        <title>Trials main</title>
      </Head>
      <div className="col" style={{ height: '300px', backgroundColor: 'blue', margin: '70px' }} onClick={() => push('/trials/trial10')}>trails 10</div>
      <div className="col" style={{ height: '300px', backgroundColor: 'green', margin: '70px' }} onClick={() => push('/trials/trial25')}>trails 25</div>
      <div className="col" style={{ height: '300px', backgroundColor: 'red', margin: '70px' }} onClick={() => push('/trials/trial50')}>trails 50</div>
    </div>
  )
}
