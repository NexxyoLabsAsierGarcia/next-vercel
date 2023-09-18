import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainLayout>
      <main>
        <br/>
        <br/>
        <h1 className={'title'}>WHAT&apos;S THE PRICE?</h1>
        <br/>
        <br/>
        <h2><Link href='/contact'>Go contact</Link></h2>
      </main>
    </MainLayout>
  )
}
