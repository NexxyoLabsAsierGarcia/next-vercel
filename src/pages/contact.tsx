import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout>
      <main>
        <br/>
        <br/>
        <h1 className={'title'}>THIS IS CONTACT COMPONENT</h1>
        <br/>
        <br/>
        <h2><Link href='/'>Go home</Link></h2>
      </main>
    </MainLayout>
  )
}
