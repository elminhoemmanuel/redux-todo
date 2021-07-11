import Head from 'next/head';
import TodoMain from '../components/TodoMain';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Redux Todo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TodoMain />
      
    </div>
  )
}
