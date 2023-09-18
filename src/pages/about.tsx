import { ReactElement } from 'react'
import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '@/components/layouts/DarkLayout';

export default function AboutPage() {
  return (
    <>
      <main>
        <br/>
        <br/>
        <h1 className={'title'}>THIS IS ABOUT COMPONENT</h1>
        <br/>
        <br/>
        <h2><Link href='/'>Go home</Link></h2>
      </main>
    </>
  )
}


AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}
