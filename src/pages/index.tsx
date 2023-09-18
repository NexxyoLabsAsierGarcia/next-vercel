import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <main>
        <br/>
        <br/>
        <h1 className={'title'}>HOME SWEET HOME</h1>
        <br/>
        <br/>
        <h2><Link href='/about'>Go About</Link></h2>
      </main>
    </MainLayout>
  )
}
