import { HelloComponent } from '@/app/comments'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hello</div>
      <div className={"text-sm"}>
        <HelloComponent />
      </div>
    </main>
  )
}
